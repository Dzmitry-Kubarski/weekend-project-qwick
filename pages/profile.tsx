import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const ProfilePage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Профиль - Qwick'} description={'Профиль - Qwick'}>
            <div>Профиль - Qwick</div>
        </Layout>
    )
}

export default ProfilePage
