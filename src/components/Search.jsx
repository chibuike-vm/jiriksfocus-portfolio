import styled from "styled-components";
import { useGlobalContext } from "./context";

const Wrapper = styled.section`
    width: 100%;
    margin: 5rem auto 3rem auto;

    form {
        width: 100%;
    }

    input[type="text"] {
        width: 70%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 0.3rem 0.5rem;
    }

    input[type="submit"] {
        width: 30%;
        background-color: #1f2937;
        color: #f9fafb;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 0.3rem 0.5rem;
    }

    div {
        width: 100%;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 0 0 0.2rem white;
    }

    h2 {
        margin: 2rem 0;
        text-transform: capitalize;
        font-size: 1.2rem;
    }

    h2,
    h3 {
        text-align: center;
    }

    h3 {
        font-weight: 600;
        font-size: 1.05rem;
    }

    @media only screen and (width >= 768px) {
        div {
            width: 80%;
        }
    }
`;

const Search = () => {
    const { handleSubmit } = useGlobalContext();

    return (
        <Wrapper id="gallery">
            <h2>gallery</h2>
            <form onSubmit={handleSubmit}>
                <h3>
                    You want to explore my photos gallery? Kindly use the search
                    box.
                </h3>
                <div>
                    <input type="text" name="search" placeholder="wedding" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </Wrapper>
    );
};
export default Search;
