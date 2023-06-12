import './Input.scss';

const Input = (props) => {
    const handleOnChange = (evento) => {
        props.changeValue(evento.target.value);
    }

    return (
        <div className="form-items">
            <label htmlFor="" className="label">{props.label}</label>
            <input
                className="input"
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Input;