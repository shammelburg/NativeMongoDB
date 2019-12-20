// https://docs.mongodb.com/manual/reference/operator/

let user = {
    firstName: 'Sander',
    lastName: 'Hammelburg',
    address: {
        houseName: '',
        town: '',
        postCode: ''
    }
}

const update = {
    $set:{
        middleName: '',
        'address.country': ''
    },
    $currentDate: { lastModified: true }
}
