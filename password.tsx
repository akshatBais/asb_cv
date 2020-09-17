import React from 'react'
import { bindAll } from 'helpers/bindAll'
import { Input, Props as InputProps } from 'components/inputs/input'
import Popper from '@material-ui/core/Popper'

interface State {
    visible: boolean
}

export class Password extends React.Component<InputProps, State> {
    public constructor(props: InputProps) {
        super(props)
        bindAll(this)
        this.state = {
            visible: false,
        }
        // this.setPopper = this.setPopper.bind(this)
    }

    public render(): React.ReactElement<{}> {
        return (
            <div className="password-input">
                <Input
                    {...this.props}
                    type={this.state.visible ? 'text' : 'password'}
                />

                <button
                    type="button"
                    className="show"
                    onClick={() => this.setState({ visible: !this.state.visible })}
                    role="checkbox"
                    aria-label="show password"
                    aria-checked={this.state.visible}>
                    {this.state.visible ? 'hide' : 'show'}
                </button>
            </div>
        )
    }
}