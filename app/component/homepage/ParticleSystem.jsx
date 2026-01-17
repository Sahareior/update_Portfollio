import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Galaxy() {
  const mountRef = useRef(null);

  useEffect(() => {
    // ======================
    // Scene
    // ======================
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x160016);

    // ======================
    // Camera
    // ======================
    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 4, 46);

    // ======================
    // Renderer
    // ======================
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ======================
    // Controls
    // ======================
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom= false
    controls.enablePan = false;

    // ======================
    // Resize
    // ======================
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ======================
    // Uniforms
    // ======================
    const uniforms = {
      time: { value: 0 }
    };

    // ======================
    // Geometry
    // ======================
    const pts = [];
    const sizes = [];
    const shift = [];

    const pushShift = () => {
      shift.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.5 + 0.1) * 0.5,
        Math.random() * 0.8 + 0.2
      );
    };

    // Inner shell
    for (let i = 0; i < 30000; i++) {
      pts.push(
        new THREE.Vector3()
          .randomDirection()
          .multiplyScalar(Math.random() * 2 + 8)
      );
      sizes.push(Math.random() * 0.6 + 0.4);
      pushShift();
    }

    // Disk
    for (let i = 0; i < 20000; i++) {
      const r = 12;
      const R = 40;
      const rand = Math.pow(Math.random(), 3.0); // hollow center
      const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);

      pts.push(
        new THREE.Vector3().setFromCylindricalCoords(
          radius,
          Math.random() * Math.PI * 2,
          (Math.random() - 0.5) * 1.2
        )
      );

      sizes.push(Math.random() * 0.9 + 0.3);
      pushShift();
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(pts);
    geometry.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

    // ======================
    // Shader Material
    // ======================
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
      vertexShader: `
        #define PI2 6.28318530718

        uniform float time;
        attribute float sizes;
        attribute vec4 shift;

        varying vec3 vColor;
        varying float vDist;

        void main() {
          float t = time;

          float moveT = mod(shift.x + shift.z * t, PI2);
          float moveS = mod(shift.y + shift.z * t, PI2);

          vec3 pos = position;
          pos += vec3(
            cos(moveS) * sin(moveT),
            cos(moveT),
            sin(moveS) * sin(moveT)
          ) * shift.w;

          vDist = length(pos.xz) / 40.0;

          float c = clamp(vDist, 0.0, 1.0);
          vColor = mix(
            vec3(227., 155., 0.),
            vec3(100., 50., 255.),
            c
          ) / 255.0;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          gl_PointSize = sizes * 1.1 * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDist;

        void main() {
          float d = length(gl_PointCoord - 0.5);
          float pointAlpha = smoothstep(0.5, 0.1, d);

          float coreMask = smoothstep(0.2, 0.45, vDist);

          float alpha = pointAlpha * coreMask * 0.85;

          gl_FragColor = vec4(vColor * 0.8, alpha);
        }
      `
    });

    const galaxy = new THREE.Points(geometry, material);
    galaxy.rotation.order = "ZYX";
    galaxy.rotation.z = 0.2;
    scene.add(galaxy);

    // ======================
    // Animation
    // ======================
    const clock = new THREE.Clock();
    renderer.setAnimationLoop(() => {
      uniforms.time.value = clock.getElapsedTime() * 0.6;
      galaxy.rotation.y += 0.0008;
      controls.update();
      renderer.render(scene, camera);
    });

    // ======================
    // Cleanup
    // ======================
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
     <div
  ref={mountRef}
  style={{
    width: "100vw",
    height: "100vh",
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none"
  }}
/>


    </>
  );
}
