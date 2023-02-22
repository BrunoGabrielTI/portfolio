$( document ).ready(function() {
 

    $("#fechar-cmd").click(function(){
    
        var fecharcmd = $("#titulo-cmd");
 

        if (fecharcmd.text() == "Hello world!") {
            
           

            if ($('#fechar-cmd').attr('disabled') == 'disabled'){

            } else {

             
              $('#feature-text').text("");
              $('#fechar-cmd').attr('disabled', true);  
              carrossel("<3","#feature-text",'click');
             

            }

            
            

        } else {
          if ($('#fechar-cmd').attr('disabled') == 'disabled'){

          } else {
             
            $('#feature-text').text("");
            $('#fechar-cmd').attr('disabled', true);  
            carrossel("Hello world!","#feature-text",'click');
            

          }

           
           

        }

      });




      // function abrir(valor){

       

      //     if ($(valor).hasClass('fa-window-maximize')) {

      //       // $(valor).nextAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
      //       $(valor).nextAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
      //       // $(valor).parent().find('div').eq(2).css('background-color','black');
      //       console.log(1);

      //     } else {
            
            
      //       if ($(valor).text() != 'Clique aqui para fechar...') {
    
      //         $(valor).prevAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
          
    
      //         $(valor).html('<h3>Clique aqui para fechar...</h3>');
            
              
      //       } else {
              
              
            
      //         $(valor).prevAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
      //         $(valor).html('<h3>Clique aqui para ler mais...</h3>');

    
      //       }
             
  
      //     }
          
        
    
        
      // }
      
      // // $("#maximizar1").click(function(){
        
   
      
      // //   if ($("#abrirlermais").text() != 'Clique aqui para fechar...') {

      // //     $(".proj-conteudo").nextAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
       

      // //     $("#abrirlermais").html('<h3>Clique aqui para fechar...</h3>');
          
          
      // //   } else {
          
          
        
      // //     $("#abrirlermais").nextAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');

      // //     $("#abrirlermais").html('<h3>Clique aqui para ler mais...</h3>');
        

      // //   }

      // // });
      
      // $("i").click(function(){
        
   
      
      //   if ($(this).hasClass('fa-window-maximize')) {

      //     abrir($(this));
          
      //   } else {
          
          
           

      //   }

      // });

      // $("span").click(function(){
        
   
      
      //   if ($(this).text() != 'Clique aqui para fechar...') {

      //      abrir($(this));
          
      //   } else {
          
          
      //     abrir($(this));

      //   }

      // });
      

      // // $("#abrirlermais2").click(function(){
        
   
      
      //   if ($(this).text() != 'Clique aqui para fechar...') {

      //     $(this).prevAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
 
      //     $(this).html('<h3>Clique aqui para fechar...</h3>');
          
          
      //   } else {
          
          
      //     $(this).prevAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
         
      //     $(this).html('<h3>Clique aqui para ler mais...</h3>');
        


      //   }

      // });

      // $("#abrirlermais3").click(function(){
        
   
      
      //   if ($(this).text() != 'Clique aqui para fechar...') {

      //     $(this).prevAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para fechar...</h3>');
          

      //   } else {
          
      //     $(this).prevAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para ler mais...</h3>');
        

      //   }

      // });

      // $("#abrirlermais4").click(function(){
        
   
      
      //   if ($(this).text() != 'Clique aqui para fechar...') {

      //     $(this).prevAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para fechar...</h3>');
          

      //   } else {
          
      //     $(this).prevAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para ler mais...</h3>');
        

      //   }

      // });
      // $("#abrirlermais5").click(function(){
        
   
      
      //   if ($(this).text() != 'Clique aqui para fechar...') {

      //     $(this).prevAll( '.proj-conteudo' ).first().addClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para fechar...</h3>');
          

      //   } else {
          
      //     $(this).prevAll( '.proj-conteudo' ).first().removeClass('c-proj-aberto');
      //     $(this).html('<h3>Clique aqui para ler mais...</h3>');
        

      //   }

      // });






      // $("#TelaLogin").click(function(){
      //   $('#TelaConfig').removeClass('active'); 
      //   $('#TelaIndicadores').removeClass('active'); 
      //   $('#TelaLogin').addClass('active'); 
      //   $('.info-projeto').css('background-image','url(images/sistema-financeiro.jpg)')

      // });

      // $("#TelaIndicadores").click(function(){
      //   $('#TelaConfig').removeClass('active'); 
      //   $('#TelaLogin').removeClass('active'); 
      //   $('#TelaIndicadores').addClass('active'); 
        
      //   $('.info-projeto').css('background-image','url(images/sistema-financeiro-analytic.jpg)')

      // });
      // $("#TelaConfig").click(function(){
       
      //   $('#TelaIndicadores').removeClass('active'); 
      //   $('#TelaLogin').removeClass('active'); 
      //   $('#TelaConfig').addClass('active'); 
        
      //   $('.info-projeto').css('background-image','url(images/sistema-financeiro-config.jpg)')

      // });

      // $("#TelaLogin2").click(function(){
      //   $('#TelaPrincipal').removeClass('active'); 
      //   $('#TelaLoginWeb').removeClass('active'); 
      //   $('#TelaPrinciaplWeb').removeClass('active'); 
      //   $('#TelaLogin2').addClass('active'); 
      //   $('.info-projeto2').css('background-image','url(images/sistema-erp.jpg)')

      // });

      // $("#TelaPrincipal").click(function(){
      //   $('#TelaLogin2').removeClass('active'); 
      //   $('#TelaLoginWeb').removeClass('active'); 
      //   $('#TelaPrinciaplWeb').removeClass('active'); 
      //   $('#TelaPrincipal').addClass('active'); 
        
      //   $('.info-projeto2').css('background-image','url(images/sistema-erp-telaprincipal.jpg)')

      // });
      // $("#TelaLoginWeb").click(function(){
       
      //   $('#TelaLogin2').removeClass('active'); 
      //   $('#TelaPrincipal').removeClass('active'); 
      //   $('#TelaPrinciaplWeb').removeClass('active'); 
      //   $('#TelaLoginWeb').addClass('active'); 
        
        
      //   $('.info-projeto2').css('background-image','url(images/sistema-erp-web.jpg)')

      // });

      // $("#TelaPrinciaplWeb").click(function(){
       
      //   $('#TelaLogin2').removeClass('active'); 
      //   $('#TelaPrincipal').removeClass('active'); 
      //   $('#TelaLoginWeb').removeClass('active'); 
      //   $('#TelaPrinciaplWeb').addClass('active'); 
        
        
      //   $('.info-projeto2').css('background-image','url(images/sistema-erp-web-telaprincipal.jpg)')

      // });

 

      const textoCarrossel = "Carregando......"
        
      carrossel(textoCarrossel,"#feature-text",'origem');
        
      async function carrossel(textoCarrossel, eleRef,tipo) {
          
          $('#fechar-cmd').attr('disabled', true);  
        
          $(eleRef).text("");

      
            

            if (textoCarrossel == 'Carregando......'){

              $('#fechar-cmd').attr('disabled', true);  

              if( $(window).width() <= 900){
               
                $('#titulo-cmd').css('margin-top','-9px');
                $(eleRef).css('font-size','0.4em');
                $('#barra-texto').css('height','50px');
                
              } else {

                $(eleRef).css('font-size','0.4em');
                $('#barra-texto').css('height','50px');

              }

             
             
            }
           
          
            
            await ativarEfeitoEscrita(textoCarrossel, eleRef,100,tipo);
            
            await waitForMs(1500);
            
            
    
            if (textoCarrossel == 'Carregando......'){
                
              $('#fechar-cmd').attr('disabled', true); 
              $(eleRef).text("");
                
                if( $(window).width() <= 900){
              
                  $(eleRef).css('font-size','0.4em');
                  $('#barra-texto').css('height','50px');
                 
                  
                } else {
                  $(eleRef).css('font-size','0.99em');
                  $('#barra-texto').css('height','105px');
                }

                await ativarEfeitoEscrita("Hello world!", eleRef,100,tipo);
                await waitForMs(1500);
                
               
            }
      
             
      }
      
      
     
     
    
    async function ativarEfeitoEscrita(texto, eleRef, delay = 100,tipo) {
      
      $('#fechar-cmd').attr('disabled', true);
     
      if (tipo == 'origem') {
        
      } else{

        await waitForMs(1000);
      }
    

      const letters = texto.split("");
         
        let i = 0;
        while(i < letters.length) {
          await waitForMs(delay);
          $(eleRef).append(letters[i]);
          i++
        }
        $('#fechar-cmd').attr('disabled', false);
        
        
        return;
      }
      
      
    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
    
               

});

 