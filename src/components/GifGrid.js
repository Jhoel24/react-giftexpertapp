import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const Lista = ({categoria}) => {

    const {data:images , loading} = useFetchGifs(categoria);


    return ( 
        <>
        <h3 className="animate__animated animate__fadeInDownBig">{categoria}</h3>
        
        {loading && <p className="animate__animated animate__flash">Loading</p>}

        <div className="row">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
           
        </div>
        </>
     );
}
 
export default Lista;