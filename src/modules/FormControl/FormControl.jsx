import { useState } from "react";

const initialValue = {
    name: 'Poly',
    phone: '123',
    address: 'Ukraine',
};

const FormControl = ({submit}) => {
    const [state, setState] = useState(initialValue);

    const hendleSubmit = (e) => {
        e.preventDefault();
        submit(state);
        setState(initialValue);
    };
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    

    return (
        <form onSubmit={hendleSubmit}>
            <input name='name' type="text" value={state.name} onChange={handleChange} />
            <br />
            <input name='phone' type="text" value={state.phone} onChange={handleChange} />
            <br />
            <input name='address' type="text" value={state.address} onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormControl;
