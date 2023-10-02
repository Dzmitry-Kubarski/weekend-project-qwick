import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import ForgotPassword from '@/components/pages/ForgotPassword/ForgotPassword'

interface IPageProps {}

const ForgotPasswordPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Восстановление пароля - Qwick'} description={'Восстановление пароля - Qwick'}>
            <ForgotPassword />
        </Layout>
    )
}

export default ForgotPasswordPage
