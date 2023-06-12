import { Interactive, useHitTest } from "@react-three/xr";
import React, { useRef } from "react";

const PlaceObject = ({ placedObject, setPlacedObject }) => {
    const reticleRef = useRef();

    useHitTest((hitMatrix, hit) => {
        // console.log("hit", hit);
        hitMatrix.decompose(
            reticleRef.current.position,
            reticleRef.current.quaternion,
            reticleRef.current.scale
        );

        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    });

    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let rotation = e.intersection.object.rotation.clone();
        let id = Date.now();
        const alreadyPositioned = placedObject.filter(
            (item) =>
                item.position.x === position.x &&
                item.position.y === position.y &&
                item.position.z === position.z
        );

        if (alreadyPositioned.length !== 0) {
            const updatedObject = placedObject.map((item) => {
                if (item.id === alreadyPositioned[0]?.id) {
                    return { ...item, color: "purple" };
                }
                return item;
            });
            setPlacedObject(updatedObject);
        } else {
            setPlacedObject([
                ...placedObject,
                { position, rotation, id, color: "green" },
            ]);
        }
    };

    return (
        <Interactive onSelect={placeCube}>
            <mesh ref={reticleRef} rotation-x={-Math.PI / 2} dispose={null}>
                <ringGeometry args={[0.1, 0.25, 32]} />
                <meshStandardMaterial color={"white"} />
            </mesh>
            {/* Invisible collision box */}
        </Interactive>
    );
};

export default PlaceObject;
