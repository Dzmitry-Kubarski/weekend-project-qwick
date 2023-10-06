import { FC } from 'react'
import Head from 'next/head'
import ManualTelegram from '@/components/pages/ManualTelegram/ManualTelegram'

interface IPageProps {}

const ManualTelegramPage: FC<IPageProps> = (props) => {
    return (
        <>
            <Head>
                <title>Инструкции по интеграции с телеграм - Qwick</title>
                <meta name='description' content='Инструкции по интеграции с телеграм - Qwick' />
            </Head>

            <ManualTelegram />
        </>
    )
}

export default ManualTelegramPage
