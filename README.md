
# Programação para Web Designers

Este repositório faz parte da disciplina Programação para Web Designers do Curso de Sistemas para Internet, e contém um projeto de site fictício chamado [AcessaWeb](https://gvtenberg.github.io/trabalho1webdesign/)


## Como usar

- [Crie um fork](https://github.com/gvtenberg/trabalho1webdesign/fork) deste repositório para o seu GitHub 
- Crie uma chave SSH na sua máquina com os seguintes comandos em um Terminal Linux:
```bash
  cd ~/.ssh
  ssh-keygen -o -t rsa -C "seu.email@exemplo.com"
```
- Confirme todas as perguntas com Enter, não precisa digitar nada. Em seguida use o seguinte comando para mostrar a chave pública gerada:
```bash
  cat id_rsa.pub
```
- Copie a chave mostrada no comando anterior e cole em uma nova chave SSH na página do GitHub, menu Settings e SSH and GPG keys.
- Selecione a pasta onde ficará o repositório clonado e abra o Terminal nesta pasta. Na página do seu repositório clonado, clique em Code, Local, SSH e copie o endereço que aparece. No terminal, digite o comando a seguir com o endereço SSH do seu repositório:
```bash
  git clone git@github.com:gvtenberg/trabalho1webdesign.git
```
- Substitua o ```git@github.com:gvtenberg/trabalho1webdesign.git``` pelo endereço copiado do seu repositório no GitHub. Note que após os ```:``` aparece o seu usuário no GitHub (no meu caso, ```gvtenberg```).
- Edite os arquivos da maneira que bem entender, [valide-os na W3C](https://validator.w3.org/#validate_by_input+with_options), e salve-os em seu repositório do GitHub com os seguintes comandos:
```bash
  git add .
  git commit -m "Comentário a respeito das modificações realizadas"
  git push
```
- Pronto! Serpositório no GitHub está atualizado!

- Acesse seu site em ```seuUsuario.github.io/trabalho1webdesign```, onde ```seuUsuario``` é o seu usuário no GitHub.


## Autor

- [@gvtenberg](https://www.github.com/gvtenberg)