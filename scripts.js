function esconder() {
    document.querySelectorAll(".divExercicio").forEach(function (elemento) {
        elemento.setAttribute("hidden", true)
    })
  }

  document.querySelector("#selExercicio1").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio1").removeAttribute("hidden")

    document.querySelector("#btn1").addEventListener("click", function () {
      let valor1 = Number(document.querySelector("#valor1").value)
      let valor2 = Number(document.querySelector("#valor2").value)

      document.querySelector("#resultado1").innerHTML = `O valor da média dos valores informados é de ${(valor1 + valor2)/2}`
    })    
  })
 
  document.querySelector("#selExercicio2").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio2").removeAttribute("hidden")

    valorX = Number(window.prompt("Digite o valor de X", ""))
    valorY = Number(window.prompt("Digite o valor de Y", ""))

    document.querySelector("#btn2").addEventListener("click", function () {
      let mensagem = `X elevado a Y é igual a ${Math.pow(valorX, valorY)}` 
      console.log(mensagem)
      window.prompt(mensagem)
    })    
  })
 
  document.querySelector("#selExercicio3").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio3").removeAttribute("hidden")

    document.querySelector("#btn3").addEventListener("click", function () {

      let elemento = []
      elemento[0] = Number(document.querySelector("#elemento1").value)
      elemento[1] = Number(document.querySelector("#elemento2").value)
      elemento[2] = Number(document.querySelector("#elemento3").value)

      document.querySelector("#resultado3").innerHTML = `O menor valor contido no array [${elemento}] é ${Math.min(...elemento)}`
    })
  })
 
  document.querySelector("#selExercicio4").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio4").removeAttribute("hidden")

    document.querySelector("#btn4").addEventListener("click", function () {
      
    let dados={
      marca:"HP",
      modelo:"V15",
      config:{
      memoria: 8,
      processador: "i7"
      },
      }

      let { marca, modelo, config: {memoria, processador}} = dados
      
      console.log(modelo, typeof(modelo))
      console.log(processador, typeof(processador))
      
      document.querySelector("#resultado4").innerHTML = `As variáveis "Modelo" e "Processador" foram criadas, sendo chamadas e exibindo seu tipo neste parágrafo e no console. \nModelo: ${modelo} com tipo ${typeof(modelo)}, Processador: ${processador} com tipo ${typeof(processador)}`
    })    
  })
 
  document.querySelector("#selExercicio5").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio5").removeAttribute("hidden")

    let dados={
      marca:"HP",
      modelo:"V15",
      config:{
      memoria: 8,
      processador: "i7"
      },
      }

      let { marca, modelo, config: {memoria, processador}} = dados
    
    document.querySelector("#btn5").addEventListener("click", function () {
      document.querySelector("#resultado5").innerHTML = `O equipamento é da marca: ${marca} e o processador é um: ${processador}.`

    })    
  })
 
  document.querySelector("#selExercicio6").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio6").removeAttribute("hidden")

    let dados={
      marca:"HP",
      modelo:"V15",
      config:{
      memoria: 8,
      processador: "i7"
      },
      }

      let { marca, modelo, config: {memoria, processador}} = dados

    document.querySelector("#btn6").addEventListener("click", function () {
      
      dados.alerta = function exibir() {
        alert(`O equipamento é da marca: ${marca} e o processador é um ${processador}.`)
      }
      dados.alerta()
    })    
  })
 
  document.querySelector("#selExercicio7").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio7").removeAttribute("hidden")

    let dados={
      marca:"HP",
      modelo:"V15",
      config:{
      memoria: 8,
      processador: "i7"
      },
      }
    
    document.querySelector("#btn7").addEventListener("click", function () {
      
      let novoEquip = {...dados, valorVenda: 7600, qtdEstoque: 99}

      document.querySelector("#resultado7").innerHTML = "Ver a resposta no console em ferramentas de desenvolvedor."
      console.log(novoEquip)
    })    
  })
 
  document.querySelector("#selExercicio8").addEventListener("click", function () {
    esconder()
    document.querySelector("#exercicio8").removeAttribute("hidden")

    document.querySelector("#btn8").addEventListener("click", function () {
      // 8) Faça um código que:
    
      // a) Crie o array X contendo os valores 15 e 25 e o array Y com os valores 12,15,23,43.
      let X = [15, 25]
      let Y = [12, 15, 23, 43]

      // b) Exiba os valores de y acrescentando um “-“ entre entres. Use o join(“ ”)
      console.log(Y.join(" - "))
      
      // c) Crie o array Z contendo os valores do array X e Y.
      Z =[...X,...Y]
      console.log(Z)
      
      // d) Faça uma estrutura de repetição com que percorra todos os elementos do array Z. Essa
      // estrutura deve pegar cada elemento e multiplicar por 5 e depois exibir o resultado por meio
      // de uma lista usando o console.log(`${} `)
      novoZ = Z.map(a => a*5)
      console.log(`Os elementos do array [${Z}] multiplicados por 5 resultam em [${novoZ}]`)
    })    
  })
 
  
  