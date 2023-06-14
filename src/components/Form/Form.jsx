import { useState } from 'react';
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dropdown from '../Dropdown/Dropdown';
import './Form.scss';

const Form = (props) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [valueSpent, setValueSpent] = useState('');
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.expenseRegistered({
            description,
            category,
            valueSpent,
        })
        setCategory('');
        setValueSpent('');
        setDescription('');
    };

    return (
        <section className='container'>
            <form onSubmit={handleOnSubmit}>
                <h2>Register your spent</h2>
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
                <Input
                    type="text"
                    label="Description"
                    placeholder="Description"
                    required={true}
                    value={description}
                    changeValue={value => setDescription(value)}
                />
                <Button type="submit" children="Submit" />
            </form>
        </section>
    );
}

export default Form;