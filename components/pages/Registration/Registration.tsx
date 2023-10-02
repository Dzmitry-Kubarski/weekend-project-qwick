import { useState } from 'react'
import classes from './Registration.module.scss'
import TextField from '@/components/ui/TextField/TextField'
import AuthLayout from '@/features/Auth/AuthLayout/AuthLayout'
import { Button } from '@/components/ui/Button/Button'
import PasswordField from '@/components/ui/PasswordField/PasswordField'

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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

        const { email, password, confirmPassword } = formData

        if (!email.trim() || !password.trim()) {
            return setError('Отсутствует обязательное поле')
        }

        if (password.trim() !== confirmPassword.trim()) {
            return setError('Пароли не совпадают')
        }

        try {
            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false)
                setSuccess('Регистрация прошла успешно')
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
                    className={classes.TextField}
                    label='Пароль'
                    value={formData.password}
                    placeholder='Введите пароль'
                    onChange={(e) => onChangeFormData('password', e.currentTarget.value)}
                />

                <PasswordField
                    className={classes.TextField}
                    label='Повторите пароль'
                    value={formData.confirmPassword}
                    placeholder='Подтвердите пароль'
                    onChange={(e) => onChangeFormData('confirmPassword', e.currentTarget.value)}
                />

                <Button className={classes.BtnSubmit} type='secondary' onClick={onSubmit} isDisabled={isLoading} fullWidth>
                    {!isLoading ? 'Зарегистрироваться' : 'Загрузка...'}
                </Button>
            </AuthLayout>
        </section>
    )
}

export default Registration
