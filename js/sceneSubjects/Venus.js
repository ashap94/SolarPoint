import { guiControls } from "../../main";

function Venus(scene) {
  var venus = new THREE.Mesh(
    new THREE.SphereGeometry(3.2, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  venus.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/venusmap.jpg"
  );
  venus.material.bumpMap = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/venusbump.jpg"
  );
  venus.material.bumpScale = 0.05;

  var orbitRadius = 25;

  venus.position.set(orbitRadius, 0, 0);
  venus.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(venus);

  scene.add(venus);
  scene.add(line);

  this.update = function(time) {
    venus.position.x =
      Math.cos(time * 0.25 * guiControls.orbitalSpeed) * orbitRadius;
    venus.position.y =
      Math.sin(time * 0.25 * guiControls.orbitalSpeed) * orbitRadius;
    venus.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Venus;
