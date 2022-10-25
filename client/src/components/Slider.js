import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="../D_NQ_798246-MLA51294079057_082022-OO.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../D_NQ_897224-MLA51357905917_082022-OO.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../D_NQ_970783-MLA51263616338_082022-OO.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
