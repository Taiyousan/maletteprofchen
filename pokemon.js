const triangle = document.querySelector('.dialog-click');
const texte = document.querySelector('.dialog-text')
const bulleDeDialogue = document.querySelector('.dialog')
const maletteClosed = document.querySelector('.suitcase-closed')
const maletteOpen = document.querySelector('.suitcase-open')
const pokeball1 = document.querySelector('.pokeball1')
const pokeball2 = document.querySelector('.pokeball2')
const pokeball3 = document.querySelector('.pokeball3')
const eevee = document.querySelector('.eevee')
const roselia = document.querySelector('.roselia')
const vulpix = document.querySelector('.vulpix')
const choisir = document.querySelector('.choisir')
let countDialog = 0;
const eau = document.querySelector('.eau')
const plante = document.querySelector('.plante')
const feu = document.querySelector('.feu')

// fonction d'animation des textes
let i = 0
let speed = 10
let txt = [
        'Bonjour, dresseur.',
        'Es-tu prêt à entrer dans la grande aventure pokémon ?',
        'Clique sur la valise pour obtenir ton premier pokémon !',
        'Choisis un pokémon !',
]
function typeWriter0() {
    if (i < txt[0].length) {
      texte.innerHTML += txt[0].charAt(i);
      i++;
      setTimeout(typeWriter0, speed);
    }
  }
