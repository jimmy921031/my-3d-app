import { Canvas } from "@react-three/fiber";
import Lights from "../components/Lights";
import TexturedPlane from "../components/Ground";
import { Bamboo } from "../components/Bamboo";
import Spheres from "../components/Spheres";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { StoreModel } from "../components/store";
import MyPlayer from "../components/MyPlayer";
import User from "../components/user";
import {
  OrbitControls,
  Stats,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

export default function Home() {
  const testing = true;

  //設定地板大小
  const groundSize = 100;
  return (
    <div className="container">
      <Canvas shadows>
        {testing ? <axesHelper args={[5]} /> : null}
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[100, 100]} /> : null}
        <OrbitControls />
        <Lights />
        {/* <BoxAnimation isTesting={testing} /> */}
        {/* <User /> */}
        <TexturedPlane groundSize={groundSize} />
        {/* <Bamboo position={[8, 0, 8]} /> */}
        {/* <StoreModel position={[20, 0, 20]} /> */}
        <MyPlayer />
      </Canvas>
    </div>
  );
}
