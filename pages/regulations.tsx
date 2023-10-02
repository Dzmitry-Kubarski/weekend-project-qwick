import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const RegulationsPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Регламенты - Qwick'} description={'Регламенты - Qwick'}>
            <div>Регламенты - Qwick</div>
        </Layout>
    )
}

export default RegulationsPage
