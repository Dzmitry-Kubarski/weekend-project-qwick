import { useState } from 'react'
import { useRouter } from 'next/router'
import classes from './NewPassword.module.scss'
import AuthLayout from '@/features/Auth/AuthLayout/AuthLayout'
import { Button } from '@/components/ui/Button/Button'
import PasswordField from '@/components/ui/PasswordField/PasswordField'

const NewPassword = () => {
    const { push } = useRouter()

    const [formData, setFormData] = useState({
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

        if (!formData.password.trim() || !formData.confirmPassword.trim()) {
            return setError('Отсутствует обязательное поле')
        }

        if (formData.password.trim() !== formData.confirmPassword.trim()) {
            return setError('Пароли не совпадают')
        }

        setIsLoading(true)

        try {
            setTimeout(() => {
                setSuccess('Пароль успешно изменен')
                setIsLoading(false)
                setFormData({ password: '', confirmPassword: '' })
            }, 500)
        } catch (error) {}
    }

    return (
        <section className={classes.Section}>
            <AuthLayout subTitle='Введите новый пароль' errorText={error} successText={success}>
                <PasswordField
                    className={classes.TextField}
                    label='Пароль'
                    value={formData.password}
                    placeholder='Ваш пароль'
                    onChange={(e) => onChangeFormData('password', e.currentTarget.value)}
                />

                <PasswordField
                    className={classes.PasswordField}
                    label='Повторите пароль'
                    value={formData.confirmPassword}
                    placeholder='Ваш пароль'
                    onChange={(e) => onChangeFormData('confirmPassword', e.currentTarget.value)}
                />

                <Button className={classes.BtnSubmit} type='secondary' onClick={onSubmit} isDisabled={isLoading} fullWidth>
                    {!isLoading ? 'Изменить' : 'Загрузка...'}
                </Button>

                <Button className={classes.BtnLogin} type='secondary' onClick={() => push('/login')} fullWidth outline>
                    Войти
                </Button>
            </AuthLayout>
        </section>
    )
}

export default NewPassword
