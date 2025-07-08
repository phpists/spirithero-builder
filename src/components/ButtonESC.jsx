import React, {useEffect} from 'react';

const buttonESC = (callback) => {
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') callback();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [callback]);
}

export default buttonESC;