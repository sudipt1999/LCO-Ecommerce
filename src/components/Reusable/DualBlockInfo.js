import React from 'react'
import Heading from'./Heading'
import {Link } from 'gatsby'


export default function DualBlockInfo({title, img}) {
    return (
        <section className="container-fluid bg-primary my-5">
            <Heading title={title} />
            <div className="row p-5">
                <div className="col-8">
                    <p className="lead text-white">
                    Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one. Unknown may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember relation. 
                    Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. 
                    Text chat is a chat room for enjoying a random text chat with strangers and is quite famous for online chatting with strangers. Our text chat - chat room is a free text chat avenue for people from all over the world belonging to different races, backgrounds and ethnicities. We have all the best chat rooms created according to users high demand, so that every user can enjoy online chatting with strangers and make new friends through text chat and other modes of online chatting. Text chat is the fastest way to chat across multiple platforms, our text chat room is for all the text chat lovers who love to text chat from the ease of their phones. Text chat is one of the oldest forms of communication which is still so famous that millions of people search for text chat rooms. Our text chat room is for all the people out there who love the text chat feature and prefer it over methods of communication.
                    </p>
                </div>
                <div className="col-3 p-2">
                    <div className="mx-auto">
                    <div className="card bg-dark">
                            <img className="card-img-top card-image"  src={img} alt="Card image cap" />
                            <div className="card-body text-white">
                                <h5 className="card-title">Go Somewhere</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to='/'>
                                    <a href="#" className="btn btn-success btn-block">{title}</a>
                                </Link>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
