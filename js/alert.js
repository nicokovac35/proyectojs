  
    
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

    


  
    $('#login').on('click',function(){
        const { value: formValues } =  Swal.fire({
            title: 'Ingrese usuario y contraseña',
            text: 'Ingrese usuario y contraseña',
            html:
              '<input id="swal-input1" class="swal2-input">' +
              '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
              ]
            }
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }
    })  
    
    $('.iconos2').on('click',function(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
    })



   