import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "이곳이 마지막 장소다.",
    "우리 동지들은 이 길을 걸으며 수많은 결정을 내렸다.",
    "때로는 조심스럽게, 때로는 단호하게.",
    "\u00A0",
    "이제 마지막 관문이다.",
    "우리의 신념을 되새겨라.",
    "\u00A0",
    "우리의 구호를 완성하면,",
    "네가 찾던 보물을 얻게 될 것이다."
];

const Location3 = () => {
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
                    <p className={styles.title}>챕터 3</p>

                    <div className={styles.textContainer}>
                        {messages.slice(0, visibleCount).map((text, index) => (
                            <div key={index} className={styles.textItem}>{text}</div>
                        ))}
                    </div>
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("./page1")}>
                            구호 완성하기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location3;
