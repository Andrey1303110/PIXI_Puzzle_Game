export let LoaderConfig = {
    bg: require("/src/sprites/bg.png"),
    click: require("/src/sounds/click.mp3"),
    theme: require("/src/sounds/music.mp3"),
    win: require("/src/sounds/win.mp3"),
};

for (let i = 1; i <= 9; i++) {
    LoaderConfig[`puzzle${i}`] = require(`/src/sprites/${i}.png`);
}