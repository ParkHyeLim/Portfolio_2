import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2Page2.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "암호를 정확히 풀어냈군.",
    "우리는 이렇게 철저하게 움직여야만 했다.",
    "\u00A0",
    "우리의 마지막 계획이 서 있던 곳으로 가야 한다.",
    "덕수궁 돌담길.",
    "\u00A0",
    "우리의 마지막 단서가 그곳에 있다.",
    "그것을 풀어내면",
    "네가 찾던 보물을 얻게 될 것이다."
];

const Location2Page2 = () => {
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
                        <button onClick={() => navigate("../location3")}>
                            덕수궁 돌담길로
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location2Page2;
