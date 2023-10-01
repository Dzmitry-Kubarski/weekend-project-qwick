import { FC, ReactNode } from 'react'
import classes from './Layout.module.scss'
import Head from 'next/head'

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
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
