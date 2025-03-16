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
// declaring variables
let shuffle = false;
let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");
let shuffleBtn = document.querySelector("#shuffleBtn");
let repeatBtn = document.querySelector("#repeatBtn");
let playerSeeker = document.querySelector("#playerSeeker");
let queuePlay = document.querySelector(".queuePlay");
let albumSlider = document.querySelector(".albumSlider");
// Initial Source of Music
let index = 0;
let musicPlay = new Audio(musicData[index].src);

//play from Hero Btn
document.querySelector("#heroPlayBtn").addEventListener("click", () => {
  musicPlay.play();
  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

// Start btn function
startBtn.addEventListener("click", () => {
  musicPlay.play();
  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

//Pause btn function

pauseBtn.addEventListener("click", () => {
  musicPlay.pause();
  pauseBtn.style.display = "none";
  startBtn.style.display = "flex";
});

// Seeker Handle
musicPlay.addEventListener("timeupdate", () => {
  playerSeeker.value = (musicPlay.currentTime / musicPlay.duration) * 100;
  document.getElementById("musicPlayingDurationMin").innerText = parseInt(
    musicPlay.currentTime / 60
  );
  let secDur = (
    (musicPlay.currentTime / 60 - parseInt(musicPlay.currentTime / 60)) *
    60
  ).toFixed();
  if (secDur < 10) {
    document.getElementById("musicPlayingDurationSec").innerText = `0${secDur}`;
  } else {
    document.getElementById("musicPlayingDurationSec").innerText = `${secDur}`;
  }
});
playerSeeker.addEventListener("change", () => {
  musicPlay.currentTime = (playerSeeker.value * musicPlay.duration) / 100;
});

// Music Playlist handle
musicPlay.onended = () => {
  if (shuffle == true) {
    index = parseInt(Math.random() * 10);
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  } else if (index < 10) {
    index++;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  } else {
    index = 0;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  }
  document.querySelector(
    "#leftTopArtist"
  ).innerText = `${musicData[index].artist}`;
  document.querySelector(".playerSongInfo").innerHTML = `
  <img src="${musicData[index].img}" id="playerLeftImg" />
  <span
    ><h5>${musicData[index].title}</h5>
    <p>${musicData[index].artist}</p></span
  >`;
};

//Prev-Next Handle
nextBtn.addEventListener("click", () => {
  if (index < 10) {
    index++;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  } else {
    index = 0;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  }
  document.querySelector(
    "#leftTopArtist"
  ).innerText = `${musicData[index].artist}`;
  document.querySelector(".playerSongInfo").innerHTML = `
  <img src="${musicData[index].img}" id="playerLeftImg" />
  <span
    ><h5>${musicData[index].title}</h5>
    <p>${musicData[index].artist}</p></span
  >`;

  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  } else {
    index = musicData.length - 1;
    musicPlay.src = `${musicData[index].src}`;
    musicPlay.play();
  }
  document.querySelector(
    "#leftTopArtist"
  ).innerText = `${musicData[index].artist}`;
  document.querySelector(".playerSongInfo").innerHTML = `
          <img src="${musicData[index].img}" id="playerLeftImg" />
          <span
            ><h5>${musicData[index].title}</h5>
            <p>${musicData[index].artist}</p></span
          >`;

  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

//Music Volume handle
volumeSeeker.addEventListener("change", () => {
  musicPlay.volume = volumeSeeker.value / 100;
  if (musicPlay.volume == 0) {
    document.getElementById("noAudioIcon").style.display = "flex";
    document.getElementById("audioIcon").style.display = "none";
  } else {
    document.getElementById("noAudioIcon").style.display = "none";
    document.getElementById("audioIcon").style.display = "flex";
  }
});
document.getElementById("audioIcon").addEventListener("click", () => {
  musicPlay.volume = 0;
  volumeSeeker.value = 0;
  document.getElementById("audioIcon").style.display = "none";
  document.getElementById("noAudioIcon").style.display = "flex";
});
document.querySelector("#noAudioIcon").addEventListener("click", () => {
  musicPlay.volume = 1;
  volumeSeeker.value = 100;
  document.getElementById("audioIcon").style.display = "flex";
  document.getElementById("noAudioIcon").style.display = "none";
});

//Shuffle Handler
shuffleBtn.addEventListener("click", () => {
  shuffle = true;
  shuffleBtn.style.display = "none";
  repeatBtn.style.display = "flex";
});
repeatBtn.addEventListener("click", () => {
  shuffle = false;
  repeatBtn.style.display = "none";
  shuffleBtn.style.display = "flex";
});

//Play from Queue
queuePlay.addEventListener("click", (e) => {
  index = e.target.className.split(" ")[1];
  musicPlay.src = `${musicData[index].src}`;
  musicPlay.play();
  document.querySelector(".playerSongInfo").innerHTML = `
            <img src="${musicData[index].img}" id="playerLeftImg" />
            <span
              ><h5>${musicData[index].title}</h5>
              <p>${musicData[index].artist}</p></span
            >`;
  //leftTop Artist Name
  document.querySelector(
    "#leftTopArtist"
  ).innerText = `${musicData[index].artist}`;

  //playerSongInfo Handler
  document.querySelector(".playerSongInfo").innerHTML = `
          <img src="${musicData[index].img}" id="playerLeftImg" />
          <span
            ><h5>${musicData[index].title}</h5>
            <p>${musicData[index].artist}</p></span
          >`;
  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

//Play from Album
albumSlider.addEventListener("click", (e) => {
  index = e.target.className.split(" ");
  musicPlay.src = `${musicData[index].src}`;
  musicPlay.play();
  document.querySelector(".playerSongInfo").innerHTML = `
            <img src="${musicData[index].img}" id="playerLeftImg" />
            <span
              ><h5>${musicData[index].title}</h5>
              <p>${musicData[index].artist}</p></span
            >`;
  //leftTop Artist Name
  document.querySelector(
    "#leftTopArtist"
  ).innerText = `${musicData[index].artist}`;

  //playerSongInfo Handler
  document.querySelector(".playerSongInfo").innerHTML = `
          <img src="${musicData[index].img}" id="playerLeftImg" />
          <span
            ><h5>${musicData[index].title}</h5>
            <p>${musicData[index].artist}</p></span
          >`;
  startBtn.style.display = "none";
  pauseBtn.style.display = "flex";
});

//leftTop Artist Name
document.querySelector(
  "#leftTopArtist"
).innerText = `${musicData[index].artist}`;

//playerSongInfo Handler
document.querySelector(".playerSongInfo").innerHTML = `
          <img src="${musicData[index].img}" id="playerLeftImg" />
          <span
            ><h5>${musicData[index].title}</h5>
            <p>${musicData[index].artist}</p></span
          >`;

//sidebar myMusic Handler
musicData.map((curElem, ind) => {
  let myMusicListLi = document.createElement("li");
  myMusicListLi.innerText = `${curElem.title}`;
  document.querySelector("#myMusicList").appendChild(myMusicListLi);
});

//Duration Handler

musicPlay.addEventListener("loadeddata", function () {
  document.getElementById("musicDurationMin").innerText = parseInt(
    musicPlay.duration / 60
  );
  let secDur = (
    (musicPlay.duration / 60 - parseInt(musicPlay.duration / 60)) *
    60
  ).toFixed();
  if (secDur < 10) {
    document.getElementById("musicDurationSec").innerText = `0${secDur}`;
  } else {
    document.getElementById("musicDurationSec").innerText = `${secDur}`;
  }
});
