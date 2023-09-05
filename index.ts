function myfun(): void {
    var x = document.getElementById("pass") as HTMLInputElement;
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}