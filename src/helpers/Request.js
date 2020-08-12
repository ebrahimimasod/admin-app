import {Config} from './Config';
import {Loading} from "quasar";
import Axios from 'axios';
import showToast from "src/helpers/Notify";


export default Request = Axios.create({
  baseURL: Config.baseUrl,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});


Request.interceptors.request.use(
  function (config) {
    Loading.show();
    /* let admin = null;
     if (!(config.url === 'login')) {
          admin = JSON.parse(localStorage.getItem('admin'));
         if (admin!==undefined && admin !== null) {
             config.headers['Authorization'] = 'Bearer ' + admin.api_token;
         }
     }*/
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

// Add a response interceptor
Request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Loading.hide();
  return response;
}, function (error) {
  console.log(error);
  HandleServerError(error);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export function HandleServerError(error) {
  Loading.hide();
  try {
    switch (error.response.status) {
      case 500: {
        showToast('خطایی رخ داده است.', 'warning');
        break;
      }
      case 422: {
        // return  false;
        let errors = Object.keys(error.response.data.errors).map((key) => {
          return error.response.data.errors[key];
        });

        errors.map((item) => {
          showToast(item[0], 'warning');
        });
        break;
      }
      case 408: {
        showToast(error.response.data.error, 'warning');
        break;
      }
      case 403: {
        showToast('شما دسترسی ندارید!!!', 'warning');
        break;
      }
      case 401: {
        if (router.currentRoute.name === 'Login') {
          return false;
        }
        showToast('لطفا ابتدا وارد حساب کاربری خود شوید', 'warning');
        break;
      }
      case 400: {
        if (error.response.data.error) {
          showToast(error.response.data.error, 'warning');
        } else {
          showToast('درخواست نا معتبر!!!', 'warning');
        }
        break;
      }
    }
  } catch (e) {
    //console.log(e);
  }
}



