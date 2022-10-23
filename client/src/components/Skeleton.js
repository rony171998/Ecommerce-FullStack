//esqueleto de los productos que se muestran en la pagina principal

import React from "react";

const Skeleton = () => {
    return (
        <div className="ph-item ">
            <div className="ph-col">
                                
                <div className="ph-row">
                    <div className="ph-col-4 big"></div>                   
                </div>
                <div className="ph-picture" style={{height:"25rem"}}></div>
                <div className="ph-row">
                    <div className="ph-col-4 big"></div>
                </div>
                <div className="ph-picture" style={{height:"25rem"}}></div>
                
            </div>
            <div className="ph-col">
                                
                <div className="ph-row">
                    <div className="ph-col-4 big"></div>
                </div>
                <div className="ph-picture" style={{height:"25rem"}}></div>

                <div className="ph-row">
                    <div className="ph-col-4 big"></div>
                </div>
                <div className="ph-picture" style={{height:"25rem"}}></div>
            </div>
            

        </div>
    );
};

export default Skeleton;
