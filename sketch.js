var screen = 0;
        var y = -20;
        var x = 200;
        var speed = 2;
        var score = 0;
        var currentX = 290;
        var mySound;

        function setup() {
            createCanvas(600, 400);
            noStroke();
        }

        function draw() {
            if (screen == 0) {
                startScreen()
            } else if (screen == 1) {
                gameOn()
            } else if (screen == 2) {
                endScreen()
            }
        }

        function startScreen() {
            background(255, 40, 0);
            textAlign(CENTER);
            text('click to start', width / 2, height / 2 + 20);
           
          rect(0,0,600,60)
          fill(255,255,0)
            reset();
        }
      
        function preload() {
             mySound = loadSound("su.mp3");
        }

        function gameOn() {
            background(255, 40, 0);
            fill(255,255,0) 
            rect(300,0,600,120)
            fill(55,25,0)
          
            text("score = " + score, 30, 20)
            fill(255, 225, 0);
            rect(x, y, 10,60)
            rectMode(CENTER);
            arc(currentX, height - 40, 80, 80, -0.25, 3.14 + 0.25);
            y += speed;
            if (y > height) {
                screen = 2
            }
          //Logical AND: &&
            if (y > height - 20 && x > currentX - 40 && x < currentX + 40) {
           
                mySound.play();
                y = -20
                speed += 0.5
                score += 1
            }
            if (y == -20) {
                pickRandom();
            }
        }

        function pickRandom() {
            x = random(20, width - 20)
        }

        function endScreen() {
            background(255, 40, 0);
            text("SCORE = " + score, width / 2, height / 2 + 20)
            text('click to play again', width / 2, height / 2 + 40);
        }

        function mousePressed() {
            if (screen == 0) {
                screen = 1
            } else if (screen == 2) {
                screen = 0
            }
        }

        function reset() {
            score = 0;
            speed = 2;
            y = -20;
        }
     
        function keyPressed() {
            if (key === 'ArrowLeft') {
                currentX -=30;
            }
            if (key === 'ArrowRight') {
                currentX += 30;
            }
        }



