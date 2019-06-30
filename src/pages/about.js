import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import InfoBlock from '../components/Reusable/InfoBlock'
import DualInfoBlock from '../components/Reusable/DualBlockInfo'
import {cardimg} from '../components/Reusable/ImagesUrl'
import Team from '../components/About/Team'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    
    <HeroSection
        heroclass="services-background"
        img={data.img.childImageSharp.fluid}
        title="About"
        subtitle="" 
    
    />

  

    <DualInfoBlock  
      img={cardimg}
      title="Our Vision" />

    <InfoBlock 
        heading="About Us"
      />

    <Team />

  </Layout>
)


export const query = graphql`
{
  img : file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default IndexPage
