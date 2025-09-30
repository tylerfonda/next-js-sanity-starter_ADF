import {defineType, defineField} from "sanity";

export default defineType({
  name: "artifact",
  title: "Artifact",
  type: "document",
  fields: [
    defineField({name: "title", type: "string", validation: r=>r.required()}),
    defineField({name: "slug", type: "slug", options: {source: "title"}, validation: r=>r.required()}),
    defineField({name: "summary", type: "text"}),
    defineField({name: "body", title: "Body", type: "array", of: [{type: "block"}]}),

    // provenance/metrics
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{type: "reference", to: [{type: "source"}]}],
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "object",
      fields: [
        defineField({name: "stat", title: "Stat", type: "number"}),
        defineField({name: "unit", title: "Unit", type: "string"}),
      ],
    }),
  ],
});
