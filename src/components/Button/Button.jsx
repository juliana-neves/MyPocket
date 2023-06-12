import './Button.scss';

const Button = (props) => {
    return (
        <button type={props.type} variant={props.variant} className='button'>
            {props.children}
        </button>
    );
}

export default Button;