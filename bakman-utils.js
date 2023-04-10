export function containsString(list, s) {
    if (list == null || list == undefined ) { return false; }
    if (s == null || s == undefined ) { return false; }
    for(let i=0; i < list.length; i++ ) 
    {
        if (list[i] == s) { return true; }
    }
    return false;
}

export function isListEmpty(list) {
    if (list == null || list == undefined || list.length == 0) { return true; }
    return false;
}

export async function diffList(list1, list2) {
    if(isListEmpty(list1) || isListEmpty(list2)) 
    return [];
    const items = [];
    let i=0;
    let x=0;

    for(i=0;i < list1.length; i++ ) 
    {
        for (x=0; x < list2.length; x++) {
            if(list1[i] == list2[x]) { 
                items.push(list2[x]); 
                break;
            }
        }
    }
    return items;
    




}