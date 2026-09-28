import { Window, getAppWindows } from '../services/windows.js'
import { downloadBlocks } from '../services/download.js'
import { loadBlocks } from '../services/load.js'
import { log } from '../services/boot.js'

class SaveLoadWindow extends Window {
    constructor(name){
        super({name, app: "app.saveload"})
        this.init()
    }

    init(){
        const saveButton = document.createElement('button')
        saveButton.innerText = 'Save'
        saveButton.addEventListener('click', () => {
            downloadBlocks(getAppWindows("app.preview")[0])
            log('Game saved.', "gam")
        })

        const loadButton = document.createElement('button')
        loadButton.innerText = 'Load'
        loadButton.addEventListener('click', () => {
            const fileInput = document.createElement('input')
            fileInput.type = 'file'
            fileInput.accept = '.blocks'
            fileInput.addEventListener('change', (event) => {
                const file = event.target.files[0]
                if(file){
                    loadBlocks(file, getAppWindows("app.preview")[0])
                }
            })
            fileInput.click()
            fileInput.remove()
        })

        this.dom.querySelector('.window-content').appendChild(saveButton)
        this.dom.querySelector('.window-content').appendChild(loadButton)
        
        this.show()
    }

}

export function init(){
    const saveLoadWindow = new SaveLoadWindow('Save/Load');
}