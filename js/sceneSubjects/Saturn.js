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

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(8.0, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const saturnHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  saturnHighlight.material.visible = false;
  // scene.add(saturnHighlight);
  saturn.add(saturnHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("saturn-title");
  var planetModal = document.getElementById("saturn-modal");

  domEvents.addEventListener(saturn, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    saturnHighlight.material.visible = true;
  });

  domEvents.addEventListener(saturn, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    saturnHighlight.material.visible = false;
  });

  domEvents.addEventListener(saturn, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    saturn.position.x =
      Math.cos(time * 0.045 * guiControls.orbitalSpeed) * orbitRadius;
    saturn.position.y =
      Math.sin(time * 0.045 * guiControls.orbitalSpeed) * orbitRadius;
    saturn.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Saturn;
