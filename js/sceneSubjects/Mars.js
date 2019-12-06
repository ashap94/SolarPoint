import { guiControls } from "../../main";

function Mars(scene, domEvents) {
  var mars = new THREE.Mesh(
    new THREE.SphereGeometry(2, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  mars.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/marsmap1k.jpg"
  );
  mars.material.bumpMap = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/marsbump1k.jpg"
  );
  mars.material.bumpScale = 0.05;

  var orbitRadius = 55;

  mars.position.set(orbitRadius, 0, 0);
  mars.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(mars);

  scene.add(mars);
  scene.add(line);

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(3.5, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const marsHighLight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  marsHighLight.material.visible = false;
  // scene.add(marsHighLight);
  mars.add(marsHighLight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("mars-title");
  var planetModal = document.getElementById("mars-modal");

  domEvents.addEventListener(mars, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    marsHighLight.material.visible = true;
  });

  domEvents.addEventListener(mars, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    marsHighLight.material.visible = false;
  });

  domEvents.addEventListener(mars, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    mars.position.x =
      Math.cos(time * 0.09 * guiControls.orbitalSpeed) * orbitRadius;
    mars.position.y =
      Math.sin(time * 0.09 * guiControls.orbitalSpeed) * orbitRadius;
    mars.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Mars;
