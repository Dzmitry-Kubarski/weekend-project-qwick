import { ReactNode } from 'react'
import cn from 'classnames'
import classes from './Modal.module.scss'

interface IProps {
    isOpen: boolean
    children: ReactNode
    onCloseModal: () => void
    classNameWrap?: string
    classNameInner?: string
}

function Modal({ onCloseModal, children, isOpen, classNameWrap, classNameInner }: IProps) {
    return (
        <div className={cn(classes.Wrap, { [classes.Open]: isOpen }, classNameWrap)}>
            <div className={classes.Overlay} onClick={onCloseModal} />

            <div className={cn(classes.Inner, classNameInner)}>{children}</div>
        </div>
    )
}

export default Modal
