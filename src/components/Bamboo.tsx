import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bamboo(props) {
  const { nodes, materials } = useGLTF("./models/bamboo.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bamboo_laef_002_002.geometry}
        material={materials["Material #23"]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bamboo_sap_002_001.geometry}
        material={materials["Material #20"]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bamboo_laef_002_001.geometry}
        material={materials["Material #23"]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bamboo_culm_002.geometry}
        material={materials["Material #18"]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/bamboo.gltf");
