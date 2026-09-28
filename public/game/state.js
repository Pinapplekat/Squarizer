import { colors as acolors } from "./resources/colors.js";

export const colors = acolors

export let debugMode = false;

export const blocks = []
export const allBlocks = []

export let gameState = {
    paused: false
}

export const appList = [
    {
        name: "IDE",
        path: "../apps/ide.app.js",
        app: "app.ide"
    },
    {
        name: "Preview",
        path: "../apps/preview.app.js",
        app: "app.preview"
    },
    {
        name: "Save/Load",
        path: "../apps/saveload.app.js",
        app: "app.saveload"
    }
]
