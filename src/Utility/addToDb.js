const getStoredReadList = () => {
    // read list 
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    console.log(id)
    const storedList = getStoredReadList();
    console.log(storedList)
    if(storedList.includes(id)){
        // allready exists. do not add it
        console.log(id, 'already exixts in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export {addToStoredReadList, getStoredReadList}