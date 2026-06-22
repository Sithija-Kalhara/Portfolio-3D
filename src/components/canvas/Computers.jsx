import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

useGLTF.preload("./desktop_pc/scene1.gltf");

// ── Device detection ──────────────────────────────────────────────────────────
function getDeviceProfile() {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS     = /iPhone|iPad|iPod/i.test(ua);
  const isMobile  =
    isAndroid ||
    isIOS ||
    window.matchMedia("(max-width: 768px)").matches;

  const cores  = navigator.hardwareConcurrency || 2;
  const memory = navigator.deviceMemory        || 2;
  const isLowEnd = isAndroid || cores <= 4 || memory <= 2;

  return { isMobile, isLowEnd, isAndroid, isIOS };
}

// ── 3-D model ─────────────────────────────────────────────────────────────────
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene1.gltf");

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.62 : 0.75}
      position={isMobile ? [0, -2.8, -1.5] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

// ── Canvas ────────────────────────────────────────────────────────────────────
const ComputersCanvas = () => {
  const [profile, setProfile]               = useState(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // WebGL support check
    try {
      const c  = document.createElement("canvas");
      const gl =
        c.getContext("webgl2") ||
        c.getContext("webgl")  ||
        c.getContext("experimental-webgl");
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }

    setProfile(getDeviceProfile());

    const mq      = window.matchMedia("(max-width: 768px)");
    const handler = (e) =>
      setProfile((prev) => ({ ...prev, isMobile: e.matches }));
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!profile)       return null;
  if (!webglSupported) return null;

  const { isMobile, isLowEnd } = profile;

  return (
    <Canvas
      frameloop={isLowEnd ? "demand" : "always"}
      shadows={false}
      dpr={isLowEnd ? [1, 1] : [1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        antialias:                    !isLowEnd,
        powerPreference:              "high-performance",
        precision:                    isLowEnd ? "mediump" : "highp",
        preserveDrawingBuffer:        false,
        failIfMajorPerformanceCaveat: false,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={isMobile ? 1.0 : 0.7} />

        {!isMobile && (
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow={false}
          />
        )}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isMobile}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.08}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;