var displayarray = []
var completed=[]

function show(){
    var a =   document.getElementById("d1").value;
     displayarray.push(a);
      data();      
}


function data() {
	html='<ul>';
	for(var i=0 ;i<displayarray.length;i++){
        html+='<li> <input type="checkbox" onclick="chek('+i+')" >'+displayarray[i]+ '<input type="text"  id="ed">  <button type="button" onclick="edit('+i+')"  >Edit</button> <button type="button " onclick="del('+i+')">Delete</button></li>';
	}
	html+='</ul>';
    document.getElementById('s1').innerHTML=html;
}

function del(i){
	  displayarray.splice(i,1);
	  data();
}

function edit(a){
	
    for(i=0;i<displayarray.length;i++)
    {
         if(a==i) {
         	if(document.getElementById("ed").value=='')
         	{
         		document.getElementById("ed").value=displayarray[i];
         	}
         	else{
         	      var x=document.getElementById("ed").value;
         	      
         	      displayarray[i]=x;
         	      data();
         	}
         }
    }

}

      function chek(a){
              for(i=0;i<displayarray.length;i++)
    {
         if(a==i) {
         	completed.push(displayarray[i]);
         	 displayarray.splice(a,1);
	         data();
	         data2();

       }
   }
}

function data2() {
	   html2='<ul>';
	    for(var i=0 ;i<completed.length;i++){
		html2+='<li> <input type="checkbox" checked onclick="chek2('+i+')" >'+completed[i]+ '<input type="text"  id="ed2">  <button type="button" onclick="edit2('+i+')"  >Edit</button> <button type="button " onclick="del2('+i+')">Delete</button></li>';
	}
	html2+='</ul>';
    document.getElementById('s2').innerHTML=html2;
  }

      function del2(a){
	   completed.splice(a,1);
	   data2();
  }


function edit2(a){
	 for(i=0;i<completed.length;i++)
    {
         if(a==i) {
         	if(document.getElementById("ed2").value=='')
         	{
         		document.getElementById("ed2").value=completed[i];
         	}
         	else{
         	      var x=document.getElementById("ed2").value;
         	     completed[i]=x;
         	      data2();
         	}
         }
    }

}

  function chek2(a){
              for(i=0;i<completed.length;i++)
    {
          if(a==i) {
         	displayarray.push(completed[i]);
         	 completed.splice(a,1);
	         data();
	         data2();

        }
    }
}