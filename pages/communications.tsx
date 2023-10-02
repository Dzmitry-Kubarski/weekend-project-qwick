import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const CommunicationsPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Коммуникации - Qwick'} description={'Коммуникации - Qwick'}>
            <div>Коммуникации - Qwick</div>
        </Layout>
    )
}

export default CommunicationsPage
