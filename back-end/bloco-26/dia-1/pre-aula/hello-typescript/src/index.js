var weekDay;
(function (weekDay) {
    weekDay[weekDay["sunday"] = 0] = "sunday";
    weekDay[weekDay["monday"] = 1] = "monday";
    weekDay[weekDay["tuesday"] = 2] = "tuesday";
    weekDay[weekDay["wednesday"] = 3] = "wednesday";
    weekDay[weekDay["thursday"] = 4] = "thursday";
    weekDay[weekDay["friday"] = 5] = "friday";
    weekDay[weekDay["saturday"] = 6] = "saturday";
})(weekDay || (weekDay = {}));
;

var rainbow;
(function (rainbow) {
    rainbow["red"] = "vermelho";
    rainbow["orange"] = "laranja";
    rainbow["yellow"] = "amarelo";
    rainbow["green"] = "verde";
    rainbow["blue"] = "azul";
    rainbow["indigo"] = "anil";
    rainbow["violet"] = "violeta";
})(rainbow || (rainbow = {}));
;

var action;
(function (action) {
    action[action["salvar"] = 0] = "salvar";
    action[action["imprimir"] = 1] = "imprimir";
    action[action["abrir"] = 2] = "abrir";
    action[action["visualizar"] = 3] = "visualizar";
    action[action["fechar"] = 4] = "fechar";
})(action || (action = {}));
;

var cardinal;
(function (cardinal) {
    cardinal["north"] = "N";
    cardinal["east"] = "E";
    cardinal["south"] = "S";
    cardinal["west"] = "W";
})(cardinal || (cardinal = {}));
;

var myCardinal = cardinal.north;
var myAction = action.salvar;
var myColor = rainbow['indigo'];
var myDay = weekDay['sunday'];

console.log(myCardinal, myAction, myColor, myDay);
