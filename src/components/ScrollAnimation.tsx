interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: string
  delay?: number
  duration?: number
  once?: boolean
  offset?: number
  className?: string
}

const ScrollAnimation = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  once = true,
  offset = 120,
  className = '',
}: ScrollAnimationProps) => {
  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once={once}
      data-aos-offset={offset}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
