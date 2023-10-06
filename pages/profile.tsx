import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import Profile from '@/components/pages/Profile/Profile'

interface IPageProps {}

const ProfilePage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Профиль - Qwick'} description={'Профиль - Qwick'}>
            <Profile />
        </Layout>
    )
}

export default ProfilePage
