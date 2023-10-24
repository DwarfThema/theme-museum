import { Float, Gltf, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimationAction,
  AnimationClip,
  Group,
  LoopOnce,
  SkinnedMesh,
} from "three";
import { SkeletonUtils } from "three-stdlib";

export default function Balloon({ ...props }) {
  const balloonRef = useRef<Group>(null);

  const [currentActionState, setCurrentActionState] =
    useState<AnimationAction | null>(null);

  const { scene, animations } = useGLTF("/models/balloon.gltf");

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const balloonScene = nodes.Scene001 as Group;

  useEffect(() => {}, []);

  const meshs: SkinnedMesh[] = [];

  balloonScene.traverse((obj) => {
    if (obj instanceof SkinnedMesh) {
      meshs.push(obj);
    }
  });

  const { ref: animRef, actions, names } = useAnimations(animations);

  // AnimationClip Ref
  const animInit = () => {
    const currentAction = actions[names[0]] as AnimationAction;
    setCurrentActionState(currentAction);
    currentAction.paused = false;
    currentAction.timeScale = 1;
    currentAction.setLoop(LoopOnce, 1);
    currentAction.clampWhenFinished = true;
    currentAction.play();
  };

  useEffect(() => {
    animInit();
  }, [scene]);

  /*   const { posx, posy, posz, scale } = useControls({
    posx: { value: 0, step: 0.1 },
    posy: { value: 0, step: 0.1 },
    posz: { value: 0, step: 0.1 },
    scale: { value: 1, step: 0.1 },
  }); */

  return (
    <>
      <Float
        floatIntensity={0.5}
        speed={0.7}
        rotationIntensity={0.2}
        floatingRange={[-0.3, 0.3]}
      >
        <group
          ref={balloonRef}
          {...props}
          position={[-6.5, -7.5, -1]}
          rotation={[0, Math.PI * 0.5, 0]}
          scale={1.2}
        >
          <primitive object={nodes.base} ref={animRef} />
          {meshs.map((mesh, index) => (
            <skinnedMesh
              key={index}
              geometry={mesh.geometry}
              material={mesh.material}
              skeleton={mesh.skeleton}
              receiveShadow
              castShadow
            />
          ))}
        </group>
      </Float>
    </>
  );
}
