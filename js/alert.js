    $('#click-correo').on('click',function(){
 	
 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Perfect! ',
            text: 'Te enviaremos todo lo que necesitas!',
            width: 300,
            padding: '3em',
            color: '#716add',
            showCloseButton: true,
  
            
          });
    });

    
    $('#click-heart').on('click',function(){

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado a favoritos',
            showConfirmButton: false,
            timer: 1500
          });
        
    });



   