import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import anime from 'animejs';

const WelcomeMessage = styled.h2`
  z-index: 10;
  font-size: 29px;
  font-weight: 800;

  color: white;

  &:after {
    display: inline-block;
    margin-left: 16px;
    width: 300px;
    height: 4px;
    top: 0;
    background-color: white;

    content: '';
  }
`

const NameMessage = styled.h1`
  font-size: 60px;
  font-weight: 800;

  padding-top: 8px;

  color: white;

  & > span {
    color: #F4B0C7;
  }
`

const WelcomeBox = ({ children }) => {
  useEffect(() => {
    anime({
      targets: ".WelcomeBox",
      translateY: -20,
      direction: "alternate",
      loop: true,
      easing: "easeInOutQuad",
      autoplay: true,
    })     
  });

  return (
    <div className="WelcomeBox">
      <WelcomeMessage>Welcome To</WelcomeMessage>
      <NameMessage><span>ATKODEV</span> Home.</NameMessage>
    </div>
  )
}

WelcomeBox.propTypes = {
  children: PropTypes.node,
}

export default WelcomeBox