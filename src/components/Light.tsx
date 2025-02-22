import React from 'react'

// //type은 or가능 ex(a|b|c) interface는 불가능 하지만 확장 가능
// type LightProps = {
//   theme: 'light' | 'dark'
// }
interface BaseProps {
  theme: string
}
interface LightProps extends BaseProps {
  theme: 'light' | 'dark'
}

const Light: React.FC<LightProps> = ({ theme }) => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
      {/* Light Stand */}
      <div className="w-1 h-8 sm:h-16 bg-gray-700"></div>

      {/* Lamp Head */}
      <div className="sm:w-36 sm:h-20 w-24 h-10 bg-gray-700 rounded-t-full relative"></div>

      {/* Triangle Light */}
      <div
        className={`absolute sm:top-20 top-10 left-1/2 transform -translate-x-1/2 w-150 h-[300px] opacity-0 transition-all duration-700 pointer-events-none z-30 ${
          theme === 'dark' ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,223,0,0.7), rgba(255,223,0,0.3), rgba(255,223,0,0))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Circular Light */}
      {/* <div
        className={`absolute top-24 w-80 h-80 opacity-60 transition-all duration-700 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle,_rgba(255,223,0,0.6)_0%,_rgba(255,223,0,0)_70%)]'
            : 'bg-transparent'
        }`}
      /> */}
    </div>
  )
}

export default Light
