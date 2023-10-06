import { FC, ReactNode, useRef, useState } from 'react'
import cn from 'classnames'
import classes from './Field.module.scss'
import IconEdit from '@/components/icons/IconEdit'
import IconSuccess from '@/components/icons/IconSuccess'
import IconClose from '@/components/icons/IconClose'
import { TAnswer, TNameField } from '../../types'

interface IProps {
    fieldIcon: ReactNode
    success: TAnswer
    error: TAnswer
    isLoading: boolean
    nameField: TNameField
    onChangeFormData: (nameField: string, valueField: string) => void
    onSave: (nameField: TNameField) => void
    value: string
    className?: string
}

const Field: FC<IProps> = (props) => {
    const { className, fieldIcon, value, nameField, onChangeFormData, onSave, isLoading, success, error } = props

    const [isEditing, setIsEditing] = useState(false)
    const oldValueRef = useRef(value)

    const helperSave = (nameField: TNameField) => {
        setIsEditing(false)
        oldValueRef.current = value

        onSave(nameField)
    }

    return (
        <div className={cn(classes.Field, className)}>
            <div className={classes.FieldIcon}>{fieldIcon}</div>

            {isEditing ? (
                <input
                    className={classes.FieldInput}
                    type='text'
                    value={value}
                    onChange={(e) => onChangeFormData(nameField, e.currentTarget.value)}
                />
            ) : (
                <span className={classes.FieldResult}>{value}</span>
            )}

            <div className={classes.FieldBtnWrap}>
                {!isEditing ? (
                    <button className={classes.FieldBtnEdit} onClick={() => setIsEditing(true)}>
                        <IconEdit />
                    </button>
                ) : oldValueRef.current !== value ? (
                    <button className={classes.FieldBtnSave} onClick={() => helperSave(nameField)} disabled={isLoading}>
                        <IconSuccess />
                    </button>
                ) : (
                    <button className={classes.FieldBtnClose} onClick={() => setIsEditing(false)}>
                        <IconClose />
                    </button>
                )}
            </div>

            {success.nameField === nameField && <p className={classes.FieldTextSuccess}>{success.message}</p>}
            {error.nameField === nameField && <p className={classes.FieldTextError}>{error.message}</p>}
        </div>
    )
}

export default Field
