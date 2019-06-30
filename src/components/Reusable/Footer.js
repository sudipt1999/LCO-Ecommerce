import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid text-center py-3 mx-auto bg-dark text-light">
                <div className="row">
                    <div className="col-12 my-auto">
                        Copyright &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    )
}
