import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import Login from '@/components/pages/Login/Login'

interface IPageProps {}

const LoginPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Вход - Qwick'} description={'Вход - Qwick'}>
            <Login />
        </Layout>
    )
}

export default LoginPage
