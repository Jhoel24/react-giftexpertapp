import React from 'react';

const GifGridItem = ({id, title, url}) => {
    return ( 
            
                <div className="col-md-4 mb-3">
                    <div className="card animate__animated animate__fadeInDownBig">
                        <img src={url} alt="{title}" className="card-img-top img-thumbnail"/>
                        <div className="card-text">
                        <p className="text-uppercase text-center fw-bold">{title}</p>
                        </div>
                    </div>
                </div>
           
       
     );
}
 
export default GifGridItem;