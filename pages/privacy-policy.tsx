import { FC } from 'react'
import Layout from '@/components/global/Layout/Layout'

interface IPageProps {}

const PrivacyPolicyPage: FC<IPageProps> = (props) => {
    return (
        <Layout title={'Политика конфиденциальности - Qwick'} description={'Политика конфиденциальности - Qwick'}>
            <div style={{ textAlign: 'center' }}>Политика конфиденциальности - Qwick</div>
        </Layout>
    )
}

export default PrivacyPolicyPage
