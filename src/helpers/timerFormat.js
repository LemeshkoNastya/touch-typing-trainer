export default function timerFormat(value) {
    if (value < 60) return value + " с";
    else {
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        return `${minutes} мин ${seconds} с`
    }
}