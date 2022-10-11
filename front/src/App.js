import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./component/loginForm";
import Todos from "./component/todos";
import "./App.css";

const AppContainer = styled.div`
    width: 450px;
    min-height: 800px;
    background: #ebebeb;
    border-radius: 25px;
    padding: 25px;
    margin: 45px;
`;

const createdRouter = createBrowserRouter([
    { path: "/", element: <LoginForm /> },
    { path: "todos", element: <Todos /> },
]);

function App() {
    return (
        <AppContainer>
            <RouterProvider router={createdRouter} />
        </AppContainer>
    );
}

export default App;
