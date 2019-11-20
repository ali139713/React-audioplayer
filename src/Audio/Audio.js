
const init = () => {
    const audio = new Audio();

    const setSong = (path) => {};
    const play = () => {};

    return {
        audio,
        setSong,
        play,
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