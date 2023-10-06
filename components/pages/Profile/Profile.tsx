import { useState } from 'react'
import cn from 'classnames'
import classes from './Profile.module.scss'
import Header from '@/features/Header/Header'
import Basic from './Basic/Basic'
import Notifications from './Notifications/Notifications'
import Documents from './Documents/Documents'

type TTabs = 'basic' | 'notific' | 'docs'

const Profile = () => {
    const [activeTab, setActiveTab] = useState<TTabs>('basic')

    const onChangeActiveTab = (nameTab: TTabs) => {
        setActiveTab(nameTab)
    }

    return (
        <section className={classes.Section}>
            <Header />

            <div className={classes.Tabs}>
                <button
                    className={cn(classes.Tab, { [classes.IsActive]: activeTab === 'basic' })}
                    onClick={() => onChangeActiveTab('basic')}
                >
                    Основное
                </button>

                <button
                    className={cn(classes.Tab, { [classes.IsActive]: activeTab === 'notific' })}
                    onClick={() => onChangeActiveTab('notific')}
                >
                    Оповещения
                </button>

                <button className={cn(classes.Tab, { [classes.IsActive]: activeTab === 'docs' })} onClick={() => onChangeActiveTab('docs')}>
                    Документы
                </button>

                <div className={classes.TabsLIne} />
            </div>

            {activeTab === 'basic' && <Basic />}
            {activeTab === 'notific' && <Notifications />}
            {activeTab === 'docs' && <Documents />}
        </section>
    )
}

export default Profile
