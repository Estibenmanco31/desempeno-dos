import Swal from "sweetalert2";

export function messageSent() {
    Swal.fire({
        title: "Mensaje enviado correctamente",
        icon: "success",
        draggable: true
    });

}