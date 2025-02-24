import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const Location1Page1 = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
        script.async = true;
        document.body.appendChild(script);

        const arScript = document.createElement("script");
        arScript.src = "https://cdn.rawgit.com/jeromeetienne/ar.js/1.7.2/aframe/build/aframe-ar.min.js";
        arScript.async = true;
        document.body.appendChild(arScript);
    }, []);

    return (
        <div className={styles.cameraConainer}>
            <a-scene embedded arjs>
                {/* AR 마커가 감지되면 보이는 오브젝트 */}
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: red;"></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default Location1Page1;
