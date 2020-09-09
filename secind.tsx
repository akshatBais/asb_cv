second.tsx

import React from 'react'
import moment from 'moment'

import { PostUserSecond } from 'interfaces/user'

import { StatePicker } from 'components/inputs/states'
import { Input } from 'components/inputs/input'
import { DatePicker, THIRTEEN_YEARS_OLD } from 'components/inputs/datepicker'
import { PendingButton } from 'components/buttons/pending'
import { Title2, Headline } from 'components/typography'
import { Form, Validation, Errors } from 'components/form'
import { IconCard } from 'components/cards/iconCard'

import { formatPhone } from 'helpers/formatters/phone'
import { deformatPhone } from 'helpers/deformatters/phone'
import { validatePhone, validateRequired, validateLength } from 'helpers/validators'
import { bindAll } from 'helpers/bindAll'
import { formatNumber } from 'helpers/formatters/numbers'
import { pureConnect } from 'helpers/connect'
import { getString } from 'helpers/i18n'

import { Dispatch } from 'interfaces/dispatch'
import { register } from 'actions/auth'
import { doesUserExist } from 'apis/user'

interface Props {
    next: (user: PostUserSecond) => void
    firstName?: string
    lastName?: string
    errors?: string[]
}

interface State {
    isValid: boolean
}

type InternalProps = Props & Dispatch

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
    constructor(props: InternalProps) {
        super(props)
        bindAll(this)
        this.state = {
            isValid: false,
        }
    }

    public UNSAFE_componentWillMount(): void {
        window.scrollTo(0, 0)
    }

    private onSubmit(fieldValues: FieldValues): void {
        this.props.next({
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
        })
    }

    private checkValidation(fieldValues: FieldValues, validation?: Validation): void {
        if (validation) {
            return this.setState({
                isValid: validation.valid,
            })
        }
    }

    public render(): React.ReactElement<{}> {
        const { isValid } = this.state

        return (
            <Form
                className="register-second"
                onSubmit={this.onSubmit}
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

                            return doesUserExist({ phone }).then(
                                exists => (exists ? getString('REGISTER_PHONE_NUMBER_ERROR') : null)
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
        )
    }
}

export const RegisterSecond = pureConnect<Props>(Component)