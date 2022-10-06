import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import * as CANNON from '../package/dist/cannon-es.js';
import { Three, Cannon } from '../app.js';

export const Ground = () => {
  // Custom js
  const size = 50;
  
  // Three js
  const groundGeometry = new THREE.PlaneGeometry( size, size, 1, 1 );
  const groundTexture = new THREE.TextureLoader().load("../images/grass.jpg") ;
  const groundMaterial = new THREE.MeshLambertMaterial( {
     map: groundTexture 
  } );
  const ground = new THREE.Mesh( groundGeometry, groundMaterial );
  // const groundMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
  ground.position.set(0,0,0)
  ground.rotation.x = -Math.PI / 2; // make it face up
  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set( 30, 30 );

  Three.scene.add( ground );

  // Cannon js
  const groundBody = new CANNON.Body({
    type: CANNON.Body.STATIC, 
    shape: new CANNON.Box(new CANNON.Vec3(size / 2, size / 2, 1)),
    material: Cannon.material.normalGround
  })
  groundBody.position.set(0, -1, 0)  
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up

  Cannon.world.addBody(groundBody)
}