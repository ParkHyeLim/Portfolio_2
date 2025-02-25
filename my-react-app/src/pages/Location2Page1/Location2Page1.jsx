import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "./Location2Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const Location2Page2 = () => {
    const navigate = useNavigate();
    const webcamRef = useRef(null);

    // 📸 사진 촬영 함수
    const capturePhoto = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot(); // 사진 캡처
            console.log("Captured Image:", imageSrc); // 캡처된 이미지 확인

            // 📌 페이지 이동
            navigate("/location1/page2");
        }
    }, [navigate]);

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <div className={styles.textBox}>
                    <p className={styles.title}>챕터 1</p>

                    <div className={styles.text}>배재학당의 모습을 촬영해보자!</div>
                </div>

                {/* 카메라 화면 */}
                <Webcam
                    className={styles.webcam}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={{
                        width: 720,
                        height: 1280,
                        facingMode: "environment"
                    }}
                />

                {/* 📸 촬영 버튼 */}
                <button className={styles.captureButton} onClick={capturePhoto}>
                    사진 촬영
                </button>
            </div>
        </div>
    );
};

export default Location2Page2;
