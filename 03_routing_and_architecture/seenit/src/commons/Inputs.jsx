import React from 'react';
import InputArea from '../components/common/InputArea';
import TextArea from '../components/common/TextArea';
import {type} from './input_constants';

const Inputs = {
    getInput: (label, name, type, value, change, required) => {
        return <InputArea
            label={label}
            name={name}
            type={type}
            change={change}
            value={value}
            required={required}
        />
    },
    getTextArea: (label, name, change) => {
        return <TextArea
            label={label}
            name={name}
            change={change}/>
    },
    getSubmitInput: (id, text, submit) => {
        return <input id={id}
                      value={text}
                      type={type.submit}
                      onClick={submit}/>
    }
}

export default Inputs