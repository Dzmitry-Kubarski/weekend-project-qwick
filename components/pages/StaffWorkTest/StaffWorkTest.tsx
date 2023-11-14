import { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { ru } from 'date-fns/locale'
import classes from './StaffWork.module.scss'
import Header from '@/features/Header/Header'
import Modal from '@/components/ui/Modal/Modal'
import { Button } from '@/components/ui/Button/Button'
import { ButtonInfo } from '@/components/ui/ButtonInfo/ButtonInfo'
import Dropdown from '@/components/ui/Dropdown/Dropdown'

import { mockData } from './mockData'
import IconSearch from '@/components/icons/IconSearch'
import UserDropdown from './UserDropdown/UserDropdown'
import { StaticImageData } from 'next/image'

function onIsWeekend(date: Date) {
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
}

function onGetWork(weekends: string[], date: Date) {
    let isWeekend = false

    for (const elem of weekends) {
        if (new Date(elem).toDateString() === new Date(date).toDateString()) {
            isWeekend = true
        }
    }

    return isWeekend
}

export interface IUser {
    id: 1
    name: string
    surname: string
    lastName: string
    position: string
    avatar: StaticImageData
    phone: string
    email: string
    feature: string[]
    weekends: string[]
}

interface IArrDatesItem {
    name: string
    original: Date
}

const links = [
    { href: '/staff', label: 'Список' },
    { href: '/staff/work-schedule', label: 'График работы' },
    { href: '/staff/vacation-schedule', label: 'График отпусков' }
]

const StaffWorkTest = () => {
    const [arrDates, setArrDates] = useState<IArrDatesItem[]>([])

    useEffect(() => {
        const currentDate = new Date()

        const firstDayOfMonth = startOfMonth(currentDate)
        const lastDayOfMonth = endOfMonth(currentDate)

        const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })

        const arr = daysInMonth.map((date) => {
            const dayName = format(date, 'E', { locale: ru })
            let formattedDayName = ''

            if (dayName.includes('суб')) {
                formattedDayName = dayName.charAt(0).toUpperCase() + 'б'
            } else {
                formattedDayName = dayName.charAt(0).toUpperCase() + dayName.charAt(1).toLowerCase()
            }

            return {
                name: `${formattedDayName} ${format(date, 'd')}`,
                original: date
            }
        })

        setArrDates(arr)
    }, [])

    return (
        <section className={classes.Section}>
            <Header title='Сотрудники' />

            <div className={classes.Filter}>
                <Dropdown
                    className={classes.Dropdown}
                    selectedOption={{ href: '/staff/work-schedule', label: 'График работы' }}
                    links={links}
                />
            </div>

            <div className={classes.Table}>
                <div className={classes.TableHeader}>
                    <div className={classes.TableLeft}>
                        <div className={classes.Search}>
                            <input className={classes.SearchInput} type='text' placeholder='Поиск сотрудника' />

                            <button className={classes.SearchBtn}>
                                <IconSearch />
                            </button>
                        </div>
                    </div>

                    <div className={classes.Calendar}>
                        {arrDates.map((item, index) => (
                            <span className={cn(classes.CalendarCell, { [classes.IsWeekendDay]: onIsWeekend(item.original) })} key={index}>
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={classes.TableInner}>
                    <div className={classes.Left}>
                        {(mockData as IUser[]).map((user, userIndex) => (
                            <Fragment key={userIndex}>
                                <div className={classes.Position}>{user.position}</div>
                                <UserDropdown className={classes.Name} user={user} />
                            </Fragment>
                        ))}
                    </div>

                    <div className={classes.Right}>
                        {(mockData as IUser[]).map((user, userIndex) => (
                            <Fragment key={userIndex}>
                                <div className={classes.Calendar}>
                                    {arrDates.map((item, index) => (
                                        <span
                                            className={cn(classes.CalendarCell, { [classes.IsWeekendDay]: onIsWeekend(item.original) })}
                                            key={index}
                                        />
                                    ))}
                                </div>

                                <div className={classes.Calendar} data-cell-hover='Y'>
                                    {arrDates.map((item, index) => {
                                        const isWeekend = onGetWork(user.weekends, item.original)

                                        return (
                                            <span
                                                className={cn(classes.CalendarCell, {
                                                    [classes.IsWeekendDay]: onIsWeekend(item.original),
                                                    [classes.IsWeekend]: isWeekend
                                                })}
                                                key={index}
                                                data-big='Y'
                                            >
                                                {isWeekend ? 'Вых' : 'Раб'}
                                            </span>
                                        )
                                    })}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaffWorkTest
