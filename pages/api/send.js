const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const content = {
    to: 'ashbournestandrewsac@gmail.com',
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send("Thanks for contacting us! Ashbourne St.Andrews A.C. is run entirely by volunteers so we can't always respond immediately. If your query is urgent, you can contact us on Facebook or in person at one of the training sessions.")
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send(error)
  }
}
