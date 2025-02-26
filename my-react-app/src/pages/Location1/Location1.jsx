import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Location1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "비밀을 밝히기로 선택했군.",
    "하지만 보물을 찾기 위해선 먼저 과거의 기억을 되살려야 한다.",
    "\u00A0",
    "이곳, 정동교회.",
    "조선이 어둠 속을 걷고 있을 때, 이곳에서는 새로운 희망이 싹텄다.",
    "\u00A0",
    "나는 이곳에서 동지들을 만났다.",
    "신념을 나누고, 독립을 위해 결의를 다졌다.",
    "하지만 우리의 흔적은 쉽게 드러나지 않는다.",
    "\u00A0",
    "첫 번째 단서가 여기에 있다.",
    "우리의 이야기를 찾아라.",
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

                <div className={styles.title}>챕터 1</div>

                <div className={styles.textContainer}>
                    {messages.slice(0, visibleCount).map((text, index) => (
                        <div key={index} className={styles.textItem}>{text}</div>
                    ))}
                </div>

                {visibleCount === messages.length && (
                    <div className={styles.btnBox}>
                        <button onClick={() => navigate("./page1")}>
                            단서 찾기&nbsp;&nbsp;
                            <FaArrowRight className={styles.icon} size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Location1;
