import { Canvas } from "@react-three/fiber";
import BoxAnimation from "../components/BoxAnimation";
import CameraOrbitController from "../components/CameraOrbitController";
import Lights from "../components/Lights";
import TexturedPlane from "../components/Ground";
import {
  OrbitControls,
  Stats,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { Bamboo } from "../components/Bamboo";
import Spheres from "../components/Spheres";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { StoreModel } from "../components/store";

const MyPlayer = () => {
  const model = useGLTF("./models/player.gltf");
  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions?.jumping?.play();
  }, []);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} />;
};

export default function Home() {
  const testing = false;

  //設定地板大小
  const groundSize = 100;
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
        <Spheres />
        <TexturedPlane groundSize={groundSize} />
        <Bamboo position={[8, 0, 8]} />
        <StoreModel position={[20, 0, 20]} />
        <MyPlayer />
      </Canvas>
    </div>
  );
}
