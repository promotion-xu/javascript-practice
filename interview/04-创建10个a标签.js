let doms = document.querySelectorAll("span");

for (var i = 0; i < doms.length; i++) {
  doms[i].onClick = () => {
    alert(i);
  };
}
