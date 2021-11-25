import styled from "styled-components";
// import API from "../API";
import GlobalStyle from "../../GlobalStyle"
export const Wrapper = styled.div`

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 60%),
    url(${({ image }) => image}), var(--lightGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 2s;

    @keyframes animateHeroImage {

        from {
            opacity: 0
        }
        to {
            opacity: 1;
        }
    }

`;

export const Content = styled.div`

    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;

export const Text = styled.div`

    z-index; 100;
    max-width: 700;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: 65px;
        color: var(--lightGrey);

        @media screen and (max-width: 720px) {
            font-size: 50px;
        }

       
    }

    p {

        font-size: 25px;
        color: var(--lightGrey);

        @media screen and (max-width: 720px) {

            font-size: 20px;
        }
    }

    @media screen and (max-width: 720px) {

        max-wdith: 100%;
    }

`;

