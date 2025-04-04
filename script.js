function simulador() 
{
beneficio = prompt ("Digite o valor do seu benefício")
margem = beneficio * (35/100)
desconto = prompt ("Digite o valor da soma dos seus descontos atuais")
margematual = margem - desconto
limite = margematual / 0.02350
 margematualformatada = margematual.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
})
  limiteformatado = limite.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
})
  
alert ("O valor da sua margem é: " + margematualformatada)
  alert ("Você pode contratar até: " + limiteformatado)
}