import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';

const messages = [
    "조선이 위험에 처했을 때,",
    "황제는 이곳으로 몸을 피했다.",
    "\u00A0",
    "그렇기에 우리가 의지해야 할 것은 황제가 아니라,",
    "바로 우리 자신이었다.",
    "\u00A0",
    "이곳에서 우리는 조선의 미래를 논의했고",
    "새로운 시대를 준비하기 위해,",
    "우리는 행동해야 했다.",
    "\u00A0",
    "너도 서둘러 동참하라."
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

                <div className={styles.title}>챕터 2</div>

                <div className={styles.textContainer}>
                    {messages.slice(0, visibleCount).map((text, index) => (
                        <div key={index} className={styles.textItem}>{text}</div>
                    ))}
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("./page1")}>
                            동참하기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location2;
