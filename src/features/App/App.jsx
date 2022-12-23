/* eslint-disable jsx-a11y/alt-text */
import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [selected, setSelected] = useState();
  const [preIndex, setPreIndex] = useState();
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  const target = localStorage.getItem("level")
    ? localStorage.getItem("level")
    : 10;

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= target; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type) => type.type.name).join(", "),
        id: result.id,
      }));
      pokemon.push(...pokemon);
      shuffle(pokemon);
      setListData(pokemon);
    });
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const hanldeSelected = (id, index) => {
    if (selected) {
      if (selected !== id) {
        document.getElementById(preIndex).classList.remove("selected");
        document.getElementById(preIndex).classList.add("incorrect");
        document.getElementById(index).classList.add("incorrect");
        setTimeout(() => {
          document.getElementById(preIndex).classList.remove("incorrect");
          document.getElementById(index).classList.remove("incorrect");
        }, 150);
        setSelected();
        setPreIndex();
      } else {
        document.getElementById(preIndex).classList.add("correct");
        document.getElementById(index).classList.add("correct");
        setSelected();
        setPreIndex();
        setCount(count + 1);
        if (count === target - 1) {
          setSuccess(true);
        }
      }
    } else {
      setSelected(id);
      setPreIndex(index);
      document.getElementById(index).classList.add("selected");
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div id="pokedex" className="appPage">
      {listData.map((pkm, index) => (
        <img
          key={index}
          id={index}
          className="pkm-item"
          src={pkm.image}
          onClick={() => hanldeSelected(pkm.id, index)}
        />
      ))}

      <Alert
        className={`alert ${success ? "block" : "none"}`}
        severity="success"
      >
        <AlertTitle>Success</AlertTitle>
        Congratulation you are winner the game —{" "}
        <strong className="play-again" onClick={() => reloadPage()}>
          Play again!
        </strong>
      </Alert>
    </div>
  );
}

export default App;
