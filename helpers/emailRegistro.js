import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    //   console.log(datos)

    const {email, nombre, token} = datos

    //Enviar el email

    const info = await transporter.sendMail({
        from: 'APV - Administrador de Pacientes de Vterinaria', 
        to: email,
        subject: 'Comprueba de cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `
            <h1>APV</h1>
            <p>Hola ${nombre}, comprueba tu cuenta en APV</p>
            <p>Verificala daando click en el siguiente enlace
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>
            <p>Si tu no creaste esta cuenta fijate que onda 
            </p>
            `
    })
    console.log('Mensaje enviado: %s', info.messageId)
}

export default emailRegistro