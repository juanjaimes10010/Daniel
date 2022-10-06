import { CreateThree } from './components/CreateThree.js';
import { CreateCannon } from './components/CreateCannon.js';
import { Ground } from './components/Ground.js';
import { Player } from './components/Player.js';
import { Enemy } from './components/Enemy.js';
import { Toy } from './components/Toy.js';
import { keyboard } from './hooks/keyboard.js';

// creating three js world
const Three = CreateThree();
// creating cannon js physics
const Cannon = CreateCannon();
// creating ground
const ground = Ground()
// creating player 
const player = Player();
// creating enemy
const enemy = Enemy();
// creating toy
const toy = Toy();
const box = toy.createBox({
  color: 'blue',
  size: 4,
  x: Math.floor(Math.random() * 20 - 10),
  y: Math.floor(Math.random() * 20),
  z: Math.floor(Math.random() * 20 - 10)
});
const ball = toy.createSphere({
  size: 2,
  x: Math.floor(Math.random() * 20),
  y: Math.floor(Math.random() * 20),
  z: Math.floor(Math.random() * 20)
})
//setting up split screen
const splitScreen = Three.splitScreen();

function animate() {
  requestAnimationFrame(animate);

  player.body.position.x += player.velocity.x;
  player.body.position.y += player.velocity.y;
  player.body.position.z += player.velocity.z;

  console.log(player.body.quaternion)

  player.update();
  enemy.update();
  box.update();
  ball.update()
  // console.log("position:",player.position,"\nquaternion:",player.body.quaternion)

  Cannon.world.fixedStep();
  splitScreen.render();

}
animate();

keyboard()


export {
  Three,
  Cannon,
  player,
  enemy
}