(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(t,a,e){"use strict";e.r(a);e(172);var n=e(431),i=e(138),s=e(0),l=e.n(s),o=e(220),u=e(175),r=e(165),m=e(140),k=e(145),c=e(151),v=e(270),p=e(153),h=e(272),d=e.n(h);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement(p.a,{title:"Home",keywords:["gatsby","application","react"]}),l.a.createElement(i.StaticQuery,{query:"1849223447",render:function(t){var a=t.allAboutJson.edges[0].node,e=a.name,n=a.intro,i=a.info;return l.a.createElement("div",null,l.a.createElement(m.a,{className:"container"},l.a.createElement(u.a,{className:"spacing",content:[{backgroundColor:"black",text:e}]}),l.a.createElement(m.a,{flex:!0,spaceBetween:!0},l.a.createElement("div",{className:"col-6 spacing--after"},l.a.createElement(r.a,{text:n}),l.a.createElement(r.a,{heading:{title:"Oletetut esitiedot",level:"h2"},style:{marginTop:"4rem"},text:["Osallistujilta edellytetään vahvaa ohjelmointirutiinia, web-ohjelmoinnin ja tietokantojen perustuntemusta, git-versionhallintajärjestelmän peruskäytön hallintaa, kykyä pitkäjänteiseen työskentelyyn sekä valmiutta omatoimiseen tiedonhakuun ja ongelmanratkaisuun.","Osallistuminen ei kuitenkaan edellytä kurssilla käsiteltävien tekniikoiden tai Javascript-kielen hallintaa."]})),l.a.createElement(m.a,{className:"col-3"},l.a.createElement("img",{style:{marginTop:"auto"},alt:"Stacked cubes with React logo and JavaScript text",src:d.a}))),i.map(function(t){return l.a.createElement(o.a,{key:t,title:t.title,content:t.content})})),l.a.createElement(v.a,null))},data:n}),l.a.createElement(k.a,null))}},145:function(t,a,e){"use strict";var n=e(138),i=e(0),s=e.n(i),l=e(148),o=e.n(l),u=e(149),r=e.n(u),m=e(146);a.a=function(){return s.a.createElement("div",{id:"footer",className:"container spacing--after",style:{justifyContent:"space-between"}},s.a.createElement("div",{className:"col-4",style:{display:"flex",justifyContent:"space-between"}},s.a.createElement("a",{href:"https://www.helsinki.fi/",className:"image--large image--contain",style:{width:"100%"}},s.a.createElement(m.a,{className:"image--large image--contain",src:o.a})),s.a.createElement("a",{href:"https://www.houston-inc.com/",className:"push-right-2",style:{width:"100%"}},s.a.createElement(m.a,{className:"image--large image--contain",src:r.a}))),s.a.createElement("div",{className:"col-2",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},s.a.createElement(n.Link,{to:"/about",className:"nav-item-hover",style:{marginLeft:"4.5rem"}},"KURSSISTA"),s.a.createElement(n.Link,{to:"/faq",className:"nav-item-hover"},"FAQs")))}},220:function(t,a,e){"use strict";var n=e(6),i=e.n(n),s=(e(221),e(138)),l=e(4),o=e.n(l),u=e(0),r=e.n(u),m=e(165),k=function(t){function a(a){var e;return(e=t.call(this,a)||this).state={isOpened:!1},e}i()(a,t);var e=a.prototype;return e.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},e.render=function(){var t=this,a=this.props,e=a.title,n=a.content,i=a.className,l=a.containerClassName,o=a.list,u=this.state.isOpened;return r.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+l},r.a.createElement("button",{className:"accordion accordion__title "+(u?"active":"")+" "+i,onClick:function(){return t.setState({isOpened:!u})}},e),r.a.createElement("div",{className:"panel",style:{padding:u?"2rem 18px":"",maxHeight:""+(u?"unset":0),transition:"max-height 0.2s ease-out"}},n&&r.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),o&&r.a.createElement("ul",null,o.map(function(t){return r.a.createElement("li",{key:t.text},r.a.createElement(s.Link,{to:t.href},t.text))}))))},a}(u.Component);k.propTypes={title:o.a.string.isRequired,content:o.a.oneOfType([o.a.string,o.a.array]),list:o.a.array,className:o.a.string,containerClassName:o.a.string,initiallyOpened:o.a.bool},k.defaultProps={className:"",containerClassName:"",initiallyOpened:!1},a.a=k},221:function(t,a,e){},431:function(t){t.exports={data:{allAboutJson:{edges:[{node:{id:"81c953ce-4f02-5620-a8f9-79036ef682a6",name:"Yleistä",intro:["Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa REST-rajapinnoissa.","Kurssilla käsitellään myös sovellusten testaamista, konfigurointia ja suoritusympäristöjen hallintaa sekä NoSQL-tietokantoja."],info:[{title:"Kurssimateriaali",content:['Kurssimateriaali on tarkoitettu luettavaksi osa kerrallaan "alusta loppuun". Materiaalin seassa on tehtäviä, jotka on sijoitettu siten, että kunkin tehtävän tekemiseen pitäisi olla riittävät tekniset valmiudet sitä edeltävässä materiaalissa. Voit siis tehdä tehtäviä sitä mukaan kun niitä tulee materiaalissa vastaan. Voi myös olla, että koko osan tehtävät kannattaa tehdä vasta luettuaan ensin osan alusta loppuun kertaalleen. Useissa osissa tehtävät ovat samaa ohjelmaa laajentavia pienistä osista koostuvia kokonaisuuksia. Muutamia tehtävien ohjelmia kehitetään eteenpäin useamman osan aikana.',"Materiaali perustuu muutamien osasta osaan vaihtuvien esimerkkiohjelmien asteittaiseen laajentamiseen. Materiaali toiminee parhaiten, jos kirjoitat samalla koodin myös itse ja teet koodiin myös pieniä modifikaatioita. Materiaalin käyttämien ohjelmien koodin eri vaiheiden tilanteita on tallennettu GitHubiin."]},{title:"Suoritustapa",content:["Kurssi koostuu kahdeksasta osasta, joista ensimmäinen on historiallisista syistä numero nolla. Kunkin osan tekemiseen kannattaa varata aikaa noin 5-25 tuntia.","Materiaalissa osasta n osaan n+1 eteneminen ei ole mielekästä ennen kuin riittävä osaaminen osan n asioista on saavutettu. Kurssilla sovelletaankin pedagogisin termein tavoiteoppimista, engl. mastery learning ja on tarkoitus, että etenet seuraavaan osaan vasta, kun riittävä määrä edellisen osan tehtävistä on tehty.","Oletuksena on, että teet kunkin osan tehtävistä ainakin ne jotka eivät ole merkattu tähdellä. Myös tähdellä merkatut tehtävät vaikuttavat arvosteluun, mutta niiden tekemättäjättäminen ei aiheuta liian suuria esteitä seuraavan osan (tähdellä merkkaamattomien) tehtävien tekemiseen.","Etenemisnopeus kurssilla on vapaa, tehtäviä voi palauttaa 15.12. klo 23:59 asti.","Tämän kurssin eri osiin jo tehtyjen palautusten ajankäyttöstatistiikan näet tehtävien palautussivulta."]},{title:"Arvosteluperusteet",content:["Kurssi voidaan suorittaa joko 3 tai 5-7 opintopisteen laajuisena.","Laajuus ja arvosana määräytyy kaikkien tehtyjen tehtävien perusteella, myös tähdellä merkityt tehtävät siis vaikuttavat arvosanaan. Kurssin lopussa on koe, joka on suoritettava hyväksytysti. Koe ei kuitenkaan vaikuta arvosanaan.","Jos haluat kurssilta suorituksen, tallenna opiskelijanumerosi palautussovelluksen näkymään my submissions."]},{title:"Alkutoimet",content:["Tällä kurssilla suositellaan Chrome-selaimen käyttöä, sillä se tarjoaa parhaan välineistön web-sovelluskehitystä ajatellen.","Kurssin tehtävät palautetaan GitHubiin, joten Git tulee olla asennettuna ja sitä on syytä osata käyttää. Ohjeita Gitin käyttämiseen löytyy muunmuassa täältä.","Asenna myös joku järkevä webkoodausta tukeva tekstieditori, enemmän kuin suositeltava valinta on Visual studio code. Myös Atom on tarkoitukseen toimiva.","Älä koodaa nanolla, Notepadilla tai Geditillä. NetBeanskaan ei ole omimmillaan Web-koodauksessa ja se on myös turhan raskas verrattuna esim. Visual Studio Codeen.","Asenna koneeseesi heti myös Node.js. Materiaali on tehty versiolla 8.6, älä asenna mitään sitä vanhempaa versiota.","Asennusohjeita on koottu tänne.","Noden myötä koneelle asentuu myös Node package manager npm, jota tulemme tarvitsemaan kurssin aikana aktiivisesti. Tuoreen noden kera asentuu myös npx, jota tarvitaan myös muutaman kerran."]},{title:"Typoja materiaalissa",content:["Kurssilla on paljon materiaalia ja se on olosuhteiden pakosta kirjoitettu todella nopeasti. Materiaalissa on betatestauksesta ja oikoluvuista huolimatta kirjoitusvirheitä. Jos löydät kirjoitusvirheen tai joku asia on sanottu epäselvästi tai kielioppisääntöjen vastaisesti, tee pull request repositoriossa https://github.com/fullstackopen/fullstackopen.github.io olevaan kurssimateriaaliin.","Pull requestin tekeminen on helppoa. Esim. jos tällä sivulla on typo, mene sivun “lähdekoodiin” https://github.com/fullstackopen/fullstackopen.github.io/blob/master/osa0.md klikkaa kynän kuvaa oikealta, tee muutokset ja klikkaa muutama kerta “vihreää” Ohtu-kurssin ohjeen mukaan."]}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-bad52414f65d7233e01d.js.map