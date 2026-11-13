import { appList } from "../state.js";
import { log } from "./boot.js";
import { getAppWindows, showWindow } from "./windows.js";
import { showTip, hideTip } from "./tooltip.js";

export async function importModule(path){
    try{
        const module = await import(path)
        return module.init
    } catch(e) {
        console.error(`Failed to import; ${e}`)
        throw e
    }
}

function windowExists(app){
    let windows = getAppWindows(app)
    log("Active", "sys")
    if(windows.length > 0) return windows[0]
    else false
}

let isOver = false
let wasOver = false
function magnification(dock){
    dock.addEventListener('pointermove', (e) => {
        if(!isOver) return
        wasOver = true
        for (const app of dock.querySelectorAll(".app-in-dock")){
            let diffToMouse = Math.abs((app.getBoundingClientRect().left+(app.getBoundingClientRect().width / 2)) - e.clientX)
            if(diffToMouse < 200){
                app.style.height = `${50+((200-diffToMouse)/10)}px`
                app.style.width = `${50+((200-diffToMouse)/10)}px`
            }
        }
    })
    dock.addEventListener('pointerover', (e) => {
        isOver = true
    })
    dock.addEventListener('pointerleave', (e) => {
        isOver = false
        if(!wasOver) return
        for (const app of dock.querySelectorAll(".app-in-dock")){
            app.style.height = ''
            app.style.width = ''
        }
    })
}

export function init(){
    const dockDom = document.getElementById('dockTemplate').content.cloneNode(true).children[0]

    appList.forEach(async (app) => {
        const button = document.createElement('button')
        button.className = "app-in-dock"
        button.innerText = app.name
        let initialization = await importModule(app.path)
        button.onclick = () => {
            if(windowExists(app.app)){
                showWindow(windowExists(app.app).dom)
                return log("Window already exists, opening...", "sys")
            }
            else initialization()
        }
        button.onmousemove = () => {
            showTip(app.name, button)
        }
        button.onmouseleave = () => {
            hideTip()
        }
        dockDom.appendChild(button)
    });

    const dockContainer = document.getElementById('appDock')
    dockContainer.appendChild(dockDom)

    magnification(dockContainer)
}