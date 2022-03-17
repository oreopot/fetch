
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
        
        targetElement.textContent = json.activity

        
        console.log(`I am going to do the following activity:`)
        console.log(`${json.activity}`)
    })
    .catch(function(error){
        let targetElement = document.getElementById('my-activity')
        
        targetElement.innerHTML = `<p style='color:red'>${error}</p>`
        console.log(error)
    })

    // async await