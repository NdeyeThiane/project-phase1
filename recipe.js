
let ul = document.getElementById("ingredients");

let li = document.createElement("li");
li.innerHTML = "Sugar";
ul.appendChild(li);


let list = Array.from(ul.getElementsByTagName("li"));



for(let i=0; i<list.length; i++){
    let text = list[i].innerHTML;
    list[i].innerHTML="";
    let label = document.createElement("label");
    label.htmlFor = "check";
    let input = document.createElement("input");
    input.id = "check";
    input.type="checkbox";
    input.name="name";
    label.innerHTML =text;
    list[i].appendChild(input);
    list[i].appendChild(label);
}



let images = ["https://www.seriouseats.com/thmb/rGHTBNbVJUqG21mHiLGjZk20bCQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__12__20201223-sorrel-hibiscus-fresh-getty-2-bcaf9662f17149aaa2d923e2c1dc49a2.jpg", "https://www.oooflavors.com/cdn/shop/products/Pineapple_Juice.jpg?v=1702934275&width=1445", "https://www.google.com/search?q=grind+ginger&sca_esv=868ce55768cd652f&udm=2&biw=916&bih=804&ei=ZwmkZquSFZqDp84Py_KwqAg&oq=grind+gin&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWdyaW5kIGdpbioCCAAyBRAAGIAESLhmULg7WOJccAN4AJABAJgBhQGgAc4HqgEDNy4zuAEByAEA-AEBmAILoAL3B6gCAMICDhAAGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICChAAGIAEGEMYigXCAgYQABgFGB7CAgYQABgIGB6YAwKSBwM3LjSgB_kt&sclient=gws-wiz-serp#vhid=-FAa6i_nv6Zz-M&vssid=mosaic", "https://ghk.h-cdn.co/assets/17/50/1600x1200/sd-aspect-1513289879-mint-plant.jpg", "https://shop.woodlandfoods.com/img/WF_Images/OH411-organic-bourbon-madagascar-vanilla-extract-main.jpg", "https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg", "https://assets.clevelandclinic.org/transform/17d90f40-78a5-4f47-b76f-3fe535f6acb3/sugar-Mound-Cubes-1420446362-770x533-1_jpg"  ]











function change() {
  for(let j=0; j<list.length; j++){
      list[j].innerHTML ="";
      let img = document.createElement("img");
      img.src = images[j];
      img.width='90';
      img.id="im";
      list[j].appendChild(img);
  }
  
}





ul.addEventListener('click', change, );
