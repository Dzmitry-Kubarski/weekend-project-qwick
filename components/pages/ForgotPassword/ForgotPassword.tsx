import { useState } from 'react'
import { useRouter } from 'next/router'
import classes from './ForgotPassword.module.scss'
import TextField from '@/components/ui/TextField/TextField'
import AuthLayout from '@/features/Auth/AuthLayout/AuthLayout'
import { Button } from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import IconSuccess from '@/components/icons/IconSuccess'

const ForgotPassword = () => {
    const { push } = useRouter()

    const [formData, setFormData] = useState({
        email: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState('')

    const onChangeFormData = (nameField: string, valueField: string) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

    const onTogleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const onSubmit = () => {
        setError('')

        if (!formData.email.trim()) {
            return setError('Отсутствует поле Email')
        }

        setIsLoading(true)

        try {
            setTimeout(() => {
                onTogleIsOpen()
                setIsLoading(false)
            }, 500)
        } catch (error) {}
    }

    return (
        <section className={classes.Section}>
            <AuthLayout subTitle='Введите свой email адрес для восстановления пароля' errorText={error}>
                <TextField
                    className={classes.TextField}
                    label='Email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={(e) => onChangeFormData('email', e.currentTarget.value)}
                />

                <Button className={classes.BtnSubmit} type='secondary' onClick={onSubmit} isDisabled={isLoading} fullWidth>
                    {!isLoading ? 'Восстановить' : 'Загрузка...'}
                </Button>

                <Button className={classes.BtnLogin} type='secondary' onClick={() => push('/login')} fullWidth outline>
                    Войти
                </Button>
            </AuthLayout>

            <Modal classNameInner={classes.ModalInner} isOpen={isOpen} onCloseModal={onTogleIsOpen}>
                <div className={classes.ModalIcon}>
                    <IconSuccess />
                </div>

                <p className={classes.ModalText}>На ваш email адрес отправлено сообщение для восстановления пароля</p>
            </Modal>
        </section>
    )
}

export default ForgotPassword
