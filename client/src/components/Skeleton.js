//esqueleto de los productos que se muestran en la pagina principal

import React from "react";

const Skeleton = () => {
    return (
        <div class="ph-item ">
            <div class="ph-col">
                                
                <div class="ph-row">
                    <div class="ph-col-4 big"></div>                   
                </div>
                <div class="ph-picture" style={{height:"25rem"}}></div>
                <div class="ph-row">
                    <div class="ph-col-4 big"></div>
                </div>
                <div class="ph-picture" style={{height:"25rem"}}></div>
                
            </div>
            <div class="ph-col">
                                
                <div class="ph-row">
                    <div class="ph-col-4 big"></div>
                </div>
                <div class="ph-picture" style={{height:"25rem"}}></div>

                <div class="ph-row">
                    <div class="ph-col-4 big"></div>
                </div>
                <div class="ph-picture" style={{height:"25rem"}}></div>
            </div>
            

        </div>
    );
};

export default Skeleton;
