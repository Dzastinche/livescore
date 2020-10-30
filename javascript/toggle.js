let theme=document.getElementById('toggle');
let header=document.querySelector('.everything-header')

theme.addEventListener('change',()=>
{
    let doc=document.documentElement;
    if (theme.checked)
    {
    doc.style.setProperty('--green','#151717d9');
    doc.style.setProperty('--second','#2f2c2ccf');
    header.style="color:white"
    }
    else{
    header.style="color:inherit"
    doc.style.setProperty('--green','#59b130c9');
    doc.style.setProperty('--second','#a8e063')
    }
}
    


    )