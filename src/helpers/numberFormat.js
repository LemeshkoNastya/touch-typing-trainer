function timerFormat(value) {
    if (value < 60) return value + " с";
    else {
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        return `${minutes} мин ${seconds} с`
    }
}

function speedFormat(value) {
    return Math.floor(value) + ' зн./мин';
}

function accuracyFormat(value) {
    return Math.floor(value) + ' %';
}

export {
    timerFormat,
    speedFormat,
    accuracyFormat
}