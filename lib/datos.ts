import { BadgeDollarSign, Calendar, CalendarArrowUp, CalendarClock, CalendarHeart, UserPen } from "lucide-react";

export const diasOrdenados=["gDomingo","aLunes","bMartes","cMiércoles","dJueves","eViernes","fSábado"]

export const menuSideBarTurnos =[
  {
    id:1,
    titulo:'Turnos Puntuales',
    url:'/admin/turnosPuntuales',
    icono:CalendarArrowUp

  },
  {
    id:2,
    titulo:'Turnos Fijos',
    url:'/admin/turnosFijos',
    icono:CalendarHeart

  },
  {
    id:3,
    titulo:'Escuela',
    url:'/admin/escuela',
    icono:BadgeDollarSign
  },

]
export const menuSideBarConfig =[
  {
    id:1,
    titulo:'Clientes',
    url:'/admin/clientes',
    icono:UserPen

  },
  {
    id:2,
    titulo:'Horarios',
    url:'/admin/horarios',
    icono:CalendarClock

  },

]

const Clientes = [
  {
    id: 1,
    nombre: 'Juan Perez',
    telefono: '351 2064289',
    email: 'juan@google.com',
  },
];
const Canchas=[
    {
        id:1,
        nombre:'Squash1'
    },
    {
        id:2,
        nombre:'Squash2'
    },
    {
        id:3,
        nombre:'Squash3'
    },
    {
        id:4,
        nombre:'Padel1'
    },
    {
        id:5,
        nombre:'Padel2'
    },
    {
        id:6,
        nombre:'Salon'
    }
]

export const referenciaDia =["gDomingo","aLunes","bMartes","cMiércoles","dJueves","eViernes","fSábado"]
const Fijos = [
  {
    id: 1,
    diaDeSemana: 'martes',
    hora: '10:00',
    modulos: '2',
    codigoCliente: 1,
    cancha:'Squash1'
  },
  {
    id: 2,
    diaDeSemana: 'martes',
    hora: '11:00',
    modulos: '2',
    codigoCliente: 1,
    cancha:'Squash1'
  },
  {
    id: 3,
    diaDeSemana: 'martes',
    hora: '10:00',
    modulos: '2',
    codigoCliente: 1,
    cancha:'Squash2'
  },
  {
    id: 4,
    diaDeSemana: 'martes',
    hora: '11:00',
    modulos: '2',
    codigoCliente: 1,
  },
];
const Turnos = [
  {
    id: 1,
    fecha: '2025-05-02',
    diaDeSemana: 'lunes',
    hora: '9:00',
    modulos: 4,
    codigoCliente: 1,
  },
];

export const horariosPosibles=[
  {
    id:0,
    horarioComienzo:"00:00",
    abierto:false
  },
  {
    id:1,
    horarioComienzo:"00:30",
    abierto:false
  },
  {
    id:2,
    horarioComienzo:"01:00",
    abierto:false
  },
  {
    id:3,
    horarioComienzo:"01:30",
    abierto:false
  },
  {
    id:4,
    horarioComienzo:"02:00",
    abierto:false
  },
  {
    id:5,
    horarioComienzo:"02:30",
    abierto:false
  },
  {
    id:6,
    horarioComienzo:"03:00",
    abierto:false
  },
  {
    id:7,
    horarioComienzo:"03:30",
    abierto:false
  },
  {
    id:8,
    horarioComienzo:"04:00",
    abierto:false
  },
  {
    id:9,
    horarioComienzo:"04:30",
    abierto:false
  },
  {
    id:10,
    horarioComienzo:"05:00",
    abierto:false
  },
  {
    id:11,
    horarioComienzo:"05:30",
    abierto:false
  },
  {
    id:12,
    horarioComienzo:"06:00",
    abierto:false
  },
  {
    id:13,
    horarioComienzo:"06:30",
    abierto:false
  },
  {
    id:14,
    horarioComienzo:"07:00",
    abierto:false
  },
  {
    id:15,
    horarioComienzo:"07:30",
    abierto:false
  },
  {
    id:16,
    horarioComienzo:"08:00",
    abierto:false
  },
  {
    id:17,
    horarioComienzo:"08:30",
    abierto:false
  },
  {
    id:18,
    horarioComienzo:"09:00",
    abierto:false
  },
  {
    id:19,
    horarioComienzo:"09:30",
    abierto:false
  },
  {
    id:20,
    horarioComienzo:"10:00",
    abierto:true
  },
  {
    id:21,
    horarioComienzo:"10:30",
    abierto:true
  },
  {
    id:22,
    horarioComienzo:"11:00",
    abierto:true
  },
  {
    id:23,
    horarioComienzo:"11:30",
    abierto:true
  },
  {
    id:24,
    horarioComienzo:"12:00",
    abierto:true
  },
  {
    id:25,
    horarioComienzo:"12:30",
    abierto:true
  },
  {
    id:26,
    horarioComienzo:"13:00",
    abierto:true
  },
  {
    id:27,
    horarioComienzo:"13:30",
    abierto:true
  },
  {
    id:28,
    horarioComienzo:"14:00",
    abierto:true
  },
  {
    id:29,
    horarioComienzo:"14:30",
    abierto:true
  },
  {
    id:30,
    horarioComienzo:"15:00",
    abierto:true
  },
  {
    id:31,
    horarioComienzo:"15:30",
    abierto:true
  },
  {
    id:32,
    horarioComienzo:"16:00",
    abierto:true
  },
  {
    id:33,
    horarioComienzo:"16:30",
    abierto:true
  },
  {
    id:34,
    horarioComienzo:"17:00",
    abierto:true
  },
  {
    id:35,
    horarioComienzo:"17:30",
    abierto:true
  },
  {
    id:36,
    horarioComienzo:"18:00",
    abierto:true
  },
  {
    id:37,
    horarioComienzo:"18:30",
    abierto:true
  },
  {
    id:38,
    horarioComienzo:"19:00",
    abierto:true
  },
  {
    id:39,
    horarioComienzo:"19:30",
    abierto:true
  },
  {
    id:40,
    horarioComienzo:"20:00",
    abierto:true
  },
  {
    id:41,
    horarioComienzo:"20:30",
    abierto:true
  },
  {
    id:42,
    horarioComienzo:"21:00",
    abierto:true
  },
  {
    id:43,
    horarioComienzo:"21:30",
    abierto:true
  },
  {
    id:44,
    horarioComienzo:"22:00",
    abierto:true
  },
  {
    id:45,
    horarioComienzo:"22:30",
    abierto:true
  },
  {
    id:46,
    horarioComienzo:"23:00",
    abierto:true
  },
  {
    id:47,
    horarioComienzo:"23:30",
    abierto:true
  },
]

