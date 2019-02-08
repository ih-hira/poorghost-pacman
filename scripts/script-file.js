(function () {
    var pacmanElem = document.getElementById("pacmanImg")
    var ghostElem = document.getElementsByClassName("ghostImg");
    var pacmanLeftPosition = 0;

    //list of action
    var towardsGhostFromLeft = 1;
    var backwardGhostToLeft = 0;
    var towardsGhostFromRight = 0;
    var backwardGhostToRight = 0;

    //image links
    var ghostBlueRight = "assets/ghost-blue-r.png";
    var ghostBlueLeft = "assets/ghost-blue-l.png";
    var ghostOrangeRight = "assets/ghost-orange-r.png";
    var ghostOrangeLeft = "assets/ghost-orange-l.png";
    var ghostRedLeft = "assets/ghost-red-l.png";
    var ghostRedRight = "assets/ghost-red-r.png";
    var pacmanLeft = "assets/pacman-l.png";
    var pacmanRight = "assets/pacman-r.png";

    setInterval(function () {

        //move towards to ghost (leftside)
        if (towardsGhostFromLeft) {
            pacmanLeftPosition++;
            pacmanElem.style.left = pacmanLeftPosition + "px";

            if (pacmanLeftPosition == 170) {
                towardsGhostFromLeft = 0;
                backwardGhostToLeft = 1;
                pacmanElem.src = pacmanLeft;
                ghostElem[0].src = ghostBlueLeft;
                ghostElem[1].src = ghostOrangeLeft;
                ghostElem[2].src = ghostRedLeft;
            }
        }
        //move backward from ghost (leftside)
        else if (backwardGhostToLeft) {
            pacmanLeftPosition--;
            pacmanElem.style.left = pacmanLeftPosition + "px";
            if (pacmanLeftPosition == 0) {
                towardsGhostFromRight = 1;
                backwardGhostToLeft = 0;
                pacmanLeftPosition = 550;
                pacmanElem.style.left = pacmanLeftPosition + "px";
            }
        }
        //move towards to ghost (rightside)
        else if (towardsGhostFromRight) {
            pacmanLeftPosition--;
            pacmanElem.style.left = pacmanLeftPosition + "px";
            if (pacmanLeftPosition == 410) {
                towardsGhostFromRight = 0;
                backwardGhostToRight = 1;
                pacmanElem.src = pacmanRight;
                ghostElem[0].src = ghostBlueRight;
                ghostElem[1].src = ghostOrangeRight;
                ghostElem[2].src = ghostRedRight;
            }
        }
        //move backward from ghost (rightside)
        else if (backwardGhostToRight) {
            pacmanLeftPosition++;
            pacmanElem.style.left = pacmanLeftPosition + "px";
            if (pacmanLeftPosition == 550) {
                towardsGhostFromLeft = 1;
                backwardGhostToRight = 0;
                pacmanLeftPosition = -1;
                pacmanElem.style.left = pacmanLeftPosition + "px";
            }
        }

    }, 10);
})();