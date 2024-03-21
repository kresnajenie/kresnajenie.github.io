import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import 'bootstrap';

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* FETCH API DATA */

// will be all data here
let jsonData = [];

let geneData = [];

let prefix = "50pe";

let uniqueCellTypesWithColors;

let pallete;

// Array to hold the currently checked cell types
let checkedCellTypes = [];

// Columns to be fetched
const columns = [
  'X_umap0_norm',
  'X_umap1_norm',
  'global_sphere0_norm',
  'global_sphere1_norm',
  'global_sphere2_norm',
  'clusters',
];

const pal = [
  'clusters_pal'
];

const dropdownMenuButton = document.getElementById("dropdownMenuButton");

dropdownMenuButton.innerHTML = prefix;

document.querySelectorAll('.dropdown-item').forEach(item => {

  item.addEventListener('click', async () => {
    // Get the value of the selected item
    prefix = item.innerHTML;

    dropdownMenuButton.innerHTML = prefix;

    jsonData = [];
    geneData = [];
    uniqueCellTypesWithColors = [];

    checkedCellTypes = [];

    await load(prefix);
    updateInstancedMesh([]);
  });
});

// Asynchronous function to fetch data for a given column
async function fetchDataFromAPI(columnName, prefix = prefix) {
  try {
    // const response = await fetch(`http://127.0.0.1:8000/getdata?col=${columnName}`);
    const response = await fetch(`https://fisheyes.techkyra.com/getdata?col=${prefix}-${columnName}`);
    // console.log(response)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data for', columnName, error);
  }
}

