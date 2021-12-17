import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const Root = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #d5d5d5;
    border-radius: 10px;

    ${breakpoint.device.lg} {
        width: 90%;
        height: 80%;
    }
    ${breakpoint.device.sm} {
        width: 90%;
        height: 80%;
    }
`;
