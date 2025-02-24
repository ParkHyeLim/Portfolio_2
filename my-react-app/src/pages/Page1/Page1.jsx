import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const Page1 = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const handleNavigater = () => {
        if (code === "") setMessage("입장 코드를 입력해주세요");
        else if (code === "1234") navigate("/page2");
        else {console.log("다시"); setMessage("올바른 입장 코드가 아닙니다. 다시 입력해주세요");}
    }

    return (
        <div className={styles.Page1Container}>

            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />

                <div className={styles.userBox}>
                    <div className={styles.messageText}>{message}</div>
                    <input placeholder="입장 코드를 입력해주세요" onChange={(e) => setCode(e.target.value)} />
                    <button onClick={handleNavigater}>게임 시작</button>
                </div>
            </div>

        </div>
    );
};

export default Page1;
