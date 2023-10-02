import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import NewPassword from '@/components/pages/NewPassword/NewPassword'

interface IPageProps {}

const NewPasswordPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Новый пароль - Qwick'} description={'Новый пароль - Qwick'}>
            <NewPassword />
        </Layout>
    )
}

export default NewPasswordPage
