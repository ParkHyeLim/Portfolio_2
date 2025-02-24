import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  const navigate = useNavigate();

    return(
        <div className={styles.backBtn} onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack size={"100%"}/>
        </div>
    )
}

export default BackButton;