var speed;

function setup() {
    createCanvas(1200, 800);
}

function draw() {
    background(0);
    speed = frameCount;
    translate(width / 2, height / 2);
    scale(.65, .65);               // Scales the ojects to fit the canvas

    push();
    rotate(radians(speed / 3));             // Step 5 = Sun spins around its axis at speed / 3 
    celestialObj(color(255, 150, 0), 200); // SUN
    translate(30, 0);


        // Step 1 & Step 2 & Step 3: Earth
        push();   
        rotate(radians(speed));             // Step 3 - Make the earth spin around its axis at velocity "speed"
        translate(300, 300);                // Step 1 - Move it to orbit 300 pixels.
        rotate(radians(speed));             // Step 2 - Rotate the earth around the sun at velocity "speed"
        celestialObj(color(0, 0, 255), 80); // Step 1 - Create an earth of color blue and size 80.

            // Step 4: The moon
            push()
            moonAngle = map(speed, 0, 175, 0, 360) // Remaps from distance and degrees of the circle
            rotate(radians(-(moonAngle * 2)))      // Step 4 - Make the moon rotate at velocity -speed*2 so it spins the opposite way to the way the earth rotates
            translate(100, 100);                   // Step 4 - Add a moon to the earth at an orbit of 100 pixels
            celestialObj(color(255, 255, 255), 30);   // Step 4 - Add a moon of color white and size 30 
            
                // Step 6: Asteroid or space ship?! hidden in the dark side of the moon
                push();
                translate(1, 1);         // Distance from the moon
                fill(255, 0, 0);         // New fill colour
                rect(10, 10, 10, 10);    // Rectangle shaped
                pop();

            pop();

            // Step 6: 2nd moon
            push();
            // var moonTwo = celestialObj;
            rotate(radians(-(speed * 3)))       // Make the moon rotate at velocity -speed*2 so it spins the opposite way to the way the earth rotates
            translate(50, 50);                  // Orbiting around the eart from distance of 100px
            celestialObj(color(255, 255, 255), 15);    // Add a moon of color white and size 30 
            pop();
        pop();
    pop();


}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size / 2, 0);
}
