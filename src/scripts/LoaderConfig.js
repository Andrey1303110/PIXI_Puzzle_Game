export let LoaderConfig = {
    bg: require("/src/sprites/bg.png"),
};

for (let i = 1; i <= 9; i++) {
    LoaderConfig[`puzzle${i}`] = require(`/src/sprites/${i}.png`);
}