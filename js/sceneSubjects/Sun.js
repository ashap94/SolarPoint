// import * as THREE from 'three';
import { guiControls } from "../../main";

function Sun(scene, domEvents) {
  var radius = 7;
  var mesh = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 30, 30),
    new THREE.MeshStandardMaterial({ flatShading: false })
  );
  // mesh.material.color.set("#FDB813");
  mesh.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/sunmapUpdate-min.jpg"
  );
  mesh.position.set(0, 0, 0);

  scene.add(mesh);

  this.update = function(time) {
    const scale = Math.sin(time);
    mesh.rotation.z = time * 0.15 * guiControls.orbitalSpeed;
    // mesh.scale.set(scale, scale, scale);
    // mesh.position.set(scale)
  };
}

export default Sun;
