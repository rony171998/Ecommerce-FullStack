import React from 'react';

const Footer = () => {
    return (
        <div className="card text-white bg-primary mt-5">
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header text-black bg-secondary mb-3">Info</h4>
                            <p className="card-text mt-1">Valledupar - Colombia</p>
                            <div className="card-body">
                                <h4 className="card-header text-black bg-secondary mb-3">Curriculum</h4>
                                <a className="card-link" href="https://drive.google.com/file/d/1FUZbwYadWSUwR8WSUBTO5uI4V-SdOWR1/view?usp=sharing"
                                    target="_blank" rel="noopener noreferrer">
                                    <img className="card-img" src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" alt="" style={{ width: "25%" }} />
                                </a>
                            </div>


                        </div>
                    </div>

                    <div className="col">
                        <div className="card-body ">
                            <h4 className="card-header text-black bg-secondary mb-3 ">Products</h4>
                            <a className="card-link" href="https://e-commerce-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text text-white">E-commerce App</p>
                            </a>
                            <a className="card-link" href="https://rickandmorty-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text mt-1 text-white">Rick and Morty Wiki </p>
                            </a>
                            <a className="card-link" href="https://laprovidencia-web.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text text-white">Farm React (Working)</p>
                            </a>
                            <a className="card-link" href="https://ronyecomerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text text-white">Web Store</p>
                            </a>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header text-black bg-secondary mb-3">Social</h4>
                            <div className="col">
                                <a href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                    <img className="card-img mt-2" style={{ width: "25%" }} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                                </a>

                            </div>
                            <div className="col">
                                <a href="https://github.com/rony171998" target="_blank" rel="noopener noreferrer">
                                    <img className="card-img mt-2" style={{ width: "25%" }} src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="" />
                                </a>

                            </div>

                        </div>

                    </div>


                </div>

                <div >
                    <h4 className="card-title mt-5  text-white" style={{ textAlign: "center" }}>Rony Puche web &copy; 2022</h4>
                </div>

            </div>


        </div>
    );
};

export default Footer;