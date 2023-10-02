import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const PaymentPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Оплата - Qwick'} description={'Оплата - Qwick'}>
            <div>Оплата - Qwick</div>
        </Layout>
    )
}

export default PaymentPage
