import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestion } from "react-icons/fa6";
import styles from "./HintButton.module.scss";

const HintButton = ({ text }) => {
    const [messageBox, setMessageBox] = useState("");
    const [isMessageBox, setIsMessageBox] = useState(false);

    const handleMessage = () => {
        setIsMessageBox(!isMessageBox)
    }

    return (
        <div className={styles.hintContainer}>
            <div className={styles.hintBtn} onClick={handleMessage}>
                <FaQuestion size={"50%"} />
            </div>
            {isMessageBox && <div className={styles.hintBox}>{text}</div>}
        </div>
    )
}

export default HintButton;