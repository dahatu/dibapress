"use server";

import { postTable, TPostSchema } from "./database";

export async function createPost(data: FormData) {
  postTable.create({ title: data.get("title") });
}

export async function create() {
  console.log("created");
}
