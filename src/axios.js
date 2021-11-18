const axios = require('axios');
URL = 'http://127.0.0.1:8000/'

export async function getPlays() {
    try
    {const response = await axios.get(`${URL}plays/`)
    console.log(response)
    } catch (error) {
        console.log(error)
    };
};


export function addPlay() {
    axios.post(`${URL}plays/`, {
        title: 'The Skriker',
        author: 'Carol Churchill',
        reference_img: 'https://wallpaperaccess.com/full/4845847.jpg',
        concept: 'dark, moody, fairy tale',
        director_notes: 'muted colors'
    }). then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

export function deletePlay() {
    axios.delete(`${URL}plays/6`)
}
