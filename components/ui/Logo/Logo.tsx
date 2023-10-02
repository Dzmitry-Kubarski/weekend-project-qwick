import { FC } from 'react'
import classes from './Logo.module.scss'
import cn from 'classnames'

interface IProps {
    className?: string
}

const Logo: FC<IProps> = ({ className }) => {
    return <div className={cn(classes.Logo, className)}>Qwick</div>
}

export default Logo
