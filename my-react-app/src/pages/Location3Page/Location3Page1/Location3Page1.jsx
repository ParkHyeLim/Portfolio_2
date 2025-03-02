import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3Page1.module.scss";
import backgroundImg from '../../../assets/image/backgroundImage.jpg';
import BackButton from "../../../components/BackButton/BackButton";
import HintButton from "../../../components/HintButton/HintButton";

// 힌트 설정 (배재학당 출신들이 만든 단체를 유추할 수 있도록)
const hint = "개화와 독립을 위해 행동한\u000A사람들의 모임";

const Location3Page1 = () => {
    const navigate = useNavigate();
    const correct = "독립협회"; // 정답을 '독립협회'로 설정
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(true);

    // 정답 확인 및 이동 함수
    const handleNavigater = () => {
        if (correct === answer) navigate("../location3/page2");
        else setIsCorrect(false); // 오답일 경우 오류 메시지 출력
    };

    return (
        <div className={styles.PageContainer}>
            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <BackButton />
                <HintButton text={hint} />

                <div className={styles.title}>챕터 3</div>

                <div className={styles.textBox}>
                    {/* 문제 출제: 배재학당과 관련된 단체명을 맞히는 퀴즈 */}
                    <div className={styles.text}>
                        우리는 조선의 미래를 고민하며 행동에 나섰다.<br />
                        우리가 만든 단체의 이름은?
                    </div>

                    {/* 정답 입력 필드 */}
                    <input
                        placeholder="단체명을 입력하세요.(4글자)"
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>

                <div className={styles.btnBox}>
                    {/* 오답 시 경고 메시지 출력 */}
                    {!isCorrect && <div className={styles.checkText}>다시 한번 생각해 보자</div>}
                    <button onClick={handleNavigater}>
                        정답은?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Location3Page1;