async function load(prefix) {

  // load palette
  // Example JSON object with cell types as keys and colors as values
  Promise.all(pal.map((p) => fetchDataFromAPI(p, prefix))).then(results => {

    // Convert JSON object to a readable string
    pallete = JSON.parse(results[0].data, null, 2);
    uniqueCellTypesWithColors = Object.keys(pallete).map((celltype) => [celltype, pallete[celltype]]);

    // Output the readable JSON string
    console.log("haloooo")
    console.log(pallete);

    createCellCheckboxes(uniqueCellTypesWithColors);
    // createCheckboxes(pallete);
  }).catch(error => {
    console.error('Error combining data:', error);
  });

  // Fetch all data and combine
  Promise.all(columns.map((col) => fetchDataFromAPI(col, prefix))).then(results => {
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

  }).catch(error => {
    console.error('Error combining data:', error);
  });

  fetch(`https://fisheyes.techkyra.com/getdata?col=${prefix}-genes`)
    .then(data => data.json())
    .then(results => {
      let myString = results["data"];
      myString = myString.replace(/'/g, '"'); // Replace single quotes with double quotes
      geneData = JSON.parse(myString);
      console.log("gene", geneData);

      createGeneRadio(geneData);
    });
}

await load(prefix);

function onResize() {
  console.log('You resized the browser window!');
}

window.addEventListener('resize', onResize);

// let stats = new Stats();
// document.body.appendChild(stats.dom);

const cellCheckbox = document.getElementById("cellCheckbox");
const geneRadioContainer = document.getElementById('geneRadioContainer');

const toggleCellCheckbox = document.getElementById('toggleCellCheckbox');
const toggleGeneRadio = document.getElementById('toggleGeneRadio');

// Toggle the checkbox container visibility
toggleCellCheckbox.addEventListener('click', () => {

  cellCheckbox.style.display = cellCheckbox.style.display === 'none' ? 'block' : 'none';

  // set to highlight mode
  toggleCellCheckbox.style.backgroundColor = 'white';
  toggleCellCheckbox.style.color = 'black';

  // clear other toggle's style
  toggleGeneRadio.style.backgroundColor = 'rgb(97, 97, 97)';
  toggleGeneRadio.style.color = 'white';

  // check if gene checkbox is visible, if yes disable it
  if (geneRadioContainer.style.display === 'block') {
    geneRadioContainer.style.display = 'none';
  }

  // reset it if clicked again
  if (cellCheckbox.style.display === 'none') {
    toggleCellCheckbox.style.backgroundColor = 'rgb(97, 97, 97)';
    toggleCellCheckbox.style.color = 'white';
  }
});

// Toggle gene checkbox container
toggleGeneRadio.addEventListener('click', () => {

  geneRadioContainer.style.display = geneRadioContainer.style.display === 'none' ? 'block' : 'none';

  // set to highlight mode
  toggleGeneRadio.style.backgroundColor = 'white';
  toggleGeneRadio.style.color = 'black';

  // clear other toggle's style
  toggleCellCheckbox.style.backgroundColor = 'rgb(97, 97, 97)';
  toggleCellCheckbox.style.color = 'white';

  // check if cell checkbox is visible, if yes disable it
  if (cellCheckbox.style.display === 'block') {
    cellCheckbox.style.display = 'none';
  }

  // reset it if clicked again
  if (geneRadioContainer.style.display === 'none') {
    toggleGeneRadio.style.backgroundColor = 'rgb(97, 97, 97)';
    toggleGeneRadio.style.color = 'white';
  }
});

// Function to update instanced mesh based on checked items
function updateCheckedItems(celltype, isChecked) {
  if (isChecked) {
    // Add celltype to the list if checked
    checkedCellTypes.push(celltype);
  } else {
    // Remove celltype from the list if unchecked
    checkedCellTypes = checkedCellTypes.filter(item => item !== celltype);
  }
  console.log(checkedCellTypes);

  updateInstancedMesh(checkedCellTypes);
}

// Function to create checkboxes
function createCellCheckboxes(cellTypesWithColors) {
  const checkboxes = document.getElementById('cellCheckboxes');

  checkboxes.innerHTML = ''; // clear checkbox container

  // Sort cellTypesWithColors alphabetically by celltype
  cellTypesWithColors.sort((a, b) => {
    if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
    if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    return 0;
  });

  console.log(cellTypesWithColors);

  cellTypesWithColors.forEach(([celltype, color]) => {
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'box';
    checkbox.id = celltype;
    checkbox.value = celltype;

    if (checkedCellTypes.includes(celltype)) {
      checkbox.checked = true;
    }

    // Create label
    const label = document.createElement('label');
    label.htmlFor = celltype;
    label.textContent = celltype;
    label.style.color = color;

    const checkboxGroup = document.createElement('checkboxGroup');

    // Append checkbox and label to container
    checkboxGroup.appendChild(checkbox);
    checkboxGroup.appendChild(label);
    checkboxGroup.appendChild(document.createElement('br'));

    checkboxes.appendChild(checkboxGroup);

    // Attach event listener
    checkbox.addEventListener('change', (e) => {
      updateCheckedItems(celltype, e.target.checked);
    });
  });
}

function createGeneRadio(geneList) {
  const radios = document.getElementById('geneRadio');

  radios.innerHTML = ''; // clear checkbox container

  // Sort geneList alphabetically by gene
  geneList.sort((a, b) => {
    if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
    if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    return 0;
  });

  geneList.forEach((gene) => {
    // Create checkbox
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.className = 'box';
    radio.id = gene;
    radio.value = gene;
    radio.name = "radio";

    // Create label
    const label = document.createElement('label');
    label.htmlFor = gene;
    label.textContent = gene;
    label.style.color = "white";

    const radioGroup = document.createElement('geneRadioGroup');

    // Append checkbox and label to container
    radioGroup.appendChild(radio);
    radioGroup.appendChild(label);
    radioGroup.appendChild(document.createElement('br'));

    radios.appendChild(radioGroup);

    // Attach event listener
    radio.addEventListener('change', (e) => {
      updateRadioItem(gene, e.target.checked);
    });
  });
}

const cellAlert = document.getElementById('cellNotFound');
const geneAlert = document.getElementById('geneNotFound');

// filters by search query
function filterCellSearchQuery(searchQuery) {

  // if has query string
  if (searchQuery) {

    const filteredCellType = uniqueCellTypesWithColors.filter(([celltype, color]) => {
      return celltype.toLowerCase().startsWith(searchQuery); // checks if has substring
    })

    console.log(filteredCellType);

    createCellCheckboxes(filteredCellType);

    // show the alert if no filtered cell type
    if (filteredCellType.length === 0) {
      console.log("here");
      cellAlert.style.display = "block"
    } else {
      cellAlert.style.display = "none"
    }
  } else {
    createCellCheckboxes(uniqueCellTypesWithColors); // reset to show all
  }
}

// autocomplete checkboxes
const cellTextbox = document.getElementById('cellTextbox');
cellTextbox.addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase(); // holds search query

  filterCellSearchQuery(searchQuery);
})

const cellClearButton = document.getElementById('cellClearButton');
cellClearButton.addEventListener('click', () => {
  checkedCellTypes = [];
  updateInstancedMesh(checkedCellTypes);
  createCellCheckboxes(uniqueCellTypesWithColors);

  cellTextbox.value = '';
})

function filterGeneSearchQuery(searchQuery) {


  // if has query string
  if (searchQuery) {

    const filteredGene = geneData.filter((gene) => {
      return gene.toLowerCase().startsWith(searchQuery); // checks if has substring
    })

    console.log(filteredGene);

    createGeneRadio(filteredGene);

    // show the alert if no filtered cell type
    if (filteredGene.length === 0) {
      console.log("here");
      geneAlert.style.display = "block"
    } else {
      geneAlert.style.display = "none"
    }
  } else {
    createGeneRadio(geneData); // reset to show all
  }
}

const geneTextbox = document.getElementById('geneTextbox');
geneTextbox.addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase();

  console.log(searchQuery);

  filterGeneSearchQuery(searchQuery);
});

