import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'
import Main from '@/components/pages/Main/Main'

interface IPageProps {}

const Page: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Qwick'} description={'Qwick'}>
            <Main />
        </Layout>
    )
}

export default Page
