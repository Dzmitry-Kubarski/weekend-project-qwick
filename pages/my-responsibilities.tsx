import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const MyResponsibilitiesPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Мои обязанности - Qwick'} description={'Мои обязанности - Qwick'}>
            <div>Мои обязанности - Qwick</div>
        </Layout>
    )
}

export default MyResponsibilitiesPage
