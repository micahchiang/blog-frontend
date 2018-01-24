// export default class DomUtils {
//
//     attachListener(id, listener, callback) {
//         let el = document.getElementById(id);
//         el.addEventListener(listener, callback);
//     }
// }

export let attachListener = function(id, listener, callback) {
    let el = document.getElementById(id);
    el.addEventListener(listener, callback);
};
