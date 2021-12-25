class Player{

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.playerimage = loadImage("./assets/player.png")

    }

display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, 0, this.wid, this.hei);

        pop();

    }


}