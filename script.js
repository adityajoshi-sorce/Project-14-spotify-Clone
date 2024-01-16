
//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songName'));

let songs = [
    {songName: "Raabta" , filePath: "songs/1.mp3", coverPath: "Images/1.jpg"},
    {songName: "Cielo - Huma-Huma" , filePath: "songs/2.mp3", coverPath: "Images/2.jpg"},
    {songName: "Deaf Kev ", filePath: "songs/3.mp3", coverPath: "Images/3.jpg"},
    {songName: "Different Heaven  ", filePath: "songs/4.mp3", coverPath: "Images/4.jpg"},
    {songName: "Janji-Heros-Tonight", filePath: "songs/5.mp3", coverPath: "Images/5.jpg"},
    {songName: "Rabba-salam", filePath: "songs/2.mp3", coverPath: "Images/6.jpg"},
    {songName: "Jahangir-salam-", filePath: "songs/3.mp3", coverPath: "Images/7.jpg"},
    {songName: "Hakim-salam", filePath: "songs/4.mp3", coverPath: "Images/8.jpg"},
    {songName: "Jindagi na milegi", filePath: "songs/5.mp3", coverPath: "Images/9.jpg"},
    {songName: "Hallabol milegi", filePath: "songs/10.mp3", coverPath: "Images/10.jpg"},

]

// songItem.forEach((element, i) => {
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
// });

let songItems = Array.from(document.querySelectorAll('.songItem'));

songItems.forEach((element, i) => {
    let imgElement = element.querySelector('img');
    let songNameElement = element.querySelector('.songName');

    imgElement.src = songs[i].coverPath;
    songNameElement.innerText = songs[i].songName;
});



//Handle Play/Pause click
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

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//        element.classList.remove('fa-pause-circle');
//        element.classList.add('fa-play-circle');
//     })
// }



// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         let clickedIndex = parseInt(e.target.id.split('_')[1]);
//         songIndex = clickedIndex;
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex + 1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     });
// });


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// ...

// Function to reset play icon for all songs
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id.split('_')[1]);
        
        if (clickedIndex === songIndex && !audioElement.paused) {
            // Clicked on the currently playing song, so pause it
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        } else {
            // Clicked on a different song or the paused song, so play it
            makeAllPlays();
            songIndex = clickedIndex;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
    });
});

// ...


