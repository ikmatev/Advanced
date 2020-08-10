function solve(...params) {
    let distanceInMeters = params[0] * params[1];
    let speed = (params[2] * 1000)/3600;
    let secondsForDistance = distanceInMeters / speed;
    let hours = Math.floor(secondsForDistance / 3600);
    let mins = Math.floor(secondsForDistance % 3600 / 60) + (Math.floor(distanceInMeters /500));
    let seconds = Math.ceil(secondsForDistance % 3600 % 60);
    console.log(`${hours.toString().padStart(2,0)}:${mins.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`);
}
solve(2564, 0.70, 5.5);