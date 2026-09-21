export const activeWindows = []

export function toggleWindow(wind){
    if(wind.classList.contains('hidden')){
        showWindow(wind)
    }else{
        hideWindow(wind)
    }
}

export function hideWindow(wind, transition){
    let transitions = {
        fade: 'fade-out',
        slide: 'closing'
    }
    let tClass = transitions[transition] || 'closing'
    wind.classList.add(tClass)
    setTimeout(() => {
        wind.classList.add('hidden')
        wind.classList.remove(tClass)
    }, 300)
}

export function showWindow(wind){
    bringToFront(wind)
    wind.classList.add('opening');
    wind.classList.remove('hidden')
    setTimeout(() => {
        wind.classList.remove('opening')
    })
}

export function bringToFront(element) {
    element.style.zIndex = parseInt(getComputedStyle(document.body).getPropertyValue('--top-z-index')) + 1;
    document.body.style.setProperty('--top-z-index', element.style.zIndex);
    console.log('Bringing to front, new z-index:', toString(element.style.zIndex));
}

export class Window {
    constructor(name){
        this.name = name
        this.id = activeWindows[activeWindows.length-1]?.id + 1 || 0
        this.dom = document.getElementById('windowTemplate').content.cloneNode(true).children[0]
        this.dom.querySelector('.close-window').addEventListener('click', () => {
            this.exit()
        })
        this.dom.querySelector('.window-title').innerText = this.name
        this.dom.setAttribute('id', `window-${this.id}`)
        document.body.appendChild(this.dom)

        activeWindows.push(this)

        this.drag()
        this.bringToFront()

        console.log(`Window ${this.name} created with process ID ${this.id}`)
    }

    enter(){
        showWindow(this.dom)
    }

    show(){
        showWindow(this.dom)
    }

    bringToFront(){
        bringToFront(this.dom)
    }

    hide(){
        hideWindow(this.dom)
    }

    drag(){
        let isDragging = false;
        let offsetX, offsetY;
        this.dom.addEventListener('mousedown', (e) => {
            bringToFront(this.dom);
            if (e.target !== this.dom.querySelector('.window-header-container')) return;
            isDragging = true;
            offsetX = e.clientX - this.dom.offsetLeft;
            offsetY = e.clientY - this.dom.offsetTop;
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                this.dom.style.left = (e.clientX - offsetX) + 'px';
                this.dom.style.top = (e.clientY - offsetY) + 'px';
            }
        });
    }

    exit(){
        this.dom.remove()
        activeWindows.splice(activeWindows.indexOf(this), 1)
        console.log(`Window ${this.name} with process ID ${this.id} exited.`)
    }

}