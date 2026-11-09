import { Window, getAppWindows } from "../services/windows.js";
import { PreviewApp } from "./preview.app.js";
import { notify } from "../services/notify.js";


const thisChal = {
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


export class ChallengesApp extends PreviewApp {
    constructor(challenge) {
        super(challenge.name, true, challenge.render)

        this.init()
    }
}
export function init() {
    new ChallengesApp(thisChal)
}