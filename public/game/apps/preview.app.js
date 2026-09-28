import { colors, blocks, allBlocks, gameState } from '../state.js'
import { Window } from "../services/windows.js"
import { notify } from '../services/notify.js'

export class PreviewApp extends Window {
    constructor(name) {
        super({ name, height: 1060, width: 1020, app: "app.preview" })
        this.blockInfo = {
            previewFrom: null,
            list: null,
            code: null
        }
        this.init()

    }

    init() {
        this.dom.querySelector(".window-content").style.padding = 0
        const blockContainer = document.createElement('div')
        blockContainer.classList.add("block-container")
        blockContainer.innerHTML = '';
        this.dom.querySelector('.window-content').appendChild(blockContainer)

        let code = `
        return 90

        `

        this.drawFromCode(code)
        this.enter()
    }

    render(list) {
        // defines list/container
        if (!list) return { "Error": "Could not draw blocks, No list provided." }
        const blockContainer = this.dom.querySelector('.block-container')
        blockContainer.innerHTML = ''

        //iterates through each possible block
        for (let y = 4; y >= -4; y--) {
            for (let x = -4; x <= 4; x++) {
                //creates block at coordinates
                const block = document.createElement('div');
                block.className = 'block';
                block.dataset.x = x
                block.dataset.y = y
                block.dataset.color = null
                block.style.backgroundColor = "rgba(0,0,0,0)";
                blockContainer.appendChild(block);
                block.addEventListener('click', (e) => {
                    navigator.clipboard.writeText(block.dataset.color)
                    notify("Color ("+block.dataset.color+") copied to clipboard", 1, 23)
                })
                block.addEventListener('pointerenter', () => {
                    block.innerText = block.dataset.color
                })
                block.addEventListener('pointerleave', () => {
                    block.innerText = ''
                })
            }
        }

        list.forEach(el => {
            let nums = { x: Number(el.x), y: Number(el.y) }
            let index = (4 - nums.y) * 9 + (4 + nums.x)
            blockContainer.getElementsByClassName('block')[index].dataset.color = el.color
            blockContainer.getElementsByClassName('block')[index].style.backgroundColor = colors[el.color]
        });
        this.dom.querySelector('.window-content').appendChild(blockContainer)
        return blockContainer
    }

    drawFromList(list) {
        if (!list) return { "Error": "Could not draw blocks, No list provided." }
        this.blockInfo.list = list
        this.blockInfo.previewFrom = "list"
        this.render(list)
    }

    drawFromCode(code) {
        let emulateCode
        try{
            emulateCode = new Function('x', 'y', code)
        } catch(e){
            return notify("Could not compile", 3, 1)
        }
        let listOfBlocksGenerated = []
        for(let y = 4; y >= -4; y--){
            for(let x = -4; x <= 4; x++){
                let color
                try{
                    color = Math.min(Math.max(Math.trunc(emulateCode(x, y)), 0), 99)
                }catch(e){
                    console.error("Code generation failed",e)
                    return notify("Code generation failed", 3, 1)
                }
                const thisBlock = {
                    x,
                    y,
                    color
                }
                listOfBlocksGenerated.push(thisBlock)
            }
            
        }
        this.blockInfo.list = listOfBlocksGenerated
        this.blockInfo.previewFrom = 'code'
        this.render(this.blockInfo.list)
    }
}

export function init() {
    let name = "Preview"
    return new PreviewApp(name)
}