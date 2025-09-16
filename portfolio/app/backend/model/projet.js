// models/Project.ts
import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    favicon: { type: String, required: true },
    imageUrl: [{ type: String, required: true }],
    description: { type: String, required: true },
    sourceCodeHref: { type: String, required: true },
    liveWebsiteHref: { type: String },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
