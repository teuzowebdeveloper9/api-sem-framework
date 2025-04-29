# titulo

### manager of podcasts

---
# descrição

nessa aplicação irei criar uma maneira de gerenciar diferentes tipos de poscasts pelos temas convidados e etc ...
pense em um rede canais ou netflix de podcasts 

---
# feautures 

listar os episodios de podcats por sessões como humor, mentalidade,sáude e etc...
filtrar episodios por nomes de podcasts

---
# como vai retornar ?

nome do podcast
nome do episodio
imagem de capa
link 
categoria

GET : listar a lista de podcasts

response :

```js
{
    [
      { 
     podcastname: "inteligencia limitada ",
     videoid: "Aon4liqDw",
     episode : "DEBATE: PAULO KOGOS X MARCELO BRIGADEIRO (+NANDO MOURA) - Inteligência Ltda. Podcast #1010 ",
     cover: "src="https://i.ytimg.com/vi/J-Aon4liqDw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFabPzJuIPVCt-oM4ZglbjtiomuQ",
     link: "https://www.youtube.com/live/J-Aon4liqDw?si=20wZhbX_UESNgsQx"
     categorie: ["humor" , "mentalidade "] 
      }
   
     ],
      { podcastname:"flow podcast",
        videoid: "1woQLtKzbPo"
        episode:"MINHA NAMORADA QUASE BEIJOU MEU IRMÃO GÊMEO [Willou e Watson] - Flow #437"
        cover:"src="https://i.ytimg.com/vi/1woQLtKzbPo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAolFd39zLTd3q3wPAieunqo-07aA " ,
        link:"https://www.youtube.com/live/1woQLtKzbPo?si=K1GVVhAISIepIibK",
        categorie["humor","mentalidae","lifestyle"]
      },
       
     ]
   
}


```

