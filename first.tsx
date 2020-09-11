import React from 'react'
import { equals, omit } from 'ramda'
import { ACNewsletter, ACToggleNewsLetter } from 'actions/analytics'
import { AppleAuthResponse, appleLogin } from 'actions/apple'
import { facebookLogin } from 'actions/facebook'
import { googleLogin, GoogleAuthResponse } from 'actions/google'
import { getUser } from 'apis/user'
import { merge } from 'ramda'
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
import { Dispatch } from 'interfaces/dispatch'
import { PostUserFirst } from 'interfaces/user'
import { PostUserSecond } from 'interfaces/user'
import { register } from 'actions/auth'
import { doesUserExist } from 'apis/user'
import moment from 'moment'
import { RegisterSecond } from 'containers/app/register/second'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { ACAccountCreated } from 'actions/analytics'


interface Props extends RouteComponentProps<{}> {
    next: (user: PostUserFirst) => void
    nextUser: (user: PostUserSecond) => void
    tempUser?: PostUserFirst
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
    email: string
    password: string
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

    private onSubmitUser(fieldValues: FieldValues): void {
        console.log('fieldValues', fieldValues)
        this.props.nextUser({
            email: fieldValues.email,
            credentials: {
                password: fieldValues.credentials.password,
            },
            personal: {
                birthday: fieldValues.birthday,
                firstName: fieldValues.firstName,
                lastName: fieldValues.lastName,
            },
            contact: {
                mailingCity: fieldValues.mailingCity,
                mailingStreet: fieldValues.mailingStreet,
                mailingState: fieldValues.mailingState,
                zip: fieldValues.zip,
                phone: fieldValues.phone,
            },
            receiveLidlNewsletter: this.state.receiveLidlNewsletter,
            tailorExperience: this.state.tailorExperience,
        })
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
        console.log('newTest')
        // if (this.props.tempUser) {
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
        this.props.dispatch(ACNewsletter(null, this.state.receiveLidlNewsletter))
        // this.props.next(omit(['confirm_email'], fieldValues) as any)
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

                    {hasFeature(Feature.SIWA) && CONFIG.browserSupportsSignInWithApple && (
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
                

                <Form
                        className="register-second"
                        onSubmit={this.onSubmitUser}
                        onChange={this.checkValidation}
                        showErrorsOnChange="field">
                        <Title2>{getString('REGISTER_JOIN_LIDL')}</Title2>

                        <Headline>{getString('PROFILE_ACCOUNT_HEADLINE')}</Headline>

                        <IconCard className="register-name" icon="name" iconPosition="before">
                            <div className="row row-block-small register-name-fields">
                                <Input
                                    type="text"
                                    className="firstname"
                                    name="firstName"
                                    defaultValue={this.props.firstName}
                                    validators={[validateRequired('First name required.')]}
                                    label="first name "
                                    data-test="firstName"
                                />

                                <Input
                                    type="text"
                                    className="lastname"
                                    name="lastName"
                                    defaultValue={this.props.lastName}
                                    validators={[validateRequired('Last name required.')]}
                                    label="last name "
                                    data-test="lastName"
                                />
                            </div>
                        </IconCard>

                        <IconCard icon="email" iconPosition="before">
                            <Input
                                className="email"
                                type="email"
                                name="email"
                                data-test="email"
                                label={getString('PLACEHOLDER_EMAIL')}
                                validators={[
                                    email => {
                                        const invalidEmail = validateEmail(getString('VALIDATION_EMAIL'))(email)
                                        if (invalidEmail) {
                                            return invalidEmail
                                        }

                                        return getUser({ email }).then(
                                            user => takenEmailError,
                                            err => null
                                        )
                                    },
                                ]}
                            />

                            <Input
                                className="email"
                                type="email"
                                name="confirm_email"
                                data-test="confirm_email"
                                label={getString('PLACEHOLDER_CONFIRM_EMAIL')}
                                validators={[
                                    (email, fieldValues) => {
                                        if (!equals(email, fieldValues.email)) {
                                            return 'Emails do not match'
                                        }
                                    },
                                ]}
                            />
                        </IconCard>
                        <div name="credentials">
                            <Password
                                className="password reg-password"
                                name="password"
                                iconName="password"
                                data-test="password"
                                // style={{ marginBottom: '15px' }}
                                label={getString('PLACEHOLDER_PASSWORD')}
                                validators={[validateRequired(getString('VALIDATION_PASSWORD')), validatePassword]}
                            />
                        </div>

                        <Input
                            type="tel"
                            name="phone"
                            iconName="phone"
                            validators={[
                                validateRequired(getString('VALIDATION_PHONE_REQUIRED')),
                                validatePhone(getString('VALIDATION_PHONE')),
                                phone => {
                                    if (`${phone}`.length !== 10) {
                                        return getString('VALIDATION_PHONE')
                                    }

                                    return doesUserExist({ phone }).then(exists =>
                                        exists ? getString('REGISTER_PHONE_NUMBER_ERROR') : null
                                    )
                                },
                            ]}
                            format={formatPhone}
                            deformat={deformatPhone}
                            label="phone number "
                            data-test="phone"
                        />

                        <IconCard className="register-birthday" icon="birthday" iconPosition="before">
                            <DatePicker
                                name="birthday"
                                label="birthday month"
                                validators={[
                                    date =>
                                        !moment()
                                            .subtract(13, 'years')
                                            .isSameOrAfter(moment(date)) && getString('VALIDATION_AGE_13'),
                                ]}
                                min={THIRTEEN_YEARS_OLD}
                            />
                        </IconCard>

                        <Input
                            type="tel"
                            name="zip"
                            iconName="zip"
                            format={formatNumber}
                            deformat={formatNumber}
                            validators={[validateLength(5, 'A valid zipcode is required.')]}
                            data-test="zip"
                            label="zip code "
                        />

                        <Headline>{getString('PROFILE_MAILING_HEADLINE')}</Headline>

                        <IconCard className="register-address" icon="address" iconPosition="before">
                            <Input type="text" name="mailingStreet" label="address line" data-test="address" />

                            <div className="row">
                                <Input type="text" name="mailingCity" label="city" data-test="city" />

                                <StatePicker name="mailingState" data-test="state" />
                            </div>
                        </IconCard>

                        <Errors errors={this.props.errors} data-test="validationErrorSecond" />

                        <Link theme="flat" to="/terms-of-use" color="blue" className="terms" data-test="joinTermsAndConditions">
                            {getString('REGISTER_TERMS')}
                        </Link>

                        <label className="register-opt-in labeled-checkbox">
                            <div className="checkbox">
                                <Checkbox
                                    name="tailorExperience"
                                    data-test={'tailorExperienceCheckbox'}
                                    checkboxType="square"
                                    defaultChecked
                                    onChange={e => this.updateTailorExperience(e)}
                                />
                            </div>
                            <div className="label-text">
                                {getString('PROFILE_EMAIL_EXPERIENCE')}
                                <Button
                                    className="learn-more"
                                    data-test="joinLearnMore"
                                    onClick={() =>
                                        this.setState({
                                            dialog: 'learn-more',
                                        })
                                    }
                                    theme="flat"
                                    color="blue">
                                    {getString('LEARN_MORE')}
                                </Button>
                            </div>
                        </label>

                        <label className="newsletter labeled-checkbox">
                            <div className="checkbox">
                                <Checkbox
                                    name="receiveLidlNewsletter"
                                    checkboxType="square"
                                    defaultChecked
                                    onChange={e => this.updateReceiveLidlNewsletter(e)}
                                />
                            </div>
                            <div className="label-text">{getString('PROFILE_EMAIL_NEWSLETTER')}</div>
                        </label>


                        <PendingButton
                            className="create-account"
                            color="light-blue"
                            type="submit"
                            pendingAction={register}
                            data-test="submit"
                            disabled={!isValid}>
                            {getString('REGISTER_JOIN_LIDL')}
                        </PendingButton>
                </Form>


{/*                 
                {this.props.tempUser ? (
                    <RegisterSecond
                        // firstName={this.props.tempUser?.personal ? this.props.tempUser.personal.firstName : ''}
                        // lastName={this.props.tempUser?.personal ? this.props.tempUser.personal.lastName : ''}
                        next={this.submitUser.bind(this)}
                        errors={this.props.errors}
                    />
                ) : (
                    <RegisterSecond next={this.submitUser.bind(this)} errors={this.props.errors} />
                )} */}

                

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