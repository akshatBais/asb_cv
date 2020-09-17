import React from 'react'
import cx from 'classnames'
import { has } from 'ramda'
import { Icon, IconOptions } from 'components/icon'
import { bindAll } from 'helpers/bindAll'

import SelectField, { NativeSelectProps } from '@material-ui/core/NativeSelect'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

export interface Props extends NativeSelectProps {
    // Custom Props
    name: string
    iconName?: IconOptions
    menuItems?: {
        value: any
        primaryText: string | React.ReactElement<{}>
        label?: string
        disabled?: boolean
    }[]
    validators?: ((value: any | undefined, fieldValues: any, fieldErrors?: any) => any)[]
    onChange?: (menuItemValue: any) => void

    /** Clear selection when select items are changed and the previous value was removed. */
    clearOnItemsChange?: boolean

    // useful attributes passed to <DropDownMenu/>
    className?: string

    /* TODO: support this for latest version of material-ui */
    iconStyle?: React.CSSProperties
    label?: string
}

interface State {
    value?: any
    uid: number
}

let selectUid = 0

// Used in tandem with MenuItems
export class Select extends React.Component<Props, State> {
    private inputRef: HTMLInputElement | null = null

    public state: State = {
        value: this.props.value || this.props.defaultValue || '',
        uid: selectUid++,
    }

    constructor(props: Props) {
        super(props)
        bindAll(this)
    }

    public UNSAFE_componentWillReceiveProps(nextProps: Props): void {
        if (has('value', nextProps)) {
            this.setState({
                value: nextProps.value,
            })
        }
    }

    public componentDidUpdate() {
        // Detect value change when menu items change; this normally doesn't trigger onChange.
        if (this.props.clearOnItemsChange && this.inputRef && this.inputRef.value !== this.state.value) {
            const value = ''
            this.setState({ value }, () => {
                if (this.props.onChange) {
                    this.props.onChange(value)
                }
            })
        }
    }

    private onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        const { value } = e.target
        this.setState({ value })
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public clear(): void {
        this.setState({ value: '' })
    }

    private renderInput(): React.ReactElement<{}> {
        // tslint:disable-next-line:no-unused-variable
        const {
            children,
            className,
            iconName,
            menuItems,
            name,
            validators,
            iconStyle,
            label,
            placeholder,
            value,
            defaultValue,
            id,
            clearOnItemsChange,
            ...props
        } = this.props

        const selectClass = iconName ? '' : className
        const selectId = id || `select${this.state.uid}`

        return (
            <FormControl
                className={cx(selectClass, {
                    'card-body': !!iconName,
                })}>
                <InputLabel htmlFor={selectId} error={this.props.error}>
                    {label}
                </InputLabel>
                <SelectField
                    {...props}
                    className="lidl-select"
                    onChange={this.onChange}
                    value={this.state.value}
                    name={name}
                    inputProps={{
                        ref: (e: HTMLInputElement | null) => (this.inputRef = e),
                        id: selectId,
                    }}>
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {menuItems
                        ? menuItems.map(item => (
                              <option key={item.value} value={item.value} disabled={item.disabled}>
                                  {item.primaryText}
                              </option>
                          ))
                        : children}
                </SelectField>
            </FormControl>
        )
    }

    public render(): React.ReactElement<{}> {
        // tslint:disable-next-line:no-unused-variable
        const { iconName } = this.props

        if (!iconName) {
            return this.renderInput()
        }

        return (
            <div className={cx('lidl-select-wrapper', 'icon-card', 'icon-before')}>
                <div className="card-content">
                    {this.renderInput()}
                    <Icon iconName={iconName} />
                </div>
            </div>
        )
    }
}