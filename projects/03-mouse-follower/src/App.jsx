import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0 })

  useEffect(() => {
    console.log('efecto', { enabled })

    const handleMove = (event) =>{
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled]
  )
  

  return (
    <>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      } />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} efecto seguir puntero
      </button>
    </>
  )
}

export default App
