import {defineType, defineField} from "sanity";

export default defineType({
  name: "source",
  title: "Source",
  type: "document",
  fields: [
    defineField({name: "title", type: "string", validation: r=>r.required()}),
    defineField({name: "url", type: "url"}),
    defineField({name: "author", type: "string"}),
    defineField({name: "publisher", type: "string"}),
    defineField({name: "date", type: "datetime"}),
    defineField({name: "citation", type: "text"}),
  ],
});

