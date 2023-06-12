import { useState } from 'react';
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import './Form.scss';

const Form = (props) => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [valueSpent, setValueSpent] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.expenseRegistered({
            name,
            category,
            valueSpent,
        })
    }


    return (
        <section className='container'>
            <form onSubmit={handleOnSubmit}>
                <h2>Register your spent</h2>
                <Input
                    type="text"
                    label="Name"
                    placeholder="Name"
                    required={true}
                    value={name}
                    changeValue={value => setName(value)}
                />
                <Dropdown
                    items={props.categories}
                    label="Category"
                    required={true}
                    value={category}
                    changeValue={value => setCategory(value)}
                />
                <Input
                    type="number"
                    label="Value spent"
                    placeholder="Value spent"
                    required={true}
                    value={valueSpent}
                    changeValue={value => setValueSpent(value)}
                />
                <Button type="submit" children="Submit" />
            </form>
        </section>
    );
}

export default Form;