import styled from "styled-components";
import aboutImg from "../assets/images/profile.svg";

const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;

    div {
        padding: 1rem;
        border-radius: 2px;
        box-shadow: 0 0 0.08rem;
        background-color: #99f6e4;
    }

    h2 {
        margin: 2rem 0;
        text-align: center;
        text-transform: capitalize;
    }

    @media only screen and (width > 768px) {
        div {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-column-gap: 1.2rem;
        }

        img {
            align-self: center;
        }
    }
`;

const About = () => {
    return (
        <Wrapper id="about">
            <h2>About Ihejirika</h2>
            <div className="about-container">
                <img
                    src={aboutImg}
                    alt="About Photo"
                    width="400"
                    height="300"
                    className="svg-images"
                />
                <p>
                    Welcome to Ihejirika&apos;s world of photography. Hailing
                    from the vibrant landscapes of Africa, Ihejirika is a
                    seasoned photographer with a passion for capturing the
                    essence of life through his lens. With over 5 years of
                    experience and a determined spirit, he has ventured far and
                    wide, weaving his unique vision into every frame.
                    Ihejirika&apos;s work transcends borders, as he has
                    collaborated with renowned brands and elites across the
                    globe. From the bustling streets of urban metropolises to
                    the serene beauty of natural landscapes, his photography
                    encapsulates the rich tapestry of human experiences. Driven
                    by his unwavering passion for the craft, Ihejirika
                    approaches each project with dedication and creativity,
                    aiming to evoke emotions and tell compelling stories through
                    his images. With a keen eye for detail and a commitment to
                    excellence, he strives to capture the beauty and essence of
                    every moment. Join Ihejirika on his photographic journey as
                    he continues to explore the world through his lens, seeking
                    out new perspectives and capturing the magic of life one
                    frame at a time.
                </p>
            </div>
        </Wrapper>
    );
};
export default About;
