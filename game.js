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

var selectedChallenge = null;

var challengesData = [
    [{ "x": "-4", "y": "4" }, { "x": "-3", "y": "4" }, { "x": "-2", "y": "4" }, { "x": "-1", "y": "4" }, { "x": "0", "y": "4" }, { "x": "1", "y": "4" }, { "x": "2", "y": "4" }, { "x": "3", "y": "4" }, { "x": "4", "y": "4" }, { "x": "-4", "y": "3" }, { "x": "-3", "y": "3" }, { "x": "-2", "y": "3" }, { "x": "-1", "y": "3" }, { "x": "0", "y": "3" }, { "x": "1", "y": "3" }, { "x": "2", "y": "3" }, { "x": "3", "y": "3" }, { "x": "4", "y": "3" }, { "x": "-4", "y": "2" }, { "x": "-3", "y": "2" }, { "x": "-2", "y": "2" }, { "x": "-1", "y": "2" }, { "x": "0", "y": "2" }, { "x": "1", "y": "2" }, { "x": "2", "y": "2" }, { "x": "3", "y": "2" }, { "x": "4", "y": "2" }, { "x": "-4", "y": "1" }, { "x": "-3", "y": "1" }, { "x": "-2", "y": "1" }, { "x": "-1", "y": "1" }, { "x": "0", "y": "1" }, { "x": "1", "y": "1" }, { "x": "2", "y": "1" }, { "x": "3", "y": "1" }, { "x": "4", "y": "1" }, { "x": "-4", "y": "0" }, { "x": "-3", "y": "0" }, { "x": "-2", "y": "0" }, { "x": "-1", "y": "0" }, { "x": "0", "y": "0" }, { "x": "1", "y": "0" }, { "x": "2", "y": "0" }, { "x": "3", "y": "0" }, { "x": "4", "y": "0" }, { "x": "-4", "y": "-1" }, { "x": "-3", "y": "-1" }, { "x": "-2", "y": "-1" }, { "x": "-1", "y": "-1" }, { "x": "0", "y": "-1" }, { "x": "1", "y": "-1" }, { "x": "2", "y": "-1" }, { "x": "3", "y": "-1" }, { "x": "4", "y": "-1" }, { "x": "-4", "y": "-2" }, { "x": "-3", "y": "-2" }, { "x": "-2", "y": "-2" }, { "x": "-1", "y": "-2" }, { "x": "0", "y": "-2" }, { "x": "1", "y": "-2" }, { "x": "2", "y": "-2" }, { "x": "3", "y": "-2" }, { "x": "4", "y": "-2" }, { "x": "-4", "y": "-3" }, { "x": "-3", "y": "-3" }, { "x": "-2", "y": "-3" }, { "x": "-1", "y": "-3" }, { "x": "0", "y": "-3" }, { "x": "1", "y": "-3" }, { "x": "2", "y": "-3" }, { "x": "3", "y": "-3" }, { "x": "4", "y": "-3" }, { "x": "-4", "y": "-4" }, { "x": "-3", "y": "-4" }, { "x": "-2", "y": "-4" }, { "x": "-1", "y": "-4" }, { "x": "0", "y": "-4" }, { "x": "1", "y": "-4" }, { "x": "2", "y": "-4" }, { "x": "3", "y": "-4" }, { "x": "4", "y": "-4" }]
]

var blocks = document.querySelectorAll('#blocks .block')
// console.log(blocks)

var blockList = []

function load() {
    blockList = []
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
        if (color > 99 || color < 0) color = 90
        el.setAttribute('color', color)
        var blockInList = { x: el.getAttribute('x'), y: el.getAttribute('y'), color }
        blockList.push(blockInList)
        el.style.backgroundColor = colors[color]
        el.style.filter = `drop-shadow(0 0 0.2rem ${colors[color]})`

    });
}

var allBlocks = document.querySelectorAll('.block')
allBlocks.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        el.style.outline = '2px solid white'
        document.getElementById('coords').innerText = `X: ${el.getAttribute('x')} Y: ${el.getAttribute('y')} Color: ${el.getAttribute('color')}`
    })
    el.addEventListener('mouseout', (e) => {
        el.style.outline = 'none'
    })
})

load()
document.getElementById('reload').addEventListener('click', load)

document.getElementById('export').addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(blockList)).then(() => {
        alert('Block data copied to clipboard!')
    }).catch(err => {
        alert('Failed to copy block data: ', err)
    });
})

document.getElementById('toggleCodespace').addEventListener('click', () => {
    const codespace = document.getElementById('codespace');
    if (codespace.style.display === 'block') {
        codespace.style.display = 'none';
    } else {
        codespace.style.display = 'block';
    }
});

document.getElementById('challenges').addEventListener('click', () => {
    const challenges = document.getElementById('challengesSpace');
    if (challenges.style.display === 'block') {
        challenges.style.display = 'none';
    } else {
        challenges.style.display = 'block';
    }
});

document.getElementById('import').addEventListener('click', () => {
    const dataspace = document.getElementById('dataspace');
    if (dataspace.style.display === 'block') {
        dataspace.style.display = 'none';
    } else {
        dataspace.style.display = 'block';
    }
});

document.getElementById('runImport').addEventListener('click', () => {
    const data = document.getElementById('data').value;
    try {
        const importedBlocks = JSON.parse(data);
        importedBlocks.forEach(block => {
            blocks.forEach(el => {
                if (el.getAttribute('x') == block.x && el.getAttribute('y') == block.y) {
                    el.style.backgroundColor = colors[block.color];
                    el.setAttribute('color', block.color);
                    el.style.filter = `drop-shadow(0 0 0.2rem ${colors[block.color]})`;
                }
            });
        });

        if (compareBlockLists(importedBlocks, blockList)) alert('Imported block data is identical to current data.');
        else blockList = importedBlocks;
        alert('Block data imported successfully!');
    } catch (err) {
        alert('Failed to import block data: ' + err);
    }
});
var challengeBlocks = []
function loadChallengeToChallengeBlocks(challengeBlockList) {
    console.log('Loading challenge:', challengeBlockList);
    var challengeBlockFrame = document.getElementById('challengeblocks');
    if (challengeBlockFrame.classList.contains('hidden')) {
        challengeBlockFrame.classList.remove('hidden');
    }
    var challengeBlocks = document.querySelectorAll('#challengeblocks .block')
    console.log('Selected challenge blocks:', challengeBlocks);
    challengeBlocks.forEach(el => {
        el.style.backgroundColor = 'black';
        el.setAttribute('color', 90);
        el.style.filter = `drop-shadow(0 0 0.2rem ${colors[90]})`;
    });
    console.log('Challenge blocks reset to default.');
    var cx = -4
    var cy = 4
    challengeBlocks.forEach(el => {
        el.setAttribute('x', cx)
        el.setAttribute('y', cy)
        cx++
        if (cx > 4) {
            cx = -4
            cy--
        }
    });
    console.log('Challenge blocks coordinates set.');
    challengeBlockList.forEach(block => {
        document.querySelectorAll('#challengeblocks .block').forEach(el => {
            // console.log(`Checking block at (${el.getAttribute('x')}, ${el.getAttribute('y')}) against challenge block at (${block.x}, ${block.y}) with color ${block.color}`);
            if (el.getAttribute('x') == block.x && el.getAttribute('y') == block.y) {
                console.log("success")
                el.style.backgroundColor = colors[block.color];
                el.setAttribute('color', block.color);
                el.style.filter = `drop-shadow(0 0 0.2rem ${colors[block.color]})`;
            }
        });
    });
    console.log('Challenge blocks loaded with challenge data.');
}

var challengeButtons = document.querySelectorAll('.challenge');
challengeButtons.forEach(button => {
    button.addEventListener('click', () => {
        var challengeIndex = button.getAttribute('data-challenge-index');
        var challengeData = challengesData[challengeIndex];
        loadChallengeToChallengeBlocks(challengeData);
    });
});
// Make floating windows draggable

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

function compareBlockLists(list1, list2) {
    if (list1.length !== list2.length) return false;
    for (let i = 0; i < list1.length; i++) {
        if (list1[i].x !== list2[i].x || list1[i].y !== list2[i].y || list1[i].color !== list2[i].color) {
            return false;
        }
    }
    return true;
}