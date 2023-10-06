import { FC } from 'react'
import cn from 'classnames'
import classes from './Notifications.module.scss'

interface IProps {
    className?: string
}

const Notifications: FC<IProps> = ({ className }) => {
    return <div className={cn(classes.Wrap, className)}>Notifications</div>
}

export default Notifications
