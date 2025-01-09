
let url = "https://677f67de0476123f76a64435.mockapi.io/books"
//  parent element 
let re = document.getElementById("result")
async function show(){
    //Doing async in that function because could there an function take long time so will give function like wite and untel the that part of function end gonna return pack to him  
    //For get data
    let hi =await fetch(url)
    //Convert data to an JSON
    let data = await hi.json()
    // looping throw data 
    data.forEach(element => {
        // create an Children element 
        var ps = document.createElement("div")
        //use backtik for multiline and engaging variables within
        ps.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${element.id}</th>
      <td>${element.name}</td>
    </tr>
  </tbody>
</table>`
// append child to parent
re.appendChild(ps)
    });
}

show()