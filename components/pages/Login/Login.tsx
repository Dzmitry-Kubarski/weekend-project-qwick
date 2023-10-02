import { useState } from 'react'
import classes from './Login.module.scss'
import TextField from '@/components/ui/TextField/TextField'
import AuthLayout from '@/features/Auth/AuthLayout/AuthLayout'
import { Button } from '@/components/ui/Button/Button'
import PasswordField from '@/components/ui/PasswordField/PasswordField'
import TextLink from '@/components/ui/TextLink/TextLink'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onChangeFormData = (nameField: string, valueField: string) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

    const onSubmit = () => {
        setError('')
        setSuccess('')

        const { email, password } = formData

        if (!email || !password) {
            return setError('Отсутствует обязательное поле')
        }

        try {
            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        } catch (error) {}
    }

    return (
        <section className={classes.Section}>
            <AuthLayout errorText={error} successText={success}>
                <TextField
                    className={classes.TextField}
                    label='Email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={(e) => onChangeFormData('email', e.currentTarget.value)}
                />

                <PasswordField
                    className={classes.PasswordField}
                    label='Пароль'
                    value={formData.password}
                    placeholder='Ваш пароль'
                    onChange={(e) => onChangeFormData('password', e.currentTarget.value)}
                />

                <div className={classes.ForgotPasswordWrap}>
                    <TextLink link='/forgot-password/'>Забыли пароль?</TextLink>
                </div>

                <Button className={classes.BtnSubmit} type='secondary' onClick={onSubmit} isDisabled={isLoading} fullWidth>
                    {!isLoading ? 'Войти' : 'Загрузка...'}
                </Button>

                <div className={classes.Line} />

                <div className={classes.NotRegister}>
                    <span>У вас нет учетной записи? </span> <TextLink link='/registration/'>Регистрация</TextLink>
                </div>
            </AuthLayout>
        </section>
    )
}

export default Login
