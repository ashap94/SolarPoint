import { guiControls } from "../../main";

function Uranus(scene, domEvents) {
  var uranus = new THREE.Mesh(
    new THREE.SphereGeometry(4, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  uranus.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/uranusmap.jpg"
  );
  // saturn.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
  // saturn.material.bumpScale = 0.05;

  var orbitRadius = 100;

  uranus.position.set(orbitRadius, 0, 0);
  uranus.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(uranus);

  // SATURN'S RINGS
  var rings = new THREE.Mesh(
    new THREE.RingGeometry(4.8, 5.3, 30),
    new THREE.MeshPhongMaterial()
  );

  rings.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/uranusringcolour.jpg"
  );
  rings.material.side = THREE.DoubleSide;

  uranus.add(rings);

  scene.add(uranus);
  scene.add(line);

  uranus.children[0].rotation.x = Math.PI / 2;

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(5.7, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const uranusHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  uranusHighlight.material.visible = false;
  // scene.add(uranusHighlight);
  uranus.add(uranusHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("uranus-title");
  var planetModal = document.getElementById("uranus-modal");

  domEvents.addEventListener(uranus, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    uranusHighlight.material.visible = true;
  });

  domEvents.addEventListener(uranus, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    uranusHighlight.material.visible = false;
  });

  domEvents.addEventListener(uranus, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    uranus.position.x =
      Math.cos(time * 0.038 * guiControls.orbitalSpeed) * orbitRadius;
    uranus.position.y =
      Math.sin(time * 0.038 * guiControls.orbitalSpeed) * orbitRadius;
    uranus.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Uranus;
