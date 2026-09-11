document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector("[data-reflections-track]");
  if (!track) return;

  function voiceParagraph(text) {
    return text
      ? `<p>${text}</p>`
      : `<p class="is-empty">Not written yet.</p>`;
  }

  track.innerHTML = REFLECTIONS.map((item) => `
    <article class="reflection-card">
      <div class="reflection-head">
        <span class="reflection-date">${item.date}</span>
        <h3 class="reflection-title">${item.title}</h3>
      </div>
      <div class="reflection-voices">
        <div class="reflection-voice">
          <h4>Arijeet</h4>
          ${voiceParagraph(item.his)}
        </div>
        <div class="reflection-divider" aria-hidden="true"></div>
        <div class="reflection-voice">
          <h4>Sreelajoyoti</h4>
          ${voiceParagraph(item.hers)}
        </div>
      </div>
    </article>
  `).join("");
});