function typeWriter1() {
    if (i < txt[1].length) {
      texte.innerHTML += txt[1].charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }
function typeWriter2() {
    if (i < txt[2].length) {
      texte.innerHTML += txt[2].charAt(i);
      i++;
      setTimeout(typeWriter2, speed);
    }
}
function typeWriter3() {
    if (i < txt[3].length) {
        console.log(txt[3])
      texte.innerHTML += txt[3].charAt(i);
      i++;
      setTimeout(typeWriter3, speed);
    }
}


// La première bulle s'affiche direct au démarrage
typeWriter0();


//ensuite, chaque clic fait avancer le dialogue


triangle.addEventListener('click', () => {
    texte.innerHTML = ''
    i = 0;
if(countDialog == 0){
    
    document.getElementById('audio_click').play();
    document.getElementById('audio_201').play();
    typeWriter1();
    

}if(countDialog == 1){
    document.getElementById('audio_click').play();
    typeWriter2();

    maletteClosed.style.display = 'block';
    
    setTimeout(() => {
        maletteClosed.style.opacity = 1;
      }, 600)
}
countDialog +=1;
return;
})

// la malette s'ouvre
maletteClosed.addEventListener('click', ()=>{
    maletteClosed.style.display = 'none';
    document.getElementById('audio_open').play();
    maletteOpen.style.display = 'block';
    pokeball1.style.display = 'block'
    pokeball2.style.display = 'block'
    pokeball3.style.display = 'block'
    texte.innerHTML =''
    i = 0
    console.log(countDialog)
     typeWriter3()
})

//au click sur une pokéball :

pokeball1.addEventListener('click', () => {
    roselia.style.display = 'none'
    vulpix.style.display = 'none'
    $(".roselia").attr("src", "images/eevee.gif");
    eevee.style.display = 'block'

    document.getElementById('audio_eevee').play();
    texte.innerHTML = "Evoli</br>C'est un pokémon idéal pour débuter. Un indice : son évolution aime nager dans des eaux d'un <span style=\"color : blue\">bleu</span> profond."

    choisir.style.display = 'block'
    choisir.style.opacity = '1'

})
pokeball2.addEventListener('click', () => {
    eevee.style.display = 'none'
    vulpix.style.display = 'none'
    $(".roselia").attr("src", "images/roselia.gif");
    roselia.style.display = 'block'

    document.getElementById('audio_roselia').play();
    texte.innerHTML = "Rosélia</br>Plus mignon que Rosélia, on ne fait pas. Un indice : c'est dans les prairies <span style=\"color : green\">verdoyantes</span> qu'il aime se balader."

    choisir.style.display = 'block'
    choisir.style.opacity = '1'
})
pokeball3.addEventListener('click', () => {
    eevee.style.display = 'none'
    roselia.style.display = 'none'
    $(".vulpix").attr("src", "images/vulpix.gif");
    vulpix.style.display = 'block'

    document.getElementById('audio_vulpix').play();
    texte.innerHTML = "Goupix</br>Un pokémon dont l'évolution est d'une très grande beauté. Un indice : seules les flammes les plus <span style=\"color : red\">rouges</span> peuvent rivaliser avec la puissance de ce pokémon."

    choisir.style.display = 'block'
    choisir.style.opacity = 1
})

choisir.addEventListener('click', () => {
    eau.style.display = 'block'
    eau.style.opacity = 1

    plante.style.display = 'block'
    plante.style.opacity = 1

    feu.style.display = 'block'
    feu.style.opacity = 1
})

// EVOLUTION EN AQUALI
$( function() {
    $( ".eau" ).draggable();
    $( ".eevee" ).droppable({
        drop: function() {
          $( this ).attr("src", "images/aquali.gif");
          document.getElementById('audio_vaporeon').play();
          $(this).css("animation", "none");
          $(".eau").css("transition", "0.2s")
          $(".eau").css("top", "10%")
          $(".eau").css("left", "25%")
          
          $(".dialog-text").html("Aquali</br>Bien joué ! Tu as débloqué Aquali, le pokémon Sirène.</br><span style=\"color:red\">N'hésite pas à essayer de choisir les autres pokémon maintenant !</span>")
          setTimeout(function() { 
            $(".eau").css("transition", "0s")
        }, 300);

        },
        over: function (event, ui) {
            $(this).css("animation", "shake 0.5s");
            $(this).css("animation-iteration-count", "infinite");
        },
        out: function (event, ui) {
            $(this).css("animation", "none");
        }
      });
  } );

  //EVOLUTION EN ROSERADE
  $( function() {
    $( ".plante" ).draggable();
    $( ".roselia" ).droppable({
        drop: function() {
          $( this ).attr("src", "images/roserade.gif");
          document.getElementById('audio_roserade').play();
          $(this).css("animation", "none");
          $(".plante").css("transition", "0.2s")
          $(".plante").css("top", "10%")
          $(".plante").css("left", "45%")
          $(".dialog-text").html("Rosérade</br>Bien joué ! Tu as débloqué Rosérade, le pokémon Bouquet.</br><span style=\"color:red\">N'hésite pas à essayer de choisir les autres pokémon maintenant !</span>")
          setTimeout(function() { 
            $(".plante").css("transition", "0s")
        }, 300);
        },
        over: function (event, ui) {
            $(this).css("animation", "shake 0.5s");
            $(this).css("animation-iteration-count", "infinite");
        },
        out: function (event, ui) {
            $(this).css("animation", "none");
        }
      });
  } );

  //EVOLUTION EN FEUNARD
  $( function() {
    $( ".feu" ).draggable();
    $( ".vulpix" ).droppable({
        drop: function() {
          $( this ).attr("src", "images/ninetales.gif");
          document.getElementById('audio_ninetales').play();
          $(this).css("animation", "none");
          $(".feu").css("transition", "0.2s")
          $(".feu").css("top", "10%")
          $(".feu").css("left", "65%")
          $(".dialog-text").html("Feunard</br>Bien joué ! Tu as débloqué Feunard, le pokémon Renard.</br><span style=\"color:red\">N'hésite pas à essayer de choisir les autres pokémon maintenant !</span>")
          setTimeout(function() { 
            $(".feu").css("transition", "0s")
        }, 300);
        },
        over: function (event, ui) {
            $(this).css("animation", "shake 0.5s");
            $(this).css("animation-iteration-count", "infinite");
        },
        out: function (event, ui) {
            $(this).css("animation", "none");
        }
      });
  } );
  
  
