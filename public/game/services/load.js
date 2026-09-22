// Load from .blocks file and update the game state
import { allBlocks } from '../state.js'

export function loadBlocks(file, process){
    const reader = new FileReader()
    reader.onload = (e) => {
        const contents = e.target.result
        try{
            const blocks = JSON.parse(contents)
            allBlocks.length = 0 // Clear existing blocks
            allBlocks.push(...blocks) // Add new blocks
            process.drawFromList(blocks)
            console.log('Game loaded.')
        } catch (error) {
            console.error('Error loading game:', error)
        }
    }
    reader.onerror = (error) => {
        console.error('Error reading file:', error)
    }
    reader.readAsText(file)
}