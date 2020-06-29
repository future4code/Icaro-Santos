"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const AllEvents = [
    {
        name: "Reunião",
        description: "Reunião da quebrada",
        startAt: moment("24/06/2020 14:00", "DD/MM/YYYY HH:mm"),
        endAt: moment("24/06/2020 16:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Palestra",
        description: "Palestra de como ser lindo",
        startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        endAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
    }
];
const createEvent = (name, description, startAt, endAt) => {
    if (!name || !description || !startAt || !endAt) {
        console.error("Coloque as informações para criar um evento");
        return false;
    }
    const diffStartAt = startAt.diff(moment(), "seconds");
    const diffEndAt = startAt.diff(moment(), "seconds");
    if (diffStartAt < 0 && diffEndAt < 0) {
        console.error("Data não pode ser anterior a hoje");
        return false;
    }
    AllEvents.push({
        name,
        description,
        startAt,
        endAt
    });
};
const printEvents = (events) => {
    events.map(event => {
        const today = moment();
        const timeInMinutes = event.endAt.diff(event.startAt, "minutes");
        const daysLeft = event.startAt.diff(today, "days");
        console.log("------------------------------------------------------------------------");
        console.log("Nome: " + event.name);
        console.log("Horário de início: " + event.startAt.format("dddd, DD") + " de " + event.startAt.format("MMMM") + " de " + event.startAt.format("YYYY, HH:mm"));
        console.log("Horário do fim: " + event.endAt.format("dddd, DD") + " de " + event.endAt.format("MMMM") + " de " + event.endAt.format("YYYY, HH:mm"));
        console.log("Descrição: " + event.description);
        console.log("Duração: " + timeInMinutes + " minutos");
        console.log("Dias até o evento: " + daysLeft);
    });
};
const eventName = process.argv[2];
const eventDescription = process.argv[3];
const eventStartAt = moment(process.argv[4], "DD/MM/YYYY HH:mm");
const eventEndAt = moment(process.argv[5], "DD/MM/YYYY HH:mm");
createEvent(eventName, eventDescription, eventStartAt, eventEndAt);
printEvents(AllEvents);
//# sourceMappingURL=index.js.map