//1) Посчитать и вывести текста с p С сайта примера

let tagP = document.getElementsByTagName("p");
let quantityTagP = tagP.length;

function countQuantityTagP() {
  for (let i = 0; i < quantityTagP; i++) {
    console.log(`${i} : ${tagP[i].textContent}`);
  }
}

//2) Обвести каждый красной рамкой

function colorTagP() {
  for (let i = 0; i < quantityTagP; i++) {
    tagP[i].style.border = "4em solid red";
  }
}

//  3) все div сместить вправо на 1 пиксель

let tagDiv = document.getElementsByTagName("div");
let quantityTagDiv = tagDiv.length;

function MoveDivRightSide() {
  for (let i = 0; i < quantityTagDiv; i++) {
    tagDiv[i].style.marginLeft = "1px";
  }
}

//4) Сделать нумерацию дивов на странице поверх их контента
function numerateDivBlocks() {
  for (let i = 0; i < quantityTagDiv; i++) {
    tagDiv[i].innerHTML = `${i}<br>${tagDiv[i].innerHTML}`;
  }
}

//5) Все буквы -А- или -а- заменить на @ во всем сайте
function repceCharA() {
  let textContent = document.body.innerHTML;
  let replacedText = "";
  let insideTag = false;

  for (let i = 0; i < textContent.length; i++) {
    let char = textContent[i];

    if (char === "<") {
      insideTag = true;
    }

    if (!insideTag && (char === "A" || char === "a")) {
      replacedText += "@";
    } else {
      replacedText += char;
    }

    if (char === ">") {
      insideTag = false;
    }
  }

  document.body.innerHTML = replacedText;
}
repceCharA()