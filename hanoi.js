let towers = document.querySelectorAll('.game__tower');
let memo;
let finish = document.querySelector('#finish');
let endMessage = document.querySelector('.end-message');

for (let i = 0; i < towers.length; i++) {
  towers[i].addEventListener('click', () => {

    let tower = towers[i];
    let child = towers[i].querySelector('li');
    
    if (memo && (!child || child.dataset.weight > memo.dataset.weight)) {
      tower.prepend(memo);
      memo = undefined;
      finish.classList.toggle('win', finish.querySelectorAll('li').length === 6);
      if (finish.classList.contains('win')) {
        endMessage.classList.add('visible');
      }
    } else {
      memo = tower.querySelector('li');
    }
  })
}