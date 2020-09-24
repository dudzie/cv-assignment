const form = document.getElementById('form1')

function onSubmit(event){
    event.preventDefault();
    const first = form.elements['name'].value
    const middle = form.elements['mid_name'].value
    const last = form.elements['last_name'].value
    const gender = form.elements['gender'].value
    const address = form.elements['addres'].value
    const email = form.elements['email'].value
    const phone = form.elements['phone'].value
    alert(`${first} ${middle} ${last} ${gender} ${address} ${email} ${phone}`);


    function checkInp(a)
{
      if (!isNaN(a)) {
          alert("Must input a letter");
          return false;
      }
}




checkInp(first);
checkInp(middle);
checkInp(last);


function phonenumber()
{
  var phoneno = /^\d{10}$/;
  const phone = form.elements['phone'].value
  if((phone.match(phoneno))){
      return true;
        }
      else
        {
        alert("enter number");
        return false;
        }

}

phonenumber();

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(forrm.elements['email'].value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

ValidateEmail()

localStorage.setItem("firstname",first)
localStorage.setItem("middlename",middle)
localStorage.setItem("lastname",last)
localStorage.setItem("sex",gender)
localStorage.setItem("house",address)
localStorage.setItem("mail",email)
localStorage.setItem("phonenum",phone)


}

form.addEventListener("submit",onSubmit)
//pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"