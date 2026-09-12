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
    image: "assets/images/Album_1_First_family_meetup/Cover_First_family_meetup.jpg",
  },
  {
    date: "January 2026",
     title: "The first message",
    text: "The follow request she accepted, and the conversation that followed.",
    image: "assets/images/Timeline/Timeline_Cover_The_first_message.PNG",
  },
  {
    date: "April 2026",
     title: "Meeting in person",
    text: "The first time we stood in the same room instead of texting from different ones.",
    image: "assets/images/Timeline/Timeline_Cover_Meeting_in_person.JPG",
  },
  {
    date: "April 2026",
    title: "The first trip",
    text: "Our first real trip together, a long drive down the coast from Perth.",
    image: "assets/images/Timeline/Timeline_Cover_The_first_trip.JPG",
  },
  {
    date: "April 2026",
    title: "The proposal",
    text: "The evening I asked, standing at Elizabeth Quay as the sun went down.",
    image: "assets/images/Timeline/Timeline_Cover_The_Proposal.JPG",
  },
  {
    date: "Today",
    title: "Still going",
    text: "Where we are now, and everything still ahead of us.",
    image: "assets/images/Timeline/Timeline_Cover_Still_going.jpg",
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
    dates: "Date: 25 December 2025",
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
    dates: "Dates: 01-03 April 2026",
    description: "The first time we met alone, followed by a long drive down to Busselton.",
    cover: "assets/images/Album_2_Perth_during_Easter_2026/Cover_Perth_during_Easter_2026.jpg",
    photos: [
      { image: "assets/images/Album_2_Perth_during_Easter_2026/1_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/2_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/3_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/4_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/5_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/6_Perth_during_Easter_2026.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/7_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/8_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/9_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/10_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/11_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_2_Perth_during_Easter_2026/12_Perth_during_Easter_2026.JPG", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Birthday trip to Perth",
    dates: "Dates: 05-07 September 2026",
    description: "A surprise visit for her birthday, a long drive, and a movie to end the day.",
    cover: "assets/images/Album_3_Birthday_trip_to_Perth/Cover_Birthday_trip_to_Perth.jpeg",
    photos: [
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/10_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/2_Birthday_trip_to_Perth.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/3_Birthday_trip_to_Perth.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/4_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/5_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/6_Birthday_trip_to_Perth.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/7_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/8_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/9_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_3_Birthday_trip_to_Perth/1_Birthday_trip_to_Perth.jpg", caption: "Add a caption for this photo." },
    ],
  },
  {
    title: "Random & Ridiculous",
    description: "Photos where Mr. and Mrs. Roy look extra beautiful.",
    cover: "assets/images/Album_4_Random_&_Ridiculous/Cover_Random_&_Ridiculous.jpg",
    photos: [
      { image: "assets/images/Album_4_Random_&_Ridiculous/1_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/2_Random_&_Ridiculous.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/3_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/4_Random_&_Ridiculous.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/5_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/6_Random_&_Ridiculous.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/7_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/8_Random_&_Ridiculous.JPG", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/9_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/10_Random_&_Ridiculous.jpeg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/11_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/12_Random_&_Ridiculous.png", caption: "Add a caption for this photo." },
      { image: "assets/images/Album_4_Random_&_Ridiculous/13_Random_&_Ridiculous.jpg", caption: "Add a caption for this photo." },
    ],
  },
];

const REFLECTIONS = [
  {
    title: "The Cute Family Meetup",
    date: "December 2025",
    his: "25 December 2025: Christmas Day. A mutual event, families around, the kind of setting where you don't expect anything to happen - and then she walked in. I noticed her straight away. I didn't say much, but I didn't forget her either.",
    hers: "A mutual family event, just like he said - except I had no idea I was going to meet him until my mum told me the night before. I was terrified, my whole world spiralling, and all I wanted was to get through dinner and leave. I barely looked at him that night, but I still caught little glimpses of him, noticed how respectful he was, how sweetly he spoke to my family, how calm he seemed. I left that night with no expectations at all. Nothing in mind. Or so I thought.",
  },
  {
    title: "Start of our Love Story",
    date: "January 2026",
    his: "27 January 2026: She accepted my follow request on Instagram. I know that sounds small. It wasn't. I had been waiting for that notification longer than I'd like to admit. \n\n15 March 2026: The day I told her how I really felt - and she said it back. I don't think either of us planned it quite like that, but some things just find their moment. \n\n1st – 3rd April 2026: We finally met in person, just us this time. Three days in a row. On the third day, we both showed up in Harry Styles merch - something that I had planned for us days before, because I knew she'd be over the moon. I think that says everything about us, honestly. \n\nThe rest, as they say, is our story. Still being written.",
    hers: "27 January 2026: Following my mum’s very clear instruction, I finally accepted his Instagram request - the same request that had been sitting there since the year before. Now I laugh thinking about how I had the heart to keep such a sweet, wonderful person waiting for that long. And did I forget to mention he screenshotted the exact moment I accepted it? \n\n15 March 2026: The kind of day when he quietly proved something important to me, and that was it; I knew it by then. And then, somewhere in the middle of an ordinary conversation, he finally said what I had been holding in my heart for a while, too. Just like he beautifully said, some things find their moment, just like our story. \n\n1st – 3rd April 2026: Those beautiful three days when it was just us for the first time - first dinners, first walks, a little trip to Busselton, and all these firsts that somehow didn’t feel like firsts at all. Those were the days I realised he felt like home. \n\nAnd yes, it wasn’t just any Harry Styles merchandise; it was the one he designed himself. He literally found the best designs, brought them together, and made something just because I once said I liked Harry Styles. Because he knew how much it would mean to me. And yes, I was over the moon and probably somewhere far beyond it if possible. And honestly, I don’t think he’s brought me back down since. \n\nLooking back, it still amazes me how something so new could feel like it had always been there. \n\nAnd just like he said, the rest is our story — still unfolding, still being written, and somehow already feeling like home.",
  },
   {
    title: "The Proposal",
    date: "April 2026",
    his: "I had been thinking about this moment for a while. We were in Perth together, walking along Elizabeth Quay on the evening of 2nd April 2026 - the water beside us, the city lit up around us. It was the kind of setting that feels made for something important. \n\nI had prepared a postcard — the kind that opens up. Inside were two dancing figures, and in my handwriting, four words: Will you marry me? \n\nI handed it to her. She opened it. She read it. And she said yes. \n\nNo elaborate production. No grand speech. Just the two of us, a handwritten card, and a moment I will never forget for the rest of my life.",
    hers: "I had no idea. \n\nThe evening of 2nd April 2026 — Perth CBD looked exactly the way he knew I loved it. \n\nI had walked past that place so many times before. I never imagined it would become the place where something so beautiful would happen. \n\nHe had been reading me letters he had written for me, and yes, letters, plural. Then he said there was one final surprise. \n\nA postcard. Of course, it was a postcard. He knew how much I love handwritten things. It was beautiful before I even knew what was inside. \n\nThere was a cherry blossom tree, a swing, and two dancing figures. It was one of the most beautiful cards I had ever seen. Then he asked me to pull out what was hidden inside. \n\nAnd there, in his own handwriting, written in beautiful cursive, were the words: Will you marry me? \n\nI was completely taken away. He later told me he had taken his time to learn how to write it that way, and that made my heart feel so full. He had taken so much care in making it feel special for me. \n\nThen he asked me to turn the page. I barely knew what I was doing by then, and behind it was a poem beautifully written just for me. I noticed the faint lines underneath, drawn just so the writing would stay straight. That small detail said everything about the care and heart he had put into it and into us. \n\nThe handwriting, the art, the poem, the meaning behind it — he had thought of everything I would love. \n\nNo grand performance. No need for one. \n\nJust him, a card made with love, and a moment I will remember for the rest of my life. \n\nNeed I say my answer was yes?",
  },
  {
    title: "The Birthday Surprise in Perth",
    date: "September 2026",
    his: "I hadn't told her I was coming. I remember standing at the door running through what I'd say, and then completely forgetting all of it the second she opened it and just stood there for a second before it registered. That look on her face is the whole reason the trip was worth planning in secret.\n\nWe didn't really have much of a planned agenda after that. Sunday we just got in the car and drove, few pre-planned stops, but stopping wherever looked worth stopping for. Monday we did it again. It sounds simple written down like that, but there's something about being in a car together with nowhere in particular to be that says more about a relationship than any big gesture could.\n\nBoth evenings we had dinner with her brother, and by the second night it didn't feel like I was visiting anymore, it felt like I was just there, part of the week, part of her life in Perth rather than a guest passing through it. We ended one of the nights at the theatre watching Spiderman, and somewhere in the middle of it, I remember thinking I wanted a lot more ordinary evenings exactly like that one.",
    hers: "",
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
