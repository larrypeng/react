import react, {Component} from 'react';
import Die from './Die.js';

class RollDice extends Component {
    constructor (props) {
        super(props);
        //Initial state has two dices being 1
        this.state = {die1: 'one', die2: 'one'}
    }

    render() {


        return (){
            <div>
            <Die face={this.state.die1} />
            <Die face={this.state.die2} />
            </div>

        }

    }

}