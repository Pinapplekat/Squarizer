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
        ideTextArea.addEventListener("input", (e) => {
            if (!getAppWindows('app.preview')[0]) return notify('Please open a preview window to see your code in action!', 3, 1)
            
            getAppWindows('app.preview')[0].drawFromCode(ideTextArea.value)
        })
        this.dom.querySelector('.window-content').appendChild(ideTextArea)
        this.enter()
    }
}
export function init() {
    new IDE("IDE")
}