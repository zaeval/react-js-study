import React, {Component, Fragment} from 'react';

class Jsx243 extends Component {
    render() {
        const text = "당신은 어썸한가요";
        const condition = true;
        return (
            <div>
                <h1>리액트 안녕!</h1>
                <h2>{ text }</h2>
                {
                    condition ? <h1>참</h1> : <h1>거짓</h1>
                }
            </div>
        );
    }
}

export default Jsx243;