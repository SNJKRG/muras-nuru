import { createContext, useContext } from 'react'
import type { Shot } from '../data'

/** Общие механизмы страницы: контактная панель и просмотр изображений */
export type Ui = { contact: (context?: string) => void; zoom: (shot: Shot) => void }
export const UiCtx = createContext<Ui>({ contact: () => {}, zoom: () => {} })
export const useUi = () => useContext(UiCtx)

export const fmt = (n: number) => n.toLocaleString('ru-RU', { minimumFractionDigits: 2 })

export type Filters = { stage: 0 | 1 | 2 | 3; rooms: 0 | 2 | 3 | 4; terrace: boolean }
export const noFilters: Filters = { stage: 0, rooms: 0, terrace: false }
