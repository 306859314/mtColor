function mtColor(id) {
  var colorArr = []
  colorArr.push("#FFB6C1")
  colorArr.push("#8B008B")
  colorArr.push("#1E90FF")
  colorArr.push("#FFFF00")
  colorArr.push("#8B0000")
  obj = document.getElementById(id)
  obj.onkeydown = function () {
    // obj.attributes.value.ownerElement.value
    str = obj.attributes.value.ownerElement.value
    mcharCode = str.charCodeAt(str.length - 1)
    this.attributes.value.ownerElement.style.color = colorArr[mcharCode % (colorArr.length - 1)]
  }
}