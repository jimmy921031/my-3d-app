import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function StoreModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/store.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="pCube280001"
          castShadow
          receiveShadow
          geometry={nodes.pCube280001.geometry}
          material={materials.lambert13}
          position={[7.81, 3.43, -21.81]}
          rotation={[-Math.PI, -0.5, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube328001"
          castShadow
          receiveShadow
          geometry={nodes.pCube328001.geometry}
          material={materials.lambert13}
          position={[6.76, 1.51, -22.35]}
          rotation={[-Math.PI, -0.92, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube329001"
          castShadow
          receiveShadow
          geometry={nodes.pCube329001.geometry}
          material={materials.lambert13}
          position={[8.73, 1.51, -20.85]}
          rotation={[-Math.PI, -0.02, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube280"
          castShadow
          receiveShadow
          geometry={nodes.pCube280.geometry}
          material={materials.lambert13}
          position={[-4.41, 3.43, -34.02]}
          rotation={[-Math.PI, -0.5, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube328"
          castShadow
          receiveShadow
          geometry={nodes.pCube328.geometry}
          material={materials.lambert13}
          position={[-5.46, 1.51, -34.56]}
          rotation={[-Math.PI, -0.92, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube329"
          castShadow
          receiveShadow
          geometry={nodes.pCube329.geometry}
          material={materials.lambert13}
          position={[-3.49, 1.51, -33.06]}
          rotation={[-Math.PI, -0.02, 0]}
          scale={1.92}
        />
        <mesh
          name="pCube264"
          castShadow
          receiveShadow
          geometry={nodes.pCube264.geometry}
          material={materials.cloth_roof}
          position={[91.04, -20.01, 88.37]}
          rotation={[1.77, 0.05, -0.15]}
          scale={0.1}
        />
        <mesh
          name="pCube276"
          castShadow
          receiveShadow
          geometry={nodes.pCube276.geometry}
          material={materials.Copper_Box}
          position={[11.84, 4.68, -22.09]}
          rotation={[-3.13, 1.41, 0.56]}
          scale={[3.85, 0.71, 2.56]}
        />
        <mesh
          name="pCube362"
          castShadow
          receiveShadow
          geometry={nodes.pCube362.geometry}
          material={materials.Copper_Box}
          position={[16.04, 4.68, -22.76]}
          rotation={[-3.13, 1.41, 0.56]}
          scale={[3.85, 0.71, 2.56]}
        />
        <mesh
          name="pCube363"
          castShadow
          receiveShadow
          geometry={nodes.pCube363.geometry}
          material={materials.Copper_Box}
          position={[3.39, 4.68, -20.8]}
          rotation={[-3.13, 1.41, 0.56]}
          scale={[3.85, 0.71, 2.56]}
        />
        <mesh
          name="pCube364"
          castShadow
          receiveShadow
          geometry={nodes.pCube364.geometry}
          material={materials.Copper_Box}
          position={[-0.81, 4.68, -20.13]}
          rotation={[-3.13, 1.41, 0.56]}
          scale={[3.85, 0.71, 2.56]}
        />
        <mesh
          name="pCube353"
          castShadow
          receiveShadow
          geometry={nodes.pCube353.geometry}
          material={materials.Shop_poles}
          position={[-3.73, 11.85, -26.54]}
          rotation={[-3.06, 1.43, -1.45]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube354"
          castShadow
          receiveShadow
          geometry={nodes.pCube354.geometry}
          material={materials.Shop_poles}
          position={[17.75, 13.74, -29.01]}
          rotation={[-2.11, 1.33, -2.41]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube355"
          castShadow
          receiveShadow
          geometry={nodes.pCube355.geometry}
          material={materials.Shop_poles}
          position={[-3.23, 1.05, -17.66]}
          rotation={[-Math.PI, 0, 0.09]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube356"
          castShadow
          receiveShadow
          geometry={nodes.pCube356.geometry}
          material={materials.Shop_poles}
          position={[19.18, 3.11, -20.19]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube357"
          castShadow
          receiveShadow
          geometry={nodes.pCube357.geometry}
          material={materials.Shop_poles}
          position={[16.35, 6.21, -37.58]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube358"
          castShadow
          receiveShadow
          geometry={nodes.pCube358.geometry}
          material={materials.Shop_poles}
          position={[-4.93, 4.55, -35.36]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.62, 18.61, 0.63]}
        />
        <mesh
          name="pCube359"
          castShadow
          receiveShadow
          geometry={nodes.pCube359.geometry}
          material={materials.Shop_poles}
          position={[-4.56, 9.64, -32.51]}
          rotation={[0.8, 0.1, -0.11]}
          scale={[0.39, 8.16, 0.61]}
        />
        <mesh
          name="pCube360"
          castShadow
          receiveShadow
          geometry={nodes.pCube360.geometry}
          material={materials.Shop_poles}
          position={[16.8, 11.27, -34.68]}
          rotation={[0.77, 0.1, -0.1]}
          scale={[0.39, 8.16, 0.61]}
        />
        <mesh
          name="pCube275"
          castShadow
          receiveShadow
          geometry={nodes.pCube275.geometry}
          material={materials.shop_counter}
          position={[1.24, 1.87, -21.17]}
          rotation={[-Math.PI, -0.16, 0]}
          scale={[8.16, 2.81, 4.67]}
        />
        <mesh
          name="pCube361"
          castShadow
          receiveShadow
          geometry={nodes.pCube361.geometry}
          material={materials.shop_counter}
          position={[13.73, 1.87, -23.08]}
          rotation={[-Math.PI, -0.16, 0]}
          scale={[8.16, 2.81, 4.67]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/store.gltf");
