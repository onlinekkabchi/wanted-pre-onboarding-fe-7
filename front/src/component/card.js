import { useState } from "react";
import { TodoCard, EditButton } from "../styled-component/cardParts";
import { useCardDispatch, useCardState } from "../context/todoCardContext";

export default function Card(props) {
    const [content, setContent] = useState(props.content);
    const [newContent, setNewContent] = useState(content);
    const [check, setCheck] = useState(false);
    const [editOn, setEditOn] = useState(false);
    const state = useCardState();
    const dispatch = useCardDispatch();

    const handleCheck = () => {
        if (check) {
            setCheck(false);
        } else if (check === false) {
            setCheck(true);
        }
    };

    const editCard = () => {
        setEditOn(true);
    };

    const removeCard = () => {
        dispatch({ type: "REMOVE_CARD", id: props.id });
        console.log(state);
    };

    const changeCardContent = (e) => {
        setContent(newContent);
        setEditOn(false);
        dispatch({
            type: "EDIT_CARD",
            id: props.id,
            content: newContent,
            isCompleted: check,
        });
        console.log(state);
    };

    return (
        <TodoCard id={props.id}>
            {editOn ? (
                <>
                    <input
                        type="text"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                    <EditButton onClick={changeCardContent}>완료</EditButton>
                    <EditButton
                        onClick={() => {
                            setEditOn(false);
                            setNewContent(content);
                        }}
                    >
                        취소
                    </EditButton>
                </>
            ) : (
                <>
                    <p>{content}</p>
                    <input
                        id={props.id}
                        type="checkbox"
                        checked={check}
                        onChange={handleCheck}
                    />
                    <EditButton onClick={editCard}>수정</EditButton>
                    <EditButton onClick={removeCard}>삭제</EditButton>
                </>
            )}
        </TodoCard>
    );
}
