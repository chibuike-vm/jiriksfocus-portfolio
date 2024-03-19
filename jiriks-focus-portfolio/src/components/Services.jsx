import styled from "styled-components";
import { services } from "../sites-data/data";

const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;

    div {
        margin-top: 3rem;
        padding: 1rem;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 0.5rem;
    }

    h2 {
        margin: 2rem 0;
        text-align: center;
        text-transform: capitalize;
    }

    h3 {
        font-size: 1.2rem;
        text-transform: capitalize;
        text-align: center;
    }

    @media only screen and (width >= 768px) {
        div {
            width: 20rem;
            padding: 0;
            margin-top: 0rem;
        }

        article {
            display: grid;
            grid-template-columns: repeat(2, max-content);
            justify-content: space-evenly;
            grid-row-gap: 4rem;
            grid-column-gap: 3rem;
        }
    }

    @media only screen and (width >= 1200px) {
        article {
            grid-template-columns: repeat(3, max-content);
        }
    }
`;

const Services = () => {
    return (
        <Wrapper id="services">
            <h2>services</h2>
            <article>
                {services.map((eachServiceData) => {
                    const { id, img, alt, title, service } = eachServiceData;

                    return (
                        <div key={id} className="service-container">
                            <h3>{title}</h3>
                            <img
                                src={img}
                                alt={alt}
                                width={400}
                                height={300}
                                className="svg-images"
                            />
                            <p>{service}</p>
                        </div>
                    );
                })}
            </article>
        </Wrapper>
    );
};
export default Services;
