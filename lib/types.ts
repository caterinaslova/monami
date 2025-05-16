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
        id:String
        nombre:String
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
        id:String
        nombre:String
    }
}