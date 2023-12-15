let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Adjust the number of particles based on your preference
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0); // Set background color
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

class Particle {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(0.1, 0.1); // Fixed speed
        this.size = random(20, 40); // Increased size
        this.color = color(150); // Grey color
    }

    update() {
        this.position.add(this.velocity);

        // Bounce off the walls
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1;
        }

        // Attract to mouse
        let attraction = createVector(mouseX, mouseY).sub(this.position);
        attraction.mult(0.000005); // Adjust the attraction strength
        this.velocity.add(attraction);
    }

    display() {
        noStroke();
        fill(this.color);
        textSize(this.size);
        text("?", this.position.x, this.position.y);
    }
}

// Resize canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
