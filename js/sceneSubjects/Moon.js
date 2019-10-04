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

export default Moon;