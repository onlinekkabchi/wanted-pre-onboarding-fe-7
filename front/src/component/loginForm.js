import { useEffect, useState } from "react";
import { SignUpButton, SubmitButton } from "../styled-component/LoginButtons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sampleToken } from "../fakeDB/db";

const signUp = async (email, password) => {
    if (email.match("@") && password.length > 8) {
        await axios
            .post(
                "https://pre-onboarding-selection-task.shop/auth/signup",
                { email: email, password: password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) =>
                localStorage.setItem("access_token", res.access_token)
            )
            .catch((err) => console.error(err));
    }
};

const signIn = async (email, password) => {
    if (email.match("@") && password.length > 8) {
        await axios
            .get(
                "https://pre-onboarding-selection-task.shop/auth/signin",
                { email: email, password: password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) =>
                localStorage.setItem("access_token", res.access_token)
            )
            .catch((err) => console.error(err));
    }
};

export default function LoginForm() {
    const [submitButtonOn, turnSubmitButtonOn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUserInput = () => {
        if (email.match("@") && password.length > 8) {
            turnSubmitButtonOn(true);
        } else {
            turnSubmitButtonOn(false);
        }
    };

    const handleSubmit = () => {
        if (submitButtonOn) {
            signIn(email, password);
            localStorage.setItem("sample_token", sampleToken.access_token);
            if (
                localStorage.getItem("sample_token") ||
                localStorage.getItem("access_token")
            ) {
                navigate("/todos");
            }
        }
    };

    useEffect(() => {
        if (
            localStorage.getItem("sample_token") ||
            localStorage.getItem("access_token")
        ) {
            navigate("/todos");
        }
    }, [navigate]);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>email, password 입력</p>
                <input
                    type="text"
                    value={email}
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                    onKeyUp={handleUserInput}
                    placeholder="email"
                />
                <input
                    type="text"
                    value={password}
                    onChange={({ target: { value } }) => {
                        setPassword(value);
                    }}
                    onKeyUp={handleUserInput}
                    placeholder="password"
                />
                <SignUpButton
                    onClick={() => {
                        signUp(email, password);
                    }}
                >
                    SignUp
                </SignUpButton>
                <SubmitButton
                    type="submit"
                    onClick={handleSubmit}
                    submitButtonOn={submitButtonOn}
                >
                    SignIn
                </SubmitButton>
            </div>
        </>
    );
}
