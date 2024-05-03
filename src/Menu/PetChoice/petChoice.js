import React, { useEffect, useState } from "react";
import "./PetChoice.css";
import { Link, useParams } from "react-router-dom";
import Burger from "../../Nav/Buger/Burger";

const url = "https://api.thecatapi.com/v1/images/search?limit=30";
// important link for uplaod button   https://www.youtube.com/watch?v=iBonBC-ySgo
const PetChoice = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "x-api-key": "0027812f-5efc-4575-be16-650b0dd150fd",
        },
      });
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div>
        <button onClick={refreshPage}>Click to refresh</button>
        <button onClick="#">Upload image</button>
        <div className="pets">
          {items.map(({ url, id, breed }) => (
            <div key={id} className="inner">
              <Link className="nav-link" to={`/singlePet/${url}`}>
                <img src={url} alt="" width="300px" height="300px" />
              </Link>

              <p>Cute Pets </p>
              <h3>{breed}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PetChoice;
