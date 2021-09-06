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
      name: 'sort',
      title: 'Sort',
      type: 'number',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => [Rule.required().error('A position is required')],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => [
        Rule.required().error('Associate this staff member with a category'),
      ],
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
      type: 'blockContent',
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
