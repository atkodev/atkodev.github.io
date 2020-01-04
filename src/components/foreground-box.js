import styled from 'styled-components'

const ForegroundBox = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-flow: row nowrap;

  justify-content: center;
  align-items: center;

  z-index: 2;
` 

export default ForegroundBox