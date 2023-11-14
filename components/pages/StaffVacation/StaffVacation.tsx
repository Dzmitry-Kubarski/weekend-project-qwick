import { useEffect, useState } from 'react'
import cn from 'classnames'
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
import { ru } from 'date-fns/locale'
import classes from './StaffVacation.module.scss'
import Header from '@/features/Header/Header'
import Dropdown from '@/components/ui/Dropdown/Dropdown'
import IconSearch from '@/components/icons/IconSearch'
import { StaticImageData } from 'next/image'

function onIsWeekend(date: Date) {
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
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

const mockObj = {
    id: 1,
    name: 'Никита',
    surname: 'Граудин',
    lastName: 'Витальевич',
    position: 'Бухгалтер',
    phone: '+7(986)730-78-35',
    email: '',
    feature: ['Маркетолог', 'Контроль изучения регламентов'],
    weekends: ['2023-10-10T11:42:33.695Z', '2023-10-18T11:42:33.695Z']
}

const users = Array.from({ length: 100 }, () => ({ ...mockObj }))

const StaffVacation = () => {
    const [arrDates, setArrDates] = useState<IArrDatesItem[]>([])

    const [hoveredCellIndex, setHoveredCellIndex] = useState<number | null>(null)

    const handleMouseEnter = (elemIndex: number) => {
        setHoveredCellIndex((prev) => {
            if (prev !== elemIndex) {
                const arr = document.querySelectorAll(`.${classes.CalendarCell}[data-index="${elemIndex}"]`)
                arr.forEach((element) => ((element as HTMLElement).style.background = '#B6D3FF'))
            }

            return prev
        })
    }

    const handleMouseLeave = (elemIndex: number) => {
        setHoveredCellIndex((prev) => {
            if (prev !== elemIndex) {
                const arr = document.querySelectorAll(`.${classes.CalendarCell}[data-index="${elemIndex}"]`)
                arr.forEach((element) => (element as HTMLElement).style.removeProperty('background'))
            }

            return prev
        })
    }

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
                    selectedOption={{ href: '/staff/work-schedule', label: 'График отпусков' }}
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
                    {(users as IUser[]).map((user, userIndex) => (
                        <div className={classes.TableRow} key={userIndex}>
                            <div className={classes.Name}>
                                {user.surname} {user.name}
                            </div>

                            <div className={classes.Calendar}>
                                {arrDates.map((item, index) => {
                                    return (
                                        <span
                                            className={cn(classes.CalendarCell)}
                                            key={index}
                                            data-index={index}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={() => handleMouseLeave(index)}
                                        ></span>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StaffVacation
