import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';

const messages = [
    "이곳은 우리가 배우고, 성장하며, 독립을 꿈꾼 곳.",
    "배재학당에서 우리는 서로를 다독이며",
    "새로운 미래를 계획했다.",
    "\u00A0",
    "그러나 이 길이 쉽지 않음을 알았다.",
    "우리에게 필요한 것은 단순한 희망이 아니라,",
    "실천이었다.",
    "\u00A0",
    "마지막 질문이다.",
    "우리는 누구인가?",
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

                <div className={styles.title}>챕터 3</div>

                <div className={styles.textContainer}>
                    {messages.slice(0, visibleCount).map((text, index) => (
                        <div key={index} className={styles.textItem}>{text}</div>
                    ))}
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("./page1")}>
                            마지막 질문에 답하기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location3;
