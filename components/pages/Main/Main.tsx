import Header from '@/features/Header/Header'
import classes from './Main.module.scss'
import Modal from '@/components/ui/Modal/Modal'
import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import IconOne from './IconOne'
import IconTwo from './IconTwo'
import IconThree from './IconThree'
import { ButtonInfo } from '@/components/ui/ButtonInfo/ButtonInfo'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onTogleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <section className={classes.Section}>
            <Header />

            <ButtonInfo className={classes.BtnInfo} onClick={onTogleIsOpen} />

            <div className={classes.Cards}>
                <div className={classes.Card}>
                    <div className={classes.CardIconWrap}>
                        <IconOne />
                    </div>

                    <p className={classes.CardTitle}>Cотрудников</p>
                    <span className={classes.CardCount}>30</span>
                </div>

                <div className={classes.Card} data-color='Y'>
                    <div className={classes.CardIconWrap}>
                        <IconTwo />
                    </div>

                    <p className={classes.CardTitle}>Руководителей</p>
                    <span className={classes.CardCount}>14</span>
                </div>

                <div className={classes.Card}>
                    <div className={classes.CardIconWrap}>
                        <IconThree />
                    </div>

                    <p className={classes.CardTitle}>Заходило сегодня</p>
                    <span className={classes.CardCount}>30</span>
                </div>
            </div>

            <Modal classNameWrap={classes.ModalWrap} classNameInner={classes.ModalInner} isOpen={isOpen} onCloseModal={onTogleIsOpen}>
                <h4 className={classes.ModalTitle}>Статистика по пользователям</h4>

                <p className={classes.ModalText}>
                    В данном разделе можно увидеть данные по сотрудникам компании, зарегистрированным в системе Квант.
                </p>

                <p className={classes.ModalText}>
                    <b>Сотрудников:</b> общее количество сотрудников, зарегистрированное в системе.
                </p>

                <p className={classes.ModalText}>
                    <b>Руководителей:</b> количество сотрудников, которые на ОФС стоят в роли администраторов.
                </p>

                <p className={classes.ModalText}>
                    <b>Заходило сегодня:</b> количество сотрудников, которые сегодня заходили в систему.
                </p>

                <Button className={classes.ModalBtn} size='large' type='secondary' onClick={onTogleIsOpen}>
                    Изучил 👍
                </Button>
            </Modal>
        </section>
    )
}

export default Main
