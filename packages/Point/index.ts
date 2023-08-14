import * as THREE from 'three'
import imgSrc from './texture/point.png'

const createPointTag = (size: number = 60, color: string = '#ffffff') => {
  const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.TextureLoader().load(imgSrc),
    transparent: true,
    color: new THREE.Color(color)
  });
  const sprite = new THREE.Sprite(spriteMaterial);
  sprite.scale.set(size, size, 1);

  let s = 0.0;
  const waveAnimation = () => {
    s += 0.01;
    if (s < 0.5) {
      sprite.scale.x = size * (1 + s);
      sprite.scale.y = size * (1 + s);
    } else if (s >= 0.5 && s < 1.0) {
      sprite.scale.x = size * (2 - s);
      sprite.scale.y = size * (2 - s);
    } else {
      s = 0.0;
    }
    requestAnimationFrame(() => waveAnimation());
  };
  
  waveAnimation()
  return sprite;
};

export { createPointTag }
