import AOS from 'aos'
import { useRef, useState, useEffect } from 'react'

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
  offset,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 800)
  }, [])

  useEffect(() => {
    if (ref.current) {
      AOS.refresh()
    }
  }, [isMobile])

  return (
    <div
      ref={ref}
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once={once}
      data-aos-offset={offset ?? (isMobile ? 120 : 350)}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
