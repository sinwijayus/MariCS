var user1 = {
    username: 'richardS',
    password: 'richardS_1' 
};

var user2 = {
    username: 'marklorens',
    password: 'marklorens'
};

// var user = {
//     username, password,
//     setUser: function(user, pass){
//         username = user;
//         password = pass;
//     },
//     getUser: function(){
//         return this.username, this.password;
//     }
// };

function btnSubmit(){

    var loginData = {
        username: document.getElementById("user").value,
        password: document.getElementById("pass").value
    };

    if (loginData.username === 'maklorens' && loginData.password === 'maklorens'){
        return true;
        window.location.href="file:///D:/Tugas/Kuliah/STI/RPL/Tubes/marics/marics-pilihan.html";
    }
    else if(loginData.username != user1.username && loginData.username != user2.username){
        alert(`Username doesn't exist!`);
        return false;
    }
    else if(loginData.password != user1.password && loginData.password != user2.password){
        alert(`Wrong password for that username!`);
        return false;
    }
    else{
        return true;
        window.location.href="file:///D:/Tugas/Kuliah/STI/RPL/Tubes/marics/marics-pilihan.html";
    }
}
