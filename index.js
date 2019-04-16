

class Menu {
  constructor(attrs){
    this.attrs = attrs;
    console.log(this.attrs)
    this.data = this.attrs.dataset.tab;
    this.attrs.addEventListener('mouseover', () => this.changeColor()); //to change color on mouseover
    this.attrs.addEventListener('mouseleave', () => this.changeBack()); //to remove color on mouseleave
    this.attrs.addEventListener('click', () => new Card(this.data));  //to change photos.
  }
  changeColor() {
    this.attrs.classList.remove('oneItem');
    this.attrs.classList.add('oneItemColorChange');

  }
  changeBack() {
    this.attrs.classList.remove('oneItemColorChange');
    this.attrs.classList.add('oneItem');

  }

}

class Card {
  constructor(element) {
    this.element = element;
    console.log(this.element + ' here')
    document.querySelectorAll('.schedule').forEach(item => item.classList.add('hidden'));
    document.querySelectorAll(`[data-tab="${this.element}"]`).forEach(item => item.classList.remove('hidden'));
    console.log(`data-tab="${this.element}"`)
  }
}



let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));

//let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));
