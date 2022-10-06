import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'
import {
  dirtImg,
  logImg,
  grassImg,
  glassImg,
  woodImg
} from './images'

const dirtTextures = new TextureLoader().load(dirtImg)
const logTextures = new TextureLoader().load(logImg)
const grassTextures = new TextureLoader().load(grassImg)
const glassTextures = new TextureLoader().load(glassImg)
const woodTextures = new TextureLoader().load(woodImg)
const groundTextures = new TextureLoader().load(grassImg)


dirtTextures.magFilter = NearestFilter
logTextures.magFilter = NearestFilter;
grassTextures.magFilter = NearestFilter;
glassTextures.magFilter = NearestFilter;
woodTextures.magFilter = NearestFilter;
groundTextures.magFilter = NearestFilter;
groundTextures.magFilter = NearestFilter;
groundTextures.wrapS = RepeatWrapping;
groundTextures.wrapT = RepeatWrapping;



export {
  dirtTextures,
  logTextures,
  grassTextures,
  glassTextures,
  woodTextures,
  groundTextures,
}