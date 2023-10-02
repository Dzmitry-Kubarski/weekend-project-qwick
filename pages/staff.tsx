import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const StaffPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Сотрудники - Qwick'} description={'Сотрудники - Qwick'}>
            <div>Сотрудники - Qwick</div>
        </Layout>
    )
}

export default StaffPage
