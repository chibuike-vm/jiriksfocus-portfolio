import styled from "styled-components";
import { links } from "../sites-data/data";
import { useGlobalContext } from "./context";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Wrapper = styled.section`
    padding: 0.6rem 0.5rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20;
    box-shadow: 0 0 0.4rem;
    background-image: linear-gradient(to right, #d97706, #78350f);

    .header-container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, min-content);
        justify-content: space-between;
    }

    h1 {
        margin: 0;
        letter-spacing: 0.05rem;
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
        color: #451a03;
    }

    .nav-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        position: fixed;
        z-index: 10;
        background-image: linear-gradient(to right, #fcd34d, #fffbeb);
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        padding: 0.5rem;
    }

    .links-container {
        display: grid;
        grid-template-columns: repeat(2, min-content);
        grid-column-gap: 1rem;
        padding-bottom: 1rem;
        align-items: center;
    }

    .close-button {
        justify-self: end;
        margin-bottom: 1rem;
        color: #451a03;
        font-size: 1.5rem;
    }

    .mode-button {
        justify-self: center;
        margin-top: 1rem;
        font-size: 1.5rem;
        border-radius: 0.6rem;
        cursor: pointer;
        color: #451a03;
    }

    .hide-navbar {
        display: none;
    }

    .menu-button {
        font-size: 1.5rem;
        color: #e5e7eb;
    }

    .icon {
        font-size: 1.3rem;
        color: black;
    }

    @media only screen and (width >= 768px) {
        position: static;
        z-index: 0;
        display: grid;
        grid-template-columns: 1fr 2fr;
        box-shadow: 0 0 0;
        background-image: none;
        padding: 0 0;

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
            background-image: none;
        }

        .header-container {
            width: 100%;
        }

        .mode-button {
            justify-self: center;
            margin-top: 0;
            margin-left: auto;
            color: #fffbeb;
        }

        .links-container {
            padding-bottom: 0;
        }

        h1 {
            align-self: center;
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
                <h1>JiriksFocus</h1>
                <IoMdMenu
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className="menu-button"
                />
            </article>

            <nav
                className={`nav-container ${isNavbarOpen ? "" : "hide-navbar"}`}
            >
                <IoMdClose
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className="close-button"
                />

                {links.map((eachLink) => {
                    const { id, text, href, icon } = eachLink;

                    return (
                        <div key={id} className="links-container">
                            {icon}

                            <a
                                href={href}
                                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                            >
                                <h2>{text}</h2>
                            </a>
                        </div>
                    );
                })}

                {mode ? (
                    <MdDarkMode onClick={handleMode} className="mode-button" />
                ) : (
                    <MdLightMode onClick={handleMode} className="mode-button" />
                )}
            </nav>
        </Wrapper>
    );
};
export default Header;
