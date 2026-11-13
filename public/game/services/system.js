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
                let scale = Math.round(50+((200-diffToMouse)/10))
                app.style.height = `${scale}px`
                app.style.width = `${scale}px`
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
        const btnImgCanvas = document.createElement('canvas')
        btnImgCanvas.classList.add('app-image')
        btnImgCanvas.width = 150
        btnImgCanvas.height = 150
        let ctx = btnImgCanvas.getContext('2d')
        ctx.font = 'bold 75px Arial'
        button.style.backgroundColor = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(app.name[0].toLocaleUpperCase(), 75, 80)
        button.className = "app-in-dock"
        button.appendChild(btnImgCanvas)
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