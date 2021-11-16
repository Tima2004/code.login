data = {
    user: "tima",
    pass: 2408,
}

let accept = () =>{
    let userName = document.getElementById('user').value
    let password = document.getElementById('pass').value
    if (data.user == userName && data.pass == password) {
        window.location.href = 'https://timati04.herokuapp.com/'
    }else{
        alert("invalid password, try again later")
    }
  
}