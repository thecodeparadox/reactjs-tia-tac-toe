import React from 'react';

// Functional Component:
// ---------------------
// When any reach component does not extends React.Component
// then that component called as Functional Component
//
function Square(props) {
    let cls = "square " + props.win;
    return (
        <button className={cls}
            onClick={()=>props.onClick()}>
            {props.value}
        </button>
    );
}


/*
import React, {Component} from 'react';
class Square extends Component {
    render() {
        return (
            <button className="square"
                onClick={()=>props.onClick()}>
                {props.value}
            </button>
        );
    }
}
*/

export default Square;