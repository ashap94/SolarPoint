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

  const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(3, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const mercuryHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  mercuryHighlight.material.visible = false;
  // scene.add(mercuryHighlight);
  mercury.add(mercuryHighlight);
  var threeElement = document.getElementById("canvas");
  var planetTitle = document.getElementById("mercury-title");
  var mercuryModal = document.getElementById("mercury-modal");
  console.log("HERE'S planetTitle  :", planetTitle);

  domEvents.addEventListener(mercury, "mouseover", e => {
    planetTitle.style.display = "block";
    threeElement.style.cursor = "pointer";
    mercuryHighlight.material.visible = true;
  });

  domEvents.addEventListener(mercury, "mouseout", e => {
    planetTitle.style.display = "none";
    threeElement.style.cursor = "default";
    mercuryHighlight.material.visible = false;
  });

  domEvents.addEventListener(mercury, "click", e => {
    mercuryModal.style.display = "block";
  });

  this.update = function(time) {
    // mercuryHighlight.position.x =
    //   Math.cos(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;
    // mercuryHighlight.position.y =
    //   Math.sin(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;

    mercury.position.x =
      Math.cos(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;
    mercury.position.y =
      Math.sin(time * 0.6 * guiControls.orbitalSpeed) * orbitRadius;
    mercury.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
  };
}

export default Mercury;
