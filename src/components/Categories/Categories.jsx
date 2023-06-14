import Expenses from '../Expenses/Expenses';
import './Categories.scss';
import { v4 as uuid } from 'uuid';

const Categories = (props) => {
    const bgColor = { backgroundColor: props.background };

    return (
        (props.expenses.length > 0) &&
        <section className='section' style={bgColor}>
            <div className='category'>
                <span>{props.icon}</span>
                <h3>{props.name}</h3>
            </div>
            <div className='expenses'>
                {props.expenses.map(expense =>
                    <Expenses
                        key={uuid()}
                        valueSpent={expense.valueSpent}
                        description={expense.description}
                        colorcard={props.colorcard}
                    />
                )}
            </div>
        </section>
    );
}

export default Categories;