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

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(2.3, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const plutoHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  plutoHighlight.material.visible = false;
  // scene.add(plutoHighlight);
  pluto.add(plutoHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("pluto-title");
  var planetModal = document.getElementById("pluto-modal");

  domEvents.addEventListener(pluto, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    plutoHighlight.material.visible = true;
  });

  domEvents.addEventListener(pluto, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    plutoHighlight.material.visible = false;
  });

  domEvents.addEventListener(pluto, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    pluto.position.x =
      Math.cos(time * 0.02 * guiControls.orbitalSpeed) * orbitRadius;
    pluto.position.y =
      Math.sin(time * 0.02 * guiControls.orbitalSpeed) * orbitRadius;
    pluto.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Pluto;
