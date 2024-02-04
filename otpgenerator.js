var e = setInterval(Generator,7000);
var a;
var b;
function Generator() {

 a =  Math.round( 1000 + Math.random()*9000 );
document.querySelector('#otp').innerHTML= a; 
// return a , b;
}
function verify(a)
 {  
    b =  document.querySelector("#inputtype").value;
    let c =  document.querySelector("#res") 
    if(b == "") {
        c.innerHTML = "Enter OTP"
    }
    else if (a == b) {
        c.innerHTML = "OTP Registered Successfully :)"
        // clearInterval(Generator);
        clearInterval(e)
        }
    else
            c.innerHTML = "Incorrect OTP Try Again !"
    }

// // Generator();
// let d = true
// let c = document.querySelector("#res")
// switch (d) {
//     case (a == b):
//         c.innerHTML = "Correct OTP"
//         break;
//     case (a != b):
//         c.innerHTML = "Incorrect OTP"
//         break;
// }