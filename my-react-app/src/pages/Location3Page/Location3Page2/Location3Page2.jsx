import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3Page2.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';

const messages = [
    "드디어, 모든 조각이 맞춰졌다.",
    "\u00A0",
    "우리는 독립협회였다.",
    "서재필을 필두로, 우리는 조선의 미래를 꿈꾸었다.",
    "자유와 평등, 독립을 위해 싸웠다.",
    "\u00A0",
    "너는 이제 우리의 정신을 기억할 것이다.",
    "그것이 바로 네가 찾은 보물이다.",
    "이제, 그 뜻을 이어갈 준비가 되었는가?"
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

                <div className={styles.title}>챕터 3</div>

                <div className={styles.textContainer}>
                    {messages.slice(0, visibleCount).map((text, index) => (
                        <div key={index} className={styles.textItem}>{text}</div>
                    ))}
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("../")}>
                            뜻 이어가기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location3Page2;
