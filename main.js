/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */
alert("Escriba dos numeros para saber cual es mayor");
var primerNum = prompt("Escribe el primer numero");
var segundoNum = prompt("Ahora escribe el segundo numero");

if (primerNum > segundoNum)
{
  document.write(primerNum + " es mayor");
}
else if (primerNum < segundoNum)
{
  document.write(segundoNum + " es mayor");
}
