import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Info from '../Info/Info.component'

describe('Info Component', () => {
  beforeEach(() => jest.useFakeTimers())

  it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(<Info />)

    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount: starts the timer', () => {
    const wrapper: ShallowWrapper = shallow(<Info />)

    jest.runOnlyPendingTimers()

    expect(wrapper.state('seconds')).toBeGreaterThan(0)
  })
})
