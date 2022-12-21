import { shuffleArray } from "../utils/utils";

export const getApps = (shuffle = false, excludedApps = [], limit = 0) => {
    const apps = [
        {
            id: "navigation",
            name: "Navigation",
            icon: "car-front",
            about: "You can find the best routes based on real-time traffic, accident and road conditions. Know when you will arrive and when to leave to get to places on-time.",
        },
        {
            id: "weather",
            name: "Weather",
            icon: "cloud-sun",
            about: "You can get detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone.",
        },
        {
            id: "calendar",
            name: "Calendar",
            icon: "calendar-date",
            about: "You can schedule meetings and events, get reminders about upcoming activities and check your availability.",
        },
        {
            id: "reminders",
            name: "Reminders",
            icon: "bookmark",
            about: "You can use it for all of life's to-dos, including grocery lists, projects at work, or anything else you want to track",
        },
        {
            id: "messages",
            name: "Messages",
            icon: "chat",
            about: "Send texts, photos, videos, documents, stickers, Memoji, and more to contacts.",
        },
        {
            id: "music",
            name: "Music",
            icon: "music-note-beamed",
            about: "Play your favorites songs and albums. Listen to the music you love, and discover new music and podcasts.",
        },
        {
            id: "clock",
            name: "Clock",
            icon: "alarm",
            about: "Set regular alarms for any time of day and have them repeat on one or more days of the week. You can also use the timer to count down from a specified time. You can also use the it to measure the duration of an event. Start the timer, pause it, stop it and restart it.",
        },
        {
            id: "mail",
            name: "Mail",
            icon: "envelope",
            about: "You can send and receive message. You can also archive, delete, flag, or mark messages as read or unread.",
        },
        {
            id: "home",
            name: "Smart Home",
            icon: "house",
            about: "Easily control your smart home accessories from your mobile device. Turn off the lights, see who's at the front door, adjust your living room temperature, turn up the music, and so much more.",
        },
        {
            id: "events",
            name: "Events & Tickets",
            icon: "ticket-perforated",
            about: "Find out about the the best art and entertainment, food and drink, attractions, and immediately buy and sell tickets to these events.",
        },
        {
            id: "shopping",
            name: "Shopping",
            icon: "cart",
            about: "You can get access to online stores (like Amazon), search for stuff to buy, see recommendations, compare prices, look up products, check on your orders, manage subscriptions",
        },
        {
            id: "map",
            name: "Map & Places",
            icon: "pin-map",
            about: "Look up information about places, including hours, photos, ratings, and reviews. Search and browse by category, including food, drink, shopping, and more.",
        },
    ];

    let results = apps;

    if (shuffle) {
        results = shuffleArray(apps);
    }

    if (excludedApps && excludedApps.length > 0) {
        results = results.filter((app) => excludedApps.indexOf(app.id) === -1);
    }

    if (limit > 0) {
        results = results.slice(0, limit);
    }

    return results;
};
