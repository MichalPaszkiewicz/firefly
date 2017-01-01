export function getRandomColor() {
    var letters = '56789ABC';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}