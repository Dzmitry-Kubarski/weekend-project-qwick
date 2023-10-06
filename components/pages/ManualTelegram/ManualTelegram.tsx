import NextImage from 'next/image'
import classes from './ManualTelegram.module.scss'
import Logo from '@/components/ui/Logo/Logo'
import TextLink from '@/components/ui/TextLink/TextLink'
import mock_image_screen from './mock-scrienshot.jpeg'
import IconSuccess from '@/components/icons/IconSuccess'

const ManualTelegram = () => {
    return (
        <section className={classes.Section}>
            <div className={classes.Inner}>
                <Logo className={classes.Logo} />

                <TextLink className={classes.BackLink} link='/profile'>
                    Вернуться на платформу
                </TextLink>

                <h2 className={classes.Title}>ИНСТРУКЦИЯ ПО ИНТЕГРАЦИИ СИСТЕМЫ КВАНТ С TELEGRAM</h2>

                <div className={classes.Info}>
                    <p className={classes.Text}>29 декабря 2021 года</p>
                    <p className={classes.Text}>policy.revised 20 октября 2021 года</p>

                    <p className={classes.Text}>
                        Кому: <b>Консультант группа №1</b>
                    </p>
                </div>

                <div className={classes.Desc}>
                    <p className={classes.DescTitle}>1. Чтобы получать уведомления в Telegram, перейдите в раздел “Профиль”:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>2. Перейдите во вкладку “Оповещения”, скопируйте название бота:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>3. Найдите его в контактах Telegram и перейдите в него:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>4. Нажмите кнопку “Запустить”:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>5. Бот запросит код:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>6. Скопируйте код со страницы профиля в Кванте:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />

                    <p className={classes.DescTitle}>7. И вставьте в Telegram:</p>
                    <NextImage src={mock_image_screen} alt='' quality={100} />
                </div>

                <div className={classes.Success}>
                    <div className={classes.SuccessIcon}>
                        <IconSuccess />
                    </div>

                    <p className={classes.SuccessText}>
                        Отлично! Теперь в приложении Телеграмм вы сможете получать уведомления о задачах и создавать задачи из бота.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ManualTelegram
