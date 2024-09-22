import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

// server 나 Backend , DB 이런거 없으니까 그냥 임시로 복붙 때리는거
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building 1',
        description: 'One of the most famous sky scrapers in the world! 1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building 22',
        description: 'One of the most famous sky scrapers in the world! 22',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];


const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    // 서버의 경우 Data 지연이 일어나는 상황을 재현 해보려고 주석 처리함.
    // const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, InputHandler, setFormData] = useForm({
        title: {
            value: "",
            isValid: false
        },
        description: {
            value: "",
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    // /**
    //  * Uncaught Error: Too many re-renders. 
    //  * React limits the number of renders to prevent an infinite loop.
    //  * 해당 에러 발생 : setFormData 함수는 dispatch 함수를 호출하는데
    //  * dispatch 할 때마다 리렌더링 하게됨.
    //  */
    // setFormData({
    //     title: {
    //         value: identifiedPlace.title,
    //         isValid: true
    //     },
    //     description: {
    //         value: identifiedPlace.description,
    //         isValid: true
    //     }
    // })

    useEffect(() => {
        setFormData({
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        }, true);
        setIsLoading(false)
    }, [setFormData, identifiedPlace])

    // formState가 변경될 때마다 로그 출력
    useEffect(() => {
        console.log('formState가 변경되었습니다:', formState);
    }, [formState]);

    const placeUpdateSubmitHandler = event => {
        // ADD PLACE 를 누르면 새로고침 되는게 Default 설정이므로 새로고침 안되게끔 방지하는 코드
        event.preventDefault();
        //TODO: 이후엔 이 fomrState.inputs data를 BackEnd 로 보내야함.
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    }
    // return <h2>Update Place : {placeId}</h2>

    console.log(`init data : ${formState.inputs.title.value}`)
    // console.log(`ADD PLACE 활성화 : ${formState.isValid}`);

    if (isLoading) {
        return (
            <div className="center">
                <h2>loading ...</h2>
            </div>
        )
    }
    return (
            <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
                <Input
                    id='title'
                    element='input'
                    type='text'
                    lable='Title'
                    validators={[VALIDATOR_REQUIRE()]}
                    // validators={[VALIDATOR_MINLENGTH(1)]}
                    errorText="Please enter a valid title."
                    onInput={InputHandler}
                    initialValue={formState.inputs.title.value}
                    initialValid={formState.inputs.title.isValid}
                />
                <Input
                    id='description'
                    element='textarea'
                    lable='Description'
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description."
                    onInput={InputHandler}
                    initialValue={formState.inputs.description.value}
                    initialValid={formState.inputs.description.isValid}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    UPDATE PLACE
                </Button>
            </form>
    );
};

export default UpdatePlace;