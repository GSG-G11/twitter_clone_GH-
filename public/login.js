const errorPopup = document.querySelector('.alert');
const errorMessage = document.querySelector('#error_Message');
let message;

window.onload = () => {
  login_error();
};

const login_error = () => {
  const isError = get_cookie('error');
  if (isError) {
    get_error_message();
    errorPopup.style.display = 'block';
  }
  delete_cookie('error');
};
const get_cookie = (name) => {
  return document.cookie.split(';').some((c) => {
    return c.trim().startsWith(name + '=');
  });
};
const get_error_message = () => {
  const message = document.cookie.split(';')[0].split('=')[1];
  errorMessage.textContent = decodeURI(message);
};
const delete_cookie = (name) => {
  document.cookie = name + '=; Max-Age=0';
};
