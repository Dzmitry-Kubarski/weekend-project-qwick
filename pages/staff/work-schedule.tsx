import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import StaffWork from '@/components/pages/StaffWork/StaffWork'
import StaffWorkTest from '@/components/pages/StaffWorkTest/StaffWorkTest'

interface IPageProps {}

const StaffPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Сотрудники, график работы - Qwick'} description={'Сотрудники, график работы - Qwick'}>
            {/* <StaffWork /> */}
            <StaffWorkTest />
        </Layout>
    )
}

export default StaffPage
