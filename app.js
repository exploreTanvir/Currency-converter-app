function first() {
  var inputOne = document.getElementById("enteredAmmount").value;
  var outputOne = document.getElementById("exchangedAmmount");
  var exchenger = document.getElementById("exchenger");

  if (document.getElementById("convert1").value == "BDT") {
    if (document.getElementById("convert2").value == "BDT1") {
      outputOne.value = inputOne * 1;
    } else if (document.getElementById("convert2").value == "USD1") {
      outputOne.value = inputOne * 0.0098;
    } else if (document.getElementById("convert2").value == "PKR1") {
      outputOne.value = inputOne * 2.18;
    } else if (document.getElementById("convert2").value == "INR1") {
      outputOne.value = inputOne * 0.79;
    }
  } else if (document.getElementById("convert1").value == "USD") {
    if (document.getElementById("convert2").value == "USD1") {
      outputOne.value = inputOne * 1;
    } else if (document.getElementById("convert2").value == "BDT1") {
      outputOne.value = inputOne * 102.52;
    } else if (document.getElementById("convert2").value == "PKR1") {
      outputOne.value = inputOne * 223.7;
    } else if (document.getElementById("convert2").value == "INR1") {
      outputOne.value = inputOne * 81.42;
    }
  } else if (document.getElementById("convert1").value == "PKR") {
    if (document.getElementById("convert2").value == "PKR1") {
      outputOne.value = inputOne * 1;
    } else if (document.getElementById("convert2").value == "BDT1") {
      outputOne.value = inputOne * 0.46;
    } else if (document.getElementById("convert2").value == "USD1") {
      outputOne.value = inputOne * 0.0045;
    } else if (document.getElementById("convert2").value == "INR1") {
      outputOne.value = inputOne * 0.36;
    }
  } else if (document.getElementById("convert1").value == "INR") {
    if (document.getElementById("convert2").value == "INR1") {
      outputOne.value = inputOne * 1;
    } else if (document.getElementById("convert2").value == "BDT1") {
      outputOne.value = inputOne * 1.26;
    } else if (document.getElementById("convert2").value == "USD1") {
      outputOne.value = inputOne * 0.012;
    } else if (document.getElementById("convert2").value == "PKR1") {
      outputOne.value = inputOne * 2.75;
    }
  }
}
if (document.getElementById("converter1").value == "BDT") {
  exchenger.src = "download.png";
} else if (document.getElementById("converter1").value == "USD") {
  exchenger.src = "./img/american-flag-2043285__340.png";
} else if (document.getElementById("converter1").value == "PAK") {
  exchenger.src = "./img/pakistan-162383__340.jpg";
} else if (document.getElementById("converter1").value == "INR") {
  exchenger.src = "./img/istockphoto-460844989-170667a.jpg";
}
