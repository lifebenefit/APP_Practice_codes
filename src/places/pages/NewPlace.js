import React from "react";
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import "./PlaceForm.css";

import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
    const [formState, InputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false)

    const placeSubmitHandler = event => {
        // ADD PLACE 를 누르면 새로고침 되는게 Default 설정이므로 새로고침 안되게끔 방지하는 코드
        event.preventDefault();
        //TODO: 이후엔 이 fomrState.inputs data를 BackEnd 로 보내야함.
        console.log(formState.inputs);
    }
    console.log(`ADD PLACE 활성화 : ${formState.isValid}`);
    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a valid title"
                onInput={InputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please Enter a valid description (at least 5 characters)"
                onInput={InputHandler}
            />
            <Input
                id="address"
                element="input"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a valid address"
                onInput={InputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    );
};

export default NewPlace;