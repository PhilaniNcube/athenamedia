// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

   if(req.method === 'POST') {
    const {name, email, tel, message} = req.body

    if(!name || !email || !tel || !message) {
        res.status(400).json({ message: 'Bad Request' })
    }

   const data = await fetch('https://api.useplunk.com/v1', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_PLUNK_PUBLIC_KEY}`,
    },
    body: JSON.stringify({
        "event": "new_contact",
        "email": email,
        "data": {
            "name": name,
            "tel": tel,
            "message": message
        }
    }),
});

console.log(await data.json())

const response = await data.json();

res.status(200).send(response)

   }


  res.status(400).json({ message: 'Bad Request' })
}
