import "./EpisodesList.css";

function EpisodesList({ episodes, setSelectedEpisode }) {
  console.log(episodes);

  return (
    <section className="episodes-list">
      <h2>Episodes</h2>
      <ul className="episodes-list">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EpisodesList;
