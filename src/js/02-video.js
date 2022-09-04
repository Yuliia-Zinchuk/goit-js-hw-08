import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay(data) {
  // console.log(data.seconds);
  //console.log(JSON.stringify(data));

  // const stringData = JSON.stringify(data);
  //console.log(stringData);

  //   const objgData = JSON.parse(stringData);
  //   console.log(objgData);
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //console.log(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlay, 1000));

const stopTimeLast = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(stopTimeLast);
