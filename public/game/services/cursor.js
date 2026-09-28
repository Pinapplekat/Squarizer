const cursor = document.getElementById('cursor')
const cursorOutline = document.getElementById('cursorOutline')

let position = { x: 0, y: 0 }
let activelyConformed = false

export function init() {
    cursor.style.display = 'block'
    cursorOutline.style.display = 'block'

    cursorHandler()
}

function cursorHandler() {
    document.addEventListener('pointermove', handleMovement)
    document.addEventListener('pointermove', handleOutlineMovement)
    document.addEventListener('pointerdown', handleMouseDown)
    document.addEventListener('pointerup', handleMouseUp)
    document.addEventListener('pointerover', handleMouseOver)
}

function handleMouseOver(e) {
    if (e.target.classList.contains('block') || e.target.tagName == "BUTTON") {
        conform(e.target)
    } else {
        unconform()
        if (e.target.tagName == "TEXTAREA") {
            cursorOutline.classList.add('carat')
            cursor.classList.add('hidden')
        } else {
            cursor.classList.remove('hidden')
            cursorOutline.classList.remove('carat')
        }
    }
}

function handleMouseUp() {
    cursorOutline.style.opacity = '0.6'
    if (activelyConformed) {
        cursorOutline.style.transform = 'scale(1)'
    }
    else cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)'
}

function handleMouseDown() {
    cursorOutline.style.opacity = '0.9'
    if (activelyConformed) {
        cursorOutline.style.transform = 'scale(1.05)'
    }

}

function handleMovement(e) {
    position.x = e.clientX
    position.y = e.clientY
    cursor.style.top = e.clientY + 'px'
    cursor.style.left = e.clientX + 'px'
}

function handleOutlineMovement(e){
    position.x = e.clientX
    position.y = e.clientY
    cursorOutline.style.translate = position.x + 'px ' + position.y + 'px'
}

function conform(object) {
    activelyConformed = true
    document.removeEventListener('pointermove', handleOutlineMovement)
    cursorOutline.style.borderRadius = getComputedStyle(object).borderRadius
    cursorOutline.style.opacity = 0.2
    cursorOutline.style.width = object.getBoundingClientRect().width + 'px'
    cursorOutline.style.height = object.getBoundingClientRect().height + 'px'
    cursorOutline.style.translate = object.getBoundingClientRect().left + 'px ' + object.getBoundingClientRect().top + 'px'
    cursorOutline.style.transform = 'translate(0,0)'
    cursorOutline.style.outline = '0.2vh solid rgb(255, 255, 255)'
}

function unconform() {
    activelyConformed = false
    document.addEventListener('pointermove', handleOutlineMovement)
    cursorOutline.style.borderRadius = ''
    cursorOutline.style.opacity = ''
    cursorOutline.style.width = ''
    cursorOutline.style.height = ''
    cursorOutline.style.transform = ''
    cursorOutline.style.outline = ''
}

function killListeners() {
    document.removeEventListener('pointermove', handleMovement)
    document.removeEventListener('pointermove', handleOutlineMovement)
    document.removeEventListener('pointerdown', handleMouseDown)
    document.removeEventListener('pointerup', handleMouseUp)
    document.removeEventListener('pointerover', handleMouseOver)
}

export function kill() {
    cursor.style.display = 'none'
    cursorOutline.style.display = 'none'
    killListeners()
}