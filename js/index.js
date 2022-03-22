
// XMLHttp request/response
// fetch()

// pending -> fulfilled or rejected

const URL =  `https://www.boredapi.com/api/activity/`

// fetch(URL)
// .then(function(response) {
//     console.log(response)
//     return response.json();
//   }) .then(function(json){
//     console.log(json)
//   });

fetch(`https://www.boredapi2.com/api/activity/`)
    .then(function (res){
        return res.json()
    })
    .then(function(json) {
        let targetElement = document.getElementById('my-activity')
        
        targetElement.innerHTML = `Fetch Request: ${json.activity}`

        
        console.log(`I am going to do the following activity:`)
        console.log(`${json.activity}`)
    })
    .catch(function(error){
        let targetElement = document.getElementById('my-activity')
        
        targetElement.innerHTML = `<p style='color:red'>Fetch Request: ${error}</p>`
        console.log(error)
    })

       // async await

async function getData() {
    try {
        let response = await fetch(`${BASE_URL}activity/`)
        let json = await response.json()
        let targetElement = document.getElementById('my-activity')
        targetElement.innerHTML = targetElement.innerHTML + `<p>Async/Await: ${json.activity}</p>`
        console.log(json)
    }
    catch(error) {
        let targetElement = document.getElementById('my-activity')
        targetElement.innerHTML = targetElement.innerHTML +  `<p style='color:red'>Async/Await: ${error}</p>`
    }
}
// getData()

async function fetchServerData(BASE_URL, endpoint='activity/') {
    let response = await fetch(`${BASE_URL}${endpoint}`)
    let json = await response.json()
    return json
}   

let jsonData = async () => {
    let serverData = await fetchServerData(BASE_URL)
    console.log(serverData);
}

jsonData()
