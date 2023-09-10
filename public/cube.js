let scene, camera, renderer, cube; // Declare global variables

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // Set the background color of the scene
scene.background = new THREE.Color(0x333333);


  // Create the renderer with antialiasing
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(2, 2, 2);

  //if you want a colored cube
  //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // to add a texture instead:

  const texture = new THREE.TextureLoader().load('textures/brick.jpg');
  const material = new THREE.MeshBasicMaterial({ map: texture });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
};

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// Update the camera and renderer when the window is resized
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onWindowResize, false);

init();
animate();
