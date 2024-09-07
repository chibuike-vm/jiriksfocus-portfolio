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

const ErrorWrapper = styled.section`
    h2 {
        margin: 2rem 0;
        font-size: 1rem;
        text-align: center;
    }

    span {
        color: #db2777;
    }
`;

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.6rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;

    div {
        grid-column-start: span 6;
        padding: 0.1rem;
        border-radius: 2px;
        box-shadow: 0 0 0.2rem;
        height: 300px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3 {
        text-align: center;
    }

    @media only screen and (width >= 768px) {
        grid-gap: 0.8rem;

        div {
            grid-column-start: span 4;
        }
    }

    @media only screen and (width >= 1200px) {
        grid-gap: 1rem;

        div {
            grid-column-start: span 3;
        }
    }
`;

const Gallery = () => {
    const { searchValue } = useGlobalContext();

    const { isLoading, isError, error, data } = useQuery({
        queryKey: ["search", `${searchValue === "" ? "wedding" : searchValue}`],
        queryFn: async () => {
            const response = await axios(
                `https://jiriks-focus.onrender.com/search-photos/${searchValue}`
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
            <ErrorWrapper>
                <h2>
                    <span>Error: </span>
                    {error.message}
                </h2>
            </ErrorWrapper>
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
                                width="300"
                            />
                        </div>
                    );
                })
            )}
        </Wrapper>
    );
};
export default Gallery;
