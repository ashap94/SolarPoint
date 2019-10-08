// import * as THREE from 'three';
// import Moon from "./Moon";
function Earth(scene) {

    var earth = new THREE.Mesh(
        new THREE.SphereGeometry(3.5, 30, 30), 
        new THREE.MeshPhongMaterial());

    // earth.material.color.set('rgb(30,230,55)');
    earth.material.map = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/earthmap1k.jpg');
    earth.material.bumpMap = THREE.ImageUtils.loadTexture('js/libs/threex.planets-master/images/earthbump1k.jpg');
    earth.material.bumpScale = 0.05;
    // earth.material.specularMap = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg');
    // earth.material.specular = new THREE.Color('grey');
    
    var orbitRadius = 45;
    var orbitRadiusMoon = 5.8;

    earth.position.set(orbitRadius, 0, 0);
    // earth.rotation.y = (Math.PI / 2);
    earth.rotation.x = Math.PI / 2;


    var material = new THREE.LineBasicMaterial({color: 'aqua'});
    var geometry = new THREE.CircleGeometry( orbitRadius, 1000);
    geometry.vertices.shift();
    var line = new THREE.Line(geometry, material);
    line.position.set(0,0,0);


    // MOON Construction 

    var moon = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 30, 30),
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

    moon.rotation.x = -(Math.PI / 2);

    earth.add( moon );
    // earth.add( lineMoon);

    scene.add(earth);
    scene.add(line);

    // console.log(earth);

    // scene.add(mesh);

    this.update = function (time) {
        const scale = Math.sin(time);

        // earth.position.set(Math.cos(time) * orbitRadius, Math.sin(time) * orbitRadius );
        earth.position.x = Math.cos(time * 0.15) * orbitRadius ;
        earth.position.y = Math.sin(time * 0.15) * orbitRadius ;
        earth.rotation.y = time * 0.45;

        earth.children[0].position.z = Math.cos(time * 0.35) * orbitRadiusMoon;
        earth.children[0].position.y = Math.sin(time * 0.35) * orbitRadiusMoon;
        earth.children[0].rotation.y = time * 0.45;

        // earth.children[1].rotation.y = -(time * 0.45);
        
    }

}

export default Earth;