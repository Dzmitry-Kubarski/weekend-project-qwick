import { FC } from 'react'
import cn from 'classnames'
import classes from './Documents.module.scss'

interface IProps {
    className?: string
}

const Documents: FC<IProps> = ({ className }) => {
    return <div className={cn(classes.Wrap, className)}>Documents</div>
}

export default Documents
