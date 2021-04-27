/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicDonutChart/BasicDonutChart.tsx
*/

import React, { RefObject, useEffect, useState } from 'react'
import * as d3 from 'd3'
import { PieArcDatum } from 'd3-shape' // yarn add d3-shape
import { Types } from './types'

const BasicDonutChart = (props: IBasicDonutChartProps) => {
  const ref: RefObject<HTMLDivElement> = React.createRef()
  const [data, setData] = useState<Types.Data[]>([])
  useEffect(() => {
    if (JSON.stringify(props.data) !== JSON.stringify(data)) {
      setData(props.data)

      const { width } = props
      const { height } = props

      const svg = d3
        .select(ref.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2.5})`)

      const color = ['#068606', '#C1C0C0']

      const donut = d3
        .pie<Types.Data>()
        .sort(null)
        .value((record) => record.value)

      const path = d3.arc<PieArcDatum<Types.Data>>().innerRadius(10).outerRadius(20)

      const donutData = donut(props.data)

      const arch = svg
        .selectAll('.arc')
        .data(donutData)
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('fill', (d, i) => {
          return color[i] as string
        })

      arch.append('path').attr('d', path)
    }
  }, [data, props, props.data, props.height, props.width, ref])

  return <div className="basicDonutChart" ref={ref} />
}

interface IBasicDonutChartProps {
  data: Types.Data[]
  width: number
  height: number
}

export default BasicDonutChart
