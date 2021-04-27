/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3DataCloned/HelloD3DataCloned.tsx
*/

import React, { RefObject, useEffect, useState } from 'react'
import './HelloD3Data.scss'
import { select } from 'd3-selection'

const ref: RefObject<HTMLDivElement> = React.createRef()

const HelloD3DataCloned = (props: IHelloD3DataProps) => {

  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    if (JSON.stringify(props.data) !== JSON.stringify(data)){
      setData(props.data)
      // eslint-disable-next-line no-console
      console.log('draw!')
      select(ref.current)
        .selectAll('p')
        .data(data)
        .enter()
        .append('p')
        .text((d) => `d3 ${d}`)
    }
  }, [data, props.data, setData])

  return <div className="HelloD3Data" ref={ref} />
}

interface IHelloD3DataProps {
  data: string[]
}

export default HelloD3DataCloned
