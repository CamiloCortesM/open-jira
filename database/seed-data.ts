interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: Elit ex exercitation sint nulla minim.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'In Progress: Veniam aliquip aliquip anim nisi in reprehenderit.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Pending: Magna nisi incididunt adipisicing consequat velit dolor aliquip id deserunt.',
      status: 'finished',
      createdAt: Date.now() - 10000,
    },
  ],
};
