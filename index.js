

class Menu {
  constructor(attrs){
    this.attrs = attrs;
    console.log(this.attrs)
    this.data = this.attrs.dataset.tab;
    this.attrs.addEventListener('mouseover', () => this.changeColor()); //to change color on mouseover
    this.attrs.addEventListener('mouseleave', () => this.changeBack()); //to remove color on mouseleave
    this.attrs.addEventListener('click', () => this.changePhotos());
  }
  changeColor() {
    this.attrs.classList.remove('oneItem');
    this.attrs.classList.add('oneItemColorChange');

  }
  changeBack() {
    this.attrs.classList.remove('oneItemColorChange');
    this.attrs.classList.add('oneItem');

  }
  changePhotos() {
    document.querySelectorAll('.schedule').forEach(item => item.classList.add('hidden'));
    document.querySelectorAll(`[data-tab="${this.data}"]`).forEach(item => item.classList.remove('hidden'));
  }

}


let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));

//let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));
