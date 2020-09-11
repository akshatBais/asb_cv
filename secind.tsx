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
import { validateEmail } from 'helpers/validators/email'
import { validatePassword } from 'helpers/validators/password'

import { Dispatch } from 'interfaces/dispatch'
import { register } from 'actions/auth'
import { doesUserExist } from 'apis/user'
import { Button } from 'components/button'

import { getUser } from 'apis/user'
import { equals } from 'ramda'
import { Password } from 'components/inputs/password'

interface Props {
    next: (user: PostUserSecond) => void
    firstName?: string
    lastName?: string
    errors?: string[]
}

interface State {
    isValid: boolean
    dialog: 'forgot-password' | 'login' | 'learn-more' | null
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
    email: string
    password: string
}

class Component extends React.Component<InternalProps, State> {
    constructor(props: InternalProps) {
        super(props)
        bindAll(this)
        this.state = {
            isValid: false,
            dialog: null,
        }
    }

    public UNSAFE_componentWillMount(): void {
        window.scrollTo(0, 0)
    }

    private onSubmit(fieldValues: FieldValues): void {
        console.log('fieldValues', fieldValues)
        this.props.next({
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
            receiveLidlNewsletter: true,
            tailorExperience: true,
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


        return (
          
        )
    }
}

export const RegisterSecond = pureConnect<Props>(Component)