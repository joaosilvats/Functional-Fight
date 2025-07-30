const fighter = new Knight('meliodas');
const monster = new LittleMonster('baby dragon');
const log = new Log(document.querySelector('.fight-log'));

const stage = new Stage(
  fighter,
  monster,
  document.getElementById('char'),
  document.getElementById('monster'),
  log
);

stage.start();
