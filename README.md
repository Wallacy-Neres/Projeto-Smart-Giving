# Smart Giving 

## Descrição do Projeto

Projeto que visa estimular pessoas que possuem roupas que não utilizam mais a doar para os mais necessitados, seja por não terem condições de comprar, por serem vitimas de desastres naturais ou qualquer outro motivo.

O sistema além de ligar as pessoas que desejam doar à ong, também gera para a pessoa um id que será validado no local de doação gerando um  cupom de desconto, desta maneira todos os envolvidos serão beneficiados, a começar pelo doador que recebe o desconto para usar em qualquer um de nossos parceiros, a pessoa que receberá a doação e o parceiro que elevará sua receita, já que o doador possui um prazo para usar o cupom.

## Ferramentas Tecnológicas
Angular, Spring, MySql, Bootstrap, HTML, CSS, NPM.

## Pré Requisitos
Node JS, MySQL, Eclipse, Angular CLI.

* Copiar o Repósitorio
`git clone https://github.com/Pedro-Stradiotti-Neto/ProjetoIntegrador.git`

## Execução do Front-end

* Instalar dependências
`npm install`

Após a instalação de dependências o frontend do projeto já estará pronto para ser executado através do comando `ng serve -o` para abrir no localhost:4200 da maquina que está com o projeto, mas caso queira executar no localhost para que outras maquinas da rede tenha acesso, basta digitar `ng serve --host` e o ip da maquina.
Exemplo: `ng serve -- host 192.168.18.10`.

## Execução do back-end
Execute o MySql e deixe-o executando em segundo plano, pois o spring irá criar um banco automaticamente e se o MySql não estiver em execução o back-end não irá funcionar.

Abra o eclipse e em seguida clique em file, após isso clique em import selecione a pasta maven e a opção Existing Maven Projects clique em next e em seguida em Browser procure pela pasta backend do projeto e selecione até que a estrura .mvn, .settings, src, target esteja na tela e então clique em selecionar pasta.
Ao ter a pasta selecionada não esqueça de marca a opção pom.xml e finish, o eclipse irá carregar as dependências do projeto.

Para executar o Spring selecione o pacote generation.smartGiving e em seguida clique com o botão direito em SmartGivingApplication.java, selecione Run As e em seguida Java Aplication.

O backend será executado na porta 8080.


















