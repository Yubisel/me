// Constante que determina el ambiente de la aplicacion
const DEBUG_MODE = true;
// Constante que interfiere si la aplicacion se encuentra en DEBUG_MODE, si se encuentra en true toma los valores locales del dev
const LOCAL_MODE = true;
// Url de servicios
const URL_SERVICE_PRODUCTION = "http://hlapi.dynamia.cn/";
const URL_SERVICE_DEBUG = LOCAL_MODE
  ? "http://localhost:8080/"
  : "http://localhost:8080/";
// Constantes del sistema que seran importadas en los demas archivos
export const Constants = {
  URLSERVICE: DEBUG_MODE ? URL_SERVICE_DEBUG : URL_SERVICE_PRODUCTION,
};