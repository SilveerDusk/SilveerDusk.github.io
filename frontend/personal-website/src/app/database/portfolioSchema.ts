import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
}

export type IProject = {
  title: string;
  description: string;
  content: string;
  img: string;
  slug: string;
  github: string;
  comments: IComment[];
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: {type: String, required: true},
  img: {type: String, required: true},
  slug: {type: String, required: true},
  github: {type: String, required: true},
  comments: [{
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false, default: new Date()},
  }]
});

const Project = mongoose.models["projects"] ||
  mongoose.model("projects", projectSchema);

export default Project;