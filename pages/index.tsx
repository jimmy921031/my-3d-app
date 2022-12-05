import { Canvas } from "@react-three/fiber";
import BoxAnimation from "../components/BoxAnimation";
import CameraOrbitController from "../components/CameraOrbitController";
import Lights from "../components/Lights";
import TexturedPlane from "../components/Ground";
import {
  OrbitControls,
  Stats,
  PerspectiveCamera,
  useTexture,
  TransformControls,
} from "@react-three/drei";

const TexturedSpheres = () => {
  const map = useTexture("./textures/laminate_floor_02_diff_1k.png");
  const norMap = useTexture("./textures/laminate_floor_02_nor_gl_1k.png");
  const roughMap = useTexture("./textures/laminate_floor_02_rough_1k.png");
  return (
    <>
      <TransformControls>
        <mesh scale={[1, 1, 1]} position={[0, 4, 0]} castShadow>
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

export default function Home() {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        <PerspectiveCamera args={[45, 1, 1, 500]} />
        {testing ? <axesHelper args={[5]} /> : null}
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[100, 100]} /> : null}
        <OrbitControls />
        <Lights />
        {/* <BoxAnimation isTesting={testing} /> */}
        <TexturedSpheres />
        <TexturedPlane />
      </Canvas>
    </div>
  );
}
