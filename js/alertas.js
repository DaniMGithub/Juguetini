import Swal from 'sweetalert2/dist/sweetalert2.js'

const showAlert = () => {
    Swal.fire('boton-agregar');
    } 

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })