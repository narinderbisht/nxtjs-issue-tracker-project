export type Inovice = {
    amount: number,
    createdAt: string,
    status: 'OPEN'|'IN_PROGRESS'|'CLOSE'
}

export type Issue = {
    email: string,
    title: string,
    description: string,
    status: 'OPEN'|'IN_PROGRESS'|'CLOSE'
}