import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Petchoice from "../PetChoice/petChoice";

const SinglePet = () => {
  const url = "https://api.thecatapi.com/v1/images";
  const [img, setImg] = useState("default img ");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = url.find((person) => person.id === parseInt(id));
    setImg(newPerson.img);
  }, []);

  return (
    <div>
      <h1>{img}</h1>
      <Link to="/petChoice" className="btn">
        Back to Pet
      </Link>
    </div>
  );
};

export default SinglePet;
