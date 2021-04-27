/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3DataClass/HelloD3DataClass.tsx
*/

import React, { RefObject } from 'react'
import { select } from 'd3-selection'

export default class HelloD3DataClass extends React.PureComponent<IHelloD3DataClassProps, IHelloD3DataClassState> {
  ref: RefObject<HTMLDivElement>

  constructor(props: IHelloD3DataClassProps) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.draw()
  }

  componentDidUpdate(prevProps: IHelloD3DataClassProps, prevState: IHelloD3DataClassState) {
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      this.draw()
    }
  }

  draw = () => {
    // eslint-disable-next-line no-console
    console.log('draw!')
    select(this.ref.current)
      .selectAll('p')
      .data(this.props.data)
      .enter()
      .append('p')
      .text((d) => `d3 ${d}`)
  }

  render() {
    return (
      <div className="HelloD3DataClass" ref={this.ref} />
    )
  }
}

interface IHelloD3DataClassProps {
  data: string[]
}

interface IHelloD3DataClassState {
  // TODO
}