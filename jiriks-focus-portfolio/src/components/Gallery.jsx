/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import axios from "axios";
import styled from "styled-components";

const LoadingWrapper = styled.section`
    .loader {
        width: 150px;
        height: max-content;
        background-image: linear-gradient(to right, #d97706, #78350f);
        border-radius: 10px;
        margin: 4rem auto;
        box-shadow: 0 0 0.35rem;
    }

    .loader p {
        background-image: linear-gradient(to right, #fcd34d, #fffbeb);
        width: 45px;
        text-align: center;
        border-radius: 10px;
        margin: 0;
        padding: 0;
        box-shadow: 0 0 0.15rem;
    }

    .loader p {
        animation: 1s move infinite 1s alternate;
    }

    @keyframes move {
        from {
            transform: translateX(0px);
        }

        to {
            transform: translateX(105px);
        }
    }
`;

const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;

    div {
        width: 90%;
        margin: 0 auto;
        padding: 0.3rem;
        border-radius: 2px;
        box-shadow: 0 0 0.4rem;
        margin-bottom: 1.5rem;
    }

    img {
        width: 100%;
        display: block;
    }

    h2 {
        margin: 2rem 0;
        text-align: center;
        font-size: 1.2rem;
        grid-column: span 3;
    }

    span {
        color: #f87171;
        font-size: 1.35rem;
    }

    h3 {
        text-align: center;
    }

    @media only screen and (width >= 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-evenly;
        grid-gap: 2rem;

        div {
            width: 100%;
            margin-bottom: 0;
        }
    }

    @media only screen and (width >= 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Gallery = () => {
    const { searchValue } = useGlobalContext();

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["search", `${searchValue === "" ? "wedding" : searchValue}`],
        queryFn: async () => {
            const response = await axios(
                `https://jiriks-shotz.onrender.com/search-photos/${searchValue}`
            );
            return response.data.results;
        },
    });

    if (isLoading) {
        return (
            <LoadingWrapper>
                <article className="loader">
                    <div>
                        <p>wait</p>
                    </div>
                </article>
            </LoadingWrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <h2>
                    <span>Error: </span>
                    {error.message}
                </h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {data.length < 1 ? (
                <h3>No results found</h3>
            ) : (
                data.map((eachData) => {
                    const { alt_description, urls, id } = eachData;
                    const { regular } = urls;

                    return (
                        <div key={id}>
                            <img
                                src={regular}
                                alt={alt_description}
                                height="300"
                                width="400"
                            />
                        </div>
                    );
                })
            )}
        </Wrapper>
    );
};
export default Gallery;
