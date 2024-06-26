import { useRef, useEffect } from "react"

const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) {
        return false
    }
    if (prevDeps.length !== nextDeps.length) {
        return false
    }
    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) {
            return false
        }
    }
    return true
}
export const useCustomMemo = (cb, deps) => {
    // variable or state -> cashed Value
    // changes in deps
    // cleanup logic
    const memoizedRef = useRef();

    if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }
    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        };
    }, []);

    return memoizedRef.current.value;


}