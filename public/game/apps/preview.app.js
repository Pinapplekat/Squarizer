import { colors, blocks, allBlocks, gameState } from '../state.js'
import { Window } from "../services/windows.js"

export class PreviewApp extends Window {
    constructor(name) {
        super({name, height: 1060, width: 1020, app: "app.preview"})
        this.blockInfo = {
            previewFrom: null,
            list: null,
            code: null
        }
        this.init()
    }

    init() {
        console.log("Initializing preview app.")
        this.dom.querySelector(".window-content").style.padding = 0
        const blockContainer = document.createElement('div')
        blockContainer.classList.add("block-container")
        blockContainer.innerHTML = '';
        console.log('Creating indiviual blocks.')
        this.draw(blockContainer)
        this.dom.querySelector('.window-content').appendChild(blockContainer)
                 
        this.enter()
        console.log("Initialization for preview app complete")
    }

    draw(container){
        const blockContainer = container ?? this.dom.querySelector('.block-container')
        blockContainer.innerHTML = ''
        for (let y = 4; y >= -4; y--) {
            for (let x = -4; x <= 4; x++) {
                const block = document.createElement('div');
                block.className = 'block';
                block.dataset.x = x
                block.dataset.y = y
                block.dataset.color = Math.abs(x-y)
                block.style.backgroundColor = colors[block.dataset.color];
                blockContainer.appendChild(block);
            }
            console.log("Finished y axis, moving on")
        }
        return blockContainer
    }

    drawFromList(list) {
        if (!list) return { "Error": "Could not draw blocks, No list provided." }
        this.blockInfo.previewFrom = 'list'
        this.blockInfo.list = list
        this.dom.querySelector('.block-container').innerHTML = ''
        console.log("Building blocks from an array: ", list)
        const blockContainer = this.draw()
        list.forEach(el => {
            let nums = {x: Number(el.x), y: Number(el.y)}
            let index = (4-nums.y) * 9 + (4 + nums.x)
            blockContainer.getElementsByClassName('block')[index].style.backgroundColor = colors[el.color]
        });
        this.dom.querySelector('.window-content').appendChild(blockContainer)
        return blockContainer
    }
}

export function init(name){
    name = name ?? "Preview"
    return new PreviewApp(name)
}