import {AnyFunction} from '../../types';
import {RequestInterval} from '../RequestInterval/RequestInterval';


/**
 * The interface for the returning value of the RequestInterval.
 *
 * @since 3.0.0
 */
export interface ThrottleInstance<F extends AnyFunction> extends Function {
    (...args: Parameters<F>): void;
}

/**
 * Returns the throttled function.
 *
 * @param func     - A function to throttle.
 * @param duration - Optional. Throttle duration in milliseconds.
 *
 * @return A throttled function.
 */
export function Throttle<F extends AnyFunction>(
    func: F,
    duration?: number
): ThrottleInstance<F> {
    const interval = RequestInterval(duration || 0, func, null, 1);

    return () => {
        interval.isPaused() && interval.start();
    };
}
