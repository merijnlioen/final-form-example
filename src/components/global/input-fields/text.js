import React from 'react'

const TextField = props => {
    const { meta, input, label } = props
    return (
        <div className="text-field">
            <label className="text-field__label" htmlFor={input.name}>{label}</label>
            <input className={`text-field__input ${meta.error && meta.touched ? 'text-field__input--error' : null}`} type="text" {...input} />
            {meta.touched && meta.error && <span className="text-field__error">{meta.error}</span>}
        </div>
    )
}

export default TextField