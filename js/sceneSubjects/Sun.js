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

export default Sun;