import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { randInt } from 'three/src/math/MathUtils';

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// will be all data here
let jsonData = [];


// Asynchronous function to fetch data for a given column
async function fetchDataFromAPI(columnName) {
    try {
    // const response = await fetch(`http://127.0.0.1:8000/getdata?col=${columnName}`);
    const response = await fetch(`https://fisheyes.techkyra.com/getdata?col=${columnName}`);
    // console.log(response)
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('Error fetching data for', columnName, error);
    }
}

// Columns to be fetched
const columns = [
  'X_umap0_norm', 
  'X_umap1_norm', 
  'global_sphere0_norm', 
  'global_sphere1_norm',
  'global_sphere2_norm', 
  'global_sphere0', 
  'global_sphere1',
  'global_sphere2', 
  'clusters', 
  'clusters_colors'];

// Fetch all data and combine
Promise.all(columns.map(fetchDataFromAPI)).then(results => {
  // Combine data from all columns into one object
  let transformedData = {};

  console.log(results);

  columns.forEach((col, index) => {
    let myString = results[index]["data"];
    myString = myString.replace(/'/g, '"'); // Replace single quotes with double quotes
    transformedData[col] = JSON.parse(myString);
  });
  console.log("trfdata")
  console.log(transformedData)


  for (let i = 0; i < transformedData.clusters.length; i++) {
      let row = {};
      for (let key in transformedData) {
          row[key] = transformedData[key][i];
      }
      jsonData.push(row);
  }

  console.log("jsondata")
  console.log(jsonData)

  updateInstancedMesh();

  // get unique cell types and colors
  let cellTypeColorMap = new Map();

  jsonData.forEach(item => {
      // Check if the celltype is already added to the map
      if (!cellTypeColorMap.has(item.clusters)) {
          cellTypeColorMap.set(item.clusters, item.clusters_colors);
      }
  });

  let uniqueCellTypesWithColors = Array.from(cellTypeColorMap, ([celltype, color]) => [celltype, color]);
  createCheckboxes(uniqueCellTypesWithColors);
}).catch(error => {
  console.error('Error combining data:', error);
});

// Toggle the checkbox container visibility
document.getElementById('toggleCheckboxContainer').addEventListener('click', () => {
    const checkboxContainer = document.getElementById('checkboxContainer');
    checkboxContainer.style.display = checkboxContainer.style.display === 'none' ? 'block' : 'none';
  });

  // Array to hold the currently checked cell types
let checkedCellTypes = [];

// Function to update instanced mesh based on checked items
function updateCheckedItems(celltype, isChecked) {
    if (isChecked) {
        // Add celltype to the list if checked
        checkedCellTypes.push(celltype);
    } else {
        // Remove celltype from the list if unchecked
        checkedCellTypes = checkedCellTypes.filter(item => item !== celltype);
    }
    updateInstancedMesh(checkedCellTypes);
}


// Function to create checkboxes
function createCheckboxes(cellTypesWithColors) {
  const container = document.getElementById('checkboxContainer');

  // Sort cellTypesWithColors alphabetically by celltype
  cellTypesWithColors.sort((a, b) => {
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
      return 0;
  });

  cellTypesWithColors.forEach(([celltype, color]) => {
      // Create checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = celltype;
      checkbox.value = celltype;

      // Create label
      const label = document.createElement('label');
      label.htmlFor = celltype;
      label.textContent = celltype;
      label.style.color = color;

      // Append checkbox and label to container
      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(document.createElement('br'));

      // Attach event listener
      checkbox.addEventListener('change', (e) => {
          updateCheckedItems(celltype, e.target.checked);
      });
  });
}


// For a more accurate colormap, consider using a library or a more complex function.
function coolwarm(value) {
  // Define start and end colors (cool: blue, warm: red)
  const startColor = { r: 0, g: 0, b: 255 }; // Blue
  const middleColor = { r: 255, g: 255, b: 255 }; // White
  const endColor = { r: 255, g: 0, b: 0 }; // Red

  if (value <0.5) { // blue to white
    return "rgb(" + Math.floor(middleColor.r*value*2) + ", " + Math.floor(middleColor.g*value*2) + ", " + startColor.b + ")"
  } else if (value == 0.5) { // white
    return "rgb(" + middleColor.r + ", " + middleColor.g + ", " + middleColor.b + ")"
  } else { // white to red
    return "rgb(" + endColor.r + ", " + Math.floor(middleColor.g-(middleColor.g*(value-0.5)*2)) + ", " + Math.floor(middleColor.b-(middleColor.b*(value-0.5)*2)) + ")"
  }


}

// Add event listener to the button
document.getElementById('myButton').addEventListener('click', () => {
  // Get the value from the textbox
  const textboxValue = document.getElementById('myTextbox').value;

  updateInstancedMesh(textboxValue);
});

function calculate99thPercentile(arr) {
  // Create a copy of the array and sort the copy
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Calculate the index for the 99th percentile
  const index = Math.floor(sortedArr.length * 0.99) - 1;

  // Return the value at the 99th percentile
  return sortedArr[index];
}

function normalizeArray(arr, nmax) {
  return arr.map(value => Math.min(value / nmax, 1));
}


// Two cameras
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraOne = new THREE.PerspectiveCamera(75, aspectRatio / 2, 0.1, 1000);
const cameraTwo = new THREE.PerspectiveCamera(75, aspectRatio / 2, 0.1, 1000);

// Position the cameras
cameraOne.position.x = 50;
cameraTwo.position.x = 100;
cameraTwo.position.z = 100;
cameraOne.position.z = 100;

// Initialize OrbitControls with cameraOne
let controls = new OrbitControls(cameraOne, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

// Function to switch controls between cameras
function switchControls() {
    const currentCamera = controls.object === cameraOne ? cameraTwo : cameraOne;
    controls.dispose(); // Dispose current controls
    controls = new OrbitControls(currentCamera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
}

// Example: Bind switchControls to a keyboard event (e.g., pressing 'c')
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        switchControls();
    }
});

