interface IProps {
    className?: string
}

function IconSuccess({ className }: IProps) {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width={16} height={12} viewBox='0 0 16 12' fill='none'>
            <path
                d='M1.59814 6.01394L6.42324 10.839L14.4651 1.18884'
                stroke='#4F8BE4'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default IconSuccess
