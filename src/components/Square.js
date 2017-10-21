import React from 'react';

// class가 아닌 function 컴포넌트로 변경
// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <button className="square" onClick={() =>
//                 this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
//


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default Square;