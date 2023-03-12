type ContactData = {
  name: string,
  email:string,
  tel:string,
  message:string,
}

export const sendContactForm = async (data:ContactData) => fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
})

