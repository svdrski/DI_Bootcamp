let storage = []

class video  {
  constructor (title, uploader, time) {
    this.title = title,
    this.uploader = uploader,
    this.time = time
    storage.push(this)
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
  }
}

let video1 = new video ('Funny cat', 'Mark', 20)
let video2 = new video ('Sad dog', 'Alex', 120)
let video3 = new video ('Sadaa cat', 'Mark55', 520)
let video4 = new video ('Sadwww dog', 'Alexyy', 1230)
let video5 = new video ('Funny cat Sad', 'Markss', 120)
let video6 = new video ('Sad dog', 'Alex66', 1250)

for (a of storage) {
  a.watch()
}
