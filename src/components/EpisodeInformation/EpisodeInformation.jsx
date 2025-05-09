function EpisodeInformation({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="information">
        <h2>Episode Information</h2>
        <p>Select an Episode to view its information.</p>
      </section>
    );
  }

  return (
    <section className="information">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch Now!</button>
    </section>
  );
}

export default EpisodeInformation;
