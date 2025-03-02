import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2Page2.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';

const messages = [
    "훌륭하다. 올바른 선택을 했군.",
    "\u00A0",
    "우리는 단순히 목소리를 낸 것이 아니다.",
    "우리는 행동했고, 변화를 만들어냈다.",
    "\u00A0",
    "하지만 아직 끝이 아니다.",
    "마지막 장소로 가라.",
    "그곳에서, 우리의 모든 뜻을 알게 될 것이다."
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
                            배재 학당으로
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location2Page2;
