import { FC } from 'react'
import cn from 'classnames'
import classes from './Toggle.module.scss'

interface IProps {
    className?: string
    name: string
    value: boolean
    isLoading?: boolean
    onChangeToggle: () => void
}

const Toggle: FC<IProps> = ({ className, name, value, isLoading, onChangeToggle }) => {
    return (
        <div className={cn(classes.Toggle, className)}>
            <input type='checkbox' name='' id={name} checked={value} onChange={onChangeToggle} disabled={isLoading} />
            <label htmlFor={name}></label>
        </div>
    )
}

export default Toggle