const geneClearButton = document.getElementById('geneClearButton');
geneClearButton.addEventListener('click', () => {
  geneTextbox.value = '';
  updateInstancedMesh([]);
  createGeneRadio(geneData)
});

// Function to update instanced mesh based on checked items
function updateRadioItem(gene, isChecked) {

  if (isChecked) {
    // Add celltype to the list if checked
    updateInstancedMesh(gene.toLowerCase());
  }
  console.log(gene);
}


// For a more accurate colormap, consider using a library or a more complex function.
function coolwarm(value) {
  // Define start and end colors (cool: blue, warm: red)
  const startColor = { r: 0, g: 0, b: 255 }; // Blue
  const middleColor = { r: 255, g: 255, b: 255 }; // White
  const endColor = { r: 255, g: 0, b: 0 }; // Red

  if (value < 0.5) { // blue to white
    return "rgb(" + Math.floor(middleColor.r * value * 2) + ", " + Math.floor(middleColor.g * value * 2) + ", " + startColor.b + ")"
  } else if (value == 0.5) { // white
    return "rgb(" + middleColor.r + ", " + middleColor.g + ", " + middleColor.b + ")"
  } else { // white to red
    return "rgb(" + endColor.r + ", " + Math.floor(middleColor.g - (middleColor.g * (value - 0.5) * 2)) + ", " + Math.floor(middleColor.b - (middleColor.b * (value - 0.5) * 2)) + ")"
  }
}

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

const width = window.innerWidth;
const height = window.innerHeight;

// Adjust aspect ratios for each camera
const cameraOneAspectRatio = (width * 0.75) / height;
const cameraTwoAspectRatio = (width * 0.25) / height;


const cameraOne = new THREE.PerspectiveCamera(75, cameraOneAspectRatio, 0.1, 1000);
const cameraTwo = new THREE.PerspectiveCamera(75, cameraTwoAspectRatio, 0.1, 1000);
// Two cameras
// const aspectRatio = window.innerWidth / window.innerHeight;
// const cameraOne = new THREE.PerspectiveCamera(75, aspectRatio / 2, 0.1, 1000);
// const cameraTwo = new THREE.PerspectiveCamera(75, aspectRatio / 2, 0.1, 1000);



// how far away the cameras are
const offset = 1000;
// Position the cameras
cameraOne.position.x = 0;
cameraOne.position.y = 50;
cameraOne.position.z = 200; // how far away the camera is

cameraTwo.position.x = offset;
cameraTwo.position.z = 180;

// Define a shared target position for both cameras to look at
const sharedTarget = new THREE.Vector3(0, 0, 0); // Adjust as needed for your scene

// Initialize OrbitControls with cameraOne
let controls = new OrbitControls(cameraOne, renderer.domElement);
controls.target.copy(sharedTarget); // Initially set target for cameraOne
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.update();

function switchControls() {
  const isCameraOneActive = controls.object === cameraOne;
  controls.dispose(); // Dispose current controls

  if (isCameraOneActive) {
    // Switch to cameraTwo
    controls = new OrbitControls(cameraTwo, renderer.domElement);
    // Set specific properties for cameraTwo controls
    controls.enableRotate = false; // Disable rotation for cameraTwo
    controls.enableZoom = true; // Assuming you want zoom
    controls.target.copy(sharedTarget); // Ensure cameraTwo looks at the shared target
    controls.enablePan = true; // Enable panning
  } else {
    // Switch back to cameraOne
    controls = new OrbitControls(cameraOne, renderer.domElement);
    // Reset or set specific properties for cameraOne controls
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.target.copy(sharedTarget); // Ensure cameraOne looks at the shared target
  }

  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.update(); // Important to apply the changes made to controls
}

// Bind switchControls to a keyboard event (e.g., pressing 'c')
document.addEventListener('keydown', (event) => {
  if (event.key === 'c' && document.activeElement != textbox) { // so it doesn't switch controls when typing
    switchControls();
  }
});

// Geometry and material for the instanced mesh

let instancedMesh;
let instancedMeshUmap;

