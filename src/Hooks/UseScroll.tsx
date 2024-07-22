import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onScroll = () => {
        setX(window.scrollX);
        setY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return { x, y };
};