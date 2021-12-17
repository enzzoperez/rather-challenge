import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const Root = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${breakpoint.device.sm} {
        height: 70%;
    }
`;

export const PresentationImagen = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 50%;

    ${breakpoint.device.lg} {
        height: 100px;
        width: 100px;
    }

    ${breakpoint.device.sm} {
        height: 100px;
        width: 100px;
    }
`;

export const Title = styled.div`
    font-family: "Bungee", cursive;
    font-size: 32px;
    text-align: center;
    ${breakpoint.device.lg} {
        font-size: 24px;
    }

    ${breakpoint.device.sm} {
        font-size: 24px;
    }
`;
