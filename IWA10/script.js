const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not yet created`);


let copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';

let correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);

let isEarlier = correctDate < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

let correntDate = new Date(copied.date);

if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id != copied.id);
console.log('Name change:', holidays[christmas].name = copied.name || copied.name);
console.log('Date change:' , `${correntDate.getDate()}/${correntDate.getMonth() + 1}/${correntDate.getFullYear()}`);


for (const holiday of Object.values(holidays)) {
    if (typeof holiday.date === 'string') {
        holiday.date = new Date(holiday.date);
    }
}

const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...holidayTimestamps);
const lastHolidayTimestamp = Math.max(...holidayTimestamps);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);


console.log(`${firstHolidayDate.getDate().toString().padStart(2, '0')}/${(firstHolidayDate.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`);
console.log(`${lastHolidayDate.getDate().toString().padStart(2, '0')}/${(lastHolidayDate.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`);

const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomHolidayIndex];
const randomHolidayDate = new Date(randomHoliday.date);
console.log(`${randomHolidayDate.getDate().toString().padStart(2, '0')}/${(randomHolidayDate.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`);
