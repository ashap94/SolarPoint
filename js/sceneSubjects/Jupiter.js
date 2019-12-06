import { guiControls } from "../../main";

function Jupiter(scene, domEvents) {
  var jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(6, 30, 30),
    new THREE.MeshPhongMaterial()
  );

  jupiter.material.map = THREE.ImageUtils.loadTexture(
    "js/libs/threex.planets-master/images/jupitermap.jpg"
  );
  // jupiter.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
  // jupiter.material.bumpScale = 0.05;

  var orbitRadius = 70;

  jupiter.position.set(orbitRadius, 0, 0);
  jupiter.rotation.x = Math.PI / 2;

  var material = new THREE.LineBasicMaterial({ color: "aqua" });
  var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
  geometry.vertices.shift();
  var line = new THREE.Line(geometry, material);
  line.position.set(0, 0, 0);
  // console.log(jupiter);

  scene.add(jupiter);
  scene.add(line);

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(6.9, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const jupiterHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  jupiterHighlight.material.visible = false;
  // scene.add(jupiterHighlight);
  jupiter.add(jupiterHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("jupiter-title");
  var planetModal = document.getElementById("jupiter-modal");

  domEvents.addEventListener(jupiter, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    jupiterHighlight.material.visible = true;
  });

  domEvents.addEventListener(jupiter, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    jupiterHighlight.material.visible = false;
  });

  domEvents.addEventListener(jupiter, "click", e => {
    planetModal.style.display = "block";
  });

  this.update = function(time) {
    jupiter.position.x =
      Math.cos(time * 0.05 * guiControls.orbitalSpeed) * orbitRadius;
    jupiter.position.y =
      Math.sin(time * 0.05 * guiControls.orbitalSpeed) * orbitRadius;
    jupiter.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Jupiter;
