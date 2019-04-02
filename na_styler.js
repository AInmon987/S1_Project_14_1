"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Austin Inmon
   Date:   4.02.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//runs the function when the page is fully loaded. 
window.addEventListener("load", setStyles);

function setStyles() {
      //generates a num between zero and four.
      var styleNum = randInt(5);
      //creating a link element. 
      var fancySheet = document.createElement("link");
      //applying a rel to the stylesheet that is applied to the link. 
      fancySheet.setAttribute("rel", "stylesheet");
      //Appyling an id to the fancySheet that is applied to the link. 
      fancySheet.setAttribute("id", "fancySheet");

      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(fancySheet);

      var figBox = document.createElement("figure");

      figBox.setAttribute("id", "styleThumbs");

      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");

            sheetImg.setAttribute("src", "na_small_" + [i] + ".png")

            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css")

            sheetImg.addEventListener("click", function (e) {
                  fancySheet.setAttribute("href", e.target.alt)
            });

            figBox.appendChild(sheetImg);

            var thumbStyles = document.createElement("style");

            document.head.appendChild(thumbStyles);

            thumbStyles.sheet.insertRule(
                  "figure#styleThumbs {\
                        position: absolute;\
                        left: 0px;\
                        bottom: 0px;\
                  }", 0);

            thumbStyles.sheet.insertRule(
                  "figure#styleThumbs img {\
                        outline: 1px solid black;\
                        cursor: pointer;\
                        opacity: 0.75;\
                  }", 1);

            thumbStyles.sheet.insertRule(
                  "figure#styleThumbs img:hover {\
                        outline: 1px solid red;\
                        opacity: 1.0;\
            }", 2);
      }


}

function randInt(size) {
      return Math.floor(size * Math.random());
}