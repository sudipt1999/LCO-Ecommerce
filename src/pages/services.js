import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import InfoBlock from '../components/Reusable/InfoBlock'
import DualInfoBlock from '../components/Reusable/DualBlockInfo'
import {cardimg} from '../components/Reusable/ImagesUrl'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    
    <HeroSection
        heroclass="services-background"
        img={data.img.childImageSharp.fluid}
        title="Services"
        subtitle="" 
    
    />

  

    <DualInfoBlock  
      img={cardimg}
      title="Our Services" />

    <InfoBlock 
        heading="Our Services"
      />

  </Layout>
)


export const query = graphql`
{
  img : file(relativePath: { eq: "about.jpg" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default IndexPage
