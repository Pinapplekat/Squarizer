import { appList } from "../state.js";
import { log } from "./boot.js";
import { getAppWindows, showWindow } from "./windows.js";

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

export function init(){
    const dockDom = document.getElementById('dockTemplate').content.cloneNode(true).children[0]

    appList.forEach(async (app) => {
        const button = document.createElement('button')
        button.innerText = app.name
        let initialization = await importModule(app.path)
        button.onclick = () => {
            if(windowExists(app.app)){
                showWindow(windowExists(app.app).dom)
                return log("Window already exists, opening...", "sys")
            }
            else initialization()
        }
        dockDom.appendChild(button)
    });
    document.body.appendChild(dockDom)
}