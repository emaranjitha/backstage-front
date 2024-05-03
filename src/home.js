import React from "react";

// import Pets from "./Pets";
import Header from "./Header/Header";
import RandomText from "./RandomText";
import SlideShow from "./Slides/SlideShow";
import Burger from "./Nav/Buger/Burger";

const FirstPets = {
  img:
    "https://epicpetclub.com/wp-content/uploads/2020/03/orange-tabby-cat.jpg",

};

const randomText = {
  test: "Meow",
  message: "I want to be your favorite pet!!!",
};

const home = () => {
  return (
    <div>

      <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Header />
      <RandomText test={randomText.test} message={randomText.message} />
      <div className="pets-flex">
        <SlideShow
          img={FirstPets.img}
          title={FirstPets.title}
          specie={FirstPets.specie}
        />
      </div>
    </div>
  );
};

export default home;
