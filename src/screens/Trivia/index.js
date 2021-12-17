import React, { useEffect, useState } from "react";
import { trivia } from "../../mockApi/data";
import { NumberOfQuestion, QuestionContainer } from "./components";
import { MainContainer, Root } from "./styles";

const Trivia = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctUserAnswers, setCorrectUserAnswer] = useState(0);
    const [triviaQuestions, setTriviaQuestions] = useState();
    const [winGame, setWinGame] = useState(false);
    const [lostGame, setLostGame] = useState(false);

    const isLastQuestion = currentQuestion + 1 === triviaQuestions?.length;

    const onSelectAnswer = () => {
        if (!isLastQuestion) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const correctOptionSelected = (isCorrect) => {
        isCorrect
            ? setCorrectUserAnswer((prev) => prev + 1)
            : setCorrectUserAnswer((prev) => prev - 1);
    };

    useEffect(() => {
        if (isLastQuestion) {
            if (correctUserAnswers === triviaQuestions?.length)
                setWinGame(true);
            else setLostGame(true);
        }
    }, [correctUserAnswers]);

    useEffect(() => {
        //This is to emulate a fetch of data from API
        const data = trivia.questions;
        setTriviaQuestions(data);
    }, []);

    if (winGame)
        return (
            <Root>
                <MainContainer>
                    <b>Ganaste!</b>
                </MainContainer>
            </Root>
        );

    if (lostGame)
        return (
            <Root>
                <MainContainer>
                    <b>Perdiste!</b>
                </MainContainer>
            </Root>
        );

    if (!triviaQuestions)
        return (
            <Root>
                <MainContainer>
                    <b>Ops, ocurrio un error!</b>
                </MainContainer>
            </Root>
        );

    if (triviaQuestions?.length === 0)
        return (
            <Root>
                <MainContainer>
                    <b>
                        Ops, ocurrio un error! No existen preguntas para esta
                        trivia
                    </b>
                </MainContainer>
            </Root>
        );

    return (
        <Root>
            <MainContainer>
                <NumberOfQuestion
                    totalQuestions={triviaQuestions?.length}
                    currentQuestion={currentQuestion + 1}
                />
                <QuestionContainer
                    questionData={triviaQuestions[currentQuestion]}
                    finishedSelectionAction={onSelectAnswer}
                    correctOptionSelected={correctOptionSelected}
                />
            </MainContainer>
        </Root>
    );
};

export default Trivia;
