export const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.3, delayChildren: 0.2}},
};

export const fadeInUp = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

export const slideInLeft = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut"}},
};

export const slideInRight = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeOut"}},
}

export const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 1.2}},
};

export const bannerSlideInLeft = {
    hidden: {x: -50, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.8, delay: 0.2, ease: "easeOut"}},
};

export const scaleFadeIn = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1, transition: {duration: 0.8, ease: "easeOut"}},
};

export const textFadeUp = {
    hidden: {y: 30, opacity: 0},
    visible: (delay = 0.3) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 0.6, delay},
    }),
};
