import {encoded, translations} from './data.js'

const NOTDECODEDID = ['groupId', 'service', 'formatSize', 'ca']

console.log("Let's rock")
console.log(encoded, translations)

const decodedID = (encoded, translations) => {

    const decoded = encoded.map( item => {
        const decodedItem = {};
        for (let [key, value] of Object.entries(item)){
            if (NOTDECODEDID.indexOf(key) != -1){
                decodedItem[key] = item[key]
            } else {
                decodedItem[key] = value !== null ? translations[value]  : null;
            }
        }

        return decodedItem;
    } )


    const uniqueID = new Set();

    for ( let item of encoded){
        for (let key in item){
            if  (key.endsWith('Id')) uniqueID.add(key);
        } 
    }

    return {decoded, uniqueID}
}


 console.log(decodedID(encoded, translations));
