import axios from "axios";
import { useState } from "react";
import { useCardState, useCardDispatch } from "../context/todoCardContext";
import Card from "./card";

export default function Todos() {
    const todos = useCardState();
    const dispatch = useCardDispatch();
    const [card, setCard] = useState("");

    const addCard = () => {
        if (card.length > 0) {
            dispatch({ type: "ADD_CARD", content: card });
            setCard("");
        }
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
            {todos.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    isCompleted={item.isCompleted}
                    content={item.content}
                />
            ))}
        </>
    );
}
