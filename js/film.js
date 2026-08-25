document.addEventListener("DOMContentLoaded", () => {
  // --- populate text content ---
  const badgeText = document.querySelector("[data-film-badge]");
  if (badgeText) badgeText.textContent = FILM.badge;

  const titleEl = document.querySelector("[data-film-title]");
  if (titleEl) titleEl.textContent = FILM.title;

  const metaEl = document.querySelector("[data-film-meta]");
  if (metaEl) {
    metaEl.innerHTML = FILM.meta.map((m) => `<span>${m}</span>`).join("");
  }

  const synopsisEl = document.querySelector("[data-film-synopsis]");
  if (synopsisEl) synopsisEl.textContent = FILM.synopsis;

  // --- background video with graceful fallback ---
  const media = document.querySelector("[data-film-media]");
  if (media && FILM.backgroundVideo) {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("aria-hidden", "true");
    video.src = FILM.backgroundVideo;

    video.addEventListener("error", () => {
      video.remove();
      const fallback = document.createElement("div");
      fallback.className = "film-media-fallback";
      media.prepend(fallback);
    });

    media.prepend(video);
  } else if (media) {
    const fallback = document.createElement("div");
    fallback.className = "film-media-fallback";
    media.prepend(fallback);
  }

  // --- play button -> YouTube modal ---
  const modal = document.querySelector("[data-video-modal]");
  const modalInner = modal?.querySelector(".video-modal-inner");
  const playBtns = document.querySelectorAll("[data-play-video]");
  const closeBtn = modal?.querySelector(".video-modal-close");

  function openModal() {
    if (!modal || !modalInner) return;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${FILM.youtubeId}?autoplay=1&rel=0`;
    iframe.title = FILM.title;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    modalInner.querySelectorAll("iframe").forEach((f) => f.remove());
    modalInner.appendChild(iframe);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal || !modalInner) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalInner.querySelectorAll("iframe").forEach((f) => f.remove()); // stops playback
    document.body.style.overflow = "";
  }

  playBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // --- "More info" scrolls to the row below the hero ---
  document.querySelector("[data-more-info]")?.addEventListener("click", () => {
    document.querySelector(".film-row-section")?.scrollIntoView({ behavior: "smooth" });
  });
});