async function updateInstancedMesh(filterType = []) {
  // Clear existing mesh
  if (instancedMesh) {
    instancedMesh.geometry.dispose();
    instancedMesh.material.dispose();
    scene.remove(instancedMesh);
  }

  if (instancedMeshUmap) {
    instancedMeshUmap.geometry.dispose();
    instancedMeshUmap.material.dispose();
    scene.remove(instancedMeshUmap);
  }

  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  // const count = 10;
  // const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const sphereGeometry = new THREE.CircleGeometry(0.1, 32, 32);
  const material = new THREE.MeshBasicMaterial();
  const count = jsonData.length;
  // instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, count*2);
  instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, count);
  instancedMeshUmap = new THREE.InstancedMesh(sphereGeometry, material, count);

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
      let data = await fetchDataFromAPI(filterType, prefix);
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
  let umapmod = 0.5;

  for (let i = 0; i < count; i++) {
    if (typeof filterType === 'string') {
      let colorrgb = coolwarm(ctsClipped[i]);
      console.log(colorrgb);
      color = new THREE.Color(colorrgb);

      let scale = ctsClipped[i] * 5 + 1;

      proj.scale.set(scale, scale, scale);
      umap.scale.set(scale * umapmod, scale * umapmod, scale * umapmod);

    } else {
      if (filterType.includes(jsonData[i]["clusters"]) || filterType.length == 0) {
        // color = new THREE.Color(jsonData[i]["clusters_colors"]);
        color = new THREE.Color(pallete[jsonData[i]["clusters"]]);
        proj.scale.set(5, 5, 5);
        umap.scale.set(5 * umapmod, 5 * umapmod, 5 * umapmod);
      } else {
        color = new THREE.Color('#5e5e5e');
        proj.scale.set(1, 1, 1);
        umap.scale.set(1 * umapmod, 1 * umapmod, 1 * umapmod);
      }
    }

    //plot projection
    // proj.position.set(jsonData[i]["global_sphere0_norm"], jsonData[i]["global_sphere1_norm"], jsonData[i]["global_sphere2_norm"]);
    proj.position.set(jsonData[i]["global_sphere0_norm"] * mod, jsonData[i]["global_sphere1_norm"] * mod, jsonData[i]["global_sphere2_norm"] * mod);
    proj.updateMatrix();
    instancedMesh.setMatrixAt(i, proj.matrix);
    instancedMesh.setColorAt(i, color);

    //plot umap

    if (prefix == "75pe") {
      umap.position.set(jsonData[i]["X_umap0_norm"] * 80 + offset, jsonData[i]["X_umap1_norm"] * 80, 10);
    } else {
      umap.position.set(jsonData[i]["X_umap0_norm"] * 65 + offset - 25, jsonData[i]["X_umap1_norm"] * 65, 10);
    }
    umap.updateMatrix();
    instancedMeshUmap.setMatrixAt(i, umap.matrix);
    instancedMeshUmap.setColorAt(i, color);
  }

  scene.add(instancedMesh);
  scene.add(instancedMeshUmap);
}

// // Animation loop
// function animate() {

//     requestAnimationFrame(animate);
//     controls.update(); // Only needed if controls.enableDamping is true

//     // Rotate the instanced mesh
//     // instancedMesh.rotation.x += 0.01;
//     // instancedMesh.rotation.y += 0.01;

//     // Set up for cameraOne (75% of the screen)
//     renderer.setViewport(0, 0, width * 0.75, height);
//     renderer.setScissor(0, 0, width * 0.75, height);
//     renderer.setScissorTest(true);
//     renderer.render(scene, cameraOne);

//     // Set up for cameraTwo (25% of the screen)
//     renderer.setViewport(width * 0.75, 0, width * 0.25, height);
//     renderer.setScissor(width * 0.75, 0, width * 0.25, height);
//     renderer.setScissorTest(true);
//     renderer.render(scene, cameraTwo);

//     renderer.setScissorTest(false); // Disable scissor test after rendering

//     // // Render left side
//     // renderer.setScissorTest(true);
//     // renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
//     // renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
//     // renderer.render(scene, cameraOne);

//     // // Render right side
//     // renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
//     // renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
//     // renderer.render(scene, cameraTwo);

//     // renderer.setScissorTest(false);
//     stats.update();
// }

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Only needed if controls.enableDamping is true

  // Assume your instanced mesh is global or accessible within this scope
  const cameraQuaternion = cameraOne.quaternion;

  for (let i = 0; i < jsonData.length * 2; i++) {
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();

    // Extract position and scale from the current instance matrix
    instancedMesh.getMatrixAt(i, matrix);
    matrix.decompose(position, new THREE.Quaternion(), scale);

    // Rebuild the matrix using the camera's quaternion for rotation
    matrix.compose(position, cameraQuaternion, scale);
    instancedMesh.setMatrixAt(i, matrix);
  }

  instancedMesh.instanceMatrix.needsUpdate = true; // Important!

  // Your rendering logic...
  renderer.setViewport(0, 0, width * 0.75, height);
  renderer.setScissor(0, 0, width * 0.75, height);
  renderer.setScissorTest(true);
  renderer.render(scene, cameraOne);

  renderer.setViewport(width * 0.75, 0, width * 0.25, height);
  renderer.setScissor(width * 0.75, 0, width * 0.25, height);
  renderer.setScissorTest(true);
  renderer.render(scene, cameraTwo);

  renderer.setScissorTest(false); // Disable scissor test after rendering

  // stats.update();
}

animate();


animate();
