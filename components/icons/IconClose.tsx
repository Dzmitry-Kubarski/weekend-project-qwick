interface IProps {
    className?: string
}

function IconClose({ className }: IProps) {
    return (
        <svg className={className} width={14} height={12} viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.4602 11.0948L1.28983 0.933502' stroke='#A9ABBA' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M1.28955 11.0945L12.4599 0.933228' stroke='#A9ABBA' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}

export default IconClose
