export const CONTACT_TABLE_COLUMNS = [
    {
       title: 'Company Name',
       key:  'company_name'
    },
    {
        title: 'Email Address',
        key:  'email'
    },
    {
        title: 'First name',
        key:  'first_name'
    },
    {
        title: 'Last name',
        key:  'last_name'
    },
    {
        title: 'Phone',
        key:  'phone_number'
    },
    {
        title: 'Comments',
        key:  'description'
    },
];

export const MEMBER_TABLE_COLUMNS = [
    {
        title: 'Picture',
        key: 'avatar',
        type: 'info'
    },
    {
       title: 'Name',
       key:  'name',
       type: 'info'
    },
    {
        title: 'Email Address',
        key:  'email',
        type: 'info'
    },
    {
        title: 'Role',
        key:  'role',
        type: 'info'
    },
    {
        title: 'Team',
        key:  'team',
        type: 'info'
    },
    {
        title: 'Actions',
        key:  null,
        type: 'action'
    },
];

export const TEAM_OPTION = [
    { value: 'executive', label: 'Executive Team' },
    { value: 'management', label: 'Management Team' },
    { value: 'tech', label: 'Technical Team' },
]