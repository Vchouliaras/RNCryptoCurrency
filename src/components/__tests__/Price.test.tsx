import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Price from '../Price/Price.component'

describe('Price Component', () => {
  it('renders correctly', () => {
    const wrapper: ShallowWrapper = shallow(<Price price={12} symbol={'$'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
