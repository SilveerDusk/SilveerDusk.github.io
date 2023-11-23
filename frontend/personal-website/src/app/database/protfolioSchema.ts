import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IProject = {
  title: string;
  description: string;
  image: string;
  slug: string;
  github: string;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: {type: String, required: true},
  slug: {type: String, required: true},
  github: {type: String, required: true}
});

const Project = mongoose.models["projects"] ||
  mongoose.model("projects", projectSchema);

export default Project;