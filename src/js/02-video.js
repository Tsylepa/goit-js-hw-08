import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe, {});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on("timeupdate", throttle(updateTime, 1000));

function updateTime({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds);
}
