checklogin();
function checklogin(){
    if (localStorage.getItem('id') != null){
        window.location.href = "home.html";
    }
}


console.log(localStorage.getItem('id'));
const response = fetch('http://127.0.0.1:3000/userinfo').then((response) => {
    return response.json()});

console.log(response);



function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const origin = window.location.origin;
    if (username == '' || password == ''){
        alert('กรุณากรอกข้อมูลให้ครบ');
    }
    else{
        response.then((data) => {
            let check = false;
            for (let i = 0; i < data.length; i++){
                if (username == data[i].username && password == data[i].password){
                    check = true;
                    localStorage.setItem('id', data[i].iduser);
                    localStorage.setItem('username', data[i].username);
                    localStorage.setItem('name', data[i].name);
                    window.location.href = 'home.html';

                    break;
                }
            }
            if (check == true){
                console.log(123);
            }
            else{
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
                // reset path
            }
        })
    }     
    
}

function regispage(){
    window.location.href = 'register.html';
}