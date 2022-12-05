import { useTexture } from "@react-three/drei";

const TexturedPlane = () => {
  const waterMap = useTexture("./textures/水世界-地板2a.png");
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial map={waterMap} />
      </mesh>
    </>
  );
};

export default TexturedPlane;
