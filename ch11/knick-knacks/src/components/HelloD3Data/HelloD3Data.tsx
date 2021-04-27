/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3Data/HelloD3Data.tsx
*/

import React, { RefObject, useEffect } from 'react'
import { select, selectAll } from 'd3-selection'

const ref: RefObject<HTMLDivElement> = React.createRef()

const HelloD3Data = (props: IHelloD3DataProps) => {
  useEffect(() => {
    draw()
  })

  const draw = () => {
    const previousData: string[] = []
    const p = selectAll('p')
    p.each((d, i) => {
      previousData.push(d as string)
    })
    if (JSON.stringify(props.data) !== JSON.stringify(previousData)) {
      // eslint-disable-next-line no-console
      console.log('draw!')
      select(ref.current)
        .selectAll('p')
        .data(props.data)
        .enter()
        .append('p')
        .text((d) => `d3 ${d}`)
    }
  }
  return <div className="HelloD3Data" ref={ref} />
}

interface IHelloD3DataProps {
  data: string[]
}

export default HelloD3Data
