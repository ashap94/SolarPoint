function Uranus(scene) {

    var uranus = new THREE.Mesh(
        new THREE.SphereGeometry(2, 30, 30),
        new THREE.MeshPhongMaterial());

    uranus.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/uranusmap.jpg');
    // saturn.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/marsbump1k.jpg');
    // saturn.material.bumpScale = 0.05;

    var orbitRadius = 90;

    uranus.position.set(orbitRadius, 0, 0);
    uranus.rotation.x = Math.PI / 2;

    var material = new THREE.LineBasicMaterial({ color: 'aqua' });
    var geometry = new THREE.CircleGeometry(orbitRadius, 1000);
    geometry.vertices.shift();
    var line = new THREE.Line(geometry, material);
    line.position.set(0, 0, 0);
    // console.log(uranus);

    // SATURN'S RINGS
    var rings = new THREE.Mesh(
        new THREE.RingGeometry(3.5, 3.8, 30),
        new THREE.MeshPhongMaterial());

    rings.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/uranusringcolour.jpg');
    rings.material.side = THREE.DoubleSide;

    uranus.add(rings);

    scene.add(uranus);
    scene.add(line);

    uranus.children[0].rotation.x = Math.PI / 2;

    this.update = function (time) {
        uranus.position.x = Math.cos(time * 0.15) * orbitRadius;
        uranus.position.y = Math.sin(time * 0.15) * orbitRadius;
        uranus.rotation.y = time * 0.45;
    };

}

export default Uranus;