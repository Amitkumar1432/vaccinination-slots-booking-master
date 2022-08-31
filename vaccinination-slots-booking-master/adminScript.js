let data=JSON.parse(localStorage.getItem('userdata'));
let admindiv=document.getElementById('admin')

//admindiv.innerHTML=html;
let html="<table border='1px solid grey'>"
html+='<tr>';
html+='<th>'+'Username'+'</th>';
html+='<th>'+'Email'+'</th>';
html+='<th>'+'Age'+'</th>';
html+='<th>'+'Phone No.'+'</th>';
html+='<th>'+'Adhaar No.'+'</th>';
html+='<th>'+'Address'+'</th>';
html+='<th>'+'Date'+'</th>';
html+='</tr>';
    for(var i=0;i<data.length;i++){
        html+='<tr>';
        html+='<td>'+data[i].name+'</td>';
        html+='<td>'+data[i].email+'</td>';
        html+='<td>'+data[i].age+'</td>';
        html+='<td>'+data[i].phoneno+'</td>';
        html+='<td>'+data[i].adhaar+'</td>';
        html+='<td>'+data[i].address+'</td>';
        html+='<td>'+data[i].date+'</td>';
        html+='</tr>'
    }
    html+='</table>'
admindiv.innerHTML=html;