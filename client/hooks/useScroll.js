import { useEffect, useState } from 'react';

const useScroll = (threshold) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled( scrollY > threshold );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            return window.removeEventListener('scroll', handleScroll);
        };

    }, [threshold])

    return isScrolled;
}

export default useScroll;