var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://image.shutterstock.com/image-vector/cute-cartoon-boy-shows-victory-260nw-1895166835.jpg" , "download.jpg"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update() {

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if (i > array_length) {
    i = 0;

  }
}
