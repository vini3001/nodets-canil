type menuOptions = '' | 'all' |'dog' | 'cat' | 'fish'
export const createMenu = (activeMenu: menuOptions) =>{
    let returnObjects = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    }
    if (activeMenu != ''){
        returnObjects[activeMenu] = true
    }
    return returnObjects;
}