import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BoxAnimation = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    console.log("hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
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
