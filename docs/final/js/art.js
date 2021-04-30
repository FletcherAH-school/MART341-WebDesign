function setup() {

    createCanvas(800, 800);

}

function draw() {
    background(255, 255, 255);
    outside(10);
    inside(10);
    circles();
    greycircsA();
    greycircsB();
    greycircsC();
    greycircsD();

}

function outside(thickness) {
    fill(0);
    // top
    rect(100, 0, 600, thickness);
    // bottom
    rect(100, height - thickness, 600, thickness);
    // left
    rect(0, 100, thickness, 600);
    // right 
    rect(width - thickness, 100, thickness, 600);
}

function inside(thickness) {
    fill(0);
    // top
    rect(550, 50, 200, thickness);
    rect(50, 50, 200, thickness);
    // bottom
    rect(50, 740, 200, thickness);
    rect(550, 740, 200, thickness);
    // left
    rect(50, 50, thickness, 200);
    rect(50, 550, thickness, 200);
    // right 
    rect(740, 50, thickness, 200);
    rect(740, 550, thickness, 200);
}

function circles() {
    //black 1
    fill(0);
    circle(400, 400, 360);
    //red
    fill(255, 0, 0);
    circle(400, 400, 320);
    //orange
    fill(255, 127, 0);
    circle(400, 400, 280);
    //yellow
    fill(255, 255, 0);
    circle(400, 400, 240);
    //green
    fill(0, 255, 0);
    circle(400, 400, 200);
    //blue
    fill(0, 0, 255);
    circle(400, 400, 160);
    //indigo
    fill(75, 0, 130);
    circle(400, 400, 120);
    //violet
    fill(148, 0, 211);
    circle(400, 400, 80);
    //black 2
    fill(0);
    circle(400, 400, 40)
}

function greycircsA() {
    //black 1
    fill(0);
    circle(185, 185, 200);
    //grey 1
    fill(47, 79, 79);
    circle(185, 185, 180);
    //grey 2
    fill(112, 128, 144);
    circle(185, 185, 160);
    //grey 3
    fill(119, 136, 153);
    circle(185, 185, 140);
    //grey 4
    fill(105, 105, 105);
    circle(185, 185, 120);
    //grey 5
    fill(128, 128, 128);
    circle(185, 185, 100);
    //grey 6
    fill(169, 169, 169);
    circle(185, 185, 80);
    //grey 7
    fill(192, 192, 192);
    circle(185, 185, 60);
    //grey 8
    fill(211, 211, 211);
    circle(185, 185, 40)
    //grey 9
    fill(220, 220, 220);
    circle(185, 185, 20);
}

function greycircsB() {
    //black 1
    fill(0);
    circle(615, 615, 200);
    //grey 1
    fill(47, 79, 79);
    circle(615, 615, 180);
    //grey 2
    fill(112, 128, 144);
    circle(615, 615, 160);
    //grey 3
    fill(119, 136, 153);
    circle(615, 615, 140);
    //grey 4
    fill(105, 105, 105);
    circle(615, 615, 120);
    //grey 5
    fill(128, 128, 128);
    circle(615, 615, 100);
    //grey 6
    fill(169, 169, 169);
    circle(615, 615, 80);
    //grey 7
    fill(192, 192, 192);
    circle(615, 615, 60);
    //grey 8
    fill(211, 211, 211);
    circle(615, 615, 40)
    //grey 9
    fill(220, 220, 220);
    circle(615, 615, 20);
}

function greycircsC() {
    //black 1
    fill(220, 220, 220);
    circle(185, 615, 200);
    //grey 1
    fill(211, 211, 211);
    circle(185, 615, 180);
    //grey 2
    fill(192, 192, 192);
    circle(185, 615, 160);
    //grey 3
    fill(169, 169, 169);
    circle(185, 615, 140);
    //grey 4
    fill(128, 128, 128);
    circle(185, 615, 120);
    //grey 5
    fill(105, 105, 105);
    circle(185, 615, 100);
    //grey 6
    fill(119, 136, 153);
    circle(185, 615, 80);
    //grey 7
    fill(112, 128, 144);
    circle(185, 615, 60);
    //grey 8
    fill(47, 79, 79);
    circle(185, 615, 40)
    //grey 9
    fill(0);
    circle(185, 615, 20);
}

function greycircsD() {
    //black 1
    fill(220, 220, 220);
    circle(615, 185, 200);
    //grey 1
    fill(211, 211, 211);
    circle(615, 185, 180);
    //grey 2
    fill(192, 192, 192);
    circle(615, 185, 160);
    //grey 3
    fill(169, 169, 169);
    circle(615, 185, 140);
    //grey 4
    fill(128, 128, 128);
    circle(615, 185, 120);
    //grey 5
    fill(105, 105, 105);
    circle(615, 185, 100);
    //grey 6
    fill(119, 136, 153);
    circle(615, 185, 80);
    //grey 7
    fill(112, 128, 144);
    circle(615, 185, 60);
    //grey 8
    fill(47, 79, 79);
    circle(615, 185, 40)
    //grey 9
    fill(0);
    circle(615, 185, 20);
}