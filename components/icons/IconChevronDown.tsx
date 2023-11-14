interface IProps {
    className?: string
}

function IconChevronDown({ className }: IProps) {
    return (
        <svg className={className} xmlns='http://www.w3.org/2000/svg' width='16' height='7' viewBox='0 0 16 7' fill='none'>
            <path d='M1.2182 1.39062L8.3437 6.06723L15.4692 1.39062' stroke='#A9ABBA' />
        </svg>
    )
}

export default IconChevronDown
