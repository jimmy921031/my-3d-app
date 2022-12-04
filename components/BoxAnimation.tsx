import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

const BoxAnimation = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useHelper(meshRef, BoxHelper, "blue");
  useFrame(() => {
    console.log("hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default BoxAnimation;
