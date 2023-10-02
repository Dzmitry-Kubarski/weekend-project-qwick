import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const OfsPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'ОФС - Qwick'} description={'ОФС - Qwick'}>
            <div>ОФС - Qwick</div>
        </Layout>
    )
}

export default OfsPage
