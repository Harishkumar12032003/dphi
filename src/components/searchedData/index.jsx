import "./styles.css";
import React from "react";

export default function SearchedData() {
  const superHero = [
    {
      name: "Steve Rogers",
      title: "Captain America",
      weapon: "Shield",
      franchise: "Marvel"
    },
    {
      name: "Tony Stark",
      title: "Ironman",
      weapon: "Suit",
      franchise: "Marvel"
    },
    {
      name: "Thor",
      title: "Thor",
      weapon: "Hammer",
      franchise: "Marvel"
    },
    {
      name: "Natasha",
      title: "Black Widow",
      weapon: "Combat",
      franchise: "Marvel"
    },
    {
      name: "Dr. Banner",
      title: "Hulk",
      weapon: "Anger",
      franchise: "Marvel"
    },
    {
      name: "Dr. Strange",
      title: "Dr. Strange",
      weapon: "Magic",
      franchise: "Marvel"
    },
    {
      name: "Vision",
      title: "Vision",
      weapon: "Mind Stone",
      franchise: "Marvel"
    },
    {
      name: "Sam",
      title: "Falcon",
      weapon: "Suit",
      franchise: "Marvel"
    },
    {
      name: "Clark Kent",
      title: "Superman",
      weapon: "Eye Lasers",
      franchise: "DC"
    },
    {
      name: "Bruce Wayne",
      title: "Batman",
      weapon: "Technology",
      franchise: "DC"
    },
    {
      name: "Barry Allen",
      title: "Flash",
      weapon: "Speed",
      franchise: "DC"
    },
    {
      name: "Victor",
      title: "Cyborg",
      weapon: "Robotics",
      franchise: "DC"
    },
    {
      name: "Diana",
      title: "Wonder Woman",
      weapon: "Sword",
      franchise: "DC"
    },
    {
      name: "Arthur Curry",
      title: "Aquaman",
      weapon: "Trident",
      franchise: "DC"
    }
  ];

  const [searchedArray, setSearchedArray] = React.useState(superHero);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    if(searchString.length === 0){
      setSearchedArray(superHero)
    } else {
      const searchedObjects = []
      superHero.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
            searchedObjects.push(singleHeroObject)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects) 
    }
  }, [searchString])

  



  return (
    <div className="App">
      
      <pre>
      
        const data={JSON.stringify(searchedArray, null, '    ')}
      </pre>
      handleSaveToPC(data,searched);
    </div>
  );
}