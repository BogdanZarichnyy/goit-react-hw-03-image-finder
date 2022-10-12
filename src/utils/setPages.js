export const setPages = (itemsResidual, totalHits, per_page) => {
    if (itemsResidual === 0) {
        return Math.floor(totalHits / per_page);
    } else if (totalHits <= per_page) {
        per_page = totalHits;
        return 1;
    } else {
        return Math.floor(totalHits / per_page) + 1;
    }
}