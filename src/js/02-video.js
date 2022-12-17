import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTimeKey = 'videoplayer-current-time';

setLastWatchedTime();

player.on('timeupdate', throttle(updateTime, 1000));

function setLastWatchedTime() {
  if (localStorage.getItem(currentTimeKey)) {
    player.setCurrentTime(localStorage.getItem(currentTimeKey));
  }
}

function updateTime({ seconds }) {
  localStorage.setItem(currentTimeKey, seconds);
}
