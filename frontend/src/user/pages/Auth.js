import React, { useState, useContext } from "react";
// eslint-disable-next-line
import axios from 'axios';

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
    VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [formState, InputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,    // 기존의 값은 유지하며 
                name: undefined         // name 필드만 undefined함
            }, formState.inputs.email.isValid &&
            formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHander = async event => {
        event.preventDefault(); // 폼 제출 시 기본 동작인 페이지 새로고침을 막고, 다른 작업을 수행할 수 있습니다.

        // fetch 함수를 쓰는 경우
        if (isLoginMode) {
            // 로그인 모드일 때의 로직
        } else {
            // 회원가입 모드일 때의 로직
            try {
                setIsLoading(true);
                const response = fetch('http://localhost:5000/api/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                });

                const responseData = (await response).json();
                console.log(responseData);
                setIsLoading(false);
                auth.login();
        auth.login();
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'Something went wrong, please try again');
            }
        }

        // // axios 서드파티Lib 쓰는 경우
        // if (isLoginMode) {
        //     // 로그인 모드일 때의 로직
        // } else {
        //     // 회원가입 모드일 때의 로직
        //     try {
        //         const response = await axios.post('http://localhost:5000/api/users/signup', {
        //             name: formState.inputs.name.value,
        //             email: formState.inputs.email.value,
        //             password: formState.inputs.password.value
        //         }, {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });

        //         const responseData = response.data;
        //         console.log(responseData);
        //         auth.login();
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
    };

    return (<Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay/>}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHander}>
            {!isLoginMode && (
                <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={InputHandler}
                />
            )}
            <Input element="input"
                id="email"
                type="email"
                label="E-mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid Email address."
                onInput={InputHandler}
            />
            <Input element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid password, at least 5 characters."
                onInput={InputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                {isLoginMode ? "확인" : "회원정보 작성 완료"}
            </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>{isLoginMode ? '회원 가입' : '로그인'}으로 가기</Button>
    </Card>);
};

export default Auth;