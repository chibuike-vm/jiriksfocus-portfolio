/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import heroImg from "../assets/images/photo_session.svg";
import { descriptiveText } from "../sites-data/data";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 90%;
    margin: 2rem auto;
    margin-top: 4.5rem;

    div {
        padding: 1rem;
    }

    .cursor {
        display: inline-block;
        width: 2px;
        height: 30px;
        background-color: #042f2e;
        animation: blink-animation 1s infinite step-start;
        transform: translateY(25%);
    }

    @keyframes blink-animation {
        50% {
            opacity: 0;
        }
    }

    p {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        line-height: 2;
        text-align: center;
    }

    @media only screen and (width >= 768px) {
        margin-top: 2rem;
    }
`;

const Hero = () => {
    const [text, setText] = useState("");
    const [textCounter, setTextCounter] = useState(1);

    useEffect(() => {
        if (text.length < descriptiveText.length) {
            const intervalId = setInterval(() => {
                setText(descriptiveText.slice(0, textCounter));
                setTextCounter(textCounter + 1);
            }, 150);

            return () => clearInterval(intervalId);
        } else {
            setTimeout(() => {
                setText("I am Ihejirika, ");
                setTextCounter(15);
            }, 3000);
        }
    }, [text]);

    return (
        <Wrapper>
            <div>
                <p>
                    {text}
                    <span className="cursor"></span>
                </p>
            </div>

            <div>
                <img
                    src={heroImg}
                    alt={"Photo Session Image"}
                    height={300}
                    width={400}
                    className="svg-images"
                />
            </div>
        </Wrapper>
    );
};

export default Hero;
