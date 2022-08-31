function savedata() {
    sname=document.getElementById("sname").value;
    Email=document.getElementById("Email").value;
    Age=document.getElementById("Age").value;
    phone=document.getElementById("phone").value;
    AdhaarNumber =document.getElementById("Adhaar Number").value;
    Address=document.getElementById("Address").value;
    Date=document.getElementById("Date").value;
    let userrecords=new Array();
    userrecords=JSON.parse(localStorage.getItem('userdata'))?JSON.parse(localStorage.getItem('userdata')):[];
    if(sname!='' && Email!='' && Age!='' && phone!="" && AdhaarNumber!='' && Address!='' && Date!=""){
        if(userrecords.some((data)=>{return data.adhaar===adhaar}))
        {
            alert('user already registered');
            return;
        }
        userrecords.push({
            'name':sname,
            'email':Email,
            'age':Age,
            'phoneno':phone,
            'adhaar':AdhaarNumber,
            'address':Address,
            'date':Date
        })
        alert("Successfully Submitted")
    }
    else {
        alert('Please fillout all the field');
        return
    }
  
   localStorage.setItem('userdata',JSON.stringify(userrecords));
   //console.log(userrecords)
}














































// function savedata(){
//     sname=document.getElementById("sname").value;
//     Email=document.getElementById("Email").value;

//     Age=document.getElementById("Age").value;
//     phone=document.getElementById("phone").value;
//     AdhaarNumber =document.getElementById("Adhaar Number").value;
//     Address=document.getElementById("Address").value;
//     Date=document.getElementById("Date").value;


//     localStorage.setItem("sname",sname);
//     localStorage.setItem("Email",Email);
//     localStorage.setItem("Age",Age);
//     localStorage.setItem("phone",phone);
//     localStorage.setItem("AdhaarNumber",AdhaarNumber);
//     localStorage.setItem("Date",Date)
//     }




//     Name
// ● Email
// ● Age
// ● Phone
// ● Adhaar Number
// ● Address
// ● Date (calender input)