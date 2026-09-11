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
    "Every message, every trip, every ordinary Tuesday - this is the story we're still writing.",
  heroImage: "assets/images/hero.JPG", // e.g. "assets/images/hero.jpg" — leave blank for placeholder
  footerNote: "Made with love, for us.",
};

/* -----------------------------------------
   TIMELINE
   Add one entry per milestone. Order doesn't
   matter — they're sorted by "date" below.
------------------------------------------ */
const TIMELINE = [
  {
    date: "December 2025",
    title: "The family meetup",
    text: "A sudden get-together that neither of us planned for, and neither of us forgot.",
    image: "",
  },
  {
    date: "January 2026",
     title: "The first message",
    text: "The follow request she accepted, and the conversation that followed.",
    image: "",
  },
  {
    date: "April 2026",
     title: "Meeting in person",
    text: "The first time we stood in the same room instead of texting from different ones.",
    image: "",
  },
  {
    date: "April 2026",
    title: "The first trip",
    text: "Our first real trip together, a long drive down the coast from Perth.",
    image: "",
  },
  {
    date: "April 2026",
    title: "The proposal",
    text: "The evening I asked, standing at Elizabeth Quay as the sun went down.",
    image: "assets/images/Album_2_Perth_during_Easter_2026/Cover_Perth_during_Easter_2026.jpg",
  },
  {
    date: "Today",
    title: "Still going",
    text: "Where we are now, and everything still ahead of us.",
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
    title: "First family meetup",
    description: "A get-together that was sudden, unexpected, and somehow exactly right.",
    cover: "assets/images/Album_1_First_family_meetup/Cover_First_family_meetup.jpg",
    photos: [
      { image: "assets/images/Album_1_First_family_meetup/1_First_family_meetup.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_1_First_family_meetup/2_First_family_meetup.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_1_First_family_meetup/3_First_family_meetup.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_1_First_family_meetup/4_First_family_meetup.jpg", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Perth during Easter 2026",
    description: "The first time you met in person, followed by a long drive down to Busselton.",
    cover: "assets/images/Album_2_Perth_during_Easter_2026/Cover_Perth_during_Easter_2026.jpg",
    photos: [
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
      { image: "", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Birthday trip to Perth",
    description: "A surprise visit for her birthday, a long drive, and a movie to end the day.",
    cover: "assets/images/Album_3_Birthday_trip_to_Perth/Cover_Birthday_trip_to_Perth.jpeg",
    photos: [
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/1_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/2_Birthday_trip_to_Perth.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/3_Birthday_trip_to_Perth.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/4_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/5_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Random & Ridiculous",
    description: "Photos where Mr. and Mrs. Roy look extra beautiful.",
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
  meta: ["Est. 2025", "Ongoing", "❤ ❤ ❤ ❤ ❤  Our Rating"],
  synopsis:
    "Every video, every photo, every quiet in-between moment - cut together into the story of us. This is us, all the way through.",
  // Local looped background video (optional). Drop an MP4 at this
  // path — ideally under ~15MB, muted, no important dialogue,
  // since it plays silently on loop. If missing, a fallback
  // gradient is shown instead.
  backgroundVideo: "assets/video/memories-reel.mp4",
};
