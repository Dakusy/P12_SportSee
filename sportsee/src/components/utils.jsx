// utils.js
export const useDay = [
    "L",
    "M",
    "M",
    "J",
    "V",
    "S",
    "D",
];

//format Session
export const formatSessions = (sessions) => {
    return sessions.map((session) => ({
        day: useDay[+session.day - 1],
        sessionLength: session.sessionLength,
    }));
};

//formation Perf
export const formatPerformance = (rawData) => {
    return rawData.data.data.map((skill) => ({
        value: skill.value,
        kind: rawData.data.kind[skill.kind],
    }));
};