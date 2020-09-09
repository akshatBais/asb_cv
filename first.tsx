import React from 'react'
import { equals, omit } from 'ramda'

import { ACNewsletter, ACToggleNewsLetter } from 'actions/analytics'
import { AppleAuthResponse, appleLogin } from 'actions/apple'
import { facebookLogin } from 'actions/facebook'
import { googleLogin, GoogleAuthResponse } from 'actions/google'
import { getUser } from 'apis/user'
import { Link } from 'components/link'
import { LearnMoreDialog } from 'components/dialog/learnMore'
import { Input } from 'components/inputs/input'
import { Password } from 'components/inputs/password'
import { Checkbox } from 'components/inputs/checkbox'
import { Divider } from 'components/divider'
import { Button } from 'components/button'
import { Form, Validation, FieldValues, Errors } from 'components/form'
import { Callout, Title2, Headline } from 'components/typography'
import { LoginDialog } from 'components/dialog/login'
import { ForgotPasswordDialog } from 'components/dialog/forgotPassword'
import { IconCard } from 'components/cards/iconCard'
import { CONFIG } from 'config'
import { pureConnect } from 'helpers/connect'
import { hasFeature, Feature } from 'helpers/features'
import { getString } from 'helpers/i18n'
import { validateEmail } from 'helpers/validators/email'
import { validatePassword } from 'helpers/validators/password'
import { Dispatch } from 'interfaces/dispatch'
import { PostUserFirst } from 'interfaces/user'

import { PostUserSecond } from 'interfaces/user'
import { StatePicker } from 'components/inputs/states'
import { DatePicker, THIRTEEN_YEARS_OLD } from 'components/inputs/datepicker'
import { PendingButton } from 'components/buttons/pending'

import { formatPhone } from 'helpers/formatters/phone'
import { deformatPhone } from 'helpers/deformatters/phone'
import { validatePhone, validateRequired, validateLength } from 'helpers/validators'
import { bindAll } from 'helpers/bindAll'
import { formatNumber } from 'helpers/formatters/numbers'

import { register } from 'actions/auth'
import { doesUserExist } from 'apis/user'
import moment from 'moment'
import { RegisterSecond } from 'containers/app/register/second'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { ACAccountCreated } from 'actions/analytics'

interface Props extends RouteComponentProps<{}> {
    next: (user: PostUserFirst) => void
    tempUser?: object
    errors?: string[]
}

type InternalProps = Props & Dispatch

interface State {
    receiveLidlNewsletter: boolean
    tailorExperience: boolean
    isValid: boolean
    errors?: string[]
    dialog: 'forgot-password' | 'login' | 'learn-more' | null
}

interface FieldValues {
    firstName: string
    lastName: string
    phone: string
    birthday: string
    zip: string
    mailingStreet?: string
    mailingCity?: string
    mailingState?: string
}

class Component extends React.Component<InternalProps, State> {
    public state: State = {
        receiveLidlNewsletter: true,
        tailorExperience: true,
        isValid: false,
        dialog: null,
    }

    private onSubmit = (fieldValues: FieldValues, validation: Validation) => {
        if (!validation.valid) {
            return
        }
        this.props.dispatch(ACNewsletter(null, this.state.receiveLidlNewsletter))
        this.props.next(omit(['confirm_email'], fieldValues) as any)
    }

    private checkValidation = (fieldValues: FieldValues, validation?: Validation) => {
        if (validation) {
            return this.setState({
                ...this.state,
                isValid: validation.valid,
            })
        }
    }

    private termsClickHandler(): void {
        window.open('/terms-of-use', '_blank')
    }

    private loginFacebook = () => {
        this.props.dispatch(facebookLogin()).then(res => {
            if (!res) {
                return this.setState({
                    ...this.state,
                    errors: [getString('REGISTER_FACEBOOK_NO_EMAIL_ERROR')],
                })
            }

            getUser({ email: res.email })
                .then(user => {
                    return this.setState({
                        ...this.state,
                        errors: [getString('REGISTER_EMAIL_TAKEN')],
                    })
                })
                .catch(err => {
                    const { receiveLidlNewsletter, tailorExperience } = this.state
                    this.props.next({
                        email: res.email,
                        credentials: {
                            facebookToken: res.credentials.facebookToken,
                        },
                        receiveLidlNewsletter,
                        tailorExperience,
                        personal: res.personal,
                    })
                })
        })
    }

    private loginGoogle = () => {
        this.props.dispatch(googleLogin()).then((res: GoogleAuthResponse) => {
            // only progress if they authenticated
            if (res) {
                getUser({ email: res.email })
                    .then(user => {
                        this.setState({
                            ...this.state,
                            errors: [getString('REGISTER_EMAIL_TAKEN')],
                        })
                    })
                    .catch(error => {
                        const { receiveLidlNewsletter, tailorExperience } = this.state
                        this.props.next({
                            email: res.email,
                            credentials: {
                                googleToken: res.credentials.googleToken,
                            },
                            receiveLidlNewsletter,
                            tailorExperience,
                            personal: res.personal,
                        })
                    })
            }
        })
    }

