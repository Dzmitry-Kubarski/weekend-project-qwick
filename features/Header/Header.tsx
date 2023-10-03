import { FC, ReactNode } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import NextImage from 'next/image'
import classes from './Header.module.scss'
import image_mock_avatar from './mockAvatar.jpeg'

interface IProps {
    className?: string
    title?: string
    children?: ReactNode
}

const Header: FC<IProps> = ({ className, children, title }) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            <h2 className={classes.Title}>{title}</h2>
            <div className={classes.Row}>{children}</div>

            <Link className={classes.Avatar} href={'/profile'}>
                <NextImage src={image_mock_avatar} alt='' quality={100} />
            </Link>
        </div>
    )
}

export default Header
