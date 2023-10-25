import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Group, MathUtils, MeshLambertMaterial, Vector3 } from "three";
import {
  CameraControls,
  Cloud,
  Clouds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
import { isMobile } from "react-device-detect";
import Balloon from "../src/balloon";
import LoadingPage from "./loadingPage";

export default function MainPage() {
  return (
    <div className="bg-main-base w-screen h-screen flex justify-center items-center no-drag">
      <Canvas
        camera={{
          position: [0, 0, 0],
          fov: 40,
        }}
        className="w-screen h-screen"
      >
        <Suspense fallback={<LoadingPage />}>
          <ambientLight intensity={Math.PI / 1} />
          <Environment files="/textures/hdri.hdr" background blur={1} />
          <SkyView />
          <spotLight
            position={[-20, 0, 10]}
            color="red"
            angle={0.15}
            decay={0}
            penumbra={-1}
            intensity={30}
          />
          <spotLight
            position={[20, -50, 10]}
            color="red"
            angle={0.2}
            decay={0}
            penumbra={-1}
            intensity={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function SkyView() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    state.camera.lookAt(-1, -7, -1);
    //카메라 쉐이크 관련 코드
    state.camera.position.x = MathUtils.lerp(
      state.camera.position.x,
      2.5 - state.mouse.x / 10,
      0.03
    );
    state.camera.position.y = MathUtils.lerp(
      state.camera.position.y,
      -7 - state.mouse.y / 10,
      0.03
    );
  });
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={isMobile ? 42 : 30}
        position={[2.5, -7, -1]}
        ref={cameraRef}
      />
      <Balloon />
      <Clouds material={MeshLambertMaterial} limit={400}>
        <Cloud
          bounds={[1, 8, 2]}
          growth={5}
          seed={30}
          position={[-20, -10, 10]}
          opacity={0.5}
          volume={5}
        />
        <Cloud
          bounds={[1, 7, 4]}
          growth={5}
          seed={30}
          position={[-18, -7, -17]}
          opacity={0.5}
          volume={10}
        />
        <Cloud
          concentrate="outside"
          bounds={[1, 1, 1]}
          growth={10}
          seed={0.3}
          position={[-15, 0, 0]}
          opacity={1.25}
          volume={3}
        />
        <Cloud
          concentrate="outside"
          speed={0.01}
          bounds={[1, 10, 5]}
          growth={10}
          seed={0.3}
          position={[-40, -25, 5]}
          opacity={0.6}
          volume={8}
        />
        <Cloud
          concentrate="outside"
          speed={0.01}
          growth={50}
          opacity={1.25}
          seed={0.3}
          bounds={200}
          position={[0, -10, -20]}
          volume={50}
        />{" "}
        <Cloud
          concentrate="outside"
          speed={0.01}
          growth={50}
          opacity={1.25}
          seed={0.3}
          bounds={200}
          position={[0, 10, 10]}
          volume={50}
        />{" "}
      </Clouds>
    </>
  );
}
