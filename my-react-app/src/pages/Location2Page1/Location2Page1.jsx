import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const quiz = {
    question: "독립운동가들은 적에게 들키지 않기 위해\u000A다양한 암호를 사용했다.\u000A다음 중 실제 사용된 암호는 무엇일까?",
    answer: [
        "① 대한독립만세",
        "② 해 뜨기 전이 가장 어둡다",
        "③ 광복을 향해 빛을 던지다",
        "④ 적의 눈을 속이고 뜻을 지키다",
    ],
    correct: 2,
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
