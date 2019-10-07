function Mars(scene) {

    var mars = new THREE.Mesh(
        new THREE.SphereGeometry(1, 30, 30),
        new THREE.MeshPhongMaterial());

    mars.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsmap1k.jpg');
    mars.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
    mars.material.bumpScale = 0.05;

    var orbitRadius = 50;

    mars.position.set(orbitRadius, 0, 0);
    mars.rotation.x = Math.PI / 2;

    var material = new THREE.LineBasicMaterial({ color: 'aqua' });
    var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
    geometry.vertices.shift();
    var line = new THREE.Line(geometry, material);
    line.position.set(0, 0, 0);
    // console.log(mars);

    scene.add(mars);
    scene.add(line);

    this.update = function (time) {
        mars.position.x = Math.cos(time * 0.15) * orbitRadius;
        mars.position.y = Math.sin(time * 0.15) * orbitRadius;
        mars.rotation.y = time * 0.45;
    }

}

export default Mars;