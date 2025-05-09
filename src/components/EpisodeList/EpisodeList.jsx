function EpisodeList({ episodes, setSelectedEpisode }) {
  return (
    <section className="episode-list">
      <ul className="list">
        {episodes.map((epi) => (
          <li key={epi.id} onClick={() => setSelectedEpisode(epi)}>
            {epi.title} - {epi.id}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EpisodeList;
