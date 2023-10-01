import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const Page: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Qwick'} description={'Qwick'}>
            <div>Main</div>
        </Layout>
    )
}

export default Page
