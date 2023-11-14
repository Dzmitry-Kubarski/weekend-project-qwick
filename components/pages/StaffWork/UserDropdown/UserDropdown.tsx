import { FC } from 'react'
import NextImage from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import cn from 'classnames'
import classes from './UserDropdown.module.scss'
import { IUser } from '../StaffWork'
import IconPhone from '@/components/icons/IconPhone'
import IconChevronDown from '@/components/icons/IconChevronDown'
import { Button } from '@/components/ui/Button/Button'
import { useRouter } from 'next/router'

interface IProps {
    className?: string
    user: IUser
}

const UserDropdown: FC<IProps> = ({ className, user }) => {
    const { push } = useRouter()

    return (
        <Popover className={cn(classes.Wrap, className)}>
            <Popover.Button className={classes.BtnName}>
                {user.surname} {user.name}
            </Popover.Button>

            <Transition
                enter='transition duration-800 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
            >
                <Popover.Panel>
                    <div className={classes.Dropdown}>
                        <div className={classes.Row}>
                            <div className={classes.Avatar}>{user.avatar && <NextImage src={user.avatar} alt='' quality={100} />}</div>

                            <div className={classes.Info}>
                                <p className={classes.FullName}>
                                    {user.name} {user.surname} {user.lastName}
                                </p>
                                <p className={classes.Position}>{user.position}</p>
                            </div>
                        </div>

                        <div className={classes.PhoneWrap}>
                            <IconPhone />

                            <a className={classes.Phone} href={`tel:+${user.phone}`}>
                                {user.phone}
                            </a>
                        </div>

                        <div className={classes.FeaturesWrap}>
                            <input className={classes.FeaturesCheckbox} type='checkbox' name='' id={`${user.id}`} />

                            <label className={classes.FeaturesBtn} htmlFor={`${user.id}`}>
                                Показать выполняемые функции
                                <IconChevronDown />
                            </label>

                            <ul className={classes.Features}>
                                {user.feature.map((elem, elemIndex) => (
                                    <li key={elemIndex}>{elem}</li>
                                ))}
                            </ul>
                        </div>

                        <Button className={classes.DropdownLink} type='secondary' size='middle' onClick={() => push(`profile/${user.id}`)}>
                            Профиль
                        </Button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>

        // <div className={cn(classes.Wrap, className)}>
        //     <button className={classes.BtnName}>
        //         {user.surname} {user.name}
        //     </button>

        //     {user.id === 1 && (
        //         <div className={classes.Dropdown}>
        //             <div className={classes.Row}>
        //                 <div className={classes.Avatar}>{user.avatar && <NextImage src={user.avatar} alt='' quality={100} />}</div>

        //                 <div className={classes.Info}>
        //                     <p className={classes.FullName}>
        //                         {user.name} {user.surname} {user.lastName}
        //                     </p>
        //                     <p className={classes.Position}>{user.position}</p>
        //                 </div>
        //             </div>

        //             <div className={classes.PhoneWrap}>
        //                 <IconPhone />

        //                 <a className={classes.Phone} href={`tel:+${user.phone}`}>
        //                     {user.phone}
        //                 </a>
        //             </div>

        //             <div className={classes.FeaturesWrap}>
        //                 <input className={classes.FeaturesCheckbox} type='checkbox' name='' id={`${user.id}`} />

        //                 <label className={classes.FeaturesBtn} htmlFor={`${user.id}`}>
        //                     Показать выполняемые функции
        //                     <IconChevronDown />
        //                 </label>

        //                 <ul className={classes.Features}>
        //                     {user.feature.map((elem, elemIndex) => (
        //                         <li key={elemIndex}>{elem}</li>
        //                     ))}
        //                 </ul>
        //             </div>

        //             <Button className={classes.DropdownLink} type='secondary' size='middle' onClick={() => push(`profile/${user.id}`)}>
        //                 Профиль
        //             </Button>
        //         </div>
        //     )}
        // </div>

        // <div className={classes.Dropdown}>
        //     <div className={classes.Row}>
        //         <div className={classes.Avatar}>{user.avatar && <NextImage src={user.avatar} alt='' quality={100} />}</div>

        //         <div className={classes.Info}>
        //             <p className={classes.FullName}>
        //                 {user.name} {user.surname} {user.lastName}
        //             </p>
        //             <p className={classes.Position}>{user.position}</p>
        //         </div>
        //     </div>

        //     <div className={classes.PhoneWrap}>
        //         <IconPhone />

        //         <a className={classes.Phone} href={`tel:+${user.phone}`}>
        //             {user.phone}
        //         </a>
        //     </div>

        //     <div className={classes.FeaturesWrap}>
        //         <input className={classes.FeaturesCheckbox} type='checkbox' name='' id={`${user.id}`} />

        //         <label className={classes.FeaturesBtn} htmlFor={`${user.id}`}>
        //             Показать выполняемые функции
        //             <IconChevronDown />
        //         </label>

        //         <ul className={classes.Features}>
        //             {user.feature.map((elem, elemIndex) => (
        //                 <li key={elemIndex}>{elem}</li>
        //             ))}
        //         </ul>
        //     </div>

        //     <Button className={classes.DropdownLink} type='secondary' size='middle' onClick={() => push(`profile/${user.id}`)}>
        //         Профиль
        //     </Button>
        // </div>
    )
}

export default UserDropdown
