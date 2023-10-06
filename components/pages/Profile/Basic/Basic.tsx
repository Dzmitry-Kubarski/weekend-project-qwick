import { FC, useState } from 'react'
import cn from 'classnames'
import classes from './Basic.module.scss'
import IconPhone from '@/components/icons/IconPhone'
import IconMail from '@/components/icons/IconMail'
import Avatar from './Avatar/Avatar'
import Field from './Field/Field'
import { TAnswer, TNameField } from '../types'
import ChangePasword from './ChangePasword/ChangePasword'

interface IProps {
    className?: string
}

interface IFormData {
    email: string
    phone: string
    password: string
    confirmPassword: string
}

const defaultAnswer: TAnswer = { nameField: '', message: '' }

const Basic: FC<IProps> = ({ className }) => {
    const [formData, setFormData] = useState<IFormData>({
        email: 'elcor58@yandex.ru',
        phone: '+7 (964) 872 - 89 - 59',
        password: '',
        confirmPassword: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<TAnswer>(defaultAnswer)
    const [success, setSuccess] = useState<TAnswer>(defaultAnswer)

    const onChangeFormData = (nameField: string, valueField: string) => {
        setFormData({ ...formData, [nameField]: valueField })
    }

    const onSaveNewData = (nameField: TNameField) => {
        setError(defaultAnswer)
        setSuccess(defaultAnswer)

        if (!formData[nameField].trim()) {
            return setError({ nameField, message: 'Поле не заполнено' })
        }

        try {
            setIsLoading(true)

            console.log('newData =', `{${nameField}: ${formData[nameField]}}`)

            setTimeout(() => {
                setIsLoading(false)
                setSuccess({ nameField, message: 'Данные успешно сохранены' })
            }, 500)
        } catch (error) {}
    }

    const fieldProps = {
        onChangeFormData,
        onSave: onSaveNewData,
        isLoading,
        success,
        error
    }

    return (
        <div className={cn(classes.Wrap, className)}>
            <Avatar />

            <div className={classes.Fields}>
                <Field nameField='phone' value={formData.phone} fieldIcon={<IconPhone />} {...fieldProps} />
                <Field nameField='email' value={formData.email} fieldIcon={<IconMail />} {...fieldProps} />
                <ChangePasword />
            </div>

            <div className={classes.Info}>
                <p className={classes.Name}>Выполняемые функции:</p>
                <p className={classes.Position}>Генеральный директор</p>
            </div>
        </div>
    )
}

export default Basic
