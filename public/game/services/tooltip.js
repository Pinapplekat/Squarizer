export const toolTipObj = document.querySelector('.tooltip-app')

let prevObj;

export function showTip(content, obj){
    const toolTipDiv = document.querySelector('.tooltip-app')
    const toolTipTextDiv = document.querySelector('.tooltip-text')
    toolTipTextDiv.innerText = content
    toolTipDiv.style.left = `${(obj.getBoundingClientRect().left)+((obj.getBoundingClientRect().width/2)-(toolTipDiv.getBoundingClientRect().width/2))}px`
    toolTipDiv.style.top = `${obj.getBoundingClientRect().top - (toolTipDiv.getBoundingClientRect().height+10)}px`
    toolTipDiv.style.display = "block"
}

export function hideTip(){
    toolTipObj.style.display = "none"
}