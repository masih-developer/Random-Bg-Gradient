// DOM Element
const body = document.querySelector("body");
const title = document.querySelector(".title");

// Generate Random Color
const genRgbColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
}

// Convert Rgb to Hex
const rgbToHex = c => {
    let hex = c.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
}

// Show Result Bg
const createRandomColor = () => {
    let color1 = genRgbColor();
    let color2 = genRgbColor();
    body.style.background = `linear-gradient(to right bottom, ${color1}, ${color2})`;
    title.innerHTML = `linear-gradient(to right bottom, ${color1}, ${color2})`;
}

// widnow Load Event
window.onload = () => {
    createRandomColor();
    setInterval(() => {
        createRandomColor();
    }, 3000);
}

