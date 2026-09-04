/* ============================================================
   OUR STORY — CONTENT FILE
   ------------------------------------------------------------
   This is the only file you should need to edit to personalize
   the site. Replace the placeholder text, dates and image paths
   below with your own. Everything else (layout, styling,
   behaviour) lives in the css/ and other js/ files.

   HOW IMAGES WORK
   Put your photos in assets/images/ and reference them here as
   "assets/images/your-file.jpg". Until you do, the site shows
   soft placeholder tiles so you can see the layout working.
   ============================================================ */

/* -----------------------------------------
   SITE-WIDE
------------------------------------------ */
const SITE = {
  coupleNames: "Sreelajoyoti & Arijeet", // shown in the header logo
  // NOTE: the big landing-page headline itself is written directly
  // in index.html (search for <h1 id="hero-title">) so you have
  // full control over the line break and the italic word — this
  // "tagline" field isn't used for that, it's just documentation
  // of the current headline.
  tagline: "Sreelajoyoti & Arijeet, one story.",
  heroSubtext:
    "Every message, every trip, every ordinary Tuesday — this is the story we're still writing.",
  heroImage: "", // e.g. "assets/images/hero.jpg" — leave blank for placeholder
  footerNote: "Made with love, for us.",
};

/* -----------------------------------------
   TIMELINE
   Add one entry per milestone. Order doesn't
   matter — they're sorted by "date" below.
------------------------------------------ */
const TIMELINE = [
  {
    date: "March 2021",
    title: "The first message",
    text: "Add the story of how you two first started talking — the app, the awkward opener, the reply that took three days to send.",
    image: "",
  },
  {
    date: "June 2021",
    title: "Meeting in person",
    text: "Describe your first real-life meeting — where it was, what you were nervous about, the thing they said that you still remember.",
    image: "",
  },
  {
    date: "December 2021",
    title: "The first trip",
    text: "Write about the first trip you took together — the destination, a funny mishap, the moment it felt easy.",
    image: "",
  },
  {
    date: "August 2023",
    title: "Moving in together",
    text: "Talk about the decision to share a home — the first apartment, the first piece of furniture you argued over lovingly.",
    image: "",
  },
  {
    date: "February 2026",
    title: "The proposal",
    text: "This is the big one — where it happened, how you asked, how they reacted. Take your time writing this one.",
    image: "",
  },
  {
    date: "Today",
    title: "Still going",
    text: "A short note on where you are right now, and what you're both looking forward to next.",
    image: "",
  },
];

/* -----------------------------------------
   ALBUMS
   Each album needs a title and a list of
   photos. "photos" just need a caption until
   you add real image paths.
------------------------------------------ */
const ALBUMS = [
  {
    title: "Weekend in the Mountains",
    description: "Add a line about this trip.",
    cover: "",
    photos: [
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Home",
    description: "Everyday life together.",
    cover: "",
    photos: [
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Birthdays",
    description: "Celebrating each other.",
    cover: "",
    photos: [
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Random & Ridiculous",
    description: "The photos that make no sense out of context.",
    cover: "",
    photos: [
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
    ],
  },
];

/* -----------------------------------------
   THE FILM PAGE (Netflix-style)
------------------------------------------ */
const FILM = {
  // Paste the ID from your YouTube URL, e.g.
  // https://www.youtube.com/watch?v=XXXXXXXXXXX  ->  "XXXXXXXXXXX"
  // The video MUST be set to "Unlisted" (not Private) on YouTube,
  // or it will fail to play for anyone but you.
  youtubeId: "XXXXXXXXXXX",

  badge: "#1 in Our Memories",
  title: "Sreelajoyoti & Arijeet: The Story So Far",
  meta: ["Est. 2021", "Ongoing", "❤ ❤ ❤ ❤ ❤  Our Rating"],
  synopsis:
    "Write two or three sentences here about your most recent time together — a trip, a quiet weekend, whatever it was. This is the 'synopsis' text that sits over the trailer, so keep it warm and short.",
  // Local looped background video (optional). Drop an MP4 at this
  // path — ideally under ~15MB, muted, no important dialogue,
  // since it plays silently on loop. If missing, a fallback
  // gradient is shown instead.
  backgroundVideo: "assets/video/memories-reel.mp4",
};
