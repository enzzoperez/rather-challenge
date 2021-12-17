import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";


const Button = styled.button`
    ${({ size }) =>
        (size === "md" &&
            `
            height: 48px;
            width: 250px;
        `) ||
        (size === "lg" &&
            `
            height: 64px;
            width: 300px;
        `) ||
        `
            height: 32px;
            width: 150px;
        `}

    font-family: 'Bungee', cursive;
    font-size: 16px;
    background-color: white;
    border-radius: 50px;
    border: none;
    -webkit-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);

    :active:focus {
        color: white;
        outline: 5px auto white;
    }

    ${breakpoint.device.lg} {
        ${({ size }) =>
        (size === "md" &&
            `
            height: 32px;
            width: 200px;
        `) ||
        (size === "lg" &&
            `
            height: 48px;
            width: 250px;
        `) ||
        `
            height: 16px;
            width: 100px;
        `}
        font-size: 12px;
    }

    ${breakpoint.device.sm} {
        ${({ size }) =>
        (size === "md" &&
            `
            height: 32px;
            width: 200px;
        `) ||
        (size === "lg" &&
            `
            height: 48px;
            width: 250px;
        `) ||
        `
            height: 16px;
            width: 100px;
        `}
        font-size: 12px;
    }
`;

export default Button;
