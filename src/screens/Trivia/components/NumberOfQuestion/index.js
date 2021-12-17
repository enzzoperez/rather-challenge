import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Root } from "./styles";

const NumberOfQuestion = ({ totalQuestions, currentQuestion }) => {
    return (
        <Root>
            Pregunta {currentQuestion}/{totalQuestions}
            <ProgressBar
                maxCompleted={totalQuestions}
                completed={currentQuestion}
                customLabel={`${currentQuestion}`}
            />
        </Root>
    );
};

export default NumberOfQuestion;
