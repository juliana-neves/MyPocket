import './Dropdown.scss';

const Dropdown = (props) => {
    const handleOnChange = (event) => {
        props.changeValue(event.target.value)
    }

    return (
        <div className="form-items">
            <label htmlFor="" className="label">{props.label}</label>
            <select
                className='dropdown'
                onChange={handleOnChange}
                required={props.required}
                value={props.value}
            >
                <option value="">Select</option>
                {props.items && props.items.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;