export const COLUMNS = [
  { Header: 'Id', Footer: 'Id', accessor: 'id' },
  { Header: 'First Name', Footer: 'First Name', accessor: 'first_name' },
  { Header: 'Last Name', Footer: 'Last Name', accessor: 'last_name' },
  { Header: 'Email', Footer: 'Email', accessor: 'email' },
  { Header: 'Date of Birth', Footer: 'Date of Birth', accessor: 'date_of_birth' },
  { Header: 'Age', Footer: 'Age', accessor: 'age' },
  { Header: 'Country', Footer: 'Country', accessor: 'country' },
  { Header: 'Phone Number', Footer: 'Phone Number', accessor: 'phone' },
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      { Header: 'First Name', Footer: 'First Name', accessor: 'first_name' },
      { Header: 'Last Name', Footer: 'Last Name', accessor: 'last_name' },
    ],
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      { Header: 'Date of Birth', Footer: 'Date of Birth', accessor: 'date_of_birth' },
      { Header: 'Country', Footer: 'Country', accessor: 'country' },
      { Header: 'Phone Number', Footer: 'Phone Number', accessor: 'phone' },
    ],
  },
];
