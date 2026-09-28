import {init as initMouse} from './cursor.js'
import {init as initKeyboard} from '../handlers/keyboard.js'
import {init as initSys} from '../services/system.js'
import { debugMode } from '../state.js'

export function log(text, prefix){
    if(prefix == "dbg" && !debugMode) return
    const prefixes = {
        sys: "[ SYSTEM ]",
        dbg: "[ DEBUG  ]",
        rnd: "[ RENDER ]",
        gam: "[ GAME   ]"
    }

    console.log(prefixes[prefix]+" "+text)
}

export function boot(){
    log('Booting game.', 'sys')
    initMouse()
    initKeyboard()
    document.body.style.setProperty('--top-z-index', 1);
    log("Initializing system runtime", 'sys')
    initSys()
    log("System initialized", "sys")

    log("Rendering DOM", "rnd")
    document.getElementById('startscreen').classList.add('hidden')
    log("DOM rendered", "rnd")
    log('Game boot complete.', 'sys')
}

window.onload = boot