

class Menu {
  constructor(attrs){
    this.attrs = attrs;
    console.log(this.attrs)
    this.attrs.addEventListener('mouseover', () => this.changeColor());
    this.attrs.addEventListener('mouseleave', () => this.changeBack());
    this.attrs.addEventListener('click', () => new Card(this.attrs));
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
    console.log(this.element)
  }
}













let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item));
