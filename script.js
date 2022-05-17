var c=document.createElement("div");
c.setAttribute("style","width:100vw; height:100vh");
c.setAttribute("class","d-flex align-items-center justify-content-center");
var b = document.createElement("div");
b.setAttribute("style","width:300px; height:300px");
b.setAttribute("class","card");
var a = document.createElement("div");
a.setAttribute("class","card-body d-flex justify-content-center align-items-center");
document.body.append(c);
b.append(a);
c.append(b);
setTimeout(()=>{
     a.innerHTML="10";
     setTimeout(()=>{
        a.innerHTML="9";
        setTimeout(()=>{
            a.innerHTML="8";
            setTimeout(()=>{
                a.innerHTML="7";
                setTimeout(()=>{
                    a.innerHTML="6";
                    setTimeout(()=>{
                        a.innerHTML="5";
                        setTimeout(()=>{
                            a.innerHTML="4";
                            setTimeout(()=>{
                                a.innerHTML="3";
                                setTimeout(()=>{
                                    a.innerHTML="2";
                                    setTimeout(()=>{
                                        a.innerHTML="1";
                                        setTimeout(()=>{
                                            a.innerHTML="Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
     },1000);
},500); 