import { FC } from 'react'
import classes from './Avatar.module.scss'
import cn from 'classnames'
import IconCamera from '@/components/icons/IconCamera'

interface IProps {
    className?: string
}

const Avatar: FC<IProps> = ({ className }) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            <div className={classes.Avatar}>
                <div className={classes.AvatarChange}>
                    <IconCamera />
                </div>
            </div>

            <div className={classes.Info}>
                <p className={classes.Name}>Арбамов Владимир Алексеевич</p>
                <p className={classes.Position}>Генеральный директор</p>
            </div>
        </div>
    )
}

export default Avatar
