function romanToInt() {
  var R_num = document.getElementById("R_num").value;
  var value = (r) => {
    if (r === "I") return 1;
    if (r === "V") return 5;
    if (r === "X") return 10;
    if (r === "L") return 50;
    if (r === "C") return 100;
    if (r === "D") return 500;
    if (r === "M") return 1000;
    return -1;
  };
  let integer = 0;
  for (let i = 0; i < R_num.length; i++) {
    if (value(R_num[i]) >= value(R_num[i + 1])) {
      integer += value(R_num[i]);
    } else if (value(R_num[i]) < value(R_num[i + 1])) {
      integer -= value(R_num[i]);
    }
  }

  document.getElementById("Int_number").value = integer;
}
