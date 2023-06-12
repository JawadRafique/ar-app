import React, { useState } from "react";
import PlaceObject from "./PlaceObject";

function ARApp() {
    const [placedObject, setPlacedObject] = useState([]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {placedObject &&
                placedObject.map((item) => (
                    <mesh
                        key={item.id}
                        position={item.position}
                        rotation={item.rotation}
                    >
                        <boxGeometry args={[0.25, 0.25, 0.25]} />
                        <meshStandardMaterial color={item?.color || "green"} />
                    </mesh>
                ))}
            <PlaceObject
                setPlacedObject={setPlacedObject}
                placedObject={placedObject}
            />
        </>
    );
}

export default ARApp;
