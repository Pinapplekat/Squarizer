var colors = {
    0: "#ff0000", 1: "#ff1900", 2: "#ff3300", 3: "#ff4c00", 4: "#ff6600",
    5: "#ff7f00", 6: "#ff9900", 7: "#ffb200", 8: "#ffcc00", 9: "#ffe500",
    10: "#ffff00", 11: "#e5ff00", 12: "#ccff00", 13: "#b2ff00", 14: "#99ff00",
    15: "#7fff00", 16: "#66ff00", 17: "#4cff00", 18: "#33ff00", 19: "#19ff00",
    20: "#00ff00", 21: "#00ff19", 22: "#00ff33", 23: "#00ff4c", 24: "#00ff66",
    25: "#00ff7f", 26: "#00ff99", 27: "#00ffb2", 28: "#00ffcc", 29: "#00ffe5",
    30: "#00ffff", 31: "#00e5ff", 32: "#00ccff", 33: "#00b2ff", 34: "#0099ff",
    35: "#007fff", 36: "#0066ff", 37: "#004cff", 38: "#0033ff", 39: "#0019ff",
    40: "#0000ff", 41: "#1900ff", 42: "#3300ff", 43: "#4c00ff", 44: "#6600ff",
    45: "#7f00ff", 46: "#9900ff", 47: "#b200ff", 48: "#cc00ff", 49: "#e500ff",
    50: "#ff00ff", 51: "#ff00e5", 52: "#ff00cc", 53: "#ff00b2", 54: "#ff0099",
    55: "#ff007f", 56: "#ff0066", 57: "#ff004c", 58: "#ff0033", 59: "#ff0019",
    60: "#ff0000", 61: "#ff1a1a", 62: "#ff3333", 63: "#ff4d4d", 64: "#ff6666",
    65: "#ff8080", 66: "#ff9999", 67: "#ffb3b3", 68: "#ffcccc", 69: "#ffe6e6",
    70: "#ffffff", 71: "#e6f0ff", 72: "#cce0ff", 73: "#b3d1ff", 74: "#99c2ff",
    75: "#80b3ff", 76: "#66a3ff", 77: "#4d94ff", 78: "#3385ff", 79: "#1a75ff",
    80: "#0066ff", 81: "#005ce6", 82: "#0052cc", 83: "#0047b3", 84: "#003d99",
    85: "#003380", 86: "#002966", 87: "#001f4d", 88: "#001433", 89: "#000a1a",
    90: "#000000", 91: "#1a1a1a", 92: "#333333", 93: "#4d4d4d", 94: "#666666",
    95: "#808080", 96: "#999999", 97: "#b3b3b3", 98: "#cccccc", 99: "#e6e6e6"
}

var blocks = document.querySelectorAll('.block')
console.log(blocks)

function load() {

    var x = -4
    var y = 4
    blocks.forEach(el => {
        el.setAttribute('x', x)
        el.setAttribute('y', y)
        x++
        if (x > 4) {
            x = -4
            y--
        }
        const getColor = new Function('x', 'y', 'element', document.getElementById('code').value);
        var color = getColor(el.getAttribute('x'), el.getAttribute('y'), el)
        el.style.backgroundColor = colors[color]
        el.style.filter = `drop-shadow(0 0 0.2rem ${colors[color]})`
        el.addEventListener('mouseover', (e) => {
            el.style.outline = '2px solid white'
            document.getElementById('coords').innerText = `X: ${el.getAttribute('x')} Y: ${el.getAttribute('y')} Color: ${color}`
        })
        el.addEventListener('mouseout', (e) => {
            el.style.outline = 'none'
        })
    });
}

load()
document.getElementById('reload').addEventListener('click', load)

document.getElementById('toggleCodespace').addEventListener('click', () => {
    const codespace = document.getElementById('codespace');
    if (codespace.style.display === 'block') {
        codespace.style.display = 'none';
    } else {
        codespace.style.display = 'block';
    }
});

document.body.querySelectorAll('.floating-window').forEach(window => {
    let isDragging = false;
    let offsetX, offsetY;
    window.addEventListener('mousedown', (e) => {
        if (e.target !== window) return;
        isDragging = true;
        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = (e.clientX - offsetX) + 'px';
            window.style.top = (e.clientY - offsetY) + 'px';
        }
    });
});