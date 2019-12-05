import { guiControls } from "../../main";

function Mercury(scene, domEvents) {
  var mercury = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  mercury.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/mercurymap.jpg"
  );
  mercury.material.bumpMap = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/mercurybump.jpg"
  );
  mercury.material.bumpScale = 0.05;

  var orbitRadius = 15;

  mercury.position.set(orbitRadius, 0, 0);
  mercury.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(mercury);

  scene.add(mercury);
  scene.add(line);

  this.update = function(time) {
    mercury.position.x =
      Math.cos(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;
    mercury.position.y =
      Math.sin(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;
    mercury.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Mercury;
