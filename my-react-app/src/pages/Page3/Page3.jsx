import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page3.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "이 글을 보고 있다면, 너는 선택받은 자다.",
    "정동길 어딘가에 숨겨진 귀중한 보물…",
    "그것을 찾을 자격이 있는지 시험해보도록 하지.",
    "\u00A0",
    "하지만 조심해라.",
    "보물은 쉽게 모습을 드러내지 않는다.",
    "암호를 풀어야만, 진정한 길이 보일 것이다.",
    "\u00A0",
    "이제 선택해라.",
    "이 메모를 덮고 평범한 일상으로 돌아갈 것인가?",
    "아니면, 숨겨진 비밀을 밝혀낼 것인가?"
];

const Page3 = () => {
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
                    <p className={styles.title}>Intro</p>

                    <div className={styles.textContainer}>
                        {messages.slice(0, visibleCount).map((text, index) => (
                            <div key={index} className={styles.textItem}>{text}</div>
                        ))}
                    </div>

                    {visibleCount === messages.length && (
                        <div className={styles.btnBox}>
                            <button onClick={() => navigate("../")}>
                                일상으로 돌아가기
                            </button>
                            <button onClick={() => navigate("../location1")}>
                                숨겨진 비밀을 밝히기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page3;
