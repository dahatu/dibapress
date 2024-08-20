"use server";

import mongoose, { Model, Schema } from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/dibapress");

export type TPostSchema = {
  title: string;
};

const postSchema = new Schema<TPostSchema>({
  title: String,
});

export const postTable: Model<TPostSchema> =
  mongoose.model("Post", postSchema) ?? mongoose.models.Post;
