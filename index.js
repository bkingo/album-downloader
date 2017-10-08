var notify = document.querySelector('.notify');
var albums = document.querySelectorAll('.album');
var itemsTotal = document.querySelector('.items-total');
var saveBtn = document.querySelector('.button');


var albumsSelected = [];
var i = 0;
while ( i < albums.length) {
  albums[i].onclick = function(e) {
    var albumTitle = this.querySelector('.title').textContent;

    if (this.classList.contains('selected') !== true) {
      this.classList.add('selected');
      albumsSelected.push(albumTitle);
    } else {
      this.classList.remove('selected');
      albumsSelected = albumsSelected.filter(function(item) {
        return item !== albumTitle;
      });
    }
    console.log(albumsSelected);
  };

  i++;
}

saveBtn.onclick = function() {

  itemsTotal.textContent = albumsSelected.length + ' itmes saved';
  notify.classList.add('active');
  setTimeout(function() {
    notify.classList.remove('active');
  }, 2000);

  console.log('saved');
};







// click album


// show user he selected album so we add class selected to the album div


// create an array and then add the album's title that we selected to that array



// find out the total of the albums selected



// save button is clicked then when it's clicked show notification with album with saved items total
