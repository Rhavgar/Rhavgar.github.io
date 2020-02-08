class Agenda
  {
    constructor()
    {
      this.contato = [];
    }
    
    pfvrInfo()
    {
      nome = prompt("Informe o Nome!");
      sobrenome = prompt("Informe o Sobrenome!");
      nascimento = prompt("Informe o Nascimento!");
      tipo = prompt("Informe o Tipo do telefone!");
      ddd = prompt("Informe o DDD!");
      num = prompt("Informe o Numero!");
      
      adicionarContato(nome, sobrenome, nascimento, tipo, ddd, num);
    }
    
    adicionarContato(nome, sobrenome, nascimento, tipo, ddd, num)
    {
      this.contato.push(new Contato(new Pessoa(nome, sobrenome, nascimento), new Numero(tipo, ddd, num)));
    }
  }

class Contato
  {
    constructor(pessoa, numero)
    {
      this.pessoa = pessoa;
      this.numero = [].push(numero);
      this.end = [];
      this.email = [];
    }
       
    adicionarNumero(tipo, ddd, num)
    {
      this.numero.push(new Numero(tipo, ddd, num));
    }
    
    adicionarEndereco(tipo, log, num, cep, comp)
    {
      this.end.push(new Endereco(tipo, log, num, cep, comp));
    }
    
    adicionarEmail(tipo, email)
    {
      this.email.push(new Email(tipo, email));
    }
  }

class Pessoa
  {
    constructor(nome, sobrenome, nascimento)
    {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.nascimento = nascimento;
    }
  }

class Numero
  {
    constructor(tipo, ddd, num)
    {
      this.tipo = tipo;
      this.ddd = ddd;
      this.num = num;
    }
  }

class Endereco
  {
    constructor(tipo, log, num, cep, comp)
    {
      this.tipo = tipo;
      this.log = log;
      this.num = num;
      this.cep = cep;
      this.comp = comp;
    }
  }

class Email
  {
    constructor(tipo, email)
    {
      this.tipo = tipo;
      this.email = email;
    }
  }

var teste = new Agenda();
