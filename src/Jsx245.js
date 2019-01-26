import React, {Component} from 'react';

class Jsx245 extends Component {
    render() {
        const text = "당신은 어썸한가요";
        const condition = true;
        const style = {
            backgroundColor:'gray',
        }
        return (
            <div>
                <h1>리액트 안녕!</h1>
                <h2>{ text }</h2>
                {
                    condition && '참'
                }
                <div style={style}>
                    스타일 적용된 div
                </div>
            </div>
        );
    }
}

export default Jsx245;