import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

type Props = {
  isTesting: boolean;
};

const BoxAnimation: React.FC<Props> = ({ iTesting }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  {
    isTesting ? useHelper(meshRef, BoxHelper, "blue") : null;
  }
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
