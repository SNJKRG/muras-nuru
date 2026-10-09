// Контент макета. Источники: design/spec/project.json, design/brief/content.md, каталоги этапов.
// Цены, даты стройки и контакты: демо-заглушки для макета, перед публикацией заменить данными застройщика.

export const PHONE = '+996 559 88 11 11'
export const PHONE_HREF = 'tel:+996559881111'
export const waHref = (text: string) => `https://wa.me/996559881111?text=${encodeURIComponent(text)}`

export const nav = [
  { label: 'О проекте', id: 'overview' },
  { label: 'Планировки', id: 'apartments' },
  { label: 'Расположение', id: 'location' },
  { label: 'Условия', id: 'purchase' },
  { label: 'Контакты', id: 'contact' },
]
export const navMore = [
  { label: 'Архитектура', id: 'architecture' },
  { label: 'Двор', id: 'courtyard' },
  { label: 'Строительство', id: 'construction' },
  { label: 'Документы', id: 'documents' },
]

export type Shot = { src: string; alt: string; caption: string }

export const architecture: Record<1 | 2 | 3, Shot[]> = {
  1: [
    { src: '/img/arch-main.webp', alt: 'Жилые дома первого этапа вдоль бульвара', caption: 'Первый этап · Проектная визуализация' },
    { src: '/img/arch-front.webp', alt: 'Фасад первого этапа со стороны улицы', caption: 'Первый этап · Фасад' },
    { src: '/img/arch-night.webp', alt: 'Вечерняя подсветка фасада с национальным орнаментом', caption: 'Первый этап · Вечерняя подсветка' },
  ],
  2: [
    { src: '/img/arch-tower.webp', alt: 'Дом второго этапа', caption: 'Второй этап · Проектная визуализация' },
    { src: '/img/boulevard.webp', alt: 'Дома второго этапа у бульвара', caption: 'Второй этап · Вид с бульвара' },
  ],
  3: [
    { src: '/img/aerial.webp', alt: 'Вид сверху на малоэтажные дома третьего этапа и бульвар', caption: 'Третий этап · Вид сверху' },
    { src: '/img/terraces.webp', alt: 'Малоэтажный дом третьего этапа с террасами', caption: 'Третий этап · Проектная визуализация' },
  ],
}

export type Plan = {
  id: string
  stage: 1 | 2 | 3
  label: string
  rooms: number
  area: number
  areaTerrace?: number
  floor: string
  blocks: string
  img: string
  page?: number
}

export const plans: Plan[] = [
  { id: 's3-111', stage: 3, label: '3-комнатная с террасой', rooms: 3, area: 111.8, areaTerrace: 146.43, floor: '1 этаж', blocks: '10, 12, 14, 16', img: '/img/plan-page13.webp', page: 13 },
  { id: 's3-113', stage: 3, label: '3-комнатная с террасой', rooms: 3, area: 113.0, areaTerrace: 139.72, floor: '1 этаж', blocks: '11, 15', img: '/img/plan-page13.webp', page: 13 },
  { id: 's3-130', stage: 3, label: '4-комнатная евро с террасой', rooms: 4, area: 130.0, areaTerrace: 206.29, floor: '1 этаж', blocks: '10, 12, 14, 16', img: '/img/plan-page13.webp', page: 13 },
  { id: 's1-54', stage: 1, label: '2-комнатная европланировка', rooms: 2, area: 54.46, floor: 'Типовой этаж', blocks: '3, 6', img: '/img/plan-a.webp' },
  { id: 's1-58', stage: 1, label: '2-комнатная европланировка', rooms: 2, area: 58.45, floor: 'Типовой этаж', blocks: '1, 2, 4, 5', img: '/img/plan-b.webp' },
  { id: 's1-59', stage: 1, label: '2-комнатная европланировка', rooms: 2, area: 59.22, floor: 'Типовой этаж', blocks: '3, 6', img: '/img/plan-c.webp' },
  { id: 's1-66', stage: 1, label: '2-комнатная европланировка', rooms: 2, area: 66.17, floor: 'Типовой этаж', blocks: '3, 6', img: '/img/plan-d.webp' },
  { id: 's1-80', stage: 1, label: '3-комнатная европланировка', rooms: 3, area: 80.73, floor: 'Типовой этаж', blocks: 'все', img: '/img/plan-e.webp' },
  { id: 's1-82', stage: 1, label: '3-комнатная европланировка', rooms: 3, area: 82.3, floor: 'Типовой этаж', blocks: 'все', img: '/img/plan-f.webp' },
  { id: 's1-127', stage: 1, label: '4-комнатная европланировка', rooms: 4, area: 127.2, floor: 'Типовой этаж', blocks: '1, 4', img: '/img/plan-g.webp' },
  { id: 's2-110', stage: 2, label: '3-комнатная', rooms: 3, area: 110.15, floor: 'Типовой этаж', blocks: '7, 8', img: '/img/plan-e.webp' },
  { id: 's2-139', stage: 2, label: '4-комнатная', rooms: 4, area: 139.76, floor: 'Типовой этаж', blocks: '7, 8', img: '/img/plan-g.webp' },
]

export const comfort = [
  {
    title: 'Дом',
    rows: [
      ['Конструкция', 'Монолитно-каркасная'],
      ['Окна', 'Алюминиевый профиль тёплой серии'],
      ['Стеклопакет', 'Мультифункциональный'],
      ['Тишина', 'Шумоизоляция и продуманная вентиляция'],
      ['Лифты', 'Бесшумные скоростные'],
    ],
  },
  {
    title: 'Территория',
    rows: [
      ['Двор', 'Закрытый, без машин'],
      ['Безопасность', 'Контроль доступа, видеонаблюдение 24/7'],
      ['Дети', 'Игровые площадки во дворе'],
      ['Спорт', 'Спортивные площадки и зоны отдыха'],
      ['Паркинг', 'Подземный, уровни −1 и −2'],
    ],
  },
  {
    title: 'Обслуживание',
    rows: [
      ['Управление', 'Собственная управляющая компания'],
      ['Поддержка', 'Служба поддержки жителей'],
      ['Чистота', 'Уборка подъездов и территории'],
      ['Фитнес', 'Тренажёрный зал для жителей'],
    ],
  },
]

export const steps = [
  ['Выберите планировку', 'Этап, тип и площадь есть на этой странице. Без звонка и регистрации.'],
  ['Уточните наличие и стоимость', 'Менеджер назовёт свободные квартиры выбранного типа и актуальную цену.'],
  ['Обсудите способ покупки', 'Полная оплата, рассрочка от застройщика с первым взносом от 30% или ипотека через банк-партнёр.'],
  ['Получите документы', 'Договор и документы проекта для спокойного изучения до сделки.'],
]

export const journal = [
  { date: 'Сентябрь 2026', title: 'Открытие подъездов первого этапа', img: '/img/site-visit.webp' },
  { date: 'Июль 2026', title: 'Проектный менеджер на площадке второго этапа', img: '/img/opening.webp' },
  { date: 'Март 2026', title: 'Турнир Nurzaman Cup для жителей', img: '/img/cup.webp' },
]

export const catalogs = [
  { stage: 1, title: 'Каталог первого этапа', pages: 44, size: '131 МБ', href: 'https://nurzaman.kg/wp-content/uploads/2025/02/muras-nuru-final.pdf', cover: '/img/cover1.webp' },
  { stage: 2, title: 'Каталог второго этапа', pages: 37, size: '36 МБ', href: 'https://nurzaman.kg/wp-content/uploads/2025/02/katalog-muras-nuru_2-etap.pdf', cover: '/img/cover2.webp' },
  { stage: 3, title: 'Каталог третьего этапа', pages: 43, size: '37 МБ', href: 'https://nurzaman.kg/wp-content/uploads/2025/02/muras-nuru_3-etap_wa.pdf', cover: '/img/cover3.webp' },
]

export const faq = [
  ['Все дома комплекса малоэтажные?', 'Нет. В проекте несколько этапов с разными типами домов. На первом экране показана проектная визуализация третьего этапа: малоэтажные дома с террасами.'],
  ['Есть ли квартиры с террасами?', 'Да, в третьем этапе есть квартиры первого этажа с террасами. Доступность конкретного варианта уточняется у отдела продаж.'],
  ['Что означают две площади?', 'Площадь квартиры и общая площадь с террасой указаны отдельно. Например, у 3-комнатной квартиры третьего этапа: 111,80 м² и 146,43 м².'],
  ['Можно ли посмотреть план до обращения?', 'Да. Все планировки и каталоги этапов открыты на этой странице без телефона и регистрации.'],
  ['Где уточнить цену, наличие и сроки?', 'В отделе продаж. Передайте этап и выбранную планировку, так менеджер ответит быстрее.'],
  ['Можно ли посетить объект?', 'Да, по предварительной записи. Время и порядок посещения согласует менеджер.'],
]
