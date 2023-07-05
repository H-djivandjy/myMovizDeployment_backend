var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

// APIKEY = '' // dans .env but not needed in this case

router.get('/',(req, res)=>{
    // fetch(`https://api.themoviedb.org/3/discover/movie/157336?api_key=${APIKEY}`)
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data)
    //     res.json({result: data})
    // })

    const AuthorizationKey = process.env.AUTHORIZATION_KEY;

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: AuthorizationKey
    }
};

fetch(url, options)
  .then(res => res.json())
  .then(moviesData => {
    // console.log(moviesData)
    res.json({movies : moviesData})
  })
  .catch(err => console.error('error:' + err));

})


module.exports = router;
