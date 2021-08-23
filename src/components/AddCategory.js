import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);


    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e ) => {
        e.preventDefault();

        if(inputValue === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1000);

            return;
        }

        setCategories(cats => [inputValue]);

        setInputValue('');

    }


    return ( 
        <>
        {error ? 
            <div className="alert alert-danger">
                <p className="text-center text-uppercase fw-bold">No puedes mandar un campo vacío</p>
            </div>
            
            : null
        }
        <form onSubmit={handleSubmit}>
                <div className="input">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        />
                </div>
            </form>
        
        </>

     );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;