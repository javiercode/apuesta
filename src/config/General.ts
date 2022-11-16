import { ILocation } from '../interfaces/general'
import moment from 'moment';
export const formatFecha:string = "DD/MM/YYYY HH:mm:ss";

export function getStrFecha({ date = new Date() }: { date: string | Date }): string {
  let newDate: string = "";
  if (typeof date === "string") {
      newDate = moment(date, formatFecha).utc().utcOffset("-04:00").format(formatFecha);
  }
  if (date instanceof Date) {
      newDate = moment(date).utc().utcOffset("-04:00").format(formatFecha);
  }
  return newDate;
}

export function getFecha( date : Date | string): Date {
  let newDate: Date = new Date();
  if (typeof date === "string") {
      newDate = moment(date, formatFecha).utc().utcOffset("-04:00").toDate();
  }
  if (date instanceof Date) {
      newDate = moment(date).utc().utcOffset("-04:00").toDate();
  }
  return newDate;
}

export const formatDateTime = (fecha: string | undefined): string => {
  if (fecha !== undefined) {
    var date = new Date(fecha);
    var dateStr = ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    return dateStr;
  }
  return "";
}

export const formatDate = (fecha: string | undefined): string => {
  if (fecha !== undefined) {
    var date = new Date(fecha);
    var dateStr = ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear();
    return dateStr;
  }
  return "";
}

export const ubicacionXDepartamento = (codigo: number): ILocation => {
  switch (codigo) {
    case 1: return { lat: -19.0311216, lng: -65.2711112 }; break;
    case 2: return { lat: -16.4932221, lng: -68.1335063 }; break;
    case 3: return { lat: -17.3939741, lng: -66.198895 }; break;
    case 4: return { lat: -17.9611679, lng: -67.1224743 }; break;
    case 5: return { lat: -19.5710531, lng: -65.7859079 }; break;
    case 6: return { lat: -21.5217928, lng: -64.7971895 }; break;
    case 7: return { lat: -17.7572662, lng: -63.1517186 }; break;
    case 8: return { lat: -14.8299401, lng: -64.937811 }; break;
    case 9: return { lat: -11.0345565, lng: -68.7948472 }; break;
    default: return { lat: 0, lng: 0 }; break;
  }
}