import { useState } from 'react'
import NextImage, { StaticImageData } from 'next/image'
import classes from './StaffList.module.scss'
import Header from '@/features/Header/Header'
import { mockData } from './mockData'
import Dropdown from '@/components/ui/Dropdown/Dropdown'
import SearchField from '@/components/ui/SearchField/SearchField'

interface IResultItem {
    id: number
    name: string
    surname: string
    lastName: string
    position: string
    avatar: StaticImageData
}

const links = [
    { href: '/staff', label: 'Список' },
    { href: '/staff/work-schedule', label: 'График работы' },
    { href: '/staff/vacation-schedule', label: 'График отпусков' }
]

const StaffList = () => {
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState<IResultItem[]>([])

    const list = searchResult.length ? searchResult : mockData

    const onChangeSearchText = (value: string) => {
        setSearchText(value)
    }

    const onSearch = () => {
        const arr = mockData.filter((item) => {
            const { name, surname, lastName } = item
            const fullName = `${surname.toLowerCase()} ${name.toLowerCase()} ${lastName?.toLowerCase() || ''}`

            return fullName.includes(searchText)
        })

        setSearchResult(arr)
    }

    return (
        <section className={classes.Section}>
            <Header title='Сотрудники' />

            <div className={classes.Filter}>
                <Dropdown className={classes.Dropdown} selectedOption={{ href: '/staff', label: 'Список' }} links={links} />

                <SearchField
                    className={classes.SearchField}
                    placeholder='Email, имя, фамилия или отчество сотрудника'
                    value={searchText}
                    onChange={(e) => onChangeSearchText(e.currentTarget.value)}
                    onClick={onSearch}
                />
            </div>

            <div className={classes.Table}>
                {list.map((item, index) => (
                    <div className={classes.TableRow} key={item.id}>
                        <div className={classes.Avatar}>{item?.avatar && <NextImage src={item.avatar} alt='' quality={100} />}</div>

                        <p className={classes.FullName}>
                            {item.surname} {item.name} {item?.lastName}
                        </p>

                        <p className={classes.Position}>{item.position}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StaffList
