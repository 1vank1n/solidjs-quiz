import { For, Show, onMount } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { render } from 'solid-js/web';

import Question from './components/question';
import { AnswerProvider } from './providers/answer_provider';
import { IQuestion } from './structures/question';
import { TQuiz } from './structures/quiz';

interface State {
	questionOrder: number
	questions: IQuestion[]
	answers: { [key: number]: number[] }
}

const Quiz = (props: { id: number }) => {
	const [state, setState] = createStore<State>({
		questionOrder: 0,
		questions: [],
		answers: [],
	})

	onMount(async () => {
		const fetchedQuiz = await getQuiz(props);
		setState(produce((s) => s.questions = fetchedQuiz.questions))
	});

	function prevQuestion() {
		if (state.questionOrder > 0) {
			setState(produce((s) => s.questionOrder -= 1));
		}
	}

	function nextQuestion() {
		if (state.questionOrder + 1 < state.questions.length) {
			setState(produce((s) => s.questionOrder += 1));
		}
	}

	function toggleAnswerChecked(question_id: number, answer_id: number) {
		setState(produce((s) => {
			const question = s.questions.find((question) => question.id === question_id);
			const answer = question?.answers.find((answer) => answer.id === answer_id);
			if (answer !== undefined) {
				answer.checked = !answer.checked;
			}
			return s;
		}));
	}

	return <>
		<AnswerProvider toggleAnswerChecked={toggleAnswerChecked}>
			<Show when={state.questions} fallback="Loading...">
				<For each={state.questions}>
					{
						(question, i) =>
							<Show when={i() == state.questionOrder}>
								<Question id={question.id} text={question.text} answers={question.answers} />
							</Show>
					}
				</For>

				<button onclick={prevQuestion}>prev</button>
				<button onclick={nextQuestion}>next</button>
			</Show>
		</AnswerProvider>
	</>;
}

render(() => <Quiz id={3} />, document.getElementById('quiz'));

async function getQuiz(props: any) {
	// const response = await fetch(`/api/v1/quiz/${props.id}/`);
	// const results = await response.json();
	// const fetchedQuiz = results as TQuiz;
	// return fetchedQuiz;

	return {
		"id": 3,
		"questions": [
			{
				"id": 1,
				"text": "Первый вопрос",
				"image": null,
				"answers": [
					{
						"id": 1,
						"text": "Ответ 1",
						"image": null
					},
					{
						"id": 2,
						"text": "Ответ два",
						"image": null
					}
				]
			},
			{
				"id": 2,
				"text": "А тут и второй вопрос",
				"image": null,
				"answers": [
					{
						"id": 3,
						"text": "Ну",
						"image": null
					},
					{
						"id": 4,
						"text": "Так се",
						"image": null
					},
					{
						"id": 5,
						"text": "А тут и третий ответ",
						"image": null
					}
				]
			}
		],
		"created": "2023-05-03T19:30:41.850006+03:00"
	} as TQuiz;
}
