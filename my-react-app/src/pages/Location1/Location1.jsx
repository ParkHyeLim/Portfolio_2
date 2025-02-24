import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "비밀을 밝히기로 선택했군.",
    "하지만 보물을 찾기 위해선 먼저 과거의 기억을 되살려야 한다.",
    "\u00A0",
    "이곳, 배재학당.",
    "조선에 근대 교육의 바람이 불던 시절, 나는 이곳에서 새로운 희망을 보았다.",
    "\u00A0",
    "자, 첫 번째 단서가 여기에 있다.",
    "과거를 이해하려면, 먼저 이곳에서 찾을 것이 있다.",
];

const Location1 = () => {
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
                    <p className={styles.title}>챕터 1</p>

                    <div className={styles.textContainer}>
                        {messages.slice(0, visibleCount).map((text, index) => (
                            <div key={index} className={styles.textItem}>{text}</div>
                        ))}
                    </div>

                    {visibleCount === messages.length && (
                        <div className={styles.btnBox}>
                            <button onClick={() => navigate("./page1")}>
                                찾아야 하는 물건은?
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Location1;
