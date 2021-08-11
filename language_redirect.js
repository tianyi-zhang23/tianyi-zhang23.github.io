var lanCode = navigator.language.substring(0,2);
window.location.replace(lanCode === "en" ? "/en" : "/fr");
