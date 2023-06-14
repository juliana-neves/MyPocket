import './Expenses.scss';

const Expenses = ({ valueSpent, description, colorcard }) => {
    const bgHeader = { backgroundColor: colorcard };
    
    return (
        <section>
            <div className='card' style={bgHeader}>
                <div className='header'>
                    <h4>
                        R$ {valueSpent}
                    </h4>
                </div>
                <div className='body'>
                    {description}
                </div>
            </div>
        </section>
    );
}

export default Expenses;