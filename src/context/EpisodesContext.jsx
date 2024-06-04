import axios from "axios";
import { createContext, useEffect, useState } from "react";

const EpisodesContext = createContext();

const EpisodesProvider = ({ children }) => {
  const [episodios, setEpisodios] = useState([]);
  let episodes = [];

  useEffect(() => {
    const getData = async () => {
      for (let i = 1; i < 5; i++) {
        try {
          let res = await axios.get(
              `https://rickandmortyapi.com/api/episode?page=${i}`
            ),
            json = res.data.results;
          // console.log(json);
          json.map((episodio) => {
            episodes.push(episodio);
          });
        } catch (error) {
          console.log("Error");
        }
      }
      setEpisodios(episodes);
    };
    getData();
  }, []);

  const data = {
    episodios,
  };

  return (
    <EpisodesContext.Provider value={data}>{children}</EpisodesContext.Provider>
  );
};

export { EpisodesProvider };
export default EpisodesContext;
