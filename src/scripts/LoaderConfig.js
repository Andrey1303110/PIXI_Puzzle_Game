export let LoaderConfig = {
    bg: require("../sprites/bg.png"),
};

for (let i = 1; i <= 9; i++) {
    LoaderConfig[`puzzle${i}`] = require(`../sprites/${i}.png`);
}