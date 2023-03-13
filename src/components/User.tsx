import { useInput } from "../hooks/useInput";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const User = () => {
  const { forward, backward, left, right, jump, shift } = useInput();
  const model = useLoader(GLTFLoader, "./models/user.gltf");
  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <>
      <mesh position={[4, 4, 4]} castShadow>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <primitive object={model.scene} />
    </>
  );
};

export default User;
