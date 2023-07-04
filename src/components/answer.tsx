import { IAnswer } from "../structures/answer";
import { useAnswer } from "../providers/answer_provider"

const Answer = (answer: IAnswer) => {
	const toggleAnswerChecked = useAnswer();

	return (<label class={answer.checked ? 'quiz__answer quiz__answer-checked' : 'quiz__answer'}
	// onclick={
	// 	() => toggleAnswerChecked(1, answer.id)
	// }
	>
		<input class="quiz__checkbox" type="checkbox" /> {answer.text}
	</label>);
}

export default Answer;
