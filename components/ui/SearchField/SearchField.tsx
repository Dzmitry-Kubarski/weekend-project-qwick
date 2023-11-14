import { ChangeEvent, FC } from 'react'
import cn from 'classnames'
import classes from './SearchField.module.scss'
import IconSearch from '@/components/icons/IconSearch'

interface IProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    onClick: () => void
}

const SearchField: FC<IProps> = ({ value, onChange, placeholder = '', className, onClick }) => {
    return (
        <div className={cn(classes.Field, className)}>
            <input className={classes.Input} type='text' value={value} onChange={onChange} placeholder={placeholder} />

            <button className={classes.Btn} onClick={onClick}>
                <IconSearch />
            </button>
        </div>
    )
}

export default SearchField
