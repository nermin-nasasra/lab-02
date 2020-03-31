'use strict'
$(document).ready(function() {
    let animalsObj = [];
    let keywordall=[];
    function Img(img) {
      this.image_url = img.image_url;
      this.title = img.title;
      this.description = img.description;
      this.keyword=img.keyword;
      this.horns = img.horns;
    }
    $("select").change(function(){
    
    let selectValue = $("select")[0].value;
    let children = $('section');
    console.log(typeof(children));
    console.log(children[1]);
        for (let i = 0; i < 21; i++){
        console.log(children[i].children[1].alt);
        
        if (selectValue === children[i].children[1].alt){
            let parent = children[i];
            parent.style.display = 'block';
        }
        else if (selectValue === 'default'){
            console.log('hi');
            let parent = children[i];
            parent.style.display = 'block';
        }
        else{
            let parent = children[i];
            parent.style.display = 'none';
        }
    }

     });
      Img.prototype.render = function(){
      let $imgClone = $("#photo-template").clone();
      $imgClone.find("img").attr("src", this.image_url);
      $imgClone.find("img").attr("alt", this.keyword);
      $imgClone.find("h2").text(this.title);
      $imgClone.find("p").text(this.description);
      $imgClone.find("#p").text(this.horns);
      // $imgClone.removeAtter("id");
      // $imgClone.attr("class",this.keyword);
      $("main").append($imgClone);
    };

    Img.prototype.selected = function(){
     let selected=$('.imgs');
    if(!(keywordall.includes(this.keyword))){
    keywordall.push(this.keyword);
    selected.append(`<option>${this.keyword}</option>`);
}
    };

    let readJson = () => {
      $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
        data.forEach( imgItem => {
            console.log('hello')
          let img = new Img(imgItem);
          img.selected();
          img.render();
         
          animalsObj.push(img);
        });
        console.log(animalsObj);
      });
    };
    readJson();
  });