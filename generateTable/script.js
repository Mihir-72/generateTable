function res() {
  const z = document.getElementById("data").value;

  let krupesh = "";

  for (let i = 1; i <= 10; i++) {
    let r = i * Number(z);
    // console.log(`${z} * ${i} = ${r}`);
    // krupesh += z + "*" + i + "=" + r + "<br>";
    krupesh += `${z} * ${i} = ${r} <br>`;
  }
  // document.getElementById("output").innerText = `${z} * ${i} = ${r}`;
  document.getElementById("output").innerHTML = krupesh;
}