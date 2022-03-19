console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Lehanga", filePath: "songs/1.mp3", coverPath: "https://lyricsservice.com/wp-content/uploads/2020/05/lehanga-Lyrics.jpg"},
    {songName: "Alone,Part-2", filePath: "songs/2.mp3", coverPath: "data:image/jpeg;base64,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"},
    {songName: " Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "3-Peg", filePath: "songs/4.mp3", coverPath: "https://www.ilyricshub.com/wp-content/uploads/2017/01/3-Peg-Lyrics.png"},
    {songName: "Taki Taki", filePath: "songs/5.mp3", coverPath: "https://c.saavncdn.com/759/Taki-Taki-English-2018-20180927231455-500x500.jpg"},
    {songName: "Brazil la la la", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Amplifier", filePath: "songs/2.mp3", coverPath: "https://paglasongs.com/uploads/thumb/sft3/1407_4.jpg"},
    {songName: "Wahran-Randall", filePath: "songs/2.mp3", coverPath: "https://i.ytimg.com/vi/LiqIQ5He7_4/maxresdefault.jpg"},
    {songName: "Closer", filePath: "songs/2.mp3", coverPath: "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"},
    {songName: "Spectre", filePath: "songs/4.mp3", coverPath: "https://jesusful.com/wp-content/uploads/2022/02/Alan-Walker-The-Spectre-Mp3-Download-Lyrics.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})