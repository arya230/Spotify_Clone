console.log("Welcome to Spotify");

//initialize the variables
 let songIndex = 0; 
 let audioElement = new Audio('1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar = getElementById('myProgressBar');
 let songs = [
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"}
]

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})

//LISTEN TO EVENTS
myProgressBar.addEventListener('timeupdate', ()=> {
    console.log("timeupdate"); 
    //update seekbar
}) 
