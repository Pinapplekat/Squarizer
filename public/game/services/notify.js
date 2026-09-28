import { colors } from "../state.js";

export function notify(message, time, color) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    notification.style.backgroundColor = colors[color]
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, time * 1000 || 3000);
}

export default {
    notify
}