import { ChangeEvent, FC, useState } from 'react'
import classes from './PasswordField.module.scss'
import cn from 'classnames'
import IconShowPassword from '@/components/icons/IconShowPassword'
import IconHidePassword from '@/components/icons/IconHidePassword'

interface IProps {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

const PasswordField: FC<IProps> = ({ value, label, onChange, placeholder = '', className }) => {
    const [isShow, setIsShow] = useState(false)

    const toggleIsShow = () => {
        setIsShow((prev) => !prev)
    }

    return (
        <div className={cn(classes.Field, className)}>
            <input
                className={classes.Input}
                type={isShow ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            <label className={classes.Label}>{label}</label>

            <button className={classes.BtnShow} onClick={toggleIsShow}>
                {!isShow ? <IconShowPassword className={classes.IconShow} /> : <IconHidePassword className={classes.IconHide} />}
            </button>
        </div>
    )
}

export default PasswordField
