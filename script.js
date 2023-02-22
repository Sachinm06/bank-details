function register() {

    //access data

    accno = acno.value
    username = uname.value
    password = psw.value

    //object

    accDetails = { accno, username, password, balance: 0 }

    if (accno in localStorage) {
        alert("AC Already Present")
        window.location = "index.html"
    }
    else {
        localStorage.setItem(accno, JSON.stringify(accDetails))
        alert("AC Added")
        window.location = "index.html"
    }

}
function loginBtn() {
    accnum = eAc.value
    pswd = ePw.value

    if (accnum in localStorage) {
        data = JSON.parse(localStorage.getItem(accnum))
        if (pswd == data["password"]) {
            window.location="home.html"
            alert("Login Success")
        }
        else {
            alert("incorrect password")
        }
    }
    else {
        alert("incorrect acc no")
    }

}