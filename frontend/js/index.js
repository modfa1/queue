localStorage = {
    name: '',
    username: '',
    id: '',
    booking:false,
}




function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}

sendId(); 
                            

// send id to frontend
function sendId(){
    let id = localStorage.getItem('id');
    console.log(id);
    for (let i = 0; i < 6; i++) {
        document.getElementsByName('id')[i].value = id;
    }
    console.log(localStorage);
   document.getElementsByClassName('name')[0].value = localStorage.getItem('name'); 
}



async function getQueueinfo() {
        const response = await fetch('http://127.0.0.1:3000/queues');
        const data = await response.json();
        return data;
}
showQueue();
async function showQueue(){
    let response = await getQueueinfo();
    console.log(response);
    let queue =[]
    for (let i = 0; i < response.length; i++){
        for (let j = 0; j < 6; j++){
            if(response[i][j]==null){
                continue
            }
            // console.log(response[i][j]);
            else if (response[i][j].iduser == localStorage.getItem('id')){
                queue.push(response[i][j]);
            }
        }
    }
    // check current queue is user's queue or not if not can press button
    console.log(response);
    console.log(queue);

        let queuedata = document.getElementById('your');
        let press = document.getElementById('prs');
        if (queue.length == 0){
            queuedata.innerHTML += `<p class="your">No reserved queue</p>`;
            press.disabled = true;
        }else{
            let button = document.getElementsByClassName('bk');
            for (let i = 0; i < button.length; i++){
                button[i].innerHTML = 'Already made a reservation';
                button[i].disabled = true;
            }
            queuedata.innerHTML += `
                    <p class="your">${queue[0].shop}${queue[0].id}</p>`
        }
        // check current user is current queue?
        if (queue.length == 0){
            press.disabled = true;
        }else{
            for (let i = 0; i < response.length; i++){
                for (let j = 0; j < response[i].length; j++){
                    if (response[i][j] == null){
                        continue
                    }
                    if (response[i][j].iduser == localStorage.getItem('id')){
                        if (response[i][j].status == 'waiting'){
                            press.disabled = true;
                            break;
                        }else{
                            press.disabled = false;
                        }
                    }
                    
                }
            }
        }
}




function booking(){
    localStorage.setItem('booking', true);
}

function complete(){
    localStorage.setItem('booking', false);
}
checkbooking();
function checkbooking(){
    let button = document.getElementsByClassName('bk');
    if (localStorage.getItem('booking') == 'true'){
        for(let i=0; i<button.length; i++){
            button[i].innerHTML = 'Already made a reservation';
            button[i].disabled = true;
            
        }
    }
}

