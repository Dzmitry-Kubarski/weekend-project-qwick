import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import StaffList from '@/components/pages/StaffList/StaffList'

interface IPageProps {}

const StaffPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Сотрудники - Qwick'} description={'Сотрудники - Qwick'}>
            <StaffList />
        </Layout>
    )
}

export default StaffPage
