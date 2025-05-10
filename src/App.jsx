import { episodeList } from "./data";
import { useState } from "react";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";

export default function App() {
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodesList
          episodes={episodes}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
