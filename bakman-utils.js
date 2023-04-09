export function containsString(list, s) {
    if (list == null || list == undefined ) { return false; }
    if (s == null || s == undefined ) { return false; }
    for(let i=0; i < list.length; i++ ) 
    {
        if (list[i] == s) { return true; }
    }
    return false;
}