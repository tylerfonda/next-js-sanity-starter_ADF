import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {presentationTool} from "sanity/presentation";
import {codeInput} from "@sanity/code-input";

import {apiVersion, dataset, projectId} from "./sanity/env";
import {resolve} from "@/sanity/presentation/resolve";
import {structure} from "./sanity/structure";

// ↓ default imports (no braces)
import source from "./sanity/schemas/documents/source";
import artifact from "./sanity/schemas/documents/artifact";

// Singletons (if you use them)
const singletonActions = new Set(["publish","discardChanges","restore","unpublish"]);
const singletonTypes = new Set(["settings"]);

export default defineConfig({
  basePath: "/studio",
  title: "Schema UI",
  projectId,
  dataset,

  schema: {
    types: [
      // existing starter types (if any) + your types
      source,
      artifact,
      brief,
      salon,
    ],
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },

  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: { draftMode: { enable: "/api/draft-mode/enable" } },
      resolve,
    }),
    visionTool({defaultApiVersion: apiVersion}),
    codeInput(),
  ],
});

