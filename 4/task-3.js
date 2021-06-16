let roadMines = [true, true, true, true, true, true, true, true, true, true];
let lives = 2;

for (let position in roadMines) {
    console.log(`танк переместился на ${parseInt(position) + 1}`);

    if (roadMines[position]) {
        lives--;
        if (lives == 1)
            console.log("танк повреждён");
        else if (lives == 0) {
            console.log("танк уничтожен");
            break;
        }
    }
}