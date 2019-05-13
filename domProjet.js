var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById('filter');

// Form submit
form.addEventListener("submit", addItem);

// Supprimer un item
itemList.addEventListener('click', removeItem);

// Filtrer un élement
filter.addEventListener('keyup', filterItems);

// fonction

function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Créer un nouveau li
  var li = document.createElement("li");
  // On ajoute la bonne classe au li
  li.className = "list-group-item";
  // On ajoute le texte de l'input
  li.appendChild(document.createTextNode(newItem));
  // On ajoute le bouton pour supprimer
  var deleteBtn = document.createElement("button");
  // On ajoute les classes
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Ajoute du texte
  deleteBtn.appendChild(document.createTextNode("X"));

  // Ajout du bouton
  li.appendChild(deleteBtn);

  // On ajoute à l'ul
  itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Etes vous sûr(e)s ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li); // car itemList est le parent element qui est un ul
        }
    }
}

function filterItems(e){
    // Mettre tout en miniscule
    var text = e.target.value.toLowerCase();
    // Sélectionner toute la liste
    var items = itemList.getElementsByTagName('li');
    // Convertir en une array
    Array.from(items).forEach(function(x){
        var itemNom = x.firstChild.textContent;
        if(itemNom.toLowerCase().indexOf(text) != -1){
            x.style.display = 'block';
        }else{
            x.style.display= 'none';
        }
    })
}
