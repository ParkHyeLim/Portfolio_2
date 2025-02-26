import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Location2.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "이곳에 도착했군.",
    "대한제국이 무너져갈 때,",
    "우리는 이곳을 주시했다.",
    "\u00A0",
    "누군가는 이곳을 피난처로 삼았고,",
    "누군가는 여기에 조선의 운명을 걸었다.",
    "\u00A0",
    "하지만 우리의 존재를 숨겨야 했기에,",
    "암호 없이 안으로 들어갈 수는 없었다.",
    "\u00A0",
    "이제 네가 그 암호를 풀 차례다."
];


const Location2 = () => {
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < messages.length) {
            const timer = setTimeout(() => {
                setVisibleCount(visibleCount + 1);
            }, 1000); // 0.8초 간격으로 한 줄씩 등장
            return () => clearTimeout(timer);
        }
    }, [visibleCount]);

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <div className={styles.textBox}>
                    <p className={styles.title}>챕터 2</p>

                    <div className={styles.textContainer}>
                        {messages.slice(0, visibleCount).map((text, index) => (
                            <div key={index} className={styles.textItem}>{text}</div>
                        ))}
                    </div>
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("./page1")}>
                            암호 풀기&nbsp;&nbsp;
                            <FaArrowRight className={styles.icon} size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location2;
