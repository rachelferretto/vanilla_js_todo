window.onload = function() {
  var state = [
    {
      done: false,
      content: "go to the supermarket"
    },
    {
      done: true,
      content: "feed the cat"
    },
    {
      done: false,
      content: "learn more javascript"
    },
  ]
  var root = document.getElementById('root')

  function createToDoItem(item) {
    var listItem = document.createElement('li')
    listItem.textContent = item.content
    return listItem
  }

  function render(list, parent) {
    return list.map(function(item) { 
      var toDo = createToDoItem(item)
      parent.appendChild(toDo)
      return toDo
    })
  }

  render(state, root)

}