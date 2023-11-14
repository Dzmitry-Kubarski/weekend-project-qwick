import ava_1 from '../../../features/Staff/mockImages/staff_avatar_1.png'
import ava_2 from '../../../features/Staff/mockImages/staff_avatar_2.png'
import ava_3 from '../../../features/Staff/mockImages/staff_avatar_3.png'
import ava_4 from '../../../features/Staff/mockImages/staff_avatar_4.png'
import ava_5 from '../../../features/Staff/mockImages/staff_avatar_5.png'
import ava_6 from '../../../features/Staff/mockImages/staff_avatar_6.png'
import ava_7 from '../../../features/Staff/mockImages/staff_avatar_7.png'
import ava_8 from '../../../features/Staff/mockImages/staff_avatar_8.png'

let dateObj = new Date()
let month = dateObj.getUTCMonth() + 1

export const mockData = [
    {
        id: 1,
        name: 'Владимир',
        surname: 'Абрамов',
        lastName: 'Алексеевич',
        position: 'Генеральный директор',
        avatar: ava_1,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [
            `2023-${month}-02T11:42:33.695Z`,
            `2023-${month}-10T11:42:33.695Z`,
            `2023-${month}-14T11:42:33.695Z`,
            `2023-${month}-20T11:42:33.695Z`,
            `2023-${month}-22T11:42:33.695Z`,
            `2023-${month}-28T11:42:33.695Z`
        ]
    },

    {
        id: 2,
        name: 'Анна',
        surname: 'Майорова',
        lastName: 'Михайловна',
        position: 'Консультант',
        avatar: ava_2,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-05T11:42:33.695Z`, `2023-${month}-12T11:42:33.695Z`, `2023-${month}-13T11:42:33.695Z`]
    },

    {
        id: 3,
        name: 'Алексей',
        surname: 'Кулагин',
        lastName: 'Игоревич',
        position: 'Стажер',
        avatar: ava_3,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-01T11:42:33.695Z`, `2023-${month}-11T11:42:33.695Z`, `2023-${month}-17T11:42:33.695Z`]
    },

    {
        id: 4,
        name: 'Александр',
        surname: 'Перченко',
        lastName: 'Александрович',
        position: 'Консультант',
        avatar: ava_4,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-03T11:42:33.695Z`, `2023-${month}-09T11:42:33.695Z`, `2023-${month}-19T11:42:33.695Z`]
    },

    {
        id: 5,
        name: 'Рушан',
        surname: 'Узбяков',
        lastName: 'Равильевич',
        position: 'Консультант-Доставщик',
        avatar: ava_5,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-20T11:42:33.695Z`, `2023-${month}-21T11:42:33.695Z`]
    },

    {
        id: 6,
        name: 'Денис',
        surname: 'Стародубов',
        lastName: 'Сергеевич',
        position: 'Консультант',
        avatar: ava_6,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-25T11:42:33.695Z`, `2023-${month}-26T11:42:33.695Z`, `2023-${month}-27T11:42:33.695Z`]
    },

    {
        id: 7,
        name: 'Роман',
        surname: 'Зиновьев',
        lastName: 'Владимирович',
        position: 'Консультант',
        avatar: ava_7,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-13T11:42:33.695Z`, `2023-${month}-14T11:42:33.695Z`]
    },

    {
        id: 8,
        name: 'Никита',
        surname: 'Граудин',
        lastName: 'Витальевич',
        position: 'Бухгалтер',
        avatar: ava_8,
        phone: '+7(986)730-78-35',
        email: '',
        feature: ['Маркетолог', 'Контроль изучения регламентов'],
        weekends: [`2023-${month}-03T11:42:33.695Z`, `2023-${month}-04T11:42:33.695Z`]
    }
]
