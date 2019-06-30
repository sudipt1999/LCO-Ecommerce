import React from 'react'
import BackgroundImage from 'gatsby-background-image'



export default function HeroSection({img, title, subtitle, heroclass}) {
    return (
        <BackgroundImage   
                           Tag="section"
                           className={heroclass}
                           fluid={img}
                           
          >
            <h1 className="text-center text-white text-uppercase display-4">{title}</h1>
            <div className="subtitle-sec">
                <h4 className="text-warning text-center">{subtitle}</h4>
            </div>
          </BackgroundImage>
    )
}
