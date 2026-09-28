import { log } from "./boot.js"

// Load from .blocks file and update the game state
export function loadBlocks(file, process){
    const reader = new FileReader()
    reader.onload = (e) => {
        const contents = e.target.result
        try{
            const blocks = JSON.parse(contents)
            process.drawFromList(blocks)
            log('Game loaded.', "gam")
        } catch (error) {
            console.error('Error loading game:', error)
        }
    }
    reader.onerror = (error) => {
        console.error('Error reading file:', error)
    }
    reader.readAsText(file)
}