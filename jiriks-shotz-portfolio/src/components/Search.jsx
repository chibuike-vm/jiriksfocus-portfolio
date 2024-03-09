import styled from "styled-components";
import { useGlobalContext } from "./context";

const Wrapper = styled.section`
    width: 90%;
    margin: 5rem auto 3rem auto;

    form {
        width: 100%;
    }

    input[type="text"] {
        width: 70%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding-left: 0.5rem;
    }

    input[type="submit"] {
        width: 30%;
        background-color: #1f2937;
        color: #f9fafb;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    div {
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 0 0 0.4rem;
    }

    h2 {
        margin: 2rem 0;
        text-transform: capitalize;
    }

    h2,
    h3 {
        text-align: center;
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
