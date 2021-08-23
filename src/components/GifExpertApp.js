import React, {useState} from 'react';
import GifGrid from './GifGrid';
import AddCategory from './AddCategory';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([]);
    // const [dato, setDato] = useState('');

    // const handleAdd = (e) => {

    //     e.preventDefault();

    //     setCategories([...categories, dato]);

    //     setDato('');
    // }

    // const guardarDato = (e) => {
    //     // console.log(e.target.value);
    //     setDato(e.target.value)
    // }

    console.log(categories);
    return (   

        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr />

            {(categories.length < 1) && <p>Busca tus gifs</p>}

            <ol>
                {categories.map((categoria) => (
                    <GifGrid
                        categoria={categoria}
                        key={categoria}
                    />
                ))}
            </ol>
        </>

     );
}
 
export default GifExpertApp;