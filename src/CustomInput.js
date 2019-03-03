import React, {Component} from 'react';

class CustomInput extends Component{
    render(){
        return(
            <div>
                <input type="text" ref={(ref)=>{this.input=ref}}/>
            </div>
        );
    }
}
export default CustomInput;