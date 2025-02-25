import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "./Location1Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const Location1Page1 = () => {
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
                    <div className={styles.title}>챕터 1</div>

                    <div className={styles.text}>서울 정동 어딘가에, 우리가 남긴 메시지가 있다. 그것을 찾아야 한다.</div>

                    {/* 카메라 화면 */}
                    <>
                        <Webcam
                            ref={webcamRef}
                            screenshotFormat="image/png"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                margin: "4vh 0 0 0",
                                width: "calc(50vh * 3 / 4)",
                                height: "50vh",
                                maxHeight: "90vh",
                                objectFit: "cover",
                                aspectRatio: "3 / 4",
                            }}
                        />
                    </>

                    {/* 📸 촬영 버튼 */}
                    <button className={styles.captureButton} onClick={capturePhoto}>
                        사진 촬영
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Location1Page1;
