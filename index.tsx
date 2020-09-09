import React from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { merge } from 'ramda'
import { RegisterFirst } from 'containers/app/register/first'
import { RegisterSecond } from 'containers/app/register/second'
import { PostUserFirst, PostUserSecond } from 'interfaces/user'
import { register } from 'actions/auth'
import { Dispatch } from 'interfaces/dispatch'
import { connect } from 'helpers/connect'
import { selectErrors } from 'reducers/errors'
import { ACAccountCreated } from 'actions/analytics'
import { ACSetError } from 'actions/errors'

const ERROR_NAMESPACE = 'register-form'

interface Props extends RouteComponentProps<{}> {}

interface Selector {
    errors?: string[]
    isAuthenticated: boolean
}

interface State {
    tempUser?: PostUserFirst
}

type InternalProps = Props & Dispatch & Selector

class Component extends React.Component<InternalProps, State> {
    public state: State = {
        tempUser: undefined,
    }

    public componentWillUnmount() {
        // clear errors
        const { errors } = this.props
        if (errors && errors.length > 0) {
            this.props.dispatch(ACSetError({ namespace: ERROR_NAMESPACE, errors: [] }, null))
        }
    }

    private setTempUser(user: PostUserFirst): void {
        this.setState({
            tempUser: user,
        })
    }

    private submitUser(user: PostUserSecond): void {
        if (this.state.tempUser) {
            const nextUser = merge(this.state.tempUser, user)

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

    public render(): React.ReactElement<{}> {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        const { tempUser } = this.state
        return (
            <div className="register-container">
                {/* {!tempUser ? ( */}
                    <RegisterFirst next={this.setTempUser.bind(this)} tempUser={tempUser} errors={this.props.errors}/>
                 {/* ) : ( */}
                
                {/* )}  */}
            </div>
        )
    }
}

export const Register = connect<Selector, Props>(state => ({
    errors: selectErrors(state, ERROR_NAMESPACE),
    isAuthenticated: !!state.auth.token,
}))(Component)