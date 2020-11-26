import { connect } from 'react-redux';
import { receiveTea } from '../../actions/tea_actions';
import TeaIndex from './tea_index';
import { selectAllTeas } from '../../reducers/selectors';


// connect TeaIndex to our redux store
// connect takes in 2 callbacks
    // 1: mapStateToProps => take data from state and put it in props
    // 2: mapDispatchToProps => gives TeaIndex ability to interact with redux state (via dispatch)

// returns an object that gets put into props
const mapStateToProps = (state) => {
    // state === application (redux) state
    return{
        // teas: Object.values(state.teas)
        teas: selectAllTeas(state)
    }
}

// returns an object that gets put into props
const mapDispatchToProps = (dispatch) => {
    return {
        callReceiveTea: (tea) => dispatch(receiveTea(tea))
    }
}

// const connectedComponent = connect(mapStateToprops, mapDispatchToProps)(TeaIndex);
// export default connectedComponent;
export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);
