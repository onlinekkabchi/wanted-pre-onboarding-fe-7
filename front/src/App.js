import styled from "styled-components";
import Login from "./component/login";
import "./App.css";

const AppContainer = styled.div`
    width: 450px;
    min-height: 800px;
    background: #ebebeb;
    border-radius: 25px;
    padding: 25px;
    margin: 45px;
`;

function App() {
    return (
        <AppContainer>
            <h2>App</h2>
            <Login />
        </AppContainer>
    );
}

export default App;
