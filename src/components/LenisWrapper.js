import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisWrapper = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisWrapper;
