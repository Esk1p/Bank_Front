var box = document.getElementsByClassName("top_main_button");
for (var i = 0; i < box.length; i++)

    box[i].onclick = function() {

    if (this.style.background == "") this.style.background = "rgba(161, 203, 58, 0.3)";

    else this.style.background = ""
    


    if (this.style.color == "") this.style.color = "#128109";

    else this.style.color = ""
};

var box = document.getElementsByClassName("card_button");
for (var i = 0; i < box.length; i++)

    box[i].onclick = function () {


    if (this.style.background == "") this.style.background = "rgba(18, 129, 9, 1)";

    else this.style.background = ""
};

var box = document.getElementsByClassName("down_main_button");
for (var i = 0; i < box.length; i++)

    box[i].onclick = function () {


    if (this.style.color == "") this.style.color = "#128109";

    else this.style.color = ""

    if (this.style.background == "") this.style.background = "rgba(161, 203, 58, 0.3)";

    else this.style.background = ""

};

var box = document.getElementsByClassName("period_for_js");
for (var i = 0; i < box.length; i++)

    box[i].onclick = function () {


    if (this.style.color == "") this.style.color = "#128109";

    else this.style.color = ""

    if (this.style.height == "") this.style.height = "60px";

    else this.style.height = ""

};
