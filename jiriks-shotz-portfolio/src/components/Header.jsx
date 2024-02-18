import styled from "styled-components";
import { links } from "../sites-data/data";
import { useGlobalContext } from "./context";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Wrapper = styled.section`
    padding: 0.8rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20;
    box-shadow: 0 0 0.4rem;
    background-color: #0f766e;

    .header-container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, min-content);
        justify-content: space-between;
    }

    h1 {
        margin: 0;
        letter-spacing: 0.2rem;
        font-size: 1.3rem;
        color: #f0fdfa;
    }

    h2 {
        font-size: 1.2rem;
        margin: 0;
        text-transform: capitalize;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .nav-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        position: fixed;
        z-index: 10;
        background-color: #99f6e4;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        padding: 1rem;
    }

    .links-container {
        display: grid;
        grid-template-columns: repeat(2, min-content);
        grid-column-gap: 1rem;
        padding-bottom: 1rem;
    }

    .close-button {
        justify-self: end;
        margin-bottom: 1rem;
    }

    .mode-container {
        justify-self: center;
        margin-top: 1rem;
        font-size: 1.1rem;
        border-radius: 0.6rem;
        cursor: pointer;
    }

    .hide-navbar {
        display: none;
    }

    span {
        color: #fed7aa;
    }

    @media only screen and (width >= 768px) {
        position: static;
        z-index: 0;
        display: grid;
        grid-template-columns: 1fr 2fr;
        box-shadow: 0 0 0;

        .icon,
        .close-button,
        .menu-button {
            display: none;
        }

        .nav-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: static;
            z-index: 0;
            background-color: transparent;
            justify-items: end;
            align-items: center;
            grid-column-gap: 0.5rem;
        }

        .header-container {
            width: 100%;
        }

        .mode-container {
            justify-self: center;
            margin-top: 0;
            margin-left: auto;
        }

        .links-container {
            padding-bottom: 0;
        }

        h1 {
            align-self: center;
            padding-left: 0.9rem;
        }

        a {
            grid-column: 1 / -1;
        }
    }
`;

const Header = () => {
    const { isNavbarOpen, setIsNavbarOpen, mode, handleMode } =
        useGlobalContext();

    return (
        <Wrapper id="home">
            <article className="header-container">
                <h1>
                    Jiriks<span>Focus</span>
                </h1>
                <button
                    type="button"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className="menu-button"
                >
                    <IoMdMenu />
                </button>
            </article>

            <nav
                className={`nav-container ${isNavbarOpen ? "" : "hide-navbar"}`}
            >
                <button
                    type="button"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className="close-button"
                >
                    <IoMdClose />
                </button>

                {links.map((eachLink) => {
                    const { id, text, href, icon } = eachLink;

                    return (
                        <div key={id} className="links-container">
                            <button type="button" className="icon">
                                {icon}
                            </button>
                            <a
                                href={href}
                                alt={text}
                                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                            >
                                <h2>{text}</h2>
                            </a>
                        </div>
                    );
                })}

                <button
                    type="button"
                    onClick={handleMode}
                    className="mode-container"
                >
                    {mode ? <MdDarkMode /> : <MdLightMode />}
                </button>
            </nav>
        </Wrapper>
    );
};
export default Header;
