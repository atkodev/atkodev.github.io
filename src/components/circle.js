import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import anime from 'animejs';
import { rgba } from 'polished'

const Circle = styled.div`
  display: block;
  width: 100px;
  height: 100px;

  background-color: ${(props) => props.fill ? '#E76E54' : rgba('#fff', 0)};

  border: 36px solid ${rgba('#E76E54', .3)};
  border-radius: 100px;

  position: absolute;
  top: ${({ x }) => x}%;
  left: ${({ y }) => y}%;
`

const CircleAnime = ({ fill }) => {
  useEffect(() => {
    anime({
      targets: ".Circle",
      translateY: () => anime.random(20, 80),
      direction: "alternate",
      loop: true,
      easing: "cubicBezier(.5, .05, .1, .3)",
    })
  })

  return (
    <Circle 
      className="Circle" 
      x={anime.random(10, 70)}
      y={anime.random(10, 90)}
      fill={fill ? 1 : 0} />
  )
}

CircleAnime.propTypes = {
  fill: PropTypes.bool.isRequired,
}

CircleAnime.defaultProps = {
  fill: false,
}

export default CircleAnime
