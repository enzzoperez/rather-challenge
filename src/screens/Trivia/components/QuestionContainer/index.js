import React, { useEffect, useState } from "react";
import {
    OptionButton,
    ContainerOptions,
    InfoQuestionContainer,
    ImageQuestion,
} from "./styles";

const QuestionContainer = ({
    questionData,
    finishedSelectionAction,
    correctOptionSelected,
}) => {
    const { text, options, lifetimeSeconds } = questionData;
    const [myInterval, setMyInterval] = useState(null);
    const [myTimeout, setMyTimeOut] = useState(null);
    const [countTime, setCountTime] = useState(lifetimeSeconds);
    const [selectedOption, setSelectedOption] = useState(null);
    const [disabledButtons, setDisabledButtons] = useState(false);

    const setBackgroundColor = (indexSelected) => {
        if (!selectedOption) {
            return "lightblue";
        } else if (
            (selectedOption?.correct && selectedOption?.id === indexSelected) ||
            options[indexSelected]?.correct
        ) {
            return "green";
        } else if (
            !selectedOption?.correct &&
            selectedOption?.id === indexSelected
        ) {
            return "red";
        }
    };

    const clearTimer = () => {
        clearInterval(myInterval);
        clearTimeout(myTimeout);
    };

    const onFinishSelected = () => {
        setTimeout(() => {
            correctOptionSelected(
                selectedOption?.correct && selectedOption?.id >= 0
            );
            finishedSelectionAction && finishedSelectionAction();
        }, 1000);
    };

    useEffect(() => {
        setMyInterval(null);
        setMyTimeOut(null);
        setCountTime(lifetimeSeconds);
        setSelectedOption(null);
        setDisabledButtons(false);
    }, [text, lifetimeSeconds]);

    useEffect(() => {
        if (!selectedOption) {
            let myInterval = setInterval(() => {
                setCountTime((prev) => prev - 1);
            }, 1000);

            let myTimeout = setTimeout(() => {
                clearInterval(myInterval);
                const correctItemIndex = options.findIndex((i) => i.correct);
                setSelectedOption(options[correctItemIndex]);
                setBackgroundColor(correctItemIndex);
            }, lifetimeSeconds * 1000);

            setMyInterval(myInterval);
            setMyTimeOut(myTimeout);
        } else {
            clearTimer();
            setDisabledButtons(true);
            onFinishSelected();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);

    return (
        <>
            <InfoQuestionContainer>
                <p>{text}</p>
                <p>
                    Tiempo restante: <b>{countTime}</b>
                </p>
                <ImageQuestion src={questionData.image} />
            </InfoQuestionContainer>
            <ContainerOptions>
                {options &&
                    options.map((option, index) => (
                        <OptionButton
                            key={option?.text}
                            disabled={disabledButtons}
                            backgroundColor={() => setBackgroundColor(index)}
                            onClick={() =>
                                setSelectedOption({ ...option, id: index })
                            }
                        >
                            {option.text}
                        </OptionButton>
                    ))}
            </ContainerOptions>
        </>
    );
};

export default QuestionContainer;
