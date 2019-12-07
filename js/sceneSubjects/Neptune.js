import { guiControls } from "../../main";

function Neptune(scene, domEvents) {
  var neptune = new THREE.Mesh(
    new THREE.SphereGeometry(4, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  neptune.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/neptunemap.jpg"
  );
  // neptune.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
  // neptune.material.bumpScale = 0.05;

  var orbitRadius = 117;

  neptune.position.set(orbitRadius, 0, 0);
  neptune.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(neptune);

  scene.add(neptune);
  scene.add(line);

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(5.7, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const neptuneHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  neptuneHighlight.material.visible = false;
  // scene.add(neptuneHighlight);
  neptune.add(neptuneHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("neptune-title");
  var planetModal = document.getElementById("neptune-modal");

  domEvents.addEventListener(neptune, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    neptuneHighlight.material.visible = true;
  });

  domEvents.addEventListener(neptune, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    neptuneHighlight.material.visible = false;
  });

  domEvents.addEventListener(neptune, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    neptune.position.x =
      Math.cos(time * 0.028 * guiControls.orbitalSpeed) * orbitRadius;
    neptune.position.y =
      Math.sin(time * 0.028 * guiControls.orbitalSpeed) * orbitRadius;
    neptune.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Neptune;
