import {Notify} from "quasar";
export default function showToast(message, type) {

  Notify.create({
    message,
    type: type,
    progress: true,
    timeout: 3000,
    actions: [
      {
        icon: 'mdi-close-thick',
        color: 'dark',
        handler: () => {
        }
      }
    ]
  });
};

