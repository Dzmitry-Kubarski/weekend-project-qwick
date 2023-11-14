import { FC, MouseEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import classes from './Dropdown.module.scss'
import IconChevronDown from '@/components/icons/IconChevronDown'

interface IProps {
    className?: string
    selectedOption: { href: string; label: string }
    links: { href: string; label: string }[]
}

const Dropdown: FC<IProps> = ({ className, links, selectedOption }) => {
    const { asPath } = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const helperOnClick = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, url: string) => {
        if (url === selectedOption.href) {
            e.stopPropagation()
            return
        }
    }

    return (
        <>
            <div className={cn(classes.Wrap, { [classes.Open]: isOpen }, className)}>
                <div className={classes.Overlay} onClick={() => setIsOpen(false)} />

                <button className={classes.Btn} onClick={() => setIsOpen(true)}>
                    {selectedOption.label}

                    <IconChevronDown />
                </button>

                <ul className={classes.Items}>
                    {links.map((link) => (
                        <li
                            className={cn(classes.Item, { [classes.Active]: link.href === asPath })}
                            key={link.href}
                            onClick={(e) => helperOnClick(e, link.href)}
                        >
                            <Link href={link.href} className={classes.Link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Dropdown
