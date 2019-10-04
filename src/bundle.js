/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/SceneManager.js":
/*!****************************!*\
  !*** ./js/SceneManager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sceneSubjects_Earth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sceneSubjects/Earth */ "./js/sceneSubjects/Earth.js");
/* harmony import */ var _sceneSubjects_GeneralLights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneSubjects/GeneralLights */ "./js/sceneSubjects/GeneralLights.js");
/* harmony import */ var _sceneSubjects_StarField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sceneSubjects/StarField */ "./js/sceneSubjects/StarField.js");
/* harmony import */ var _sceneSubjects_Sun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sceneSubjects/Sun */ "./js/sceneSubjects/Sun.js");
/* harmony import */ var _sceneSubjects_Moon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sceneSubjects/Moon */ "./js/sceneSubjects/Moon.js");
// var THREE = require('three');
// var OrbitControls = require('three-orbit-controls')(THREE);
// OrbitControls === undefined;

// import * as THREE from 'three';
// import { OrbitControls } from 'three-orbitcontrols-ts';







function SceneManager(canvas) {

    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.z = 10;
    controls.minDistance = 5;
    controls.maxDistance = 2000;

    function buildScene() {
        const scene = new THREE.Scene();

        // scene.background = new THREE.Color(0xffffff);

        // var geometry = new THREE.SphereGeometry(1000,1000,1000);
        // var material = new THREE.MeshBasicMaterial();
        // material.map = THREE.TextureLoader('/js/libs/threex.planets-master/images/galaxy_starfield.png');
        // material.side = THREE.BackSide;
        // var mesh = new THREE.Mesh(geometry, material)

        // scene.backgroud = mesh;

        // scene.background = new THREE.CubeTextureLoader().setPath("js/libs/Skybox_Images/")
        //     .load(["galaxy-X.jpg", "galaxy-Y.jpg", "galaxy-Z.jpg", "galaxy+X.jpg", "galaxy+Y.jpg", "galaxy+Z.jpg"]);

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        // renderer.setClearColor(0xffffff);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 75;
        const nearPlane = 0.1;
        const farPlane = 30000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        
        return camera;
    }

    // function buildSkybox() {
    //     let materialArray = [];
    //     let texture_ft = new THREE.TextureLoader().load('galaxy-X.tga');
    //     let texture_bk = new THREE.TextureLoader().load('galaxy-Y.tga');
    //     let texture_up = new THREE.TextureLoader().load('galaxy-Z.tga');
    //     let texture_dn = new THREE.TextureLoader().load('galaxy+X.tga');
    //     let texture_rt = new THREE.TextureLoader().load('galaxy+Y.tga');
    //     let texture_lf = new THREE.TextureLoader().load('galaxy+Z.tga');

    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    //     materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    //     for (let i = 0; i < 6; i++)
    //         materialArray[i].side = THREE.BackSide;

    //     let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
    //     let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    //     scene.add(skybox);
    // }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new _sceneSubjects_GeneralLights__WEBPACK_IMPORTED_MODULE_1__["default"](scene),
            new _sceneSubjects_StarField__WEBPACK_IMPORTED_MODULE_2__["default"](scene),
            new _sceneSubjects_Sun__WEBPACK_IMPORTED_MODULE_3__["default"](scene),
            new _sceneSubjects_Earth__WEBPACK_IMPORTED_MODULE_0__["default"](scene),
            // new Moon(scene)
        ];

        // THREE.sceneSubjects[3].add(sceneSubjects[4]);

        return sceneSubjects;
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        renderer.render(scene, camera);
    }

    this.onWindowResize = function () {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SceneManager);

/***/ }),

