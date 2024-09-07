import styled from "styled-components";
import { services } from "../sites-data/data";

const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;

    div {
        margin-top: 1.2rem;
        padding: 0.2rem;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 0.2rem;
    }

    h2 {
        margin: 1rem 0;
        text-align: center;
        text-transform: capitalize;
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.2rem;
        text-transform: capitalize;
        text-align: center;
    }

    @media only screen and (width >= 768px) {
        div {
            width: 100%;
            margin-top: 0rem;
        }

        article {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-evenly;
            grid-row-gap: 1.2rem;
            grid-column-gap: 1rem;
        }
    }

    @media only screen and (width >= 1200px) {
        article {
            grid-template-columns: repeat(3, 1fr);
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
