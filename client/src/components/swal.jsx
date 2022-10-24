import Swal from "sweetalert2"

export const swal = ( title,message ,type) =>{
   
   Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: "Aceptar",
      width: "400px",
      timer: 10000,
      timerProgressBar: true,
   })
   
}
   

export const LoadingSwal = ({isLoading}) =>{
   
   if(!isLoading){
   Swal.fire({
      title: "Cargando...",
      html: "Por favor espere...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCancelButton: false,
      
      timerProgressBar: true,
      didOpen: () => {
         Swal.showLoading()
      },
   })
   }else{
   if(isLoading) Swal.close()
      
   }
}

export const ToastSigned = () =>{
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
}

   
   
