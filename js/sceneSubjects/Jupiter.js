function Jupiter(scene) {

    var jupiter = new THREE.Mesh(
        new THREE.SphereGeometry(6, 30, 30),
        new THREE.MeshPhongMaterial());

    jupiter.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/jupitermap.jpg');
    // jupiter.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
    // jupiter.material.bumpScale = 0.05;

    var orbitRadius = 70;

    jupiter.position.set(orbitRadius, 0, 0);
    jupiter.rotation.x = Math.PI / 2;

    var material = new THREE.LineBasicMaterial({ color: 'aqua' });
    var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
    geometry.vertices.shift();
    var line = new THREE.Line(geometry, material);
    line.position.set(0, 0, 0);
    // console.log(jupiter);

    scene.add(jupiter);
    scene.add(line);

    this.update = function (time) {
        jupiter.position.x = Math.cos(time * 0.05) * orbitRadius;
        jupiter.position.y = Math.sin(time * 0.05) * orbitRadius;
        jupiter.rotation.y = time * 0.45;
    }

}

export default Jupiter;