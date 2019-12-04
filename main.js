// import * as THREE from 'three';
const canvas = document.getElementById("canvas");
import SceneManager from "./js/SceneManager";
const sceneManager = new SceneManager(canvas);
// import * as dat from "dat.gui";
const dat = require("dat.gui");

export var guiControls = new (function() {
  this.orbitalSpeed = 1;
})();

var datGUI = new dat.GUI();

datGUI.add(guiControls, "orbitalSpeed", 0, 6);

bindEventListeners();
render();

function bindEventListeners() {
  window.onresize = resizeCanvas;
  resizeCanvas();
}

function resizeCanvas() {
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  sceneManager.onWindowResize();
}

function render() {
  requestAnimationFrame(render);
  sceneManager.update();
}
