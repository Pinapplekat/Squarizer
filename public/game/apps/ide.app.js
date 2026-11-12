import { Window, getAppWindows } from "../services/windows.js";
import { notify } from "../services/notify.js";

export class IDE extends Window {
    constructor(name) {
        super({ name, app: "app.ide" })

        this.init()
    }

    init() {
        const ideTextArea = document.createElement("textarea")
        ideTextArea.classList.add('codespace')
        let lastChanged = Date.now()
        ideTextArea.addEventListener("keydown", (e) => {
            if(!((!e.altKey && e.ctrlKey && !e.metaKey && !e.shiftKey) && e.key == "Enter")) return
            if (!getAppWindows('app.preview')[0]) return notify('Please open a preview window to see your code run!', 3, 1)
            
            getAppWindows('app.preview')[0].drawFromCode(ideTextArea.value)
        })

        const instr = document.createElement("p")
        instr.innerHTML = "Press <code>SHIFT+ENTER</code> to run your code."
        instr.style.color = "white"
        this.dom.querySelector('.window-content').appendChild(ideTextArea)
        this.dom.querySelector('.window-content').appendChild(instr)
        this.enter()
    }
}
export function init() {
    new IDE("IDE")
}