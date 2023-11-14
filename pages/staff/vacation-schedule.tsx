import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import StaffVacation from '@/components/pages/StaffVacation/StaffVacation'

interface IPageProps {}

const StaffPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Сотрудники, график отпусков - Qwick'} description={'Сотрудники, график отпусков - Qwick'}>
            <StaffVacation />
        </Layout>
    )
}

export default StaffPage
