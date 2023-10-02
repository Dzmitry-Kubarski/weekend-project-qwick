interface IProps {
    className?: string
}

function IconHidePassword({ className }: IProps) {
    return (
        <svg className={className} width={17} height={16} viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='0.221558' width={16} height={16} rx={8} fill='#4D4D4D' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.40572 5.18416C5.16017 5.42971 5.16017 5.82782 5.40572 6.07337L7.33235 8L5.40572 9.92663C5.16017 10.1722 5.16017 10.5703 5.40572 10.8158C5.65127 11.0614 6.04938 11.0614 6.29493 10.8158L8.22156 8.88921L10.1482 10.8158C10.3937 11.0614 10.7918 11.0614 11.0374 10.8158C11.2829 10.5703 11.2829 10.1722 11.0374 9.92663L9.11077 8L11.0374 6.07337C11.2829 5.82782 11.2829 5.42971 11.0374 5.18416C10.7918 4.93861 10.3937 4.93861 10.1482 5.18416L8.22156 7.11079L6.29493 5.18416C6.04938 4.93861 5.65127 4.93861 5.40572 5.18416Z'
                fill='white'
            />
        </svg>
    )
}

export default IconHidePassword
