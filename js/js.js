$(document).ready(function() {


  $("#fechar-cmd").click(function() {

      var fecharcmd = $("#titulo-cmd");


      if(fecharcmd.text() == "Hello world!") {



          if($('#fechar-cmd').attr('disabled') == 'disabled') {

          } else {


              $('#feature-text').text("");
              $('#fechar-cmd').attr('disabled', true);
              carrossel("<3", "#feature-text", 'click');


          }




      } else {
          if($('#fechar-cmd').attr('disabled') == 'disabled') {

          } else {

              $('#feature-text').text("");
              $('#fechar-cmd').attr('disabled', true);
              carrossel("Hello world!", "#feature-text", 'click');


          }




      }

  });




  const textoCarrossel = "Carregando......"

  carrossel(textoCarrossel, "#feature-text", 'origem');

  async function carrossel(textoCarrossel, eleRef, tipo) {

      $('#fechar-cmd').attr('disabled', true);

      $(eleRef).text("");




      if(textoCarrossel == 'Carregando......') {

          $('#fechar-cmd').attr('disabled', true);

          if($(window).width() <= 900) {

              $('#titulo-cmd').css('margin-top', '-9px');
              $(eleRef).css('font-size', '0.4em');
              $('#barra-texto').css('height', '50px');

          } else {

              $(eleRef).css('font-size', '0.4em');
              $('#barra-texto').css('height', '50px');

          }



      }



      await ativarEfeitoEscrita(textoCarrossel, eleRef, 100, tipo);

      await waitForMs(1500);



      if(textoCarrossel == 'Carregando......') {

          $('#fechar-cmd').attr('disabled', true);
          $(eleRef).text("");

          if($(window).width() <= 900) {

              $(eleRef).css('font-size', '0.4em');
              $('#barra-texto').css('height', '50px');


          } else {
              $(eleRef).css('font-size', '0.99em');
              $('#barra-texto').css('height', '105px');
          }

          await ativarEfeitoEscrita("Hello world!", eleRef, 100, tipo);
          await waitForMs(1500);


      }


  }




  async function ativarEfeitoEscrita(texto, eleRef, delay = 100, tipo) {

      $('#fechar-cmd').attr('disabled', true);

      if(tipo == 'origem') {

      } else {

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