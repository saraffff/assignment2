function showUserinformation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("user-data").innerHTML= `Name: ${name}, <br> <br> Email: <b><span class="blue">${email} </span> </b>`;
}
