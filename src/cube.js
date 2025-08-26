import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export function StartRender() {
	const topElement = document.getElementById('top');

	// Scene, camera, renderer
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		40,
		topElement.clientWidth / topElement.clientHeight,
		0.1,
		1000
	);

	const renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(topElement.clientWidth, topElement.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setAnimationLoop(animate);

	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0';
	renderer.domElement.style.left = '0';
	renderer.domElement.style.width = '100%';
	renderer.domElement.style.height = '100%';
	renderer.domElement.style.zIndex = '1';
	renderer.domElement.style.pointerEvents = 'none';
	topElement.insertBefore(renderer.domElement, topElement.firstChild);

	const clock = new THREE.Clock();

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
	let targetRotation = { x: 0, y: 0 };
	let lastTargetRotation = { x: 0, y: 0 };

	// inertia system
	let momentum = 0;          // accumulated inertia
	let momentumThreshold = 7.5; // threshold above which mouse input is ignored
	let decay = 0.96;          // exponential decay per frame
	let spinAxis = { x: 0, y: 0 }; // direction of recent rapid movement

	let spinning = false;
	let spinTime = 0;

	let followEase = 0.5;  // normal lerp speed
	let slowEase = 0.01;    // slower speed after spin
	let easeCooldown = 0;   // counts down after spin ends

	// Load OBJ model
	const loader = new OBJLoader();
	loader.load(
		'/assets/monkey.obj',
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
		(xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
		(error) => console.error('Error loading model', error)
	);

	camera.position.z = 5;
	camera.position.x = -1;

	// Track mouse movement inside #top
	document.addEventListener('mousemove', (event) => {
		const rect = topElement.getBoundingClientRect();
		let mouseX = ((event.clientX - rect.left) / rect.width) * 3 - 2;
		let mouseY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

		// Clamp values so they don't go outside [-1, 1]
		mouseX = Math.max(-2, Math.min(1, mouseX));
		mouseY = Math.max(-1, Math.min(1.5, mouseY));


		targetRotation.y = mouseX * Math.PI * 0.15;
		targetRotation.x = mouseY * Math.PI * 0.15;
	});

	function normalizeAngle(angle) {
		return ((angle + Math.PI) % (2 * Math.PI)) - Math.PI;
	}

	function animate() {
		if (monkey) {
			if (spinning) {
				monkey.rotation.x += spinAxis.x;
				monkey.rotation.y += spinAxis.y;

				spinTime -= clock.getDelta();
				if (spinTime < 0) {
					spinning = false;
					easeCooldown = 1.0; // temporarily slow easing
				}
			} else {
				// normalize to avoid huge jumps
				monkey.rotation.x = normalizeAngle(monkey.rotation.x);
				monkey.rotation.y = normalizeAngle(monkey.rotation.y);

				const dx = targetRotation.x - lastTargetRotation.x;
				const dy = targetRotation.y - lastTargetRotation.y;
				const deltaMag = Math.sqrt(dx * dx + dy * dy);

				if (deltaMag > 0.001) {
					momentum += deltaMag * 2;
					spinAxis.x = dx;
					spinAxis.y = dy;
				}

				momentum *= decay;

				let factor = followEase + (slowEase - followEase) * easeCooldown;
				monkey.rotation.x += (targetRotation.x - monkey.rotation.x) * factor;
				monkey.rotation.y += (targetRotation.y - monkey.rotation.y) * factor;

				lastTargetRotation.x = targetRotation.x;
				lastTargetRotation.y = targetRotation.y;

				if (momentum > momentumThreshold) {
					spinning = true;
					momentum = 0;
					spinTime = 3;
				}
				if (easeCooldown > 0) easeCooldown -= clock.getDelta();
			}
		}

		renderer.render(scene, camera);
	}

	// resize handler
	window.addEventListener('resize', () => {
		const width = topElement.clientWidth;
		const height = topElement.clientHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	});
}
