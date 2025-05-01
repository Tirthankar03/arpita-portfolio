export const containerL = (delay) => ({
    //can set any property and use accordingly
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
  })

  export const containerT = (delay) => ({
    //can set any property and use accordingly
    hidden: {y: -100, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
  })

  export const containerR = (duration,delay) => ({
    //can set any property and use accordingly
    hidden: {x: 100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: duration, delay: delay}}
  })

  export const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      },
    }
  }
);
