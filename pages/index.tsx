import { Canvas } from "@react-three/fiber";
import BoxAnimation from "../components/BoxAnimation";
import CameraOrbitController from "../components/CameraOrbitController";
import {
  OrbitControls,
  Stats,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";

const TexturedSpheres = () => {
  const map = useTexture("./textures/laminate_floor_02_diff_1k.png");
  const dispMap = useTexture("./textures/laminate_floor_02_disp_1k.png");
  const norMap = useTexture("./textures/laminate_floor_02_nor_gl_1k.png");
  const roughMap = useTexture("./textures/laminate_floor_02_rough_1k.png");
  return (
    <>
      <mesh scale={[1, 1, 1]} position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map} />
      </mesh>
      <mesh scale={[1, 1, 1]} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial map={map} normalMap={norMap} />
      </mesh>
      <mesh scale={[1, 1, 1]} position={[2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          roughnessMap={roughMap}
          normalMap={norMap}
        />
      </mesh>
      <mesh scale={[1, 1, 1]} position={[4, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={norMap}
          roughnessMap={roughMap}
          displacementMap={dispMap}
        />
      </mesh>
    </>
  );
};

export default function Home() {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        <PerspectiveCamera args={[45, 1, 1, 500]} />
        {testing ? <axesHelper args={[5]} /> : null}
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[100, 100]} /> : null}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, -5]} intensity={0.1} />
        {/* <BoxAnimation isTesting={testing} /> */}
        <TexturedSpheres />
      </Canvas>
    </div>
  );
}
