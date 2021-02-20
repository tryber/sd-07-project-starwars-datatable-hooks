import { createContext } from 'react';

const MyContext = createContext();

export default MyContext;

/* Olá, tudo bem? :smile: Ótima tarde :heart:
Passando aqui pra informar que existe um erro acontecendo na avaliação no projeto star wars (bloco 18). Devido à algumas mudanças que ocorreram no avaliador, isso afetou as pessoas que estavam em recuperação. Apesar dos testes estarem passando local e remotamente, a nota não está sendo contabilizada e permanece em 0%.
A solução é super simples:
Abrir o arquivo .github/workflows/main.yml
Alterar master para T7-tests na linha 23
O resto vocês já sabem: git add, git commit, git push...
A gente pede desculpa pelo problema. Me avisa se deu certo ou não :smile: */
