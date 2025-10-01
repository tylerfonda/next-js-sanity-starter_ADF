import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'salon',
  title: 'Salon',
  type: 'document',

  // Safer: set defaults at the document level
  initialValue: () => ({
    startsAt: new Date().toISOString(),
  }),

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startsAt',
      title: 'Starts At',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
