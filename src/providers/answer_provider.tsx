import { createContext, useContext } from 'solid-js';

const AnswerContext = createContext();

export function AnswerProvider(props) {
	return (
		<AnswerContext.Provider value={props.toggleAnswerChecked}>
			{props.children}
		</AnswerContext.Provider>
	);
}

export function useAnswer() { return useContext(AnswerContext); }
