import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
    VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import './Auth.css';

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState();
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

    const authSubmitHander = event => {
        event.preventDefault();
        console.log(formState.inputs)
    };

    return (<Card>
        <h2>Login Required</h2>
        <hr />
        <form className="authentication" onSubmit={authSubmitHander}>
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
                {setIsLoginMode ? "LOGIN" : "SIGNUP"}
            </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>);
};

export default Auth;