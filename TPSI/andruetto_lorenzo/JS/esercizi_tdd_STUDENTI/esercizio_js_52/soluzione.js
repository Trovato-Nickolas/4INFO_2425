export const psw_gen = (len) => {
    //INSERISCI QUI IL TUO CODICE
    let charachters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array(len).fill(charachters[Math.floor(Math.random() * charachters.length)]);
}