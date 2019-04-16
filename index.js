

class Menu {
  constructor(attrs){
    this.attrs = attrs;
    console.log(this.attrs)
    this.attrs.addEventListener('mouseover', () => this.changeColor());
    this.attrs.addEventListener('mouseleave', () => this.changeBack());
    this.attrs.addEventListener('click', () => this.showInfo());
  changeColor() {
    this.attrs.classList.remove('oneItem')
    this.attrs.classList.add('oneItemColorChange')
  }
  changeBack() {
    this.attrs.classList.remove('oneItemColorChange')
    this.attrs.classList.add('oneItem')
  }
  showInfo() {
    this.attrs.classList.remove('hidden')
  }
}













let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));
