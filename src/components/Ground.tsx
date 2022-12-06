import { useTexture } from "@react-three/drei";
import React, { useState } from "react";

type props = {
  groundSize: number;
};

type platformType = {
  position: { x: number; z: number };
};

const TexturedPlane: React.FC<props> = ({ groundSize }) => {
  const waterMap = useTexture("./textures/水世界-地板2a.png");
  //設定地磚大小
  const platformSize = 3;
  //計算地磚直橫列數量
  const platformColumnCount = groundSize / platformSize;
  const platformRowCount = platformColumnCount;
  //設定地磚起點
  let positionX = (groundSize / 2) * -1 + platformSize / 2;
  let positionZ = positionX;
  //設定地磚陣列
  const platformArray: platformType[] = [];

  for (let i = 0; i < platformColumnCount; i++) {
    for (let j = 0; j < platformRowCount; j++) {
      platformArray.push({
        position: { x: positionX + platformSize * j, z: positionZ },
      });
    }
    positionZ += platformSize;
  }

  return (
    <>
      {platformArray.map((platform, index) => {
        return (
          <mesh
            key={index}
            position={[platform.position.x, 0, platform.position.z]}
            rotation-x={Math.PI * -0.5}
            receiveShadow
          >
            <planeBufferGeometry args={[platformSize, platformSize]} />
            <meshStandardMaterial map={waterMap} />
          </mesh>
        );
      })}
    </>
  );
};

export default TexturedPlane;
