import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1Page2.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';

const messages = [
    "잘 찾았군.",
    "하지만 여기서 끝이 아니다.",
    "\u00A0",
    "우리는 단순히 신앙을 위해 모인 것이 아니었다.",
    "이곳에서 함께 꿈꾼 것은 조선의 독립이었다.",
    "\u00A0",
    "다음 장소는 구 러시아 공사관.",
    "우리 단체의 중요한 암호가 그곳에 남아 있다.",
    "\u00A0",
    "그 암호를 풀어야만,",
    "진정한 길을 찾을 수 있을 것이다.",
];

const Location1Page2 = () => {
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

                <div className={styles.title}>챕터 1</div>

                <div className={styles.textContainer}>
                    {messages.slice(0, visibleCount).map((text, index) => (
                        <div key={index} className={styles.textItem}>{text}</div>
                    ))}
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("../location2")}>
                            구 러시아 공사관으로
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location1Page2;
