export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('A name is required')],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required().error('Please generate a slug')],
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => [Rule.required().error('A position is required')],
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      validation: (Rule) => [Rule.required().error('A biography is required')],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
