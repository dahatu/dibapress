 type PostTypeConfig = {
  name: string;
  label: string;
  description: string;
  fields: Array<any>;
};

export const registerPostType = (config: PostTypeConfig) => {};
