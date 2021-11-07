import { Notification } from "./notification.js";

const body = document.querySelector('body');
const newNotification = new Notification('./data.json', body);
newNotification.initialize();