const cursor = document.getElementById('cursor')
const cursorOutline = document.getElementById('cursorOutline')

let cursorMove;
let position = { x: 0, y: 0 }

export function init(){
    console.log('Loading cursor.')

    cursor.style.display = 'block'
    cursorOutline.style.display = 'block'

    cursorHandler()
    
    console.log('Cursor load complete')
}

function cursorHandler(){
    cursorMove = document.addEventListener('mousemove', (e) => {
        position.x = e.clientX
        position.y = e.clientY
        cursor.style.top = e.clientY + 'px'
        cursor.style.left = e.clientX + 'px'
        cursorOutline.style.translate = position.x + 'px ' + position.y + 'px'
    })
    document.addEventListener('mousedown', () => {
        cursorOutline.style.opacity = '0.9'
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.1)'
    })
    document.addEventListener('mouseup', () => {
        cursorOutline.style.opacity = '0.6'
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)'
    })
}

export function kill(){
    console.log('Killing cursor.')
    cursor.style.display = 'none'
    cursorOutline.style.display = 'none'
    document.removeEventListener('mousemove', cursorMove)
}