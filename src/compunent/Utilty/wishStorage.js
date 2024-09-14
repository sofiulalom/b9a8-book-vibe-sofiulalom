const getHandleWishLists = () => {
    const wishstorage = localStorage.getItem('wish-books');
    if (wishstorage) {
        return JSON.parse(wishstorage)
    }
    return [];


}

const saveWishListsStorge = (id) => {
    const wishstorage = getHandleWishLists();
    const exzist = wishstorage.find(wish => wish.id === id);
    if (!exzist) {
        wishstorage.push(id);
        localStorage.setItem('wish-books', JSON.stringify(wishstorage))
    }
    
}
export {getHandleWishLists,saveWishListsStorge}