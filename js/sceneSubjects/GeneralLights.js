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

export default GeneralLights;