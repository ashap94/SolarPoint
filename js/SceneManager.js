// var THREE = require('three');
// var OrbitControls = require('three-orbit-controls')(THREE);
// OrbitControls === undefined;

// import * as THREE from 'three';
// import { OrbitControls } from 'three-orbitcontrols-ts';
import Earth from "./sceneSubjects/Earth";
import GeneralLights from "./sceneSubjects/GeneralLights";
import StarField from "./sceneSubjects/StarField";
import Sun from "./sceneSubjects/Sun";
import Moon from "./sceneSubjects/Moon";
import Mercury from "./sceneSubjects/Mercury";
import Venus from "./sceneSubjects/Venus";
import Mars from "./sceneSubjects/Mars";
import Jupiter from "./sceneSubjects/Jupiter";
import Saturn from "./sceneSubjects/Saturn";
import Uranus from "./sceneSubjects/Uranus";
import Neptune from "./sceneSubjects/Neptune";
import Pluto from "./sceneSubjects/Pluto";


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
    controls.maxDistance = 1000;

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
            new GeneralLights(scene),
            new StarField(scene),
            new Sun(scene),
            new Earth(scene),
            new Mercury(scene),
            new Venus(scene),
            new Mars(scene),
            new Jupiter(scene),
            new Saturn(scene),
            new Uranus(scene), 
            new Neptune(scene),
            new Pluto(scene)
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

export default SceneManager;