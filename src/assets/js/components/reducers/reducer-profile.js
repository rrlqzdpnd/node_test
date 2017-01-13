export default function(state, action) {
  console.log(state);
  console.log(action);
  return [
    {
      name: 'John Smith',
      status: 'Employed'
    },
    {
      name: 'Randal White',
      status: 'Unemployed'
    },
    {
      name: 'Stephanie Sanders',
      status: 'Employed'
    },
    {
      name: 'Steve Brown',
      status: 'Employed'
    },
    {
      name: 'Joyce Whitten',
      status: 'Employed'
    },
    {
      name: 'Samuel Roberts',
      status: 'Employed'
    },
    {
      name: 'Adam Moore',
      status: 'Employed'
    },
    {
      name: 'Errol Pineda',
      age: 21,
      location: 'Taguig City, Philippines',
      status: 'Employed'
    }
  ];
};
