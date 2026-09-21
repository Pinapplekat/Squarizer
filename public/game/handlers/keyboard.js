import { gameState } from '../state.js';

// Toggle pause state
function togglePause(){
    if(gameState.paused){
        gameState.paused = false;
        document.getElementById('startscreen').classList.remove('hidden');
    }else{
        gameState.paused = true;
        document.getElementById('startscreen').classList.add('hidden');
    }
}

export function init(){

    // Escape key
    document.body.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            togglePause()
        }
    })

}

export default {
    init
}