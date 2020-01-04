import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import WelcomeBox from '../components/welcome-box'
import SEO from '../components/seo'
import Circle from '../components/circle'
import BackgroundBox from '../components/background-box'
import ForegroundBox from '../components/foreground-box'

const IndexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <IndexContainer>
      <BackgroundBox>
        <Circle fill />
        <Circle />
      </BackgroundBox>

      <ForegroundBox>
        <WelcomeBox />
      </ForegroundBox>
    </IndexContainer>
  </Layout>
)

export default IndexPage
