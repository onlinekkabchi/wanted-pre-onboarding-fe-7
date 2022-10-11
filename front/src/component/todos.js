import axios from "axios";
import { useReducer, useState } from "react";
import styled from "styled-components";

const todoSample = [
    { id: 1, content: "수첩만들기", isCompleted: true },
    { id: 2, content: "api 접속 안되는거 고치기", isCompleted: false },
];

const TodoCard = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    height: 60px;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
`;

const DoneTag = styled.button`
    background: #ebebeb;
    height: 30px;
    margin-left: 10px;
    border: none;
`;

const EditButton = styled.button`
    background: #d3d3d3;
    height: 30px;
    margin-left: 10px;
    border: none;
`;

function cardReducer(state, action) {
    switch (action.type) {
        case "ADD_CARD":
            const newId = `${Math.floor(Math.random() * 100)}${state.length}`;
            return [
                ...state,
                { id: newId, content: action.content, isCompleted: false },
            ];
        case "REMOVE_CARD":
            return state.filter((card) => card.id !== action.id);
        default:
            break;
    }
}

export default function Todos() {
    const [todos, dispatch] = useReducer(cardReducer, todoSample);
    const [card, setCard] = useState("");

    const addCard = () => {
        if (card.length > 0) {
            dispatch({ type: "ADD_CARD", content: card });
            setCard("");
        }
    };

    const editCard = () => {
        dispatch({ type: "EDIT_CARD" });
    };

    const sendReq = () => {
        axios.post("https://pre-onboarding-selection-task.shop/todos");
    };

    return (
        <>
            <div style={{ marginBottom: "15px", paddingLeft: "15px" }}>
                <h1>Todo List</h1>
                <input
                    style={{
                        height: "30px",
                        border: "none",
                        borderRadius: "10px",
                    }}
                    type="text"
                    value={card}
                    onChange={({ target: { value } }) => setCard(value)}
                />
                <button
                    style={{
                        background: "#bebebe",
                        border: "none",
                        borderRadius: "10px",
                        height: "30px",
                        marginLeft: "5px",
                    }}
                    onClick={addCard}
                >
                    TODO 추가
                </button>
            </div>

            {todos.map((e) => Card(e))}
        </>
    );
}

function Card(e) {
    return (
        <TodoCard key={e.id}>
            <p>{e.content}</p>
            {e.isCompleted ? (
                <DoneTag>완료</DoneTag>
            ) : (
                <DoneTag>미완료</DoneTag>
            )}
            <EditButton>수정</EditButton>
            <EditButton>삭제</EditButton>
        </TodoCard>
    );
}
