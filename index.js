

class Menu {
  constructor(attrs){
    this.attrs = attrs;
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
    if (!(document.querySelector(`.schedule[data-tab="${this.data}"]`).classList.contains('hidden'))) {  //checks to see if this condition is false which means its open and just needs to be closed.
      document.querySelector(`.schedule[data-tab="${this.data}"]`).classList.toggle('hidden') //toggles hidden on to close.
    } else {                                                                                //if else statement is reached then it just means that the tab wasn't open so we are going to add hidden to all and then take off on the one we want  open...
      document.querySelectorAll('.schedule').forEach(item => item.classList.add('hidden'));  //adds to hide all photo
      document.querySelectorAll(`[data-tab="${this.data}"]`).forEach(item => item.classList.remove('hidden')); //removes hidden to allow photo to show.
    }
  }
}


let items = document.querySelectorAll('.oneItem').forEach(item => new Menu(item)); //creates nodelist of items with classlist oneitem.
