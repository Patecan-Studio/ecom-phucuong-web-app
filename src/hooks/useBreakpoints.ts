import { useState, useEffect } from 'react';

export const useBreakpoints = () => {
    const [breakpoint, setBreakpoint] = useState('xxl');

    useEffect(() => {
        const calcInnerWidth = () => {
            if (window.innerWidth >= 1440) {
                setBreakpoint('xxl');
            } else
            if (window.innerWidth >= 1200) {
                setBreakpoint('xl');
            } else if (window.innerWidth >= 992) {
                setBreakpoint('lg');
            } else if (window.innerWidth >= 768) {
                setBreakpoint('md');
            } else if (window.innerWidth >= 576) {
                setBreakpoint('sm');
            } else {
                setBreakpoint('xs');
            }
        };

        calcInnerWidth();
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return breakpoint;
}