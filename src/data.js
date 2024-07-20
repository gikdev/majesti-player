class Music {
  constructor(name, singer, imageURL, audioURL) {
    this.id = Math.random().toFixed(3)
    this.name = name
    this.singer = singer
    this.imageURL = imageURL
    this.audioURL = audioURL
  }
}

const MUSICS = [
  new Music(
    "نماهنگ خوابم یا بیدار",
    "سجاد محمدی",
    "https://cdnimg.kashoob.com/ETce0e1eNVw6H6cH_zbhqcKHvb_M7lZEXjSk8Ex79pI/fill/200/200/sm/1/bG9jYWw6Ly8vc3RvcmFnZS9pbWFnZS8yMDIzMDcvMTY4OTYxODAzMzMxODYzNDU1MzM4MjUuanBn.webp",
    "https://mir1.kashoob.com/audio/202307/enc_16896172499344366205165.mp3",
  ),
]

export { MUSICS }
