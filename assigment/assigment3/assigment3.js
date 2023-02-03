fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia',{
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f8d94be8cfmsh1a15ab8026b8121p14d951jsnc7fd617df14e',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
})

.then((res) => res.json())
.then((data) => {

    array = data
    arres = array.response
    // console.log(arres);

    

    

    console.log(active + newcass + recover + totalcas + totaldeat + totaltes);

    

    }
    
});