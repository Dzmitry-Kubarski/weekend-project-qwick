import { FC, Fragment, MouseEvent, useState } from 'react'
import cn from 'classnames'
import classes from './Notifications.module.scss'
import IconCopy from '@/components/icons/IconCopy'
import TextLink from '@/components/ui/TextLink/TextLink'
import Toggle from '@/components/ui/Toggle/Toggle'
import { ButtonInfo } from '@/components/ui/ButtonInfo/ButtonInfo'
import IconClose from '@/components/icons/IconClose'
import IconSuccess from '@/components/icons/IconSuccess'
import Modal from '@/components/ui/Modal/Modal'
import { Button } from '@/components/ui/Button/Button'
import { mockData } from './mockData'

type TModalInfo = {
    title: string
    text: string
}

interface IItemList {
    notificationID: number
    name: string
    checked: boolean
}

interface IDataChannels {
    nameChanel: string
    typeChanel: string
    list: IItemList[]
}

interface IProps {
    className?: string
}

const Notifications: FC<IProps> = ({ className }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openModalID, setOpenModalID] = useState<number | null>(null)

    const [list, setList] = useState<IDataChannels[]>(mockData.channels || [])

    const onTogleIsOpen = () => {
        setIsModalOpen((prev) => !prev)
    }

    const onChangeOpenModalID = (id: number | null) => {
        setOpenModalID(id)
    }

    const helperCopyTelegram = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, text: string) => {
        navigator.clipboard.writeText(text)

        const iconSucces = e.currentTarget.querySelector(`.${classes.TelegramCopySuccess}`) as HTMLElement

        if (iconSucces) {
            iconSucces.style.opacity = '1'
        }

        setTimeout(() => {
            if (iconSucces) {
                iconSucces.style.opacity = '0'
            }
        }, 1500)
    }

    const onSaveNitification = (chanel: string, id: number) => {
        setError('')
        setSuccess('')

        try {
            setIsLoading(true)

            setTimeout(() => {
                const newData = list.map((item) => {
                    if (item.typeChanel === chanel) {
                        const newList = item.list.map((elem) => {
                            if (elem.notificationID === id) {
                                return { ...elem, checked: !elem.checked }
                            }

                            return elem
                        })

                        return { ...item, list: newList }
                    }

                    return item
                })

                setList(newData)

                setIsLoading(false)
                setSuccess('Настройки сохранены')
            }, 500)
        } catch (error) {}
    }

    return (
        <div className={cn(classes.Wrap, className)}>
            <div className={classes.Desc}>
                <p className={classes.DescText}>
                    Для подключения Telegram - уведомлений, добавьте в свой контакт лист Telegram учетную запись @ErpNotificationBot и
                    напишите в сообщении следующий код:
                </p>

                <button className={classes.TelegramCopy} onClick={(e) => helperCopyTelegram(e, '24213582179')}>
                    24213582179 <IconCopy /> <IconSuccess className={classes.TelegramCopySuccess} />
                </button>
            </div>

            <div className={classes.Manual}>
                <p className={classes.ManualText}>Инструкция по интеграции с Telegram</p>

                <TextLink link='/manual-telegram'>Смотреть</TextLink>
            </div>

            <p className={classes.Title}>Подключенные каналы для оповещения:</p>

            <div className={classes.ListWrap}>
                {list.map((item, index) => (
                    <Fragment key={index}>
                        <div className={classes.ListTitle}>
                            <span>Канал: {item.nameChanel}</span>

                            <button>
                                <IconClose />
                            </button>
                        </div>

                        <ul className={classes.List}>
                            {item.list.map((elem, elemIndex) => (
                                <li className={classes.ListItem} key={elemIndex}>
                                    <Toggle
                                        name={`${item.typeChanel}_${elem.notificationID}`}
                                        value={elem.checked}
                                        onChangeToggle={() => onSaveNitification(item.typeChanel, elem.notificationID)}
                                        isLoading={isLoading}
                                    />

                                    <span>{elem.name}</span>

                                    <ButtonInfo
                                        onClick={() => {
                                            onChangeOpenModalID(elem.notificationID)
                                            onTogleIsOpen()
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Fragment>
                ))}
            </div>

            <Modal classNameWrap={classes.ModalWrap} classNameInner={classes.ModalInner} isOpen={isModalOpen} onCloseModal={onTogleIsOpen}>
                {openModalID && (
                    <h4 className={classes.ModalTitle}>{(mockData?.modalInfo as Record<number, TModalInfo>)?.[openModalID].title}</h4>
                )}

                {openModalID && (
                    <div
                        className={classes.ModalText}
                        dangerouslySetInnerHTML={{ __html: (mockData?.modalInfo as Record<number, TModalInfo>)?.[openModalID].text }}
                    />
                )}

                <Button className={classes.ModalBtn} size='large' type='secondary' onClick={onTogleIsOpen}>
                    Изучил 👍
                </Button>
            </Modal>
        </div>
    )
}

export default Notifications
