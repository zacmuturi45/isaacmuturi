export { default as c } from './copyright.svg';
export { default as hero } from './smile.jpg';
export { default as arrowdown } from './arrowdown.svg';
export { default as insta } from './insta.svg';
export { default as whatsapp } from './whatsapp.svg';
export { default as linkedin } from './linkedin.svg';
export { default as js } from './js.svg';
export { default as ashton } from './ashton.png';
export { default as cwhite } from './cwhite.svg';
export { default as gamebug } from './gamebug.png';
export { default as python } from './python.svg';
export { default as react } from './react.svg';
export { default as sass } from './sass.svg';
export { default as boy } from './boy.png';
export { default as arrowblack } from './arrowblack.svg';
export { default as nextj } from './next.svg';
export { default as docker } from './docker.svg';
export { default as flask } from './flask.svg';
export { default as framer } from './framer.svg';
export { default as postgres } from './postgres.svg';
export { default as nextjs } from './nextjs.svg';
export { default as graphq } from './graphql.svg';
export { default as greensock } from './gsap.svg';
export { default as github } from './github.svg';
export { default as chat } from './chat.svg';
export { default as gb1 } from './gb1.png';
export { default as gb2 } from './gb2.png';
export { default as gb3 } from './gb3.png';
export { default as gb4 } from './gb4.png';
export { default as gb5 } from './gb5.png';
export { default as gb6 } from './gb6.png';
export { default as gb7 } from './gb7.png';
export { default as gb8 } from './gb8.png';
export { default as gb9 } from './gb9.png';
export { default as gb10 } from './gb10.png';
export { default as gb11 } from './gb11.png';
export { default as globe } from './globe.svg';
export { default as theway } from './theway.jpg';
export { default as wand } from './wand.svg';
export { default as front } from './front.svg';
export { default as back } from './back.svg';
export { default as career } from './career.svg';
export { default as authenticate } from './authenticate.svg';
export { default as library } from './library.svg';
export { default as responsive } from './responsive.svg';
export { default as search } from './search.svg';
export { default as alembic } from './alembic.svg';
export { default as apollo } from './apollo.svg';
export { default as wave } from './wave.svg';


export const localTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const timeZoneOffset = -now.getTimezoneOffset() / 60
    const gmtSign = timeZoneOffset >= 0 ? '+' : '-';
    const gmtOffset = `${gmtSign}${Math.abs(timeZoneOffset)}`;

    const formattedHours = hours >=10 ? hours : `0${hours}`
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`

    const am_pm = hours >= 12 ? 'PM' : 'AM';

    const time_now = `${formattedHours}:${formattedMinutes} ${am_pm} GMT${gmtOffset}`

    return time_now
}



export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: 0,
        transition: {duration: 0.9, delay: 0.025 * i}
    }),
    closed: {
        y: "100%"
    }
}

export const slideUp2 = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: 0,
        transition: {duration: 0.8, delay: 0.08 * i}
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

export const menuSlide = {
    initial: {
        x: "115%"
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.85, 0, 0.15, 1]}
    },
    exit: {
        x: "115%",
        transition: {duration: 0.8, ease: [0.85, 0, 0.15, 1]}
    }
}

export const slide = {
    initial: {
        x: "80px"
    },
    enter: (i) => ({
        x: "0px",
        transition: {duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.05 * i}
    }),
    exit: (i) => ({
        x: "80px",
        transition: {duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.05 * i}
    })
}














 