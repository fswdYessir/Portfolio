import { useState, useEffect } from 'react'

interface LoadingProps {
  onComplete: () => void
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setFadeOut(true), 800)
          setTimeout(onComplete, 1000)
          return 100
        }
        return prev + 1
      })
    }, 15)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="!text-white text-4xl font-bold mb-6 animate-pulse">
        loading...
      </h1>

      <div className="w-70 h-4 bg-white  overflow-hidden">
        <div
          className="h-full bg-yellow-400 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="!text-white text-lg mt-2">{progress}%</p>
    </div>
  )
}
