import styled from "styled-components";
import { footer } from "../sites-data/data";

const Wrapper = styled.section`
    margin-top: 1.5rem;

    .footer-links-container {
        display: grid;
        grid-template-columns: repeat(4, min-content);
        grid-column-gap: 1.5rem;
        justify-content: center;
        padding: 1.5rem;
    }

    .footer-links {
        font-size: 1.3rem;
    }

    .footer-links,
    h3 {
        color: #f0fdfa;
    }

    h3 {
        text-align: center;
        padding-bottom: 1.3rem;
        margin: 0;
        font-size: 1rem;
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
