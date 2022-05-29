import nodemailer from 'nodemailer'

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT ,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });
    //   console.log(datos)

    const {email, nombre, token} = datos

    //Enviar el email

    const info = await transporter.sendMail({
        from: 'APV - Administrador de Pacientes de Vterinaria', 
        to: email,
        subject: 'Reestablece tu Conraseña',
        text: 'Reestablece tu Conraseña',
        html: `
            <h1>APV</h1>
            <p>Hola ${nombre}, has solicitado reestablecer tu password</p>
            <p>Haz click en el siguiente enlace
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
            </p>
            <p>Si tu no creaste esta cuenta fijate que onda 
            </p>
            `
    })
    console.log('Mensaje enviado: %s', info.messageId)
}

export default emailOlvidePassword