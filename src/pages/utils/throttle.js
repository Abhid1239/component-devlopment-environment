/* eslint-disable no-unused-vars */
export default function throttle(func, delay = 100) {
    let prevCall = 0;
    let timer;
    return (...args) => {
        clearTimeout(timer);
        const currentTime = Date.now();
        timer = setTimeout(
            () => {
                prevCall = currentTime;
                return func(...args);
            },
            Math.max(delay - (currentTime - prevCall), 0),
        );
    };
}

// a -> ^ dekay -> expect
// b -> ``delay -> expect

export function throttleWithTimeout(func, delay = 100, _lastObserve = false) {
    let shouldDelay = false;
    return () => {
        if (shouldDelay) return;
        shouldDelay = true;
        setTimeout(() => {
            shouldDelay = false;
            func(this, arguments);
        }, delay);
    };
}
