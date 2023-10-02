import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const ReportsPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Отчеты - Qwick'} description={'Отчеты - Qwick'}>
            <div>Отчеты - Qwick</div>
        </Layout>
    )
}

export default ReportsPage
