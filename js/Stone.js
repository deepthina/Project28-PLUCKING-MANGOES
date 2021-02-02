class Stone {
    constructor(x, y, r) {

        var options = {
            restitution: 0,
            friction: 0.5,
            density: 0.5
        }

        this.body = Bodies.circle(x, y, r / 2, options);
        this.r = r;
        this.image = loadImage("images/stone.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
    }
}