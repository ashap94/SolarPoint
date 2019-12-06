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

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(7.5, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const sunHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  sunHighlight.material.visible = false;
  // scene.add(sunHighlight);
  mesh.add(sunHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("sun-title");
  var earthModal = document.getElementById("sun-modal");
  console.log("HERE'S planetTitle  :", planetTitle);

  domEvents.addEventListener(mesh, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    sunHighlight.material.visible = true;
  });

  domEvents.addEventListener(mesh, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    sunHighlight.material.visible = false;
  });

  domEvents.addEventListener(mesh, "click", e => {
    earthModal.style.display = "block";
  });

  this.update = function(time) {
    const scale = Math.sin(time);
    mesh.rotation.z = time * 0.15 * guiControls.orbitalSpeed;
    // mesh.scale.set(scale, scale, scale);
    // mesh.position.set(scale)
  };
}

export default Sun;
