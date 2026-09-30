
function f_click1() {
    document.getElementById('1').innerHTML = " من عمر 5 سنوات الى 7 سنوات ";
    document.getElementById('2').innerHTML = " تحديد مستوى مجاني ";
    document.getElementById('4').innerHTML = " صفوف لكافة المستويات ";
    document.getElementById('3').innerHTML = " مجموعات صغيرة 8 طلاب على الأكثر ";
}

function f_click2() {
    document.getElementById('1').innerHTML = " من عمر 8 سنوات الى 11 سنة ";
    document.getElementById('2').innerHTML = " تحديد مستوى مجاني ";
    document.getElementById('4').innerHTML = " صفوف لكافة المستويات ";
    document.getElementById('3').innerHTML = " مجموعات صغيرة 8 طلاب على الأكثر ";
}

function f_click3() {
    document.getElementById('1').innerHTML = " من عمر 12 سنة الى 14 سنة ";
    document.getElementById('2').innerHTML = " تحديد مستوى مجاني ";
    document.getElementById('4').innerHTML = " صفوف لكافة المستويات ";
    document.getElementById('3').innerHTML = " مجموعات صغيرة 8 طلاب على الأكثر ";
}

function f_click4() {
    document.getElementById('1').innerHTML = " من عمر 15 سنة الى 17 سنة ";
    document.getElementById('2').innerHTML = " تحديد مستوى مجاني ";
    document.getElementById('4').innerHTML = " صفوف لكافة المستويات ";
    document.getElementById('3').innerHTML = " مجموعات صغيرة 8 طلاب على الأكثر ";
}



let change_text = document.querySelector(".change_t");

let text_array = [" متعة وتشويق ", " تحفيز وتنافس ", " تعليم ابداعي ", " مرح وتسلية "];



setInterval(function () {
    let random = (Math.floor(Math.random() * text_array.length));
    console.log(random);
    document.querySelector(".change_t").innerHTML = text_array[random];
}, 1000);
