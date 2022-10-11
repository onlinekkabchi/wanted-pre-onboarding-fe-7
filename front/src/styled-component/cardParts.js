import styled from "styled-components";

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

const EditButton = styled.button`
    background: #d3d3d3;
    height: 30px;
    margin-left: 10px;
    border: none;
`;

export { TodoCard, EditButton };
