import React, { useEffect, useState } from 'react'

const Progressbar = ({value = 0}) => {
    const [percent,setPercent] = useState(value)

    useEffect(()=>{
    setPercent(Math.min(100, Math.max(value, 0)))
    })
  return (
    <div>
        <h1>ProgressBar</h1>
        <div className="progress">
            <span
            style={{
                color: percent > 49 ? 'white': 'black'
            }}
            >{percent.toFixed()}%</span>
            <div
            style={{
                transform: `scaleX(${percent / 100})`,
                transformOrigin: 'left'
            }}
            role='progressbar'
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent.toFixed()}
            />
        </div>
    </div>
  )
}

export default Progressbar