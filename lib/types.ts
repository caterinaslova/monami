export type TurnoPuntualType ={
    id:             string
    fecha :         Date
    clienteId :      string
    cancha :         string
    dia :            string
    horaComienzo :   string
    cantidadModulos: number
    horaFinaliza:    string
    modulosOcupados: string[]
    createdAt :      Date
    updatedAt :      Date
    cliente:{
        id:string
        nombre:string
    }
}
export type TurnoFijoType ={
    id:             string
    clienteId :      string
    cancha :         string
    dia :            string
    horaComienzo :   string
    cantidadModulos: number
    horaFinaliza:     string
    modulosOcupados: string[]
    createdAt :      Date
    updatedAt :      Date
    cliente:{
        id:string
        nombre:string
    }
}
export type TurnoAutoType ={
    id:             string
    fecha :         Date
    usuarioId :      string
    cancha :         string
    dia :            string
    horaComienzo :   string
    cantidadModulos: number
    horaFinaliza:    string
    modulosOcupados: string[]
    createdAt :      Date
    updatedAt :      Date
    usuario:{
        id:string
        name:string,
        role:'USER' | 'ADMIN'
    }
}