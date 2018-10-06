// import Fields from 'katejs/lib/fields';
import Fields from 'katejs/fields'; // local

const Task = {
  name: 'task',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'users',
      fields: [
        {
          name: 'title',
          type: Fields.STRING,
        },
      ],
    },
  ],
};

export const title = 'S-commander';
export const packageName = 's-commander';
export const structures = {
  Task,
};
