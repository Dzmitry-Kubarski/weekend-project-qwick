import { FC, ReactNode } from 'react'
import classes from './AuthLayout.module.scss'
import Logo from '@/components/ui/Logo/Logo'

interface IProps {
    subTitle?: string
    errorText?: string
    successText?: string
    children: ReactNode
}

const AuthLayout: FC<IProps> = ({ subTitle, children, errorText, successText }) => {
    return (
        <div className={classes.Wrap}>
            <Logo className={classes.Logo} />

            <p className={classes.SubTitle}>{subTitle}</p>

            <div className={classes.Form}>{children}</div>

            {errorText && <p className={classes.ErrorText}>{errorText}</p>}
            {successText && <p className={classes.SuccessText}>{successText}</p>}
        </div>
    )
}

export default AuthLayout
