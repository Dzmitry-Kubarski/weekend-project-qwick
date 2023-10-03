import { FC, ComponentType, SVGProps } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import classes from './Menu.module.scss'
import IconChatBot from '@/components/icons/IconChatBot'
import { mockData } from './mockData'

interface IItemMenu {
    name: string
    url: string
    icon?: ComponentType<SVGProps<SVGSVGElement>>
    iconActive?: ComponentType<SVGProps<SVGSVGElement>>
}

interface IProps {
    className?: string
}

const Menu: FC<IProps> = ({ className }) => {
    const { asPath } = useRouter()

    return (
        <div className={cn(classes.Wrap, className)}>
            <h2 className={classes.Logo}>Qwick</h2>

            <menu className={classes.Menu}>
                {(mockData.menuList as IItemMenu[]).map((item, index) => (
                    <div className={cn(classes.MenuItemWrap, { [classes.IsActive]: asPath === item.url })} key={index}>
                        <Link className={cn(classes.MenuItem)} href={item.url}>
                            <div className={classes.MenuIconWrap}>
                                {item?.icon && <item.icon className={classes.MenuIcon} />}
                                {item?.iconActive && <item.iconActive className={classes.MenuIconHover} />}
                            </div>

                            <span className={classes.MenuName}>{item.name}</span>
                        </Link>

                        <span className={classes.MenuActiveDecor} />
                    </div>
                ))}
            </menu>

            <div className={classes.Footer}>
                <Link className={classes.Policy} href={'/privacy-policy'}>
                    Политика конфиденциальности
                </Link>

                <p className={classes.FooterText}>Все права защищены</p>

                <button className={classes.BtnChatBot}>
                    <IconChatBot />
                </button>
            </div>
        </div>
    )
}

export default Menu
