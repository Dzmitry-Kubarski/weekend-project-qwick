import { ChangeEvent, FC } from 'react'
import classes from './TextField.module.scss'
import cn from 'classnames'

interface IProps {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    hideLabel?: boolean
}

const TextField: FC<IProps> = ({ value, label, onChange, placeholder = '', hideLabel, className }) => {
    return (
        <div className={cn(classes.Field, { [classes.HideLabel]: hideLabel }, className)}>
            <input className={classes.Input} type='text' value={value} onChange={onChange} placeholder={placeholder} />
            <label className={classes.Label}>{label}</label>
        </div>
    )
}

export default TextField
