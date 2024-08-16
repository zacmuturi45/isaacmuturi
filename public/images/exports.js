export { default as c } from './copyright.svg';
export { default as hero } from './smile.jpg';
export { default as arrowdown } from './arrowdown.svg';
export { default as insta } from './insta.svg';
export { default as whatsapp } from './whatsapp.svg';
export { default as linkedin } from './linkedin.svg';
export { default as js } from './js.svg';
export { default as ashton } from './ashton.png';
export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: 0,
        transition: {duration: 0.7, delay: 0.025 * i}
    }),
    closed: {
        y: "100%"
    }
}


export const inView = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 1}
    },
    closed: {
        opacity: 0
    }
}
