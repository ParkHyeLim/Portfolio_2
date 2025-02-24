import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1Page1.module.scss";
import backgroundImg from '../../assets/image/backgroundImage.jpg';

const messages = [
    "비밀을 밝히기로 선택했군.",
    "하지만 보물을 찾기 위해선 먼저 과거의 기억을 되살려야 한다.",
    "\u00A0",
    "이곳, 배재학당.",
    "조선에 근대 교육의 바람이 불던 시절, 나는 이곳에서 새로운 희망을 보았다.",
    "\u00A0",
    "자, 첫 번째 단서가 여기에 있다.",
    "과거를 이해하려면, 먼저 이곳에서 찾을 것이 있다.",
];

const Location1Page1 = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
        script.async = true;
        document.body.appendChild(script);

        const arScript = document.createElement("script");
        arScript.src = "https://cdn.rawgit.com/jeromeetienne/ar.js/1.7.2/aframe/build/aframe-ar.min.js";
        arScript.async = true;
        document.body.appendChild(arScript);
    }, []);

    return (
        <div>
            <a-scene embedded arjs>
                {/* AR 마커가 감지되면 보이는 오브젝트 */}
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: red;"></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default Location1Page1;
