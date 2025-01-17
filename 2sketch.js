let img;
let hen;
let input;
let input2;
let input3;
let input4;
let input5;
let input6;
let input7;
let typeTexts;
let aliendatacenter;
// let qr;

// load images
function preload()
{
  hen = loadImage("og-image.jpg");
  cnew = loadFont('courier-new.ttf');
  aliendatacenter = loadImage("aliendatacenter.png")
  //future qrcode generator implementation
  //      uncomment all to see how it goes
  // qr = loadImage("qr.png")
}

//setup
function setup() {

  // OBJKT number
  msg = createP('Insert the <b>OBJKT number</b>');
  msg.position(20, 1000);

  input4 = createInput('/OBJKT/9999');
  input4.position(20, 1050);
  input4.changed(function(e){
    let objkt = e.path[0].value
    console.log('fetching '+objkt)
    doFetch(objkt)
  })

//input upload file box =============================
  msg = createP('Upload a <b>squared</b> preview of your artwork </br>that is at least <b>800x800px</b>');
  msg.position(20, 1075);

  input = createFileInput(handleFile);
  input.position(20, 1130);
  let c = createCanvas(1300, 800);

//input Artowk Name
  msg = createP('Insert <b>Artwork Name</b> (to break line press enter key)');
  msg.position(20, 1180);

  input2 = createElement('textarea', 'Artwork Name');
  input2.position(20, 1230);

//input Artist Name
  msg = createP('Insert <b>Artist Name</b>');
  msg.position(20, 1290);

  input3 = createInput('Artist');
  input3.position(20, 1330);

  //input Description
  msg = createP('Insert the <b>Description</b> (to break like press enter key)');
  msg.position(20, 1380);

  input6 = createElement('textarea', 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. \nPhasellus massa arcu, convallis \neu tristique a, euismod a purus. \nIn hac habitasse platea dictumst. \nUt sed ...');
  input6.position(20, 1440);

//input Editions Number
  msg = createP('How many <b>editions?</b> eg. 10/10');
  msg.position(20, 1500);

  input5 = createInput('10/10');
  input5.position(20, 1550);

//input link

  msg = createP('Insert a <b>link</b> if you want');
  msg.position(20, 1600);

  input7 = createInput('collect this NFT now on hicetnunc.xyz/');
  input7.position(20, 1640);


//final text
  msg = createP('<b> *bip bop* real time rendering baby, now just save the image</b>');
  msg.position(20, 1710);

//credits - dear hax0r, if you contributed paste your alias here
  msg = createP('By @BabyCommando_ with love <3');
  msg.position(20, 1910);

  msg = createP('Please help me get jiu jitsu classes for my grandmother -> donate to tz1KseWbS7f7YQhGsGP8QmXDJyzrKV71xxyj (I accept arts :] )');
  msg.position(20, 1930);

//just a dot to make the page longer -
//or maybe a future easter egg hehe
  msg = createP('.');
  msg.position(20, 1970);

}

//========================================================
//drawing on the canvas (real time rendering from inputs)

function draw() {
  background(255);
  //default image
  image(aliendatacenter, 500, 0, 800, 800);
  //inserted image
  if (img) {
  image(img, 500, 0, 800, 800);
  }



  //future qrcode generator implementation
  //  image(qr, 70, 594, 130, 130);aliendatacenter

  //draw hen logo
  image(hen, 12, 40, 300, 170);

  // display text from Artwork Name input
  textSize(40);
  text(input2.value(), 60, 270);
  textStyle(BOLD);

  //display text from Artist Name input
  textSize(22);
  text(input3.value(), 60, 220);
  textStyle(BOLD);

  //OBJKT counter Input
  textSize(30);
  text(input4.value(), 60, 700);
  textStyle(BOLD);

  //EDITIONS Counter Input
  textSize(30);
  text(input5.value(), 60, 667);
  textStyle(BOLD);

  //DESCRIPTION Counter Input
  textSize(20);
  text(input6.value(), 60, 390);
  textStyle(BOLD);

  //DESCRIPTION Counter Input
  textSize(14);
  text(input7.value(), 60, 723);
  textStyle(BOLD);



}

//put uploaded image on canvas
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
    let c = get();
    image(c, width / 2, 0);
  } else {
    img = null;
  }


}