/***/ "./js/sceneSubjects/Earth.js":
/*!***********************************!*\
  !*** ./js/sceneSubjects/Earth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import * as THREE from 'three';
// import Moon from "./Moon";
function Earth(scene) {

    var earth = new THREE.Mesh(
        new THREE.SphereGeometry(2, 30, 30), 
        new THREE.MeshPhongMaterial());

    // earth.material.color.set('rgb(30,230,55)');
    earth.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/earthmap1k.jpg');
    earth.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/earthbump1k.jpg');
    earth.material.bumpScale = 0.05;
    // earth.material.specularMap = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg');
    // earth.material.specular = new THREE.Color('grey');
    
    var orbitRadius = 25;
    var orbitRadiusMoon = 5;

    earth.position.set(orbitRadius, 0, 0);
    // earth.rotation.z = (Math.PI / 2);
    // earth.rotation.x = Math.PI / 2;


    var material = new THREE.LineBasicMaterial({color: 'aqua'});
    var geometry = new THREE.CircleGeometry( orbitRadius, 1000);
    geometry.vertices.shift();
    var line = new THREE.Line(geometry, material);
    line.position.set(0,0,0);


    // MOON Construction 

    var moon = new THREE.Mesh(
        new THREE.SphereGeometry(1, 30, 30),
        new THREE.MeshPhongMaterial());

    moon.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/moonmap1k.jpg');
    moon.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/moonbump1k.jpg');
    moon.material.bumpScale = 0.05;

    moon.position.set(orbitRadiusMoon, 0, 0);

    var materialMoon = new THREE.LineBasicMaterial({ color: 'aqua' });
    var geometryMoon = new THREE.CircleGeometry(orbitRadiusMoon, 1000);
    geometryMoon.vertices.shift();
    var lineMoon = new THREE.Line(geometryMoon, materialMoon);
    lineMoon.position.set(0, 0, 0);

    // moon.rotation.y = (Math.PI / 2);
    // moon.rotation.x = -(Math.PI / 2);

    // lineMoon.rotation.y = (Math.PI / 2);
    // lineMoon.rotation.x = -(Math.PI / 2);


    // var orbit = new THREE.Group();
    // orbit.add(line);
    // orbit.add(earth);

    // var moon = new Moon(scene);

    earth.add( moon );
    earth.add( lineMoon);

    scene.add(earth);
    scene.add(line);

    console.log(earth);

    // scene.add(mesh);

    this.update = function (time) {
        const scale = Math.sin(time);

        // earth.position.set(Math.cos(time) * orbitRadius, Math.sin(time) * orbitRadius );
        earth.position.x = Math.cos(time * 0.15) * orbitRadius ;
        earth.position.y = Math.sin(time * 0.15) * orbitRadius ;
        earth.rotation.y = time * 0.45;

        earth.children.Mesh.position.x = Math.cos(time * 0.15) * orbitRadiusMoon;
        earth.children.Mesh.position.y = Math.sin(time * 0.15) * orbitRadiusMoon;
        earth.children.Mesh.rotation.y = time * 0.45;

        // lineMoon.rotation.y = time * 0.45;
        
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Earth);

/***/ }),

/***/ "./js/sceneSubjects/GeneralLights.js":
/*!*******************************************!*\
  !*** ./js/sceneSubjects/GeneralLights.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import * as THREE from 'three';
function GeneralLights(scene) {

    var light = new THREE.PointLight(0xffffff, 5, 1000);
    light.position.set(0,0,0);
    scene.add(light);

    // var light = new THREE.PointLight(0xffffff, 1, 1000);
    // light.position.set(0, 0, -25);
    // scene.add(light);

    var light = new THREE.AmbientLight(0xffffff, 1);
    scene.add( light );

    this.update = function (time) {
        // light.intensity = (Math.sin(time) + 1.5) / 1.5;
        // light.color.setHSL(Math.sin(time), 0.5, 0.5);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GeneralLights);

/***/ }),

/***/ "./js/sceneSubjects/Moon.js":
/*!**********************************!*\
  !*** ./js/sceneSubjects/Moon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Moon(scene) {

    var moon = new THREE.Mesh(
        new THREE.SphereGeometry(1, 30, 30),
        new THREE.MeshPhongMaterial());

    moon.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/moonmap1k.jpg');
    moon.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/moonbump1k.jpg');
    moon.material.bumpScale = 0.05;

    var orbitRadius = 8;

    moon.position.set(orbitRadius, 0 , 0);

    var materialMoon = new THREE.LineBasicMaterial({ color: 'aqua' });
    var geometryMoon = new THREE.CircleGeometry(orbitRadius, 1000);
    geometryMoon.vertices.shift();
    var lineMoon = new THREE.Line(geometryMoon, materialMoon);
    lineMoon.position.set(0, 0, 0);

    scene.add(moon);
    scene.add(line);

    this.update = function (time) {
        moon.position.x = Math.cos(time * 0.15) * orbitRadius;
        moon.position.y = Math.sin(time * 0.15) * orbitRadius;
        moon.rotation.y = time * 0.45;
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Moon);

/***/ }),

/***/ "./js/sceneSubjects/StarField.js":
/*!***************************************!*\
  !*** ./js/sceneSubjects/StarField.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import * as THREE from 'three';
function StarField (scene) {

    var geometry = new THREE.SphereGeometry(1000, 1000, 1000);
    var material = new THREE.MeshBasicMaterial();

    material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/galaxy_starfield.jpg');
    // material.map = new THREE.SphereTextureLoader().setpath("js/libslibs/threex.planets-master/images/")
    //     .load('galaxy_starfield.jpg');

    material.side = THREE.BackSide;
    var mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh);

    this.update = function (time) {

    }

}

/* harmony default export */ __webpack_exports__["default"] = (StarField);

/***/ }),

/***/ "./js/sceneSubjects/Sun.js":
/*!*********************************!*\
  !*** ./js/sceneSubjects/Sun.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import * as THREE from 'three';
function Sun(scene) {

    var radius = 2;
    var mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 30, 30), new THREE.MeshStandardMaterial({ flatShading: false }));
    // mesh.material.color.set("#FDB813");
    mesh.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/sunmap.jpg');

    mesh.position.set(0, 0, 0);

    scene.add(mesh);

    this.update = function (time) {
        const scale = Math.sin(time);
        

        // mesh.scale.set(scale, scale, scale);
        // mesh.position.set(scale)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Sun);

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_SceneManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SceneManager */ "./js/SceneManager.js");
// import * as THREE from 'three';
const canvas = document.getElementById("canvas");

const sceneManager = new _js_SceneManager__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);

bindEventListeners();
render();

function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map