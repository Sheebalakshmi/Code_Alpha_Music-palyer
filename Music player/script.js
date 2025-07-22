let songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    src: "song1.mp3",
    duration: 180,
    albumArt: "album-art1.jpg",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "song2.mp3",
    duration: 240,
    albumArt: "album-art2.jpg",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "song3.mp3",
    duration: 300,
    albumArt: "album-art3.jpg",
  },
];

let currentSong = 0;
let audio = new Audio(songs[currentSong].src);
let isPlaying = false;

let songTitle = document.getElementById("song-title");
let artist = document.getElementById("artist");
let albumArt = document.getElementById("album-art");
let durationDisplay = document.getElementById("duration");
let playPauseBtn = document.getElementById("play-pause-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let progressBar = document.getElementById("progress-bar");
let volumeControl = document.getElementById("volume-control");
let playlist = document.getElementById("playlist");

songTitle.textContent = songs[currentSong].title;
artist.textContent = songs[currentSong].artist;
albumArt.src = songs[currentSong].albumArt;
durationDisplay.textContent = $;
{
  formatTime(currentTime);
}

audio.addEventListener("timeupdate", () => {
  let currentTime = audio.currentTime;
  let duration = audio.duration;
  progressBar.value = (currentTime / duration) * 100;
  durationDisplay.textContent = $;
  {
    formatTime(currentTime);
  }
});

progressBar.addEventListener("input", () => {
  let duration = audio.duration;
  audio.currentTime = (progressBar.value / 100) * duration;
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

playPauseBtn.addEventListener("click")();
{
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "Play";
  } else {
    audio.play();
  }
}
