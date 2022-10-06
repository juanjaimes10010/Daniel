import { player as Player } from "../app.js"

export const keyboard = () => {
  const keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
    Space: false,
    KeyW: false,
    KeyD: false,
    KeyS: false,
    KeyA: false,
  };
  
  const player = Player;
  const direction = player.direction;
  const velocity = player.velocity;
  const speed = player.speed;
    
  const keyDown = (e) => {

    if (e.code == "ArrowUp") keys.ArrowUp = true;
    if (e.code == "ArrowRight") keys.ArrowRight = true;
    if (e.code == "ArrowDown") keys.ArrowDown = true;
    if (e.code == "ArrowLeft") keys.ArrowLeft = true;
    if (e.code == "KeyW") keys.KeyW = true;
    if (e.code == "KeyD") keys.KeyD = true;
    if (e.code == "KeyS") keys.KeyS = true;
    if (e.code == "KeyA") keys.KeyA = true;
    if (e.code == "Space") keys.KeyA = true;

    direction.z =
      (keys.KeyW || keys.ArrowUp ? -1 : 0) +
      (keys.KeyS || keys.ArrowDown ? 1 : 0);
    if (direction.z == 1) velocity.z = speed;
    else if (direction.z == -1) velocity.z = -speed;
    else velocity.z = 0;

    direction.x =
      (keys.KeyA || keys.ArrowLeft ? -1 : 0) +
      (keys.KeyD || keys.ArrowRight ? 1 : 0);
    if (direction.x == 1) velocity.x = speed;
    else if (direction.x == -1) velocity.x = -speed;
    else velocity.x = 0;

    // if(keys.KeyA && keys.keyW) {

    // }
  };
  const keyUp = (e) => {
    if (e.code == "ArrowUp") keys.ArrowUp = false;
    if (e.code == "ArrowRight") keys.ArrowRight = false;
    if (e.code == "ArrowDown") keys.ArrowDown = false;
    if (e.code == "ArrowLeft") keys.ArrowLeft = false;
    if (e.code == "KeyW") keys.KeyW = false;
    if (e.code == "KeyD") keys.KeyD = false;
    if (e.code == "KeyS") keys.KeyS = false;
    if (e.code == "KeyA") keys.KeyA = false;

    direction.z =
      (keys.KeyW || keys.ArrowUp ? -1 : 0) +
      (keys.KeyS || keys.ArrowDown ? 1 : 0);
    if (direction.z == 1) velocity.z = speed;
    else if (direction.z == -1) velocity.z = -speed;
    else velocity.z = 0;

    direction.x =
      (keys.KeyA || keys.ArrowLeft ? -1 : 0) +
      (keys.KeyD || keys.ArrowRight ? 1 : 0);
    if (direction.x == 1) velocity.x = speed;
    else if (direction.x == -1) velocity.x = -speed;
    else velocity.x = 0;
  };

  addEventListener("keypress", keyDown);

  addEventListener("keydown", keyDown);

  addEventListener("keyup", keyUp);
}