

function abrirImg_1(){
    let img_2 = document.getElementById(`img_services_2`).style.display = 'none'
    let img_3 = document.getElementById(`img_services_3`).style.display = 'none'
     let img_4 = document.getElementById(`img_services_4`).style.display='none'
   let img_1 = document.getElementById(`img_services_1`)

   if(img_1.style.display === 'none' || img_1.style.display === ''){
    img_1.style.display = 'flex'
    
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
    
    

  }

  function abrirImg_3(){
    let img_1 = document.getElementById(`img_services_1`).style.display='none'
    let img_2 = document.getElementById(`img_services_2`).style.display='none'
    let img_4 = document.getElementById(`img_services_4`).style.display='none'
    let img_3 = document.getElementById(`img_services_3`)
    if(img_3.style.display === 'none' || img_3.style.display ===''){
      img_3.style.display = 'flex'
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
     
  }


  // ANIMAÇÃO MENU
  document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('toggleSidebar');
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleBtn = document.getElementById('toggleSidebar');
    
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
        sidebar.classList.remove('active');
        toggleBtn.classList.remove('active');
    }
});


  

// ______________________________
  window.addEventListener('scroll', function () {
    let section = document.getElementById('descricao');
    let sobre = document.getElementById('descricao');
  
    let sectionPosition = section.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;
    let triggerPoint = viewportHeight * 0.1; // 10% do viewport height
  
    if (sectionPosition < viewportHeight - triggerPoint) { 
        sobre.style.opacity = '1';
        sobre.style.transform = 'translateY(0%)';
        sobre.classList.add('active_text');
         sobre.style.transition = '3s'
    } else {
         sobre.style.opacity = '0';
         sobre.style.transform = 'translateY(10%)';
         sobre.classList.remove('active_text'); // Remove a classe de animação
        sobre.style.transition = '3s'
    }
  });





  window.addEventListener('scroll', function () {
    let section = document.getElementById('development');
    let card = document.getElementById('text_section_2');
    let card_img = document.getElementById('img_section_2');
    let sectionPosition = section.getBoundingClientRect().top;
    let viewportHeight = window.innerHeight;
    let triggerPoint = viewportHeight * 0.2; // 10% do viewport height

    if (sectionPosition < viewportHeight - triggerPoint) {
        // A seção está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.classList.add('slide-in');
         card.style.transition = '2s'
        // ______________________-
        card_img.style.opacity = '1';
        card_img.style.transform = 'translateY(0)';
        card_img.classList.add('slide-in');
         card_img.style.transition = '2s'
     
    } else {
        // A seção está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(10%)';
        card.classList.remove('slide-in'); // Remove a classe de animação
        card.style.transition = '2s'
        // _______________________-
        card_img .style.opacity = '0';
        card_img .style.transform = 'translateY(10%)';
        card_img .classList.remove('slide-in'); // Remove a classe de animação
        card_img .style.transition = '3s'
      
    }
});

window.addEventListener('scroll', function () {
  let section = document.getElementById('descricao');
  let card_dev = document.getElementById('cards');

  let sectionPosition = section.getBoundingClientRect().top;
  let viewportHeight = window.innerHeight;
  let triggerPoint = viewportHeight * 0.1; // 10% do viewport height

  if (sectionPosition < viewportHeight - triggerPoint) {
    
      card_dev.style.opacity = '1';
      card_dev.style.transform = 'translateY(0%)';
      card_dev.classList.add('slide-in');
       card_dev.style.transition = '3s'
      
  } else {
     
       card_dev.style.opacity = '0';
       card_dev.style.transform = 'translateY(100%)';
       card_dev.classList.remove('slide-in'); // Remove a classe de animação
       card_dev.style.transition = '4s'
  }
});



window.addEventListener('scroll', function () {
  let section = document.getElementById('services');
  let card_dev = document.getElementById('op_dev');
  let img_services = document.getElementById('img_services');

  let sectionPosition = section.getBoundingClientRect().top;
  let viewportHeight = window.innerHeight;
  let triggerPoint = viewportHeight * 0.1; // 10% do viewport height

  if (sectionPosition < viewportHeight - triggerPoint) {
    
      card_dev.style.opacity = '1';
      card_dev.style.transform = 'translateY(0%)';
      card_dev.classList.add('active');
       card_dev.style.transition = '3s'
      
      img_services.style.opacity = '1';
      img_services.style.transform = 'translateY(0%)';
      img_services.classList.add('active_img');
       img_services.style.transition = '3s'  
  } else { 
       card_dev.style.opacity = '0';  
       card_dev.classList.remove('active'); // Remove a classe de animação
       card_dev.style.transition = '4s'
       img_services.style.opacity = '0';

       img_services.classList.remove('active_img'); // Remove a classe de animação
       img_services.style.transition = '3s'
  }
});

window.addEventListener('scroll', function () {
  let section = document.getElementById('sobre');
  let sobre = document.getElementById('sobre');

  let sectionPosition = section.getBoundingClientRect().top;
  let viewportHeight = window.innerHeight;
  let triggerPoint = viewportHeight * 0.1; // 10% do viewport height

  if (sectionPosition < viewportHeight - triggerPoint) { 
      sobre.style.opacity = '1';
      sobre.style.transform = 'translateY(0%)';
      sobre.classList.add('active_text');
       sobre.style.transition = '3s'
  } else {
       sobre.style.opacity = '0';
       sobre.style.transform = 'translateY(10%)';
       sobre.classList.remove('active_text'); // Remove a classe de animação
      sobre.style.transition = '3s'
  }
});

window.addEventListener('scroll', function () {
  let section = document.getElementById('contact');
  let sobre = document.getElementById('contact');

  let sectionPosition = section.getBoundingClientRect().top;
  let viewportHeight = window.innerHeight;
  let triggerPoint = viewportHeight * 0.1; // 10% do viewport height

  if (sectionPosition < viewportHeight - triggerPoint) { 
      sobre.style.opacity = '1';
      sobre.style.transform = 'translateY(0%)';
      sobre.classList.add('active_text');
       sobre.style.transition = '3s'
  } else {
       sobre.style.opacity = '0';
       sobre.style.transform = 'translateY(10%)';
       sobre.classList.remove('active_text'); // Remove a classe de animação
      sobre.style.transition = '3s'
  }
});