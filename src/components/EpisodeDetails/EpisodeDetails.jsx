import "./EpisodeDetails.css";

export default function EpisodeDetails({ selectedEpisode }) {
  return (
    <section className="details">
      {!selectedEpisode ? (
        <p>Please select an episode to learn more.</p>
      ) : (
        <>
          <h2>Episode {selectedEpisode.id}</h2>
          <p className="Title">{selectedEpisode.title}</p>
          <p>{selectedEpisode.description}</p>
          <button>Watch Now</button>
        </>
      )}
    </section>
  );
}
