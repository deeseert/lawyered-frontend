import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/CustomDotGroup";

import pic from "../pictureComponents/handshake-tech.jpg";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image id="mainPicture" src={pic} alt="home" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image id="mainPicture2" src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
