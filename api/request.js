import vehicles from './vehicles.json';

/** True = 85%, False = 15% */
const rejectByChance = () => {
    return Math.random() <= 0.15;
};

/** Emulate request */
export const getVehicles = () =>
    new Promise((resolve, reject) => {
        if (rejectByChance()) {
            return reject({
                error: 'Server error',
            });
        }
        const delay = parseInt(Math.random() * 1000);
        setTimeout(() => {
            resolve(vehicles);
        }, delay);
    });
