import React from 'react'
import { connect } from 'react-redux';
// actions
import { increment, decrement } from '../../../store/actions/CounterAction';
// Components
import Container from '../../../../components/elements/Container';

function ReduxExample(props) {
    return (
        <>
            <Container>
                <h1>Count: {props.count}</h1>

                <button className="btn btn-primary" onClick={() => props.increment(5)}>Increment</button>
                <button className="btn btn-primary" onClick={() => props.decrement(5)}>Decrement</button>
            </Container>

        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        increment: (data) => dispatch(increment(data)),
        decrement: (data) => dispatch(decrement(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
