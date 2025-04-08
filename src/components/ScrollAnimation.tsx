import AOS from 'aos'
import { useRef, useEffect } from 'react'

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
  duration = 800,
  once = true,
  offset = 350,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      AOS.refresh()
    }
  }, [])

  return (
    <div
      ref={ref}
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
