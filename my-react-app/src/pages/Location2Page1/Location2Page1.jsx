import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';
import BackButton from "../../components/BackButton/BackButton";
import HintButton from "../../components/HintButton/HintButton";

const hint = "나라의 운명이 흔들리던 시기, 누군가는 안전한 곳에서 새로운 변화를 꿈꾸었다.";

const quiz = {
    question: "1896년,\u000A조선의 한 정치인이 이곳으로 몸을 피했다.\u000A그가 이곳에서 추진한 개혁의 핵심 가치는 무엇이었을까?",
    answer: [
        "① 나라를 외국에 넘기는 것",
        "② 국민의 자유와 권리 확대",
        "③ 왕권 강화를 위한 법 정비",
        "④ 신분제를 강화하는 정책",
    ],
    correct: 2,  // 국민의 자유와 권리 확대
};

const Location2Page1 = () => {
    const navigate = useNavigate();
    const [selectAnswer, setSelectAnswer] = useState(0);
    const [isCorrect, setIsCorrect] = useState(true);

    const handleAnswerClick = (num) => {
        setSelectAnswer(num)
    }

    const handleNavigater = () => {
        if (quiz.correct === selectAnswer) navigate("../location2/page2");
        else setIsCorrect(false)
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <BackButton />
                <HintButton text={hint} />
                
                <p className={styles.title}>챕터 2</p>

                <div className={styles.quizBox}>
                    <div className={styles.question}>{quiz.question}</div>

                    {quiz.answer.map((value, index) => (
                        <div className={index + 1 === selectAnswer ? styles.selectAnswer : styles.answer}
                            key={index} onClick={() => handleAnswerClick(index + 1)}>
                            {value}
                        </div>
                    ))}
                </div>

                <div className={styles.btnBox}>
                    {!isCorrect && <div className={styles.checkText}>다시 한번 더 골라보자</div>}
                    <button onClick={handleNavigater}>
                        정답은?
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Location2Page1;
