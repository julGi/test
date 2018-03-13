import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import App from './App'
import GuessCount from './GuessCount'

describe('Initialize app', () => {
  const wrapper = shallow(<App />)
  
  it('renders without crashing', () => {
    expect(wrapper).to.contain(<GuessCount guesses={0}/>)
  })

  it('has 36 cards', () => {
    expect(wrapper.find('Card')).to.have.length(36)
  })
})
