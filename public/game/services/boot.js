import {init as initMouse, kill as killCursor} from './cursor.js'
import {init as initKeyboard} from '../handlers/keyboard.js'
import {init as initSaveLoad} from '../apps/saveload.app.js'
import {init as initPreview} from '../apps/preview.app.js'

export function boot(){
    console.log('Booting game.')
    initMouse()
    initKeyboard()
    console.log('Game boot complete.')

    //testing purposes
    let arr = {
    "name": "Checkerboard",
    "render": [
        {
            "x": "-4",
            "y": "4",
            "color": 70
        },
        {
            "x": "-3",
            "y": "4",
            "color": 90
        },
        {
            "x": "-2",
            "y": "4",
            "color": 70
        },
        {
            "x": "-1",
            "y": "4",
            "color": 90
        },
        {
            "x": "0",
            "y": "4",
            "color": 70
        },
        {
            "x": "1",
            "y": "4",
            "color": 90
        },
        {
            "x": "2",
            "y": "4",
            "color": 70
        },
        {
            "x": "3",
            "y": "4",
            "color": 90
        },
        {
            "x": "4",
            "y": "4",
            "color": 70
        },
        {
            "x": "-4",
            "y": "3",
            "color": 90
        },
        {
            "x": "-3",
            "y": "3",
            "color": 70
        },
        {
            "x": "-2",
            "y": "3",
            "color": 90
        },
        {
            "x": "-1",
            "y": "3",
            "color": 70
        },
        {
            "x": "0",
            "y": "3",
            "color": 90
        },
        {
            "x": "1",
            "y": "3",
            "color": 70
        },
        {
            "x": "2",
            "y": "3",
            "color": 90
        },
        {
            "x": "3",
            "y": "3",
            "color": 70
        },
        {
            "x": "4",
            "y": "3",
            "color": 90
        },
        {
            "x": "-4",
            "y": "2",
            "color": 70
        },
        {
            "x": "-3",
            "y": "2",
            "color": 90
        },
        {
            "x": "-2",
            "y": "2",
            "color": 70
        },
        {
            "x": "-1",
            "y": "2",
            "color": 90
        },
        {
            "x": "0",
            "y": "2",
            "color": 70
        },
        {
            "x": "1",
            "y": "2",
            "color": 90
        },
        {
            "x": "2",
            "y": "2",
            "color": 70
        },
        {
            "x": "3",
            "y": "2",
            "color": 90
        },
        {
            "x": "4",
            "y": "2",
            "color": 70
        },
        {
            "x": "-4",
            "y": "1",
            "color": 90
        },
        {
            "x": "-3",
            "y": "1",
            "color": 70
        },
        {
            "x": "-2",
            "y": "1",
            "color": 90
        },
        {
            "x": "-1",
            "y": "1",
            "color": 70
        },
        {
            "x": "0",
            "y": "1",
            "color": 90
        },
        {
            "x": "1",
            "y": "1",
            "color": 70
        },
        {
            "x": "2",
            "y": "1",
            "color": 90
        },
        {
            "x": "3",
            "y": "1",
            "color": 70
        },
        {
            "x": "4",
            "y": "1",
            "color": 90
        },
        {
            "x": "-4",
            "y": "0",
            "color": 70
        },
        {
            "x": "-3",
            "y": "0",
            "color": 90
        },
        {
            "x": "-2",
            "y": "0",
            "color": 70
        },
        {
            "x": "-1",
            "y": "0",
            "color": 90
        },
        {
            "x": "0",
            "y": "0",
            "color": 70
        },
        {
            "x": "1",
            "y": "0",
            "color": 90
        },
        {
            "x": "2",
            "y": "0",
            "color": 70
        },
        {
            "x": "3",
            "y": "0",
            "color": 90
        },
        {
            "x": "4",
            "y": "0",
            "color": 70
        },
        {
            "x": "-4",
            "y": "-1",
            "color": 90
        },
        {
            "x": "-3",
            "y": "-1",
            "color": 70
        },
        {
            "x": "-2",
            "y": "-1",
            "color": 90
        },
        {
            "x": "-1",
            "y": "-1",
            "color": 70
        },
        {
            "x": "0",
            "y": "-1",
            "color": 90
        },
        {
            "x": "1",
            "y": "-1",
            "color": 70
        },
        {
            "x": "2",
            "y": "-1",
            "color": 90
        },
        {
            "x": "3",
            "y": "-1",
            "color": 70
        },
        {
            "x": "4",
            "y": "-1",
            "color": 90
        },
        {
            "x": "-4",
            "y": "-2",
            "color": 70
        },
        {
            "x": "-3",
            "y": "-2",
            "color": 90
        },
        {
            "x": "-2",
            "y": "-2",
            "color": 70
        },
        {
            "x": "-1",
            "y": "-2",
            "color": 90
        },
        {
            "x": "0",
            "y": "-2",
            "color": 70
        },
        {
            "x": "1",
            "y": "-2",
            "color": 90
        },
        {
            "x": "2",
            "y": "-2",
            "color": 70
        },
        {
            "x": "3",
            "y": "-2",
            "color": 90
        },
        {
            "x": "4",
            "y": "-2",
            "color": 70
        },
        {
            "x": "-4",
            "y": "-3",
            "color": 90
        },
        {
            "x": "-3",
            "y": "-3",
            "color": 70
        },
        {
            "x": "-2",
            "y": "-3",
            "color": 90
        },
        {
            "x": "-1",
            "y": "-3",
            "color": 70
        },
        {
            "x": "0",
            "y": "-3",
            "color": 90
        },
        {
            "x": "1",
            "y": "-3",
            "color": 70
        },
        {
            "x": "2",
            "y": "-3",
            "color": 90
        },
        {
            "x": "3",
            "y": "-3",
            "color": 70
        },
        {
            "x": "4",
            "y": "-3",
            "color": 90
        },
        {
            "x": "-4",
            "y": "-4",
            "color": 70
        },
        {
            "x": "-3",
            "y": "-4",
            "color": 90
        },
        {
            "x": "-2",
            "y": "-4",
            "color": 70
        },
        {
            "x": "-1",
            "y": "-4",
            "color": 90
        },
        {
            "x": "0",
            "y": "-4",
            "color": 70
        },
        {
            "x": "1",
            "y": "-4",
            "color": 90
        },
        {
            "x": "2",
            "y": "-4",
            "color": 70
        },
        {
            "x": "3",
            "y": "-4",
            "color": 90
        },
        {
            "x": "4",
            "y": "-4",
            "color": 70
        }
    ]
}
    document.getElementById('startscreen').classList.add('hidden')
    const previewWindow = initPreview(arr.name)
    // previewWindow.drawFromList(arr.render)

    initSaveLoad()
}

window.onload = boot