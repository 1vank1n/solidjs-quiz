import { IAnswer } from "../structures/answer";

const Answer = (props: { answer: IAnswer, questionId: number, toggleAnswerChecked: Function }) => {
	const answer = props.answer;

	return (<label class={answer.checked ? 'quiz__answer quiz__answer-checked' : 'quiz__answer'}
		onclick={
			(e) => {
				e.preventDefault();
				props.toggleAnswerChecked(props.questionId, answer.id);
			}
		}
	>
		<input class="quiz__checkbox" type="checkbox" /> {answer.text}
	</label>);
}

export default Answer;
