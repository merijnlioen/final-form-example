const EMAIL_REGEX = /[^@]+@[^\.]+\..+/

export const required = value =>
    value && value.length
        ? undefined
        : 'Dit veld is verplicht'

export const email = value =>
    value && value.match(EMAIL_REGEX)
        ? undefined
        : `Het opgegeven email ${value} is niet geldig`

export const passwordConfirmation = (value, allValues) => 
    value && value === allValues.password && value.length
        ? undefined 
        : 'Wachtwoorden komen niet overheen'


export const emailConfirmation = (value, allValues) =>
    value && value === allValues.email && value.length
        ? undefined 
        : 'Email-addressen komen niet overheen'
                
        




    
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)