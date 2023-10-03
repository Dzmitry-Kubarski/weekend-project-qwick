import { FC, ReactNode } from 'react'
import classes from './Layout.module.scss'
import Head from 'next/head'
import Menu from '@/features/Menu/Menu'

interface IProps {
    title: string
    keywords?: string
    description?: string
    children: ReactNode
}

const Layout: FC<IProps> = ({ title, keywords, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {keywords ? <meta name='keywords' content={keywords} /> : null}
                {description ? <meta name='description' content={description} /> : null}
            </Head>

            <div className={classes.Layout}>
                <Menu />
                <main className={classes.Main}>{children}</main>
            </div>
        </>
    )
}

export default Layout
