//initializing variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector(".gif");
let songName = document.querySelector(".songName");
let songItems = document.querySelectorAll(".songItem"); // corrected variable name

// Define masterSongName to update song name in the footer
let masterSongName = document.querySelector(".songInfo span");

// Define next and previous buttons
let nextButton = document.getElementById('forward');
let previousButton = document.getElementById('back');

// Define songs array
let songs = [
    { songName: "Tumhari Kasam & EH!DE - My Heart [NCS Release]", filepath: "1.mp3" },
    { songName: "Warriyo - Mortals & EH!DE - My Heart [NCS Release]", filepath: "2.mp3" },
    { songName: "Bhula--- denaaaa & EH!DE - My Heart [NCS Release]", filepath: "3.mp3" },
    { songName: "Salaam-e-ishq & EH!!!!DE - My Heart [NCS Release]", filepath: "4.mp3" },
    { songName: "Sakhiyaan - Salam-e-Ishq - My Heart [NCS Release]", filepath: "5.mp3" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filepath: "6.mp3" },
    { songName: "Bhula Dena - Salam-e-Ishq - My Heart [NCS Release]", filepath: "7.mp3" },
    { songName: "jab-wo-ham-say-khty-hain- My Heart [NCS Release]", filepath: "8.mp3" },
    { songName: "Tumhari Kasam  & EH!DE - My Heart [NCS Release]", filepath: "9.mp3" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filepath: "10.mp3" },
];

// Update song names in the playlist
songItems.forEach((element, i) => {
    element.querySelector(".songName").innerText = songs[i].songName;
});

// Play/Pause functionality
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Update progress bar as audio plays
audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Change audio time when progress bar is adjusted
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Next song functionality
nextButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSongAtIndex(songIndex);
});

// Previous song functionality
previousButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSongAtIndex(songIndex);
});

// Function to play song at a given index
function playSongAtIndex(index) {
    audioElement.src = songs[index].filepath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}
