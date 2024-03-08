module.exports.Slider = class Slider{
  constructor(){
    this.container = document.getElementById("slider");
    this.btnNext = document.getElementById("btn-next");
    this.btnPrevious = document.getElementById("btn-previous")
    this.createImg = document.createElement("img")
    this.i = 0;
    this.images = null;
  }

  start = async() => {
    await fetch("./photos.json") //array with images
      .then(res => res.json())
      .then(res => this.images = res.photos)

    this.firstPhoto()
    this.nextPhoto()
    this.previousPhoto()
  }

  firstPhoto = () => {
    this.showPhoto(this.images[this.i])
  }

  nextPhoto = () => {
    this.btnNext.addEventListener("click", () => {
      this.i < this.images.length - 1? 
      this.i++: 
      this.i = 0

      this.showPhoto(this.images[this.i])
    })
  }

  previousPhoto = () => {
    this.btnPrevious.addEventListener("click", () => {
      this.i < this.images.length && this.i > 0?
      this.i--:
      this.i = this.images.length - 1;

      this.showPhoto(this.images[this.i])
    })
  }

  showPhoto = image => {
    const img = this.createImg
    img.setAttribute("src", image)
    this.container.appendChild(img)
  }
}