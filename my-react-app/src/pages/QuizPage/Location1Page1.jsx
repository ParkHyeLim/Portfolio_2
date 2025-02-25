import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const quiz = {
    question: "배재학당에서 교육받은 학생들이 배운 과목은?",
    answer: [
        "① 한학과 유교 경전",
        "② 서양 과학과 의학",
        "③ 무술과 병법",
        "④ 농업 기술",
    ],
    correct : 2,
};


const Location1Page1 = () => {
    const navigate = useNavigate();
    const [selectAnswer, setSelectAnswer] = useState(0);
    const [isCorrect, setIsCorrect] = useState(true);

    const handleAnswerClick = (num) => {
        setSelectAnswer(num)
    }

    const handleNavigater = () => {
        if (quiz.correct === selectAnswer) navigate("../location1/page2");
        else setIsCorrect(false)
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <div className={styles.textBox}>
                    <p className={styles.title}>챕터 1</p>

                    <div className={styles.quizBox}>
                        <div className={styles.question}>{quiz.question}</div>
                        {quiz.answer.map((value, index) => (
                            <div className={index + 1 === selectAnswer ? styles.selectAnswer : styles.answer}
                                key={index} onClick={() => handleAnswerClick(index + 1)}>
                                {value}
                            </div>
                        ))}
                    </div>
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

export default Location1Page1;
