/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 --shadows -T C:/Users/devf/Desktop/divyansh-app/public/assets/keyboard.glb
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Keyboard(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
        '/assets/keyboard-transformed.glb'
    );
    const { actions } = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="keyboard"
                    castShadow
                    receiveShadow
                    geometry={nodes.keyboard.geometry}
                    material={materials.keyboard}
                    position={[-2.42, 7.19, -3.88]}
                    rotation={[0, 0.13, 0]}
                    scale={[3.61, 8.37, 1.91]}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/keyboard-transformed.glb');
