import React, { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import './App.css'

function App() {
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)

  const confettiRef = useRef(null)

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight)
    setWidth(confettiRef.current.clientWidth)
  }, [])

  return (
    <React.Fragment>
      <div className="main-div" ref={confettiRef}>
        <div className="center_div">
          <p>Wishing You a Very Happy Birthday!
            <br />
            Stay Happy & Bleesed <br />
            <span className="love">❤</span> from Soumyadeep
            <Confetti
              numberOfPieces={250}
              width={width}
              height={height}
            />
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App