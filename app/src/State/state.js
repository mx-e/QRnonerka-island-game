
export const getPageData = (pageId) => {

  const pageData = [
    {
      id: 1,
      imageUrl: './resources/DSC_7859.jpg',
      title: 'Cat Statue',
      text: 'This is a cat. Lorem Ipsum and so on...',
      hint: 'This is a hint. To find the next spot, turn around three times an d spit on the floor and so on ...'
    }
  ]

  return pageData.find(d => d.id === pageId)
}