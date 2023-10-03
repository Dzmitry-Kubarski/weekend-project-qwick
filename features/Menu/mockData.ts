import IconMenu from './menuIcons/main.svg'
import IconOfs from './menuIcons/ofs.svg'
import IconRegulations from './menuIcons/regulations.svg'
import IconResponsibilities from './menuIcons/my-responsibilities.svg'
import IconReports from './menuIcons/reports.svg'
import IconCommunications from './menuIcons/communications.svg'
import IconStaff from './menuIcons/staff.svg'
import IconPayment from './menuIcons/payment.svg'

// Active
import IconMainActive from './menuIconsActive/main.svg'
import IconOfsActive from './menuIconsActive/ofs.svg'
import IconRegulationsActive from './menuIconsActive/regulations.svg'
import IconResponsibilitiesActive from './menuIconsActive/my-responsibilities.svg'
import IconReportsActive from './menuIconsActive/reports.svg'
import IconCommunicationsActive from './menuIconsActive/communications.svg'
import IconStaffActive from './menuIconsActive/staff.svg'
import IconPaymentActive from './menuIconsActive/payment.svg'

export const mockData = {
    menuList: [
        {
            name: 'Главная',
            url: '/',
            icon: IconMenu,
            iconActive: IconMainActive
        },
        {
            name: 'ОФС',
            url: '/ofs',
            icon: IconOfs,
            iconActive: IconOfsActive
        },
        {
            name: 'Регламенты',
            url: '/regulations',
            icon: IconRegulations,
            iconActive: IconRegulationsActive
        },
        {
            name: 'Мои обязанности',
            url: '/my-responsibilities',
            icon: IconResponsibilities,
            iconActive: IconResponsibilitiesActive
        },
        {
            name: 'Отчеты',
            url: '/reports',
            icon: IconReports,
            iconActive: IconReportsActive
        },
        {
            name: 'Коммуникации',
            url: '/communications',
            icon: IconCommunications,
            iconActive: IconCommunicationsActive
        },
        {
            name: 'Сотрудники',
            url: '/staff',
            icon: IconStaff,
            iconActive: IconStaffActive
        },
        {
            name: 'Оплата',
            url: '/payment',
            icon: IconPayment,
            iconActive: IconPaymentActive
        }
    ]
}
