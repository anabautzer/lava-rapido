export const tempoLavagem: Record<string, number> = {
    Simples: 20,
    Completa: 40,
    Polimento: 90
}

export const formatarTempo = (minutos: number) => {
    const horas = Math.floor(minutos / 60)
    const resto = minutos % 60
    if (horas === 0) return `${resto} min`
    if (resto === 0) return `${horas}h`
    return `${horas}h ${resto}min`
}
