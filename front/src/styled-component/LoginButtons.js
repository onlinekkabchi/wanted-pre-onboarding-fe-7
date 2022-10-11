import styled from "styled-components";

const SignUpButton = styled.button`
    background: #ffffff;
`;

const SubmitButton = styled.button`
    background: ${(props) => (props.submitButtonOn ? "#ffffff" : "#dd0000")};
`;

export { SignUpButton, SubmitButton };
