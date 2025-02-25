import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3Page2.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "훌륭하다.",
    "우리가 목숨을 걸고 지켜낸 것은, 단순한 나라가 아니었다.",
    "\u00A0",
    "그것은 바로 신념과 기억이었다.",
    "\u00A0",
    "대한광복회는 역사의 뒤편으로 사라졌지만,",
    "우리의 뜻은 영원히 남아야 한다.",
    "\u00A0",
    "이제 네가 이 이야기를 기억하고, 전할 차례다.",
    "과거를 잊지 않는다면, 그것이 바로 우리의 승리다."
];


const Location3Page2 = () => {
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
                        <button onClick={() => navigate("../")}>
                            끝
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location3Page2;
