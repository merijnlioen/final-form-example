import React from 'react'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from "final-form"
import { required, email, passwordConfirmation, emailConfirmation, composeValidators } from '../helpers/validation'
import Notification from '../global/notification'
import TextField from '../global/input-fields/text'

const onSubmit = async () => {
    const requestError = 'Dit email is al in gebruik.'
    return { [FORM_ERROR]: requestError }
}

const LoginPage = () => (
    <div className="page">
        <Form
            onSubmit={onSubmit}
            render={({ submitError, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="login-form">
                    {submitError && <Notification text={submitError} />}
                    <Field
                        name="username"
                        type="text"
                        component={TextField}
                        label="Gebruikersnaam *"
                        validate={required}
                    />
                    <Field
                        name="email"
                        type="text"
                        component={TextField}
                        secureEntry={true}
                        label="E-mailadres *"
                        validate={composeValidators(required, email)}
                    />
                    <Field
                        name="email-repeat"
                        type="text"
                        component={TextField}
                        secureEntry={true}
                        label="Bevestig E-mailadres *"
                        validate={emailConfirmation}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={TextField}
                        secureEntry={true}
                        label="Wachtwoord *"
                        validate={required}
                    />
                    <Field
                        name="password-repeat"
                        type="password"
                        component={TextField}
                        secureEntry={true}
                        label="Wachtwoord bevestigen *"
                        validate={passwordConfirmation}
                    />

                    <button className="button" type="submit">Nieuw account aanmaken</button>
                </form>
            )}
        />
    </div>
)

export default LoginPage