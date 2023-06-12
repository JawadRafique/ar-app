import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import ARApp from "./ARapp";
import { Physics } from "@react-three/cannon";

function Wrapper() {
    return (
        <>
            <ARButton
                sessionInit={{
                    requiredFeatures: ["hit-test"],
                }}
            />
            <Canvas>
                <XR>
                    <Physics>
                        <ARApp />
                    </Physics>
                </XR>
            </Canvas>
        </>
    );
}

export default Wrapper;
