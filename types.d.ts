type Article = {
  id: number,
  attributes: {
    body: string,
    slug: string,
    crated: string,
    createdAt: string,
    publishedAt: string,
    title: string,
    updatedAt: string,
    excerpt: string,
    category: "Digital Marketing" | "Analytics" | "Social Media" | "Paid Advertising"
    main_image: {
      data: {
         id: number,
         attributes: {
          name: string,
          height: number,
          width: number,
          url: string,
          formats: {
            large: {
              height: number,
              width: number,
              url: string,
            }
          }
         }
      }
    }
  }
}
