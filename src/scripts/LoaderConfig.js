export let LoaderConfig = {
    bg: require("../sprites/bg.png"),
    bg: require("../sprites/bg.png"),
    click: require("../sounds/click.mp3"),
    theme: require("../sounds/music.mp3"),
    win: require("../sounds/win.mp3"),
};

for (let i = 1; i <= 9; i++) {
    LoaderConfig[`puzzle${i}`] = require(`../sprites/${i}.png`);
}