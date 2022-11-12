import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showConfirm = () => {
  return MySwal.fire({
    title: 'Warning',
    text: '하부를 생성 하시겠습니까?.',
    icon: 'warning',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#7066e0',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  }).then((result) => {
    return result.isConfirmed;
  });
};

export const showError = (errorMessage: string) => {
  return MySwal.fire({
    title: 'Error',
    html: '<p class="text-danger">okoko</p>',
    // text: '<p>okoko</p>',
    icon: 'error',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#7066e0',
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  });
};

export const showSuccess = (errorMessage = '성공적인') => {
  return MySwal.fire({
    title: 'Success',
    text: errorMessage,
    icon: 'success',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#7066e0',
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  });
};
