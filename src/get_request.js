const axios = require('axios');

axios.get('http://localhost:3000/employees')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        });
    })
    .catch(error => {
        console.log(error);
});