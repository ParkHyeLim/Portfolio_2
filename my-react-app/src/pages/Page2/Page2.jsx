import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Page2.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

// 메모를 발견한 자에게 전하는 글
// 나는 정동길 어딘가에 귀중한 보물을 숨겼다
// 보물을 찾기 위해서는 암호를 풀어야 한다

const Page2 = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
    const [timeCount, setTimeCount] = useState(3);

    const handleNavigater = () => {

        navigate("../page3");
    }

    useEffect(() => {
        if (timeCount === 0) return; // 0이면 종료

        const timer = setInterval(() => {
            setTimeCount((prev) => prev - 1);
        }, 1000); // 1초마다 감소

        return () => clearInterval(timer); // 컴포넌트 언마운트 시 정리
    }, [timeCount]);

    return (
        <div className={styles.Page1Container}>

            <div className={styles.contentsContainer}>
                <img className={styles.backgroundImage} src={backgroundImg} alt="backgroundImg" />
                <div className={styles.backgroundOverlay}></div>

                <div className={styles.textBox}>
                    <div className={styles.box1}>
                        <div className={styles.title}>게임 소개</div>
                        <div className={styles.text1}>개암 속 주인공이 되어<br />
                            정동에 숨겨진 보물을 찾아라!<br />
                            정동에서 펼쳐지는 야외 방탈출 게임</div>
                    </div>

                    <div className={styles.box2}>
                        <div className={styles.title}>주의 사항</div>
                        <div className={styles.text1}>1. 안전에 유의하여 게임을 진행해주세요.</div>
                        <p className={styles.text2}>게임 중 플레이어의 부주의로 인한 안전사고에 책임지지 않습니다.</p>
                        <div className={styles.text1}>2. 게임 속 장소의 상점들은 게임 진행과 관련이 없습니다.</div>
                        <p className={styles.text2}>소음 또는 진로 방해하지 않도록 유의해 주세요.</p>
                        <div className={styles.text1}>3. 게임 진행을 위해 충분한 배터리와 모바일 데이터가 필요합니다.</div>
                        <div className={styles.text1}>4. 게임 종료 후 타인에게 스포일러는 삼가해주세요.</div>
                        <div className={styles.text2}>코드, 게임키트 속 미션지, 챗봇 내용 등이 유출되지 않도록 유의해 주세요.<br />
                            게임 내용 스토리, 미션, 이미지 등을 유출하거나 무단 사용 시 당사자에게 법적 책임을 물 수 있습니다.</div>
                    </div>

                    <button onClick={handleNavigater} disabled={!(timeCount === 0)}>
                        {!(timeCount === 0) ?
                            timeCount
                            :
                            <div>
                                <div>숨겨진 보물 찾으러 가기</div>
                                <FaArrowRight className={styles.icon} size={!isMobile? "2vh" : "4vw"} />
                            </div>
                        }
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Page2;
