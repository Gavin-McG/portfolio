import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export function StartRender() {
	// Get the target DOM element
	const topElement = document.getElementById('top');

	// Create scene, camera, and renderer
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
	40,
	topElement.clientWidth / topElement.clientHeight,
	0.1,
	1000
	);

	const renderer = new THREE.WebGLRenderer({ alpha: true }); // allow transparency
	renderer.setSize(topElement.clientWidth, topElement.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setAnimationLoop(animate);

	// Style the canvas and append to #top
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0';
	renderer.domElement.style.left = '0';
	renderer.domElement.style.width = '100%';
	renderer.domElement.style.height = '100%';
	renderer.domElement.style.zIndex = '1';
	renderer.domElement.style.pointerEvents = 'none'; // Optional: let clicks pass through
	topElement.insertBefore(renderer.domElement, topElement.firstChild);

	// Materials
	const normalMaterial = new THREE.MeshNormalMaterial();

	// Lighting
	const light = new THREE.PointLight(0xffffff, 100, 10);
	light.position.set(5, 5, 5);
	scene.add(light);

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
	scene.add(ambientLight);

	renderer.shadowMap.enabled = true;
	light.castShadow = true;

	let monkey = null;

	// Load OBJ model
	const loader = new OBJLoader();
	loader.load(
	'/assets/monkey.obj', // Relative to "public" folder in most setups
	(object) => {
		object.traverse((child) => {
		if (child instanceof THREE.Mesh) {
			child.material = normalMaterial;
			child.castShadow = true;
			child.receiveShadow = true;
		}
		});

		monkey = object;
		scene.add(monkey);
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
	},
	(error) => {
		console.error('An error occurred while loading the model', error);
	}
	);

	camera.position.z = 5;
	camera.position.x = -1;

	function animate() {
	if (monkey) {
		monkey.rotation.x += 0.01;
		monkey.rotation.y += 0.01;
	}

	renderer.render(scene, camera);
	}

	// Update on resize of #top element
	window.addEventListener('resize', () => {
	const width = topElement.clientWidth;
	const height = topElement.clientHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);
	});
}
