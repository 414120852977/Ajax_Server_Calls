function showTime() {
    const date = new Date;
    return date.getHours() + "hrs:" + date.getMinutes() + "Mins:"
    + date.getSeconds() + "seconds";
}
    function showSessionExpire() {
        console.log("Activity-B: Your session expired at "+showTime());

    }
    console.log("Activity-A: Triggering Activity-B at"+showTime());
    setTimeout(showSessionExpire, 5000);
    console.log("Activity-A: Triggered Activity-B at "+showTime()+"will execute after 5 seconds");
    console.log(showTime());