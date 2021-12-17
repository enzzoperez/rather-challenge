import styled from "styled-components";
import { Button } from "../../../../components";
import { breakpoint } from "../../../../utils/breakpoints";

export const Root = styled.div`
    height: 80%;
    width: 50%;
    border-radius: 10px;
`;

export const OptionButton = styled(Button)`
    width: 50%;
    border-radius: 20px;
    background-color: ${({ backgroundColor }) =>
        backgroundColor && backgroundColor};
    margin-bottom: 20px;
    font-family: "Cairo", sans-serif;
    ${breakpoint.device.lg} {
        ${({ size }) =>
            (size === "md" &&
                `
            height: 48px;
            width: 200px;
        `) ||
            (size === "lg" &&
                `
            height: 64px;
            width: 250px;
        `) ||
            `
            height: 32px;
            width: 100px;
        `}
        font-size: 12px;
        width: 60%;
        margin-bottom: 10px;
    }

    ${breakpoint.device.sm} {
        ${({ size }) =>
            (size === "md" &&
                `
            height: 40px;
            width: 200px;
        `) ||
            (size === "lg" &&
                `
            height: 56px;
            width: 250px;
        `) ||
            `
            height: 24px;
            width: 100px;
        `}
        font-size: 12px;
        width: 60%;
        margin-bottom: 10px;
    }
`;

export const ContainerOptions = styled.div`
    background-color: white;
    width: 80%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px 10px;
    -webkit-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
    ${breakpoint.device.lg} {
        padding: 20px 0px 0px;
    }

    ${breakpoint.device.sm} {
        padding: 10px 0px 0px;
    }
`;

export const InfoQuestionContainer = styled.div`
    font-family: "Cairo", sans-serif;
    text-align: center;
`;

export const ImageQuestion = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: green;
    ${breakpoint.device.lg} {
        height: 64px;
        width: 64px;
    }
    ${breakpoint.device.sm} {
        height: 32px;
        width: 32px;
    }
`;
