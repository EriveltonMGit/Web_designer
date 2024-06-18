

function abrirImg_1(){
    let img_2 = document.getElementById(`img_services_2`).style.display = 'none'
    let img_3 = document.getElementById(`img_services_3`).style.display = 'none'
     let img_4 = document.getElementById(`img_services_4`).style.display='none'
   let img_1 = document.getElementById(`img_services_1`)

   if(img_1.style.display === 'none' || img_1.style.display === ''){
    img_1.style.display = 'flex'
    
   }
   else{
    img_1.style.display = 'none'
   }
  }

  function abrirImg_2(){
    let img_1 = document.getElementById(`img_services_1`).style.display='none'
     let img_3 = document.getElementById(`img_services_3`).style.display = 'none'
      let img_4 = document.getElementById(`img_services_4`).style.display='none'
    let img_2 = document.getElementById(`img_services_2`)
    if(img_2.style.display === 'none' || img_2.style.display ===''){
      img_2.style.display = 'flex'
     }
     else{
      img_2.style.display = 'none'
     }
    

  }

  function abrirImg_3(){
    let img_1 = document.getElementById(`img_services_1`).style.display='none'
    let img_2 = document.getElementById(`img_services_2`).style.display='none'
    let img_4 = document.getElementById(`img_services_4`).style.display='none'
    let img_3 = document.getElementById(`img_services_3`)
    if(img_3.style.display === 'none' || img_3.style.display ===''){
      img_3.style.display = 'flex'
     }
     else{
      img_3.style.display = 'none'
     }
    
  }


  function abrirImg_4(){
    let img_1 = document.getElementById(`img_services_1`).style.display='none'
    let img_2 = document.getElementById(`img_services_2`).style.display='none'
    let img_3 = document.getElementById(`img_services_3`).style.display='none'
    let img_4 = document.getElementById(`img_services_4`)
    if(img_4.style.display === 'none' || img_4.style.display ===''){
      img_4.style.display = 'flex'
     }
     else{
      img_4.style.display = 'none'
     }
  }