import { ReactNode } from 'react'
import classes from './Button.module.scss'
import cn from 'classnames'

interface IProps {
    subTitle?: string
    children: ReactNode
    onClick: () => void
    isDisabled?: boolean
    className?: string
    size?: 'large' | 'middle' | 'small'
    type?: 'default' | 'secondary'
    fullWidth?: boolean
    outline?: boolean
}

export const Button = ({ children, onClick, isDisabled, size, type, fullWidth, className, outline }: IProps) => {
    return (
        <button
            className={cn(classes.Button, { [classes.FullWidth]: fullWidth, [classes.Outline]: outline }, className)}
            type='button'
            data-size={size || 'small'}
            data-type={type || 'default'}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}
