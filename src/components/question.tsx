import { For, splitProps } from "solid-js";
import { IQuestion } from "../structures/question";
import Answer from "./answer";

const Question = (props: { question: IQuestion, toggleAnswerChecked: Function }) => {
	const question = props.question;

	return (
		<div class="quiz__question">
			<div class="quiz__title mb-6">
				{question.text}
			</div>

			<div class="quiz__answers">
				<For each={question.answers}>
					{(answer, i) =>
						<Answer answer={answer} questionId={question.id} toggleAnswerChecked={props.toggleAnswerChecked} />
					}
				</For>
			</div>
		</div>
	);
}

export default Question;
