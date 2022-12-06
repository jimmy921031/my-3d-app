import { TransformControls, useTexture } from "@react-three/drei";

const Spheres = () => {
  const map = useTexture("./textures/laminate_floor_02_diff_1k.png");
  const norMap = useTexture("./textures/laminate_floor_02_nor_gl_1k.png");
  const roughMap = useTexture("./textures/laminate_floor_02_rough_1k.png");
  return (
    <>
      <TransformControls>
        <mesh scale={[1, 1, 1]} position={[4, 4, 4]} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            map={map}
            normalMap={norMap}
            roughnessMap={roughMap}
          />
        </mesh>
      </TransformControls>
    </>
  );
};

export default Spheres;
