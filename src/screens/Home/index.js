import React from "react";
import { Button } from "../../components";
import { trivia } from "../../mockApi/data";
import { PresentationImagen, Root, Content, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Root>
            <Content>
                <Title>
                    <p>Bienvenido a la trivia: </p>
                    <p>¡{trivia.title}!</p>
                </Title>
                <PresentationImagen src={trivia?.image} />
                <Button size="md" onClick={() => navigate(ROUTES.trivia)}>
                    Empezar
                </Button>
            </Content>
        </Root>
    );
};

export default Home;
