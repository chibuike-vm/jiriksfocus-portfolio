import styled from "styled-components";
import { footer } from "../sites-data/data";

const Wrapper = styled.section`
    margin-top: 0.5rem;

    .footer-links-container {
        display: grid;
        grid-template-columns: repeat(4, min-content);
        grid-column-gap: 1.5rem;
        padding: 1.2rem 0;
    }

    h1,
    h2,
    button {
        font-size: 1rem;
        color: #f0fdfa;
        margin: 0.5rem 0;
    }

    h1 {
        text-transform: uppercase;
    }

    button {
        background-color: #fcd34d;
        padding: 4px 8px;
        border-radius: 4px;
        border-color: white;
        margin: 0;
    }

    button a {
        color: black;
    }

    .footer-links {
        font-size: 1.3rem;
    }

    .footer-links,
    h3 {
        color: #f0fdfa;
    }

    h3 {
        padding-bottom: 0.5rem;
        margin: 0;
        font-size: 0.9rem;
    }

    span {
        margin: 0;
        letter-spacing: 0.05rem;
        color: #f0fdfa;
    }

    a {
        text-decoration: none;
        color: #f0fdfa;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <div className="contact">
                <h1>contact</h1>
                <h2>+2347*********</h2>
                <button type="button" className="btn">
                    <a href="mailto:test@email.com">Send me an email</a>
                </button>
            </div>
            <div className="footer-links-container">
                {footer.map((eachFooterData) => {
                    const { id, social, href } = eachFooterData;
                    return (
                        <div key={id} className="footer-links">
                            <a href={href}>{social}</a>
                        </div>
                    );
                })}
            </div>
            <h3>
                &copy; 2024 <span>JiriksFocus,</span> All Rights Reserved.
            </h3>
        </Wrapper>
    );
};
export default Footer;
