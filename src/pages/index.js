import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import InfoBlock from '../components/Reusable/InfoBlock'
import DualInfoBlock from '../components/Reusable/DualBlockInfo'
import {cardimg} from '../components/Reusable/ImagesUrl'
import CoursesCart from '../components/Cart/CoursesCart'
import BundlesCart from '../components/Cart/BundlesCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
        heroclass="hero-background"
        img={data.img.childImageSharp.fluid}
        title="Welcome to Gatsby project"
        subtitle="This is fun learning" 
    
    />

    <InfoBlock 
        heading="About Us"
      />

    <CoursesCart
        courses={data.courses}
      />

    <BundlesCart 
      bundles={data.bundles}
    />



    <DualInfoBlock  
      img={cardimg}
      title="Our Team"/>

  </Layout>
)


export const query = graphql`
{
  img : file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  courses: allContentfulCourses {
    edges{
      node{
        id
        title
        price 
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }

  bundles: allContentfulBundles {
    edges{
      node{
        id
        title
        price 
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}

`

export default IndexPage
