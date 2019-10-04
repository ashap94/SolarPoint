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

export default StarField;