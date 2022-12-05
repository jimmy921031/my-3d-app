import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const lightRef = useRef<THREE.DirectionalLight>();
  useHelper(lightRef, DirectionalLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={lightRef}
        position={[0, 10, 15]}
        intensity={0.7}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
      />
      <hemisphereLight args={["#D2E9FF", "#FFFFFF", 0.5]} />
    </>
  );
};

export default Lights;
