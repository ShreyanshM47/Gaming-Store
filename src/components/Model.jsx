import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/scene.gltf');
  return (
    <primitive object={gltf.scene} scale={2} />
  );
};

export default Model;
