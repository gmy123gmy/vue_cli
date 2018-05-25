const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch() {
            if (JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))) {
                return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
            } else {
                var theItems = new Array();
                return theItems
            }

        },
        save(items) {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
}