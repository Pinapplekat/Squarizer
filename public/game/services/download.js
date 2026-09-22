// Downloads a .blocks file containing the current state of the game
export function downloadBlocks(process){
    let allBlocks = process.blockInfo.list
    const blob = new Blob([JSON.stringify(allBlocks)], {type: 'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'squarizer.blocks'
    a.click()
    URL.revokeObjectURL(url)
    a.remove()
}