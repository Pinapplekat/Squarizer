import {init as initMouse, kill as killCursor} from './cursor.js'
import {init as initKeyboard} from '../handlers/keyboard.js'
import {init as initSaveLoad} from '../apps/saveload.app.js'

export function boot(){
    console.log('Booting game.')
    initMouse()
    initKeyboard()
    console.log('Game boot complete.')

    //testing purposes
    document.getElementById('startscreen').classList.add('hidden')
    initSaveLoad()
}

window.onload = boot