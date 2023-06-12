import './Expenses.scss';

const Expenses = (props) => {
    const bgColor = { backgroundColor: props.backgroung };

    return (
        <section className='section' style={bgColor}>
            <div className='category'>
                <span>{props.icon}</span>
                <h3>{props.name}</h3>
            </div>
        </section>
    );
}

export default Expenses;