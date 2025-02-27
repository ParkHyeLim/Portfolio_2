import React, { useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "./Location3Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const Location3Page1 = () => {
    const navigate = useNavigate();
    const correct = "국민";
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(true);

    const handleNavigater = () => {
        if (correct === answer) navigate("../location3/page2");
        else setIsCorrect(false)
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <div className={styles.textBox}>
                    <div className={styles.title}>챕터 3</div>

                    <div className={styles.text}>
                        대한광복회의 구호:<br />
                        대한의 독립과 자유는 (____)에게 있다
                    </div>

                    <input placeholder="2글자 입력하세요" onChange={(e) => setAnswer(e.target.value)} />
                </div>

                <div className={styles.btnBox}>
                    {!isCorrect && <div className={styles.checkText}>다시 한번 생각해 보자</div>}
                    <button onClick={handleNavigater}>
                        정답은?
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Location3Page1;
