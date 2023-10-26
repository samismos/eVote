import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';
import { Button, Input } from "antd";


const LoginScreen = ({ goToNext, goToPrevious }) => {

    const [isUsernameEmpty, setIsUsernameEmpty] = useState(true);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [areFormsEmpty, setAreFormsEmpty] = useState(true);



    useEffect (() => {
        setAreFormsEmpty(!(!isUsernameEmpty && !isPasswordEmpty));
    }, [isUsernameEmpty, isPasswordEmpty]);


    const handleContinue = () => {
        alert("Username: "+username+ "\nPassword: "+password);
    }

    const handleUsername = (value) => {
        setUsername(value);
        setIsUsernameEmpty(value === '');
        console.log('setIsUsernameEmpty IS ',(value === ''));
        console.log('Username is ' , value);
    }

    const handlePassword = (value) => {
        setPassword(value);
        setIsPasswordEmpty(value.length < 1)
        console.log('setIsPasswordEmpty IS ',value);
        console.log('Length is : ' , value.length)
    }


    return (
        <div className="containerStyle">
            <h1 className="title">
                Please enter your credentials
            </h1>
            <div className="formContainer">
                <Input className="form-field" 
                placeholder="Username"
                onChange={ (e) => {handleUsername(e.target.value)}}
                />
                <Input className="form-field" 
                placeholder="Password"
                type="password"
                onChange={ (e) => {handlePassword(e.target.value)}}
                />
                                
            </div>
            <div className="button-container">
                <Button className="bottom-buttons" onClick={goToPrevious}>Go back</Button>
                <Button disabled={areFormsEmpty} className="bottom-buttons" onClick={handleContinue}>Continue</Button>
            </div>


        </div>
    );
}

export { LoginScreen };