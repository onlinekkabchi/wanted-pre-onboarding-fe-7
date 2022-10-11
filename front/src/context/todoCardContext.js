import { createContext, useContext, useReducer } from "react";

const initialTodo = [
    { id: 1, content: "수첩만들기", isCompleted: true },
    { id: 2, content: "api 접속 안되는거 고치기", isCompleted: false },
];

const CardStateContext = createContext(null);
const CardDispatchContext = createContext(null);

function cardReducer(state, action) {
    switch (action.type) {
        case "ADD_CARD":
            const newId = `${Math.floor(Math.random() * 100)}${state.length}`;
            return [
                ...state,
                { id: newId, content: action.content, isCompleted: false },
            ];
        case "EDIT_CARD":
            const cardLocation = state.findIndex(
                (item) => item.id === action.id
            );
            state.splice(cardLocation, 1, {
                id: action.id,
                content: action.content,
                isCompleted: action.isCompleted,
            });
            return state;
        case "REMOVE_CARD":
            return state.filter((card) => card.id !== action.id);
        default:
            break;
    }
}

function CardProvider({ children }) {
    const [state, dispatch] = useReducer(cardReducer, initialTodo);

    return (
        <CardStateContext.Provider value={state}>
            <CardDispatchContext.Provider value={dispatch}>
                {children}
            </CardDispatchContext.Provider>
        </CardStateContext.Provider>
    );
}

function useCardState() {
    return useContext(CardStateContext);
}

function useCardDispatch() {
    return useContext(CardDispatchContext);
}

export { useCardState, useCardDispatch, CardProvider };