    private loginApple = () => {
        this.props.dispatch(appleLogin()).then((res: AppleAuthResponse) => {
            // only progress if they authenticated
            if (res) {
                getUser({ email: res.email })
                    .then(user => {
                        this.setState({
                            ...this.state,
                            errors: [getString('REGISTER_EMAIL_TAKEN')],
                        })
                    })
                    .catch(error => {
                        const { receiveLidlNewsletter, tailorExperience } = this.state
                        this.props.next({
                            email: res.email,
                            credentials: {
                                appleToken: res.credentials.appleToken,
                            },
                            receiveLidlNewsletter,
                            tailorExperience,
                            personal: res.personal,
                        })
                    })
            }
        })
    }

    private updateReceiveLidlNewsletter = (e: boolean) => {
        this.props.dispatch(
            ACToggleNewsLetter(null, {
                Action: 'Change Email Preference',
                Category: 'Join',
                ToggleNewsletterLabel: e ? 'Check' : 'Uncheck',
            })
        )

        return this.setState({
            ...this.state,
            receiveLidlNewsletter: e,
        })
    }

    private updateTailorExperience = (e: boolean) => {
        return this.setState({
            ...this.state,
            tailorExperience: e,
        })
    }

    private submitUser(user: PostUserSecond): void {
        if (this.props.tempUser) {
            const nextUser = merge(this.props.tempUser, user)

            this.props.dispatch(register(nextUser)).then(() => {
                this.props.dispatch(
                    ACAccountCreated(null, {
                        Action: 'Account Created',
                        Category: 'Join',
                        AccountCreatedLabel: nextUser.credentials.password
                            ? 'Email'
                            : nextUser.credentials.facebookToken
                                ? 'Facebook'
                                : nextUser.credentials.googleToken
                                    ? 'Google'
                                    : 'Apple',
                    })
                )

                this.props.history.push('/stores')
            })
        }
    }

    public render() {
        const takenEmailError = (
            <span>
                {getString('VALIDATION_EMAIL_TAKEN_PROMPT')}{' '}
                <Button
                    theme="flat"
                    size="inline"
                    className="validation-action"
                    onClick={() => this.setState({ dialog: 'login' })}>
                    {getString('VALIDATION_EMAIL_TAKEN_ACTION_SIGN_IN')}
                </Button>{' '}
                {getString('VALIDATION_EMAIL_TAKEN_OR')}{' '}
                <Button
                    theme="flat"
                    size="inline"
                    className="validation-action"
                    onClick={() => this.setState({ dialog: 'forgot-password' })}>
                    {getString('VALIDATION_EMAIL_TAKEN_ACTION_RECOVER_PASSWORD')}
                </Button>
            </span>
        )

        const { isValid } = this.state

        return (
            <div>
                <Form
                    data-test="newUserRegistrationForm"
                    key="form"
                    className="register-first"
                    onSubmit={this.onSubmit}
                    onChange={this.checkValidation}
                    showErrorsOnChange="field">
                    <Title2 component="h2">{getString('REGISTER_JOIN_LIDL')}</Title2>

                    {hasFeature(Feature.SIWA) &&
                        CONFIG.browserSupportsSignInWithApple && (
                            <Button className="apple" onClick={this.loginApple} iconName="apple" size="auto">
                                {getString('REGISTER_WITH_APPLE')}
                            </Button>
                        )}

                    <Button className="facebook" onClick={this.loginFacebook} iconName="facebook" size="auto">
                        {getString('REGISTER_WITH_FACEBOOK')}
                    </Button>

                    <Button iconName="google" onClick={this.loginGoogle} size="auto" className="google">
                        {getString('REGISTER_WITH_GOOGLE')}
                    </Button>

                    <Divider>
                        <Callout>{getString('REGISTER_DIVIDER')}</Callout>
                    </Divider>
                </Form>
                {this.props.tempUser ? ( 
                    <RegisterSecond
                        firstName={this.props.tempUser.personal ? this.props.tempUser.personal.firstName : ''}
                        lastName={this.props.tempUser.personal ? this.props.tempUser.personal.lastName : ''}
                        next={this.submitUser.bind(this)}
                        errors={this.props.errors}
                />
                ) : (
                    <RegisterSecond next={this.submitUser.bind(this)} errors={this.props.errors} />
                )}
                
                
                {this.state.dialog === 'forgot-password' && (
                    <ForgotPasswordDialog
                        onClose={() =>
                            this.setState({
                                dialog: null,
                            })
                        }
                    />
                )}
                {this.state.dialog === 'login' && (
                    <LoginDialog
                        key="login"
                        onClose={() =>
                            this.setState({
                                dialog: null,
                            })
                        }
                    />
                )}

                {this.state.dialog === 'learn-more' && (
                    <LearnMoreDialog
                        onClose={() =>
                            this.setState({
                                dialog: null,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}

export const RegisterFirst = pureConnect<Props>(Component)