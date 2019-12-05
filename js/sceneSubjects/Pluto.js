import { guiControls } from "../../main";

function Pluto(scene, domEvents) {
  var pluto = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  pluto.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/plutomap1k.jpg"
  );
  pluto.material.bumpMap = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/plutobump1k.jpg"
  );
  pluto.material.bumpScale = 0.05;

  var orbitRadius = 135;

  pluto.position.set(orbitRadius, 0, 0);
  pluto.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(pluto);

  scene.add(pluto);
  scene.add(line);

  this.update = function(time) {
    pluto.position.x =
      Math.cos(time * 0.02 * guiControls.orbitalSpeed) * orbitRadius;
    pluto.position.y =
      Math.sin(time * 0.02 * guiControls.orbitalSpeed) * orbitRadius;
    pluto.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Pluto;
