
import nodemailer from 'nodemailer'

const config = ()=>{
    return {
        host: process.env.EMAIL_HOST!,
        port: +process.env.EMAIL_PORT! ,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    }
}

export const transport = nodemailer.createTransport(config())

 // Looking to send emails in production? Check out our Email API/SMTP product!

// con el provisorio
// EMAIL_HOST=sandbox.smtp.mailtrap.io
// EMAIL_PORT=2525
// EMAIL_USER=5502bb97f7d51a
// EMAIL_PASS=ed4406cb83e729

// en el de Smilga
// module.exports = {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure:true,
//     auth: {
//         user: 'monicakowal13@gmail.com',
//         pass: 'liqf usgv gdfp yghm'
//     }
// }