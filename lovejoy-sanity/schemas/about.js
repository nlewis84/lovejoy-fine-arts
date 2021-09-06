export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required().error('An image is required')],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => [Rule.required().error('A biography is required')],
    },
  ],
};
