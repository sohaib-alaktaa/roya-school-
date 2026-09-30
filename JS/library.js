let change_text = document.querySelector(".change_tex");
var hello = document.querySelectorAll('.buttons_mov');

let text_array = [" قصص اسلامية ", "  قصص تربوية ", " اناشيد دينية  ", " افلام تعليمية  ", " قصص تحفيزية ",
    " افلام ترفيهية ", " اغاني تعلمية "];



setInterval(function () {
    let random = (Math.floor(Math.random() * text_array.length));
    console.log(random);
    document.querySelector(".change_tex").innerHTML = text_array[random];
}, 1000);



function f_popup() {
    document.getElementById('popup').classList.add('open');
}
function f_hide() {
    document.getElementById('popup').classList.remove('open');
}

function f_load() {
    var userNmae = document.getElementById('user-name').value;
    var passWord = document.getElementById('password').value;
    if (userNmae == "admin" && passWord == "123") {

        for (let i = 0; i < hello.length; i++) {

            hello[i].classList.add('flex');

        }

        document.getElementById("btn_add_show1").setAttribute("style", "display: flex;");
        document.getElementById("btn_add_show2").setAttribute("style", "display: flex;");
        document.getElementById("btn_add_show3").setAttribute("style", "display: flex;");
        document.getElementById("btn_login").setAttribute("style", "display: none;");
        document.getElementById("btn_logout").setAttribute("style", "display: flex;");
        alert("Login successful ");
        f_hide();
        document.getElementById('user-name').value = null;
        document.getElementById('password').value = null;
        return false;

    }
    else
        alert("Login Failed ,please try agin");
    document.getElementById('password').value = null;
}

function f_btn_hid() {

    for (let i = 0; i < hello.length; i++) {

        hello[i].classList.remove('flex');

    }

    document.getElementById("btn_add_show1").setAttribute("style", "display: none;");
    document.getElementById("btn_add_show2").setAttribute("style", "display: none;");
    document.getElementById("btn_add_show3").setAttribute("style", "display: none;");
    document.getElementById("btn_login").setAttribute("style", "display: flex;");
    document.getElementById("btn_logout").setAttribute("style", "display: none;");
}

