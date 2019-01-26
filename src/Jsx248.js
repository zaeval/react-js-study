import React, {Component} from 'react';
import './Jsx246.css'
class Jsx248 extends Component {
    render() {
        const text = "당신은 어썸한가요";
        const condition = true;
        const style = {
            backgroundColor:'gray',
        }
        return (
            <div className="my-div"
                //여기는 왜 되징?
            >
                <h1>리액트 안녕!</h1>
                <h2>{ text }</h2>
                {
                    condition && '참'
                }
                <div style={style}
                    //self-closed 태그에서만 주석을 쓸수 있어요
                    /*이렇게도 가능*/
                />
                    스타일 적용된 div
                {
                    // 일반적으로는 이렇게 씁니다.
                }
                //여기는 불가능
            </div>
        );
    }
}

export default Jsx248;