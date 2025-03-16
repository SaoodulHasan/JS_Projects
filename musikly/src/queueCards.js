// Music Data
let musicData = [
  {
    img: "/images/pushpa.jpeg",
    src: "/songs/1.mp3",
    artist: "Mika Singh",
    title: "Pushpa",
    duration: "4:16",
  },
  {
    img: "/images/kissik.jpg",
    src: "/songs/2.mp3",
    artist: "Lothika",
    title: "Kissik",
    duration: "4:08",
  },
  {
    img: "/images/singham.webp",
    src: "/songs/3.mp3",
    artist: "Ravi Basrur",
    title: "Singham Again",
    duration: "3:41",
  },
  {
    img: "/images/expert.jpg",
    src: "/songs/4.mp3",
    artist: "Nawab",
    title: "Expert Jatt",
    duration: "3:15",
  },
  {
    img: "/images/medal.jpg",
    src: "/songs/5.mp3",
    artist: "Chandra Brar",
    title: "MEDAL",
    duration: "2:13",
  },
  {
    img: "/images/one.jpg",
    src: "/songs/6.mp3",
    artist: "Shubh",
    title: "One Love",
    duration: "2:39",
  },
  {
    img: "/images/hass.jpg",
    src: "/songs/7.mp3",
    artist: "Diljit Dosanjh",
    title: "Hass Hass",
    duration: "2:33",
  },
  {
    img: "/images/ishqtera.jpg",
    src: "/songs/8.mp3",
    artist: "Guru Randhawa",
    title: "Ishq Tera",
    duration: "3:32",
  },
  {
    img: "/images/proper.jpg",
    src: "/songs/9.mp3",
    artist: "Diljit Dosanjh",
    title: "Proper Patola",
    duration: "2:59",
  },
  {
    img: "/images/mera.jpg",
    src: "/songs/10.mp3",
    artist: "Juss",
    title: "Mera Mann",
    duration: "2:44",
  },
  {
    img: "/images/wavy.jpg",
    src: "/songs/11.mp3",
    artist: "Karan Aujla",
    title: "Wavy",
    duration: "2:41",
  },
];

musicData.map((curElem, ind) => {
  let queueCardElem = document.createElement("span");
  queueCardElem.className = "queuePlayCard";
  queueCardElem.innerHTML = `
    <div id="queuePlayCard">
      <span id="playArrowPlayCard" class="material-icons ${ind}"
        >play_arrow</span
      >
      <img
        src="${curElem.img}"
      />
      <h4>${curElem.title}</h4>
      <h6>${curElem.artist}</h6>
      <p>${curElem.duration}</p>
      <span class="material-icons">more_vert</span>
    </div>`;
  document.querySelector(".queuePlay").appendChild(queueCardElem);
});
