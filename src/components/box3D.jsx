import { useGLTF } from "@react-three/drei";

export default function BoxGLB() {
    const { scene } = useGLTF("/src/models/box3D.glb");

    scene.position.set(0, 0.5, -2); 

    scene.rotation.y = Math.PI / 4.5;
    scene.rotation.x = Math.PI / 6;

    return <primitive object={scene} scale={7} />;
}
