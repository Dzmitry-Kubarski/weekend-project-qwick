import { FC, useState } from 'react'
import cn from 'classnames'
import classes from './ChangePasword.module.scss'
import IconKey from '@/components/icons/IconKey'
import Modal from '@/components/ui/Modal/Modal'
import { Button } from '@/components/ui/Button/Button'
import PasswordField from '@/components/ui/PasswordField/PasswordField'

interface IProps {
    className?: string
}

const ChangePasword: FC<IProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)

    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onTogleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const onChangeFormData = (nameField: string, valueField: string) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

    const onSubmit = () => {
        setError('')
        setSuccess('')

        const { oldPassword, newPassword, confirmPassword } = formData

        if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
            return setError('Отсутствует обязательное поле')
        }

        if (newPassword.trim() !== confirmPassword.trim()) {
            return setError('Пароли не совпадают')
        }

        try {
            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false)
                setSuccess('Пароль успешно обновлён')
            }, 500)
        } catch (error) {}
    }

    return (
        <>
            <div className={cn(classes.Field, className)}>
                <div className={classes.FieldIcon}>
                    <IconKey />
                </div>

                <button className={classes.FieldResult} onClick={onTogleIsOpen}>
                    Изменить пароль
                </button>
            </div>

            <Modal classNameWrap={classes.ModalWrap} classNameInner={classes.ModalInner} isOpen={isOpen} onCloseModal={onTogleIsOpen}>
                <h4 className={classes.ModalTitle}>Изменение пароля</h4>

                <PasswordField
                    className={classes.PasswordField}
                    label='Старый пароль'
                    value={formData.oldPassword}
                    placeholder=' '
                    onChange={(e) => onChangeFormData('oldPassword', e.currentTarget.value)}
                    notBorder
                />

                <PasswordField
                    className={classes.PasswordField}
                    label='Новый пароль'
                    value={formData.newPassword}
                    placeholder=' '
                    onChange={(e) => onChangeFormData('newPassword', e.currentTarget.value)}
                    notBorder
                />

                <PasswordField
                    className={classes.PasswordField}
                    label='Повторите новый пароль'
                    value={formData.confirmPassword}
                    placeholder=' '
                    onChange={(e) => onChangeFormData('confirmPassword', e.currentTarget.value)}
                    notBorder
                />

                <Button className={classes.ModalBtn} size='large' type='secondary' onClick={onSubmit} isDisabled={isLoading}>
                    Сохранить
                </Button>

                {success && <p className={classes.FieldTextSuccess}>{success}</p>}
                {error && <p className={classes.FieldTextError}>{error}</p>}
            </Modal>
        </>
    )
}

export default ChangePasword
