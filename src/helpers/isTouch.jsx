const isTouch = () => {
    return (
        "createTouch" in document ||
        navigator.userAgent.match(/(iPhone|iPod|iPad)/) ||
        navigator.userAgent.match(/BlackBerry/) ||
        navigator.userAgent.match(/Android/)
    );
};

export default isTouch;
