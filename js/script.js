const PLATS_URL ='./js/plats.json';


fetch(PLATS_URL)
.then(data => data)
.then(data => data.json())
.then(data => console.log(data))


