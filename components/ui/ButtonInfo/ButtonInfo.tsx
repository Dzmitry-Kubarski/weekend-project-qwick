import cn from 'classnames'
import classes from './ButtonInfo.module.scss'
import IconQuestion from '@/components/icons/IconQuestion'

interface IProps {
    onClick: () => void
    className?: string
}

export const ButtonInfo = ({ onClick, className }: IProps) => {
    return (
        <button className={cn(classes.ButtonInfo, className)} type='button' onClick={onClick}>
            <IconQuestion />
        </button>
    )
}
