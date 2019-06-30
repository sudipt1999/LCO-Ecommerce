import React from 'react'
import {cardimg} from '../Reusable/ImagesUrl';
export default function Team() {
    return (
        <div className="container-fluid bg-theme">
            <div className="row mx-auto">
                <div className="col-10 mx-auto p-5">
                <div className="card-group">
                    <div className="card m-2">
                        <img className="card-img-top card-image" src={cardimg} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card m-2">
                        <img className="card-img-top card-image" src={cardimg} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card m-2">
                        <img className="card-img-top card-image" src={cardimg} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