// Geometry and material for the instanced mesh

let instancedMesh;

async function updateInstancedMesh(filterType = []) {
  // Clear existing mesh
  if (instancedMesh) {
    instancedMesh.geometry.dispose();
    instancedMesh.material.dispose();
    scene.remove(instancedMesh);
  }

  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const count = 10;
  const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const material = new THREE.MeshBasicMaterial();
  const count = jsonData.length;
  instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, count*2);

  // Position each instance
  const proj = new THREE.Object3D();
  const umap = new THREE.Object3D();

  let color;

  // when plotting gene
  let cts;
  let ctsClipped;
  let nmax;
  if (typeof filterType === 'string') {
    // cts = jsonData.map(item => item[filterType]);
    try {
      let data = await fetchDataFromAPI(filterType);
      cts = JSON.parse(data["data"])
      // You can use cts here
      nmax = calculate99thPercentile(cts);
      console.log(nmax);
      console.log(cts);
      ctsClipped = normalizeArray(cts, nmax);
      console.log(ctsClipped);

    } catch (error) {
        // Handle errors if the promise is rejected
        console.error('Error fetching data:', error);
    }
  }

  let mod = 100;

  for (let i = 0; i < count; i++) {
    
    if (typeof filterType === 'string') {
      let colorrgb = coolwarm(ctsClipped[i]);
      console.log(colorrgb);
      color = new THREE.Color(colorrgb);

      let scale = ctsClipped[i]*5+1;

      proj.scale.set(scale, scale, scale);
      umap.scale.set(scale, scale, scale);

    } else {
      if (filterType.includes(jsonData[i]["clusters"]) || filterType.length == 0) {
        color = new THREE.Color(jsonData[i]["clusters_colors"]);
        proj.scale.set(5, 5, 5);
        umap.scale.set(5, 5, 5);
      } else {
        color = new THREE.Color('#5e5e5e');
        proj.scale.set(1, 1, 1);
        umap.scale.set(1, 1, 1);
      }
    }

    //plot projection
    // proj.position.set(jsonData[i]["global_sphere0_norm"], jsonData[i]["global_sphere1_norm"], jsonData[i]["global_sphere2_norm"]);
    proj.position.set(jsonData[i]["global_sphere0_norm"] * mod, jsonData[i]["global_sphere1_norm"] * mod, jsonData[i]["global_sphere2_norm"]*mod);
    proj.updateMatrix();
    instancedMesh.setMatrixAt(i, proj.matrix);
    instancedMesh.setColorAt(i, color);

    //plot umap
    umap.position.set(jsonData[i]["X_umap0_norm"]*5+200, jsonData[i]["X_umap1_norm"]*5, 10);
    umap.updateMatrix();
    instancedMesh.setMatrixAt(i+count, umap.matrix);
    instancedMesh.setColorAt(i+count, color);
  }

  scene.add(instancedMesh);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Only needed if controls.enableDamping is true

    // Rotate the instanced mesh
    // instancedMesh.rotation.x += 0.01;
    // instancedMesh.rotation.y += 0.01;

    // Render left side
    renderer.setScissorTest(true);
    renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
    renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
    renderer.render(scene, cameraOne);

    // Render right side
    renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
    renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
    renderer.render(scene, cameraTwo);

    renderer.setScissorTest(false);
}

animate();
