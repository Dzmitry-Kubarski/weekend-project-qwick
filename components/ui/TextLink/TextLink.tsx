import { FC, ReactNode } from 'react'
import classes from './TextLink.module.scss'
import cn from 'classnames'
import Link from 'next/link'

interface IProps {
    children: ReactNode
    className?: string
    link: string
}

const TextLink: FC<IProps> = ({ className, children, link }) => {
    return (
        <Link className={cn(classes.Link, className)} href={link}>
            {children}
        </Link>
    )
}

export default TextLink
