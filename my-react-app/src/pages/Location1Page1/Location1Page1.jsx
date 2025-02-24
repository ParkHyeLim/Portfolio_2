import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1Page1.module.scss";

const Location1Page1 = () => {
    const navigate = useNavigate();
    const sceneRef = useRef(null);

    useEffect(() => {
        // A-Frame & AR.js 로드
        const script = document.createElement("script");
        script.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
        script.async = true;
        document.body.appendChild(script);

        const arScript = document.createElement("script");
        arScript.src = "https://cdn.rawgit.com/jeromeetienne/ar.js/1.7.2/aframe/build/aframe-ar.min.js";
        arScript.async = true;
        document.body.appendChild(arScript);
    }, []);

    // 📸 **사진 촬영 후 이동하는 함수**
    const capturePhoto = () => {
        const scene = sceneRef.current;
        if (!scene) return;

        const canvas = scene.canvas;
        if (!canvas) return;

        const imageData = canvas.toDataURL("image/png"); // 이미지 데이터 생성
        console.log("Captured Image:", imageData); // 확인용 콘솔 출력

        // 페이지 이동
        navigate("/location1/page2");
    };

    return (
        <div className={styles.cameraContainer}>
            {/* AR 카메라 */}
            <a-scene embedded arjs ref={sceneRef}>
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: red;"></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>

            {/* 📸 촬영 버튼 */}
            <button className={styles.captureButton} onClick={capturePhoto}>
                📷 사진 촬영
            </button>
        </div>
    );
};

export default Location1Page1;