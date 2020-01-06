<h1>SolarPoint</h1>

<p>3D interactive educational model of Solar System utilizing Three.js, Javascript, HTML and CSS.</p>

<a href="https://ashap94.github.io/SolarPoint/" target="_blank">CHeck out the Live Site here!</a>

![solarpoint](https://user-images.githubusercontent.com/52110753/71786573-8ed8fc00-2fc1-11ea-89b7-aa586784610e.gif)

<h2>Technologies</h2>

<ul>
  <li>Three.js</li>
  <li>Javascript</li>
  <li>HTML and CSS</li>
</ul>

<h2>Features</h2>

<p>Utilized Three.js to create 3D renditions of the major celestial bodies of our Solar System on an HTML canvas. The Solar System is a scene within a large sphere with a starfield placed inside the material of the sphere to give the environment a more astronomical vibe. Code snippet showing starfield class below.</p>

```
function StarField (scene) {

    var geometry = new THREE.SphereGeometry(1000, 1000, 1000);
    var material = new THREE.MeshBasicMaterial();

    material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/galaxy_starfield.jpg');

    material.side = THREE.BackSide;
    var mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh);

    this.update = function (time) {

    }

}

export default StarField;
```

<p>Each celestial body has event handlers such as having a modal popup with fun information upon clicking the body and on hover having the name of the body appear on top of the screen in addition to having a red wire mesh surround the body based on the radius of the celestial body. Below shows the construction of the red wire mesh that appears upon hover of the celstial body, in this case Jupiter, as well as appending the wire mesh onto Jupiter so that as Jupiter rotates around the screen on its orbit, the wire mesh is always centralized in position relative to Jupiter and all the other celestial bodies.</p>

```
...

// up above, Jupiter's mesh and material was already added to the scene, below wire mesh is constructed with a radius slightly greater than Jupiter's to allow mesh to be visible and signify to user object can be interacted with

const wireframeGeometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(6.9, 30, 30)
  );
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xfc0d1b });

  const jupiterHighlight = new THREE.LineSegments(
    wireframeGeometry,
    wireframeMaterial
  );

  jupiterHighlight.material.visible = false;

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
  
 ...
```

![solarpoint_gui_showcase](https://user-images.githubusercontent.com/52110753/71788018-707bfc00-2fd3-11ea-9fde-c50ea33096d6.gif)

<p>Made use of "dat.gui.min.js" library to create a GUI with a slider that will allow the user to dynamically adjust a scalar between the values of 0 to 6. This scalar is imported to all celestial bodies and multiplied onto the rotational and orbital speeds of the celestial bodies. Below showcases two snippets of code coming from the main.js file, that composes the scene, which shows the construction of the gui controls and from Jupiter showing the gui controls speed being multiplied onto the rotational and orbital speeds.</p>


<p>main.js gui control construction</p>

```
...

const dat = require("dat.gui");

export var guiControls = new (function() {
  this.orbitalSpeed = 1;
})();

var datGUI = new dat.GUI();

datGUI.add(guiControls, "orbitalSpeed", 0, 6);

...
```

<p>Jupiter code snippet showing scalar being multiplied onto orbital and rotational speeds</p>

```
import { guiControls } from "../../main";

...
this.update = function(time) {
    jupiter.position.x =
      Math.cos(time * 0.05 * guiControls.orbitalSpeed) * orbitRadius;
    jupiter.position.y =
      Math.sin(time * 0.05 * guiControls.orbitalSpeed) * orbitRadius;
    jupiter.rotation.y = time * 0.45 * guiControls.orbitalSpeed;
};

```
