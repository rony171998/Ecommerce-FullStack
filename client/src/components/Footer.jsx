import React from 'react';

const Footer = () => {
    return (
        <div className="card text-white bg-primary mt-5 text-center">
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header text-black bg-secondary mb-3">Info</h4>
                            <p className="card-text mt-1">Valledupar - Colombia</p>                           

                        </div>
                    </div>

                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header text-black bg-secondary mb-3">Curriculum</h4>
                            <a className="card-link" href="https://www.canva.com/design/DAFIIFIdRwA/iJ3xZc15-uhYUoMKxaTHKw/view?utm_content=DAFIIFIdRwA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                                target="_blank" rel="noopener noreferrer">
                                <img className="card-img" src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" alt="CV" style={{ width: "25%" }} />
                                <p className="card-text text-white">CV</p>
                            </a>
                        </div>
                    </div>

                    <div className="col ">
                        <div className="card-body  ">
                            <h4 className="card-header text-black bg-secondary mb-3 ">Products</h4>
                            <a className="card-link" href="https://ronyportafolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/48/000000/web.png" alt="Portafolio" />
                                <p className="card-text text-white">Portafolio</p>
                            </a>                                                       

                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body ">
                            <h4 className="card-header text-black bg-secondary mb-3">Social</h4>
                            <div className="col ">
                                <a href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                    <img className="card-img mt-2" style={{ width: "15%" }} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" />
                                    <p className="card-text text-white">Linkedin</p>
                                </a>

                            </div>
                            <div className="col">
                                <a href="https://github.com/rony171998" target="_blank" rel="noopener noreferrer">
                                    <img className="card-img mt-2" style={{ width: "15%" }} src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github" />
                                    <p className="card-text text-white">Github</p>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <div >
                    <h4 className="card-title  text-white" style={{ textAlign: "center" }}>Rony Puche web &copy; 2022</h4>
                </div>

            </div>

        </div>
    );
};

export default Footer;