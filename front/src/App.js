import { RouterProvider } from "react-router-dom";
import "./App.css";
import { CardProvider } from "./context/todoCardContext";
import { AppContainer } from "./styled-component/appContainer";
import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./component/loginForm";
import Todos from "./component/todos";

export const createdBrowserRouter = createBrowserRouter([
    { path: "/", element: <LoginForm /> },
    { path: "todos", element: <Todos /> },
]);

function App() {
    return (
        <CardProvider>
            <AppContainer>
                <RouterProvider router={createdBrowserRouter} />
            </AppContainer>
        </CardProvider>
    );
}

export default App;
