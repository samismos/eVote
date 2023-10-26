import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginScreen } from "./Screen";



const VotingContainer = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const goToIndex = (index) => {
        setCurrentSlide(index);
    }

    const goToNext = () => {
        setCurrentSlide(currentSlide+1);
    }

    const goToPrevious = () => {
        setCurrentSlide(currentSlide-1);
    }

    return (
        <>
            <div >
                <Carousel showArrows={false} showThumbs={false} selectedItem={currentSlide}>
                    {/*  LOGIN SCREEN 1*/}
                    <div className="containerStyle">
                        <h1 className="title">Welcome to eVote Greece!</h1>
                        <p className="legend" onClick={goToNext}>Press here to begin</p>
                    </div>

                    {/*  LOGIN SCREEN 2*/}
                    <div>
                    <LoginScreen goToNext={goToNext} goToPrevious={goToPrevious} />
                    </div>
                    {/*  LOGIN SCREEN 3*/}
                </Carousel>
            </div>

        </>
    );
}

export { VotingContainer };