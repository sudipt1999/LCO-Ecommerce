import React from 'react'
import Heading from './Heading';
import {Link} from 'gatsby';

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="mx-auto col-10 col-sm-8 text-white text-center">
                        <p className="lead text-white mb-4">
                        Vulputate vitae magnis eu conubia nisl interdum non congue pharetra dolor lacus placerat pellentesque morbi nibh metus natoque. Commodo montes litora consectetuer. Aptent nibh ultrices blandit fringilla dictumst, nascetur Porta ornare. Integer eget mollis. Gravida accumsan sem quisque tempus ornare eu nibh nullam. Est faucibus penatibus pretium lacus lacinia lacinia metus platea. Convallis Dapibus massa curabitur nam at felis habitasse.
                        </p>
                        <Link to='/about/'>
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
