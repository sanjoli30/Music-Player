const music = document.querySelector('audio')
const play = document.getElementById('play')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const img = document.querySelector('img')

let isPlaying = false
let songindex = 0

const songs = [
  {
    name: 'Stereo-Hearts',
    title: 'Stereo Hearts',
    artist: 'Gym Class Heroes',
    imageType: '.jfif',
  },
  {
    name: 'Without-Me',
    title: 'Without Me',
    artist: 'Hasley',
    imageType: '.png',
  },
  {
    name: 'Blinding-Lights',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    imageType: '.png',
  },
  {
    name: 'Counting-Stars',
    title: 'Counting Stars',
    artist: 'One Republic',
    imageType: '.jpg',
  },
  {
    name: 'The-Scientist',
    title: 'The Scientist',
    artist: 'Coldplay',
    imageType: '.png',
  },
]

const playMusic = () => {
  isPlaying = true
  music.play()
  img.classList.add('anime')
  play.classList.replace('fa-play', 'fa-pause')
}

const pauseMusic = () => {
  isPlaying = false
  music.pause()
  img.classList.remove('anime')
  play.classList.replace('fa-pause', 'fa-play')
}

play.addEventListener('click', () => {
  isPlaying ? pauseMusic() : playMusic()

  //   if (isPlaying) {
  //     pauseMusic()
  //   } else {
  //     playMusic()
  //   }
})

const nextSong = () => {
  // if (++songindex > songs.length-1) {
  //   songindex = 0
  // }
  songindex = (songindex + 1) % songs.length
  loadSong(songs[songindex])
  playMusic()
}

const prevSong = () => {
  // if (--songindex < 0) {
  //   songindex = 4
  // }
  songindex = (songindex - 1 + songs.length) % songs.length
  loadSong(songs[songindex])
  playMusic()
}

const loadSong = (songs) => {
  title.textContent = songs.title
  artist.textContent = songs.artist
  music.src = `music/${songs.name}.mp3`
  img.src = `images/${songs.name}${songs.imageType}`
}
// loadSong(songs[songindex])

next.addEventListener('click', nextSong)

prev.addEventListener('click', prevSong)
