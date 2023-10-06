import { ChangeEvent, FC, useState } from 'react'
import NextImage from 'next/image'
import cn from 'classnames'
import classes from './Documents.module.scss'
import TextField from '@/components/ui/TextField/TextField'
import IconSuccess from '@/components/icons/IconSuccess'
import IconClose from '@/components/icons/IconClose'
import Modal from '@/components/ui/Modal/Modal'

type TDataItem = {
    name: string
    code: string
    files: string[]
    text: string
    editing: boolean
}

const defaultDataFields: TDataItem[] = [
    {
        name: 'Паспорт:',
        code: 'pasport',
        files: [],
        text: '',
        editing: false
    },
    {
        name: 'Снилс:',
        code: 'snils',
        files: [],
        text: '',
        editing: false
    },
    {
        name: 'ИНН:',
        code: 'inn',
        files: [],
        text: '',
        editing: false
    },
    {
        name: 'Военный билет:',
        code: 'military_ticket',
        files: [],
        text: '',
        editing: false
    },
    {
        name: 'Документы об образовании:',
        code: 'education',
        files: [],
        text: '',
        editing: false
    },
    {
        name: 'Карта для начисления з/п:',
        code: 'card',
        files: [],
        text: '',
        editing: false
    }
]

interface IProps {
    className?: string
}

const Documents: FC<IProps> = ({ className }) => {
    const [data, setData] = useState(defaultDataFields || [])

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const onTogleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const onChangeData = (nameField: 'text', codeField: string, valueField: string) => {
        const newArr = data.map((item) => {
            if (item.code === codeField) {
                if (nameField === 'text') {
                    return { ...item, text: valueField, editing: true }
                }

                return item
            }

            return item
        })

        setData(newArr)
    }

    const onCancelChangeData = (codeField: string) => {
        const newArr = data.map((item) => {
            if (item.code === codeField) {
                return { ...item, text: '', files: [], editing: false }
            }

            return item
        })

        setData(newArr)
    }

    const compress = (photo: File): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = (event) => {
                const img = new Image()

                img.onload = () => {
                    const targetHeight = Math.min(100, img.height)
                    const scaleFactor = targetHeight / img.height
                    const targetWidth = img.width * scaleFactor

                    const elem = document.createElement('canvas')
                    elem.width = targetWidth
                    elem.height = targetHeight
                    const ctx = elem.getContext('2d')

                    if (ctx) {
                        ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

                        const base64data = elem.toDataURL('image/jpeg')
                        resolve(base64data)
                    } else {
                        reject(new Error('Canvas context is null.'))
                    }
                }

                img.onerror = (error) => {
                    reject(error)
                }

                img.src = event.target?.result as string
            }

            reader.onerror = (error) => {
                reject(error)
            }

            reader.readAsDataURL(photo)
        })
    }

    const onChangeFiles = async (event: ChangeEvent<HTMLInputElement>, codeField: string) => {
        const target = event.target as HTMLInputElement
        const files = target.files

        if (files?.length) {
            let arrBase64: string[] = []

            for (let index = 0; index < files.length; index++) {
                const base64 = await compress(files[index])

                if (base64) {
                    arrBase64.push(base64)
                }
            }

            const newArr = data.map((item) => {
                if (item.code === codeField) {
                    return { ...item, files: [...item.files, ...arrBase64], editing: true }
                }

                return item
            })

            setData(newArr)
        }
    }

    const onSaveNewData = (obj: TDataItem) => {
        setError('')
        setSuccess('')

        try {
            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false)
                setSuccess('Данные успешно сохранены')
                onTogleIsOpen()

                const newArr = data.map((item) => {
                    if (item.code === obj.code) {
                        return { ...item, editing: false }
                    }

                    return item
                })

                setData(newArr)
            }, 500)
        } catch (error) {}
    }

    return (
        <div className={cn(classes.Wrap, className)}>
            <div className={classes.Fields}>
                {data.map((item, index) => (
                    <div className={classes.Field} key={index}>
                        <p className={classes.FieldTitle}>{item.name}</p>
                        <span className={classes.FieldSubTitle}>Добавить файл</span>

                        <div className={classes.FieldAddFile}>
                            <input type='file' accept='.jpg,.ppeg,.webp' title='' onChange={(e) => onChangeFiles(e, item.code)} multiple />
                            <span>+ Прикрепить файл</span>
                        </div>

                        <div className={classes.Files}>
                            {item.files.map((file, fileIndex) => (
                                <NextImage src={file} key={fileIndex} width={50} height={50} alt='' quality={100} />
                            ))}
                        </div>

                        <div className={classes.TextFieldWrap}>
                            <TextField
                                className={classes.TextField}
                                label=''
                                value={item.text}
                                onChange={(e) => onChangeData('text', item.code, e.currentTarget.value)}
                                hideLabel
                                placeholder='Впешите данные документов'
                            />

                            <div className={cn(classes.FieldControl, { [classes.Active]: item.editing })}>
                                <button className={classes.BtnSave} onClick={() => onSaveNewData(item)} disabled={isLoading}>
                                    <IconSuccess />
                                </button>

                                <button className={classes.BtnCancel} disabled={isLoading} onClick={() => onCancelChangeData(item.code)}>
                                    <IconClose />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal classNameInner={classes.ModalInner} isOpen={isOpen} onCloseModal={onTogleIsOpen}>
                <div className={cn(classes.ModalIcon, { [classes.Error]: error })}>{!error ? <IconSuccess /> : <IconClose />}</div>

                {success && <p className={classes.ModalText}>Данные успешно сохранены</p>}
                {error && <p className={classes.ModalText}>{error}</p>}
            </Modal>
        </div>
    )
}

export default Documents
