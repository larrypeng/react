import react, {Component} from 'react';
import Die from './Die.js';

/* State exercise
    Pattern: Parent manages states and passes states down to children, children(Die) are usually stateless.

*/
class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor (props) {
        super(props);
        //Initial state has two dices being 1
        this.state = {die1: 'one', die2: 'two'};
        //Important! Bind the method below to RollDice component
        //This is a mustdo for all events/functions in a class so that the function can call setState()
        this.roll = this.roll.bind(this);
    }

    //Define a roll method to reset dice state
    roll(){
        const newSide1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newSide2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        //Important! Set the state with the new values
        this.setState({die1: newSide1, die2: newSide2});
    }

    render() {   
        return ( 
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                {/* Call a function roll() to change dice face */}
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }

}

export default RollDice;