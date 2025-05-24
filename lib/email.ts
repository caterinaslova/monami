import { transporter } from "@/lib/config/nodeMailerConfig";

type EmailType ={
    name:string;
    email:string;
    token:string;
}

export class AuthEmail{
    static sendConfirmationEmail= async(user:EmailType)=>{
            const email = await transporter.sendMail({
                from:'Monami Padel&Squash<monamipadelsquash@gmail.com>',
                to: user.email,
                subject:'Monami Padel&Squash - Confirmá tu cuenta',
                html:`
                <p>Hola, ${user.name} has creado tu cuenta</p>
                <p>Visita el siguiente enlace</p>
                <a href="${process.env.FRONTEND_URL}/autenticacion/confirm-account"><strong>Confirmar cuenta</strong></a>
                <p>Copie y pegue este link en su navegador web</p>
                <p>https://monami-psi.vercel.app/autenticacion/confirm-account</p>
                <p>Ingresa el código <b>${user.token}</b></p>
                `
            })
           
    }


    static sendPasswordResendToken= async(user:EmailType)=>{
        const email = await transporter.sendMail({
            from:'Monami Padel&Squash<monamipadelsquash@gmail.com>',
            to: user.email,
            subject:'Monami Padel&Squash  - reestablece tu contraseña',
            html:`
            <p>Hola, ${user.name} escribe una nueva contraseña</p>
            <p>Visita el siguiente enlace</p>
            <a href="${process.env.FRONTEND_URL}/autenticacion/nuevapassword/${user.token}">Restablecer contraseña</a>
           
            `
        })
       
    }
}
export class Emails {
    static consultaEmail = async(nombre:string,email:string,consulta:string)=>{

    await transporter.sendMail({
        from:'KyV Muebles<info@kyvmuebles.com.ar>',
        to: 'info@kyvmuebles.com.ar',
        subject:'Consulta desde sitio web',
        html:`
        <p>Hola,Nestor tenés una consulta del sitio web</p>
        <p>Tus clientes han enviado la siguiente pregunta</p>
        <p>Nombre del cliente<b>${nombre}</b></p>
        <p>Email del cliente: <b>${email}</b></p>
        <p>Detalle de la consulta: <b>${consulta}</b></p>
        `
        })
    }
}
