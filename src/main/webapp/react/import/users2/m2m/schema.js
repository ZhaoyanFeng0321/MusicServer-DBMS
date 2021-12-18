export const schema = {
    tables: [
        {
            name: 'listeners',
            label: 'Listener',
            labelPlural: 'Listeners',
            fields: [
                {name: 'id', label: 'Listener ID', readonly: true},
                {name: 'username', label: 'User Name'},
                {name: 'firstName', label: 'First Name'},
                {name: 'lastName', label: 'Last Name'},
                {name: 'password', label: 'Password'},
                {name: 'email', label: 'Email'},
                {name: 'dateOfBirth', label: 'Date of Birth'},
                {name: 'vip', label: 'Vip'},

            ],
            relations: [
                {name: 'playlists', label: `Listeners' Playlists`, references: 'playlists'}
            ],
            list: {
                id: {show: false},
                username: {show: true},
                firstName: {show: true},
                lastName: {show: true},
                // password: {show: true},
                // email: {show: true},
                // dateOfBirth: {show: true},
                // vip: {show: true}
                // playlistName: { show: true },
                // listenerName: { show: true },
            }
        },
        {
            name: 'playlists',
            label: 'Playlist',
            labelPlural: 'Playlists',
            fields: [
                {name: 'id', label: 'Playlist ID', readonly: true},
                {name: 'title', label: 'Title'},
                {name: 'description', label: 'Description'},
            ],
            relations: [
                {name: 'listeners', label: `Playlist's Listeners`, references: 'listeners'}
            ],
            list: {
                id: {show: false},
                title: {show: true},
                description: {show: true},
            }
        }
    ]
};