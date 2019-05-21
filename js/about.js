class SelectTab {
  constructor(tabElement){
    this.tabElement = tabElement;
    (this.tabData === "all") ? this.cards = document.querySelectorAll('.team-info') : this.cards = document.querySelectorAll(`.team-info[data-tab="${this.tabData}"]`);
   this.tabElement.addEventListener('click', event => { this.selectTab(event); });
  }

  selectTab(event){
    const clickTarget = event.target;
    let currentSelectedRole = document.querySelector('.team-tab.selected');
    if(currentSelectedRole !== null) { currentSelectedRole = currentSelectedRole.dataset.role; }
    const tabs = document.querySelectorAll('.team-tab');
    tabs.forEach( item => {
      if(item.classList.contains('selected')) { item.classList.remove('selected'); }
    })
    const cards = document.querySelectorAll('.team-info');
    cards.forEach( cardEl => {
      cardEl.classList.remove('hide')
      if(cardEl.classList.contains('selected')) { cardEl.classList.remove('selected'); }
      if(cardEl.dataset.role !== clickTarget.dataset.role) { cardEl.classList.add('hide'); }
    })
    this.tabElement.classList.add('selected');
    if(currentSelectedRole === clickTarget.dataset.role) {
      tabs.forEach( item => {
        if(item.classList.contains('selected')) { item.classList.remove('selected'); }
      })
      cards.forEach( cardEl => {
        cardEl.classList.remove('hide');
      })
    }
  }
}


let tabs = document.querySelectorAll('.team-tab[data-role]');
tabs.forEach( item => {
  const tabLink = new SelectTab(item);
})