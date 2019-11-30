
const init = () => {
    const audio = new Audio();

    const setSong = (src) => {
        if (!src) return;

        audio.src = src;
    };
    const playSong = () => {
        if (!audio.src) return;

        audio.play();
    };

    return {
        setSong,
        playSong,
    }
}

let instance = null
const getInstance = () => {
    if (!instance) {
        instance = init();
    } 
    return instance;
}

export default {
    getInstance,
}