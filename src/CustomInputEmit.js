import React from 'react';
import {withEmit} from "react-emit";

const CustomInputEmit = withEmit(({emit, children}) => (
    <div>
        <input type="text" ref={(ref) => {
            this.input = ref
        }}/>
        <button onClick={() => emit('onClick',this.input.value)}></button>
    </div>
));
export default CustomInputEmit;