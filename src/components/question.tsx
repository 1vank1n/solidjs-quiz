import { For } from "solid-js";
import { IQuestion } from "../structures/question";
import Answer from "./answer";

const Question = (question: IQuestion) => {
	return (
		<div class="quiz__question">
			<div class="quiz__title mb-6">
				{question.text}
			</div>

			<div class="quiz__answers">
				<For each={question.answers}>
					{(answer, i) =>
						<Answer id={answer.id} text={answer.text} checked={answer.checked} question_id={question.id} />
					}
				</For>
			</div>
		</div>
	);
}

export default Question;
