import { guiControls } from "../../main";

function Saturn(scene, domEvents) {
  var saturn = new THREE.Mesh(
    new THREE.SphereGeometry(5, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  saturn.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/saturnmap.jpg"
  );
  // saturn.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
  // saturn.material.bumpScale = 0.05;

  var orbitRadius = 85;

  saturn.position.set(orbitRadius, 0, 0);
  saturn.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(saturn);

  // SATURN'S RINGS
  var rings = new THREE.Mesh(
    new THREE.RingGeometry(6.4, 8, 30),
    new THREE.MeshPhongMaterial()
  );

  rings.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/saturnringcolor.jpg"
  );
  rings.material.side = THREE.DoubleSide;

  saturn.add(rings);

  scene.add(saturn);
  scene.add(line);

  saturn.children[0].rotation.x = Math.PI / 2;

  this.update = function(time) {
    saturn.position.x =
      Math.cos(time * 0.045 * guiControls.orbitalSpeed) * orbitRadius;
    saturn.position.y =
      Math.sin(time * 0.045 * guiControls.orbitalSpeed) * orbitRadius;
    saturn.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Saturn;
