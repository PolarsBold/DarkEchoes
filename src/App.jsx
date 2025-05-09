import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";
import EpisodeList from "./components/EpisodeList/EpisodeList";
import EpisodeInformation from "./components/EpisodeInformation/EpisodeInformation";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(false);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          episodes={episodes}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeInformation selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
