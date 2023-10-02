import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import Registration from '@/components/pages/Registration/Registration'

interface IPageProps {}

const RegistrationPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Регистрация - Qwick'} description={'Регистрация - Qwick'}>
            <Registration />
        </Layout>
    )
}

export default RegistrationPage
