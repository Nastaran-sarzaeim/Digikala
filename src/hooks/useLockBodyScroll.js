import { useEffect } from "react";

const useLockBodyScroll = (lock) => {
    useEffect(() => {
        if (lock) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [lock])
}
export default useLockBodyScroll