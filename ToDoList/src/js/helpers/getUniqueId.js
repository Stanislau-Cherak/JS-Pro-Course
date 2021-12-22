export function getUniqueId () {
    const idLength=32;
    let id=(Math.floor((Math.random()*25)+10)).toString(36)+'-';
    id+=(new Date()).getTime().toString(36)+'-';
    do {
        id+=(Math.floor((Math.random()*50))).toString(36);        
    } while (id.length<idLength);
    return id;
}
