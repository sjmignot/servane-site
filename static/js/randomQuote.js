/* 
   My personal collection of favorite quotes
  Name: Servane Briand
   Date: 04/27/2010
   Copyright 2013 Servane Briand
*/

/* define functions */
function randInt(n) {
  var rNum = Math.ceil(Math.random() * n);
  return rNum;
}

//define getQuote function
function getQuote(qNum) {
  var mtQuote = new Array();
  mtQuote[1] = "I am what I am not yet<br/>Maxine Greene";
  mtQuote[2] =
    "Del Sur, del Este, del Oeste, del Norte, convergen los caminos que me han tra&iacute;do a mi secreto centro...<br/>Pronto sabr&eacute; qui&eacute;n soy.<br/> Jorge Luis Borges.";
  mtQuote[3] =
    "The most important tribute any human being can pay to a poem or a piece of prose he or she really loves is to learn it by heart. Not by brain, by heart; the expression is vital.<br/>  George Steiner";
  mtQuote[4] =
    "Vivez, si m'en croyez, n'attendez &agrave; demain : <br/>Cueillez d&egrave;s aujourd'hui les roses de la vie.<br/>Pierre de Ronsard";
  mtQuote[5] =
    "Notre P&egrave;re qui &ecirc;tes aux cieux<br/>Restez-y<br/> Et nous nous resterons sur la terrre<br/>Qui est quelquefois si jolie<br/>Jacques Pr&eacute;vert";
  mtQuote[6] =
    "Laissez lire, et laissez danser; ces deux amusements ne feront jamais de mal au monde.<br/>Voltaire";
  mtQuote[7] =
    "Stories are the single most powerful tool in a leader's toolkit.<br/>Howard Gardner";
  mtQuote[8] =
    "Mientras el cerebro sea un misterio, el universo continuar&#225; siendo un misterio.<br/>Santiago Ram&#243;n y Cajal";
  mtQuote[9] =
    "Todo hombre puede ser, si se lo propone, escultor de su propio cerebro.<br/>Santiago Ram&#243;n y Cajal";
  mtQuote[10] =
    "Ecrire: essayer m&eacute;ticuleusement de retenir quelque chose: arracher quelques bribes pr&eacute;cises au vide qui se creuse, laisser, quelque part, un sillon, une trace, une marque ou quelques signes<br/>Georges Perec";
  mtQuote[11] =
    "I believe in getting into hot water; it keeps you clean.<br/>G.K. Chesterton";
  mtQuote[12] =
    "The man who is aware of himself is henceforward independent; and he is never bored, and life is only too short, and he is steeped through and through with a profound yet temperate happiness. He alone lives, while other people, slaves of ceremony, let life slip past them in a kind of dream. Once conform, once do what other people do because they do it, and lethargy steals over all the finer nerves and faculties of the soul. She becomes all outer show and inward emptiness; dull, callous and indifferent.<br/>Virginia Woolf";
  mtQuote[13] =
    "Si j'&eacute;tais &eacute;crivain et mort, comme j'aimerais que ma vie se r&eacute;duis&icirc;t, par les soins d'un biographe amical et d&eacute;sinvolte, &agrave; quelques d&eacute;tails, &agrave; quelques go&ucirc;ts, &agrave; quelques inflexions, disons des 'biograph&egrave;mes' dont la distinction et la mobilit&eacute; pourraient voyager hors de tout destin et venir toucher, &agrave; la mani&egrave;re des atomes &eacute;picuriens, quelque corps futur, promis &agrave; la m&ecirc;me dispersion ; une vie 'trou&eacute;e', en somme.<br/>Roland Barthes";
  mtQuote[14] =
    "Recuerde el alma dormida<br/>avive el seso y despierte<br/>contemplando<br/>c&oacute;mo se pasa la vida,<br/>c&oacute;mo se viene la muerte<br/>tan callando;<br/>Jorge Manrique";
  mtQuote[15] =
    "Nuestras vidas son los r&iacute;os<br/>que van a dar en la mar,<br/>que es el morir<br/>Jorge Manrique";
  mtQuote[16] =
    "Look in the mirror, and don't be tempted to equate transient domination with either intrinsic superiority or prospects for extended survival<br/>Stephen Jay Gould";
  mtQuote[17] =
    "Life's but a walking shadow, a poor player<br/>That struts and frets his hour upon the stage<br/>And then is heard no more. It is a tale<br/>Told by an idiot, full of sound and fury,<br/>Signifying nothing.<br/> William Shakespeare";
  mtQuote[18] =
    "Un instant encore, regardons ensemble les rives famili&egrave;res, les objets que sans doute nous ne reverrons plus..T&acirc;chons d'entrer dans la mort les yeux ouverts...<br/>Marguerite Yourcenar - M&eacute;moires d'Hadrien";
  mtQuote[19] =
    "No one transcends. There is no future and no past. There is no remedy for death -or birth- except to hug the spaces in between. Live loud. Live wide. Live tall. <br/>Jim Crace";
  mtQuote[20] =
    "I believe filmmaking to be a collaborative medium. Rather than being a tyrant, I believe in getting ideas from as many sources as possible. <br/>John Huston";
  mtQuote[21] =
    "Croyez ceux qui cherchent la v&eacute;rit&eacute;, doutez de ceux qui la trouvent. <br/>Andr&eacute; Gide";
  mtQuote[22] = "Regarde de tous tes yeux. Regarde.<br/>Jules Verne";
  mtQuote[23] =
    "...la s&eacute;duction trompeuse du raisonnement analogique...<br/>Georges P&eacute;rec";
  mtQuote[24] =
    "...voyelles qui sont comme les &eacute;l&eacute;ments purs, les cellules primitives du langage...<br/>Jean Tardieu";
  mtQuote[25] =
    "parfois, l'obscurit&eacute; dessine d'abord la forme impr&eacute;cise d'un as de pique...<br/>Georges P&eacute;rec";
  mtQuote[26] =
    "Meglio astenersi dal governare il destino degli altri, dal momento<br/> che &egrave; gi&agrave; difficile ed incerto pilotare il proprio.<br/>Primo Levi";
  mtQuote[27] =
    "Every man is wise when attacked by a mad dog; fewer when pursued by a mad woman; only the wisest survive when attacked by a mad notion.<br/>Robertson Davies";
  mtQuote[28] =
    "Fanaticism is...overcompensation for doubt<br/>Robertson Davies";
  mtQuote[29] =
    "A truly great book should be read in youth, again in maturity and once more in old age, as a fine building should be seen by morning light, at noon and by moonlight.<br/>Robertson Davies";
  mtQuote[30] =
    "I vaig sentir d'una manera forta el pas del temps. No el temps dels n&uacute;vols i del sol i de la pluja i del pas de les estrelles adornament de la nit, no el temps de les primaveres dintre el temps de les primaveres i el temps de les tardors dintre el temps de les tardors, no el que posa les fulles a les branques o el que les arrenca, no el que arrissa i desarrissa i colora les flors, sin&oacute; el temps dintre de mi, el temps que no es veu i ens pasta. El que roda i roda a dintre del cor i el fa rodar a ell i ens va canviant per dins i per fora i amb paci&egrave;ncia ens va fent tal i com serem l'&uacute;ltim dia.<br/>Merc&egrave; Rodoreda";
  mtQuote[31] =
    "Ainsi qu'au d&eacute;but il est form&eacute; par le d&eacute;sir, l'amour n'est entretenu plus tard que par l'anxi&eacute;t&eacute; douloureuse...L'amour, dans l'anxi&eacute;t&eacute; douloureuse comme dans le d&eacute;sir heureux, est l'exigence d'un tout. Il ne na&icirc;t, il ne subsiste que si une partie reste &agrave; conqu&eacute;rir. On n'aime que ce qu'on ne poss&egrave;de pas tout entier.<br/>Marcel Proust";
  mtQuote[32] =
    "Dans l'&eacute;tat d'esprit o&ugrave; l'on observe, on est tr&egrave;s au-dessous du niveau o&ugrave; l'on se trouve quand on cr&eacute;e.<br/>Marcel Proust";
  mtQuote[33] =
    "On croit que selon son d&eacute;sir on changera autour de soi les choses, on le croit parce que, hors de l&agrave;, on ne voit aucune solution favorable. On ne pense pas &agrave; celle qui se produit le plus souvent et qui est favorable aussi: nous n'arrivons pas &agrave; changer les choses selon notre d&eacute;sir, mais peu &agrave; peu notre d&eacute;sir change. La situation que nous esp&eacute;rions changer parce qu'elle nous &eacute;tait insupportable, nous devient indiff&eacute;rente. Nous n'avons pas pu surmonter l'obstacle, comme nous le voulions absolument, mais la vie nous l'a fait tourner, d&eacute;passer, et c'est &agrave; peine alors si en nous retournant vers le lointain du pass&eacute; nous pouvons l'apercevoir, tant il est devenu imperceptible.<br/>Marcel Proust";
  mtQuote[34] =
    "Nesta vida, em que sou meu sono, n&atilde;o sou meu dono, quem sou &eacute; quem me ignoro e vive, atrav&eacute;s desta n&eacute;voa que sou eu, todas as vidas que eu outrora tive, numa s&oacute; vida. Mar sou; baixo marulho ao alto rujo, mas minha cor vem do meu alto c&eacute;u, e s&oacute; me encontro quando de mim fujo.<br/>Fernando Pessoa";
  mtQuote[35] =
    "Les mots qui vont surgir savent de nous des choses que nous ignorons d'eux.<br/>Ren&eacute; Char";
  mtQuote[36] =
    "Vivre, c'est s'obstiner &agrave; achever un souvenir.<br/>Ren&eacute; Char";
  mtQuote[37] =
    "Il semble que l'imagination qui hante &agrave; des degr&eacute;s divers l'esprit de toute cr&eacute;ature soit press&eacute;e de se s&eacute;parer d'elle quand celle-ci ne lui propose que 'l'impossible' et 'l'inaccessible' pour extr&ecirc;me mission. Il faut admettre que la po&eacute;sie n'est pas toujours souveraine.<br/>Ren&eacute; Char";
  mtQuote[38] =
    "La ligne de vol du po&egrave;me. Elle devrait &ecirc;tre sensible &agrave; chacun.<br/>Ren&eacute; Char";
  mtQuote[39] = "Forever is composed of nows.<br/>Emily Dickinson";
  mtQuote[40] =
    "They might not need me; but they might. I'll let my head be just in sight; a smile as small as mine might be precisely their necessity.<br/>Emily Dickinson";
  mtQuote[41] =
    "Une &oelig;uvre d'homme n'est rien d'autre que ce long cheminement pour retrouver par les d&eacute;tours de l'art les deux ou trois images simples et grandes sur lesquelles le c&oelig;ur une premi&egrave;re fois s'est ouvert.<br/>Albert Camus";
  mtQuote[42] =
    "Au milieu de l'hiver, j'ai d&eacute;couvert en moi un invincible &eacute;t&eacute;.<br/>Albert Camus";
  mtQuote[43] =
    "Beau comme la rencontre fortuite sur une table de dissection d'une machine &agrave; coudre et d'un parapluie.<br/>Isidore Ducasse, dit comte de Lautr&eacute;amont";
  mtQuote[44] =
    "C'&eacute;tait une journ&eacute;e de printemps. Les oiseaux r&eacute;pandaient leurs cantiques en gazouillements, et les humains, rendus &agrave; leurs diff&eacute;rents devoirs, se baignaient dans la saintet&eacute; de la fatigue.<br/>Isidore Ducasse, dit comte de Lautr&eacute;amont";
  mtQuote[45] =
    "Para al&eacute;m da orelha existe um som, &agrave; extremidade do olhar um aspecto, &agrave;s pontas dos dedos um objeto - &eacute; para l&aacute; que eu vou. &Agrave; ponta do l&aacute;pis o tra&ccedil;o. Onde expira um pensamento est&aacute; uma id&eacute;ia, ao derradeiro h&aacute;lito de alegria uma outra alegria, &agrave; ponta da espada a magia - &eacute; para l&aacute; que eu vou. Na ponta dos p&eacute;s o salto.<br/>Clarice Lispector";
  mtQuote[46] =
    "Doubt, it seems to me, is the central condition of a human being in the twentieth century.<br/>Salman Rushdie";
  mtQuote[47] =
    "We know that a man can read Goethe or Rilke in the evening, that he can play Bach and Schubert, and go to his day's work at Auschwitz in the morning. <br/>George Steiner";
  mtQuote[48] =
    "Language can only deal meaningfully with a special, restricted segment of reality. The rest, and it is presumably the much larger part, is silence.<br/>George Steiner";
  mtQuote[49] =
    "Every single pleasure I can imagine or have experienced is more delightful, more of a pleasure, if you take it in small sips, if you take your time. Reading is not an exception.<br/>Amos Oz";
  mtQuote[50] =
    "les lois non &eacute;crites, in&eacute;branlables des dieux...<br/>Sophocle";
  mtQuote[51] =
    "The tension felt in the modern world between those who look at the confluence of neuroscientific data, historical data, and other information illuminating our past and those who simply accept received wisdom as their guide in life is real and profound. Yet it may not be as divisive as one would think. It appears that all of us share the same moral networks and systems, and we all respond in similar ways to similar issues. The only thing different, then, is not our behavior but our theories about why we respond the way we do. It seems to me that understanding that our theories are the source of all our conflicts would go a long way in helping people with different belief systems to get along.<br/>Michael Gazzaniga";
  mtQuote[52] = "an unexamined life is not worth living<br/>Socrates";
  mtQuote[53] =
    "The activities of a life are infused by examination, not just affected by it, and their character is different when permeated by the results of concentrated reflection...Therefore, examination and reflection are not just <b>about</b> the other components of life; they are added <b>within</b> a life, alongside the rest, and by their presence call for a new overall pattern that alters how each part of life is understood.<br/>Robert Nozick";
  mtQuote[54] =
    "Voyager: cent fois remettre sa t&ecirc;te sur le billot, cent fois aller la reprendre dans le panier &agrave;  son pour la retrouver presque pareille. On esp&eacute;rait tout de m&ecirc;me un miracle alors qu'il n'en faut pas attendre d'autre que cette usure et cette &eacute;rosion de la vie avec laquelle nous avons rendez-vous, devant laquelle nous nous cabrons bien &agrave; tort.<br/>Nicolas Bouvier";
  mtQuote[55] =
    "On ne voyage pas pour se garnir d'exotisme et d'anecdotes comme un sapin de No&euml;l, mais pour que la route vous plume, vous rince, vous essore, vous rende comme ces serviettes &eacute;lim&eacute;es par les lessives qu'on vous tend avec un &eacute;clat de savon dans les bordels. On s'en va loin des alibis ou des mal&eacute;dictions natales, et dans chaque ballot crasseux coltin&eacute; dans des salles d'attente archibond&eacute;es, sur de petits quais de gare atterrants de chaleur et de mis&egrave;re, ce qu'on voit passer c'est son propre cercueil. Sans ce d&eacute;tachement et cette transparence, comment esp&eacute;rer faire voir ce qu'on a vu? Devenir reflet, &eacute;cho, courant d'air, invit&eacute; muet au petit bout de la table avant de piper mot. <br/>Nicolas Bouvier";
  mtQuote[56] =
    "La po&eacute;sie m'est plus n&eacute;cessaire que la prose parce qu'elle est extr&ecirc;mement directe, brutale - c'est du full-contact!<br/>Nicolas Bouvier";
  mtQuote[57] =
    "Le monde ancien ne peut me toucher je suis libre<br/>Je ne suis pas un fils de roi je suis un homme<br/>Debout qu'on a voulu abattre<br/>Paul Eluard";
  mtQuote[58] =
    "Je ne vois clair et je ne suis intelligible<br/>Que si l'amour m'apporte le pollen d'autrui<br/>Je m'enivre au soleil de la pr&eacute;sence humaine<br/>Je m'anime mar&eacute;e de tous ses &eacute;l&eacute;ments<br/>Paul Eluard";
  mtQuote[59] =
    "vous aimeriez &eacute;perdument<br/>si vous aimiez<br/>Charles Trenet";
  mtQuote[60] =
    "L'id&eacute;e que l'on peut se faire en secret de la po&eacute;sie ne limite pas forc&eacute;ment &agrave; celle-ci. Mais comme les r&ecirc;ves inavouables elle risque de causer des troubles de m&eacute;moire et d'emp&ecirc;cher la formation r&eacute;guli&egrave;re d'un monde sup&eacute;rieur &agrave; celui o&ugrave; l'oubli est utile &agrave; la conservation prudente de l'individu.<br/>Il faut effacer le reflet de la personnalit&eacute; pour que l'inspiration bondisse &agrave; tout jamais du miroir. Laissez les influences jouer librement, inventez ce qui a d&eacute;j&agrave; &eacute;t&eacute; invent&eacute;, ce qui est hors de doute, ce qui est incroyable, donnez &agrave; la spontan&eacute;it&eacute; sa valeur pure. Soyez celui &agrave; qui l'on parle et qui est entendu. Une seule vision, vari&eacute;e &agrave; l'infini.<br/> Le po&egrave;te est celui qui inspire bien plus que celui qui est inspir&eacute;.<br/>Paul Eluard";
  mtQuote[61] =
    "Art alone makes life possible; this is how radically I should like to formulate it. I would say that without art man is inconceivable in physiological terms... I would say man does not consist only of chemical processes, but also of metaphysical occurrences. The provocateur of the chemical processes is located outside the world. Man is only truly alive when he realizes he is a creative, artistic being... Even the act of peeling a potato can be a work of art if it is a conscious act.<br/>Joseph Beuys";
  mtQuote[62] =
    "But one is forced to translate thought into action and action into object... I am not a teacher who tells his students only to think. I say: act; do something: I ask for result. It may take different forms. It can have the form of sound, or someone can do a book, make a drawing or a sculpture. I don't care...<br/>Joseph Beuys";
  mtQuote[63] =
    "I would like to declare why I feel that it's now necessary to establish a new kind of art, able to show the problems of the whole society, of every living being, and how this new discipline, which I call social sculpture, can realize the future of humankind. It could be a guarantee for the evolution of the earth as a planet, establish conditions for other planetarians too, and you can control it with your own thinking. It could be a guarantee for the evolution of the earth as a planet, establish conditions for other planetarians too, and you can control it with your own thinking...Here my idea is to declare that art is the 'only' possibility for evolution, the only possibility to change the situation in the world. But then you have to enlarge the idea of art to include the whole creativity. And if you do that, it follows logically that every living being is an artist, an artist in the sense that he can develop his own capacity... And therefore, in short, I'm saying, all work that's done has to have the quality of art. We can see later about developing a proof for this by thinking about these problems. Here is a general structure to show what I means by a social sculpture...<br/>Joseph Beuys";
  mtQuote[64] =
    "Istruitevi, perch&eacute; avremo bisogno di tutta la nostra intelligenza. Agitatevi, perch&eacute; avremo bisogno di tutto il nostro entusiasmo. Organizzatevi, perch&eacute; avremo bisogno di tutta la nostra forza.<br/>Antonio Gramsci";
  mtQuote[65] =
    "In principio era il verbo... No, in principio era il sesso.<br/>Antonio Gramsci";
  mtQuote[66] =
    "And might not the investigation of what is literally happening to oneself remain the most human, therefore the most serious and the most amusing, of all possible activities?.<br/>Clement Greenberg";
  mtQuote[67] =
    "Books are funny little portable pieces of thought.<br/>Susan Sontag";
  mtQuote[68] =
    "Je dois beaucoup &agrave; mes pieds: sans eux que d'id&eacute;es, de sensations, de r&eacute;flexions, que de plans et de r&eacute;solutions ne me seraient pas venus;je leur dois mes jouissances les plus compl&egrave;tes et les plus pures. Sans eux je n'aurais jamais go&ucirc;t&eacute; le sentiment de l'ind&eacute;pendance, tel que je le connais.<br/>Gotthilf Theodor von Faber";
  mtQuote[69] =
    "We work in the dark--we do what we can--we give what we have. Our doubt is our passion and our passion is our task. The rest is the madness of art.<br/>Henry James";
  mtQuote[70] =
    "Nous sommes r&ecirc;v&eacute;s par quelqu'un qui a un tr&egrave;s mauvais r&ecirc;ve. Et il dort profond&eacute;ment.<br/>Jean Cocteau";
  mtQuote[71] =
    "Il faut d&eacute;j&agrave; passablement d'intelligence pour souffrir de n'en avoir pas davantage.<br/>Andr&eacute; Gide";
  mtQuote[72] =
    "Genes are rarely about inevitability, especially when it comes to humans, the brain, or behavior. They're about vulnerability, propensities, tendencies.<br/>Robert Sapolsky";
  mtQuote[73] =
    "If a rat is a good model for your emotional life, you're in big trouble.<br/>Robert Sapolsky";
  mtQuote[74] =
    "The past does not only draw us back to the past. There are certain memories of the past that have strong steel springs and, when we who live in the present touch them, they are suddenly stretched taut and then they propel us into the future.<br/>Yukio Mishima";
  mtQuote[75] =
    "Yet how strange a thing is the beauty of music! The brief beauty that the player brings into being transforms a given period of time into pure continuance; it is certain never to be repeated; like the existence of dayflies and other such short-lived creatures, beauty is a perfect abstraction and creation of life itself. Nothing is so similar to life as music.<br/>Yukio Mishima";
  mtQuote[76] =
    "Le roman, c'est la cl&eacute; des chambres interdites de notre maison.<br/>Louis Aragon";
  mtQuote[77] =
    "Le temps d'apprendre &agrave; vivre, il est d&eacute;j&agrave; trop tard.<br/>Louis Aragon";
  mtQuote[78] =
    "Rien n'est plus vieux que le journal du matin et Hom&egrave;re est toujours jeune.<br/>Jean Giraudoux";
  mtQuote[79] =
    "We are all in the gutter, but some of us are looking at the stars.<br/>Oscar Wilde";
  mtQuote[80] =
    "C'est une chose &eacute;trange &agrave; la fin que le monde<br/>Un jour je m'en irai sans en avoir tout dit<br/>Ces moments de bonheur ces midis d'incendie....<br/>Louis Aragon";
  mtQuote[81] =
    "When we are no longer children we are already dead<br/>Constantin Brancusi";
  mtQuote[82] =
    "The function of art is to make that understood which in the form of argument would be incomprehensible.<br/>Constantin Brancusi";
  mtQuote[83] =
    "The role of the artist is to renew our lives, but also, in turn, to listen internally to the song of the child within us all.<br/>Arno Minkinnen";
  mtQuote[84] =
    "Cr&eacute;er une oeuvre d'art reste la plus prodigieuse tentation de l'&ecirc;tre humain pour enfreindre les limites o&ugrave; le temps et l'espace le d&eacute;finissent et l'enferment, pour trouver en ces deux champs offerts &agrave; son activit&eacute; un d&eacute;bouch&eacute; vers la dur&eacute;e et autrui, une expansion qui fasse &eacute;clater sa condition d'individu, restreinte et &eacute;ph&eacute;m&egrave;re.<br/>Ren&eacute; Huyghe";
  mtQuote[85] =
    "I have learned that if you must leave a place that you have lived in and loved and where all your yesteryears are buried deep, leave it any way except a slow way, leave it the fastest way you can. Never turn back and never believe that an hour you remember is a better hour because it is dead. Passed years seem safe ones, vanquished ones, while the future lives in a cloud, formidable from a distance.<br/>Beryl Markham";
  mtQuote[86] =
    "Mary had a little lamb, its fleece electrostatic<br/>And everywhere Mary went, the lights became erratic.<br/>David Foster Wallace";
  mtQuote[87] =
    "Je n'avais pas vraiment surv&eacute;cu Je n'&eacute;tais pas s&ucirc;r d'&ecirc;tre un vrai survivant. J'avais travers&eacute; la mort, elle avait &eacute;t&eacute; une exp&eacute;rience de ma vie.<br/>Jorge Semprun";
  mtQuote[88] =
    "Was it really some other person I was so anxious to discover...or was it only my own solitude that I could not abide?<br/>David Markson";
  mtQuote[89] =
    "Fuck concepts. Don't be afraid to be confused. Try to remain permanently confused. Anything is possible. Stay open, forever, so open it hurts, and then open up some more, until the day you die, world without end, amen.<br/>George Saunders";
  mtQuote[90] =
    "In art, and maybe just in general, the idea is to be able to be really comfortable with contradictory ideas. In other words, wisdom might be, seem to be, two contradictory ideas both expressed at their highest level and just let to sit in the same cage sort of, vibrating. So, I think as a writer, I'm really never sure of what I really believe.<br/>George Saunders";
  mtQuote[91] =
    "That everyone is identical in their secret unspoken belief that way deep down they are different from everyone else. That this isn't necessarily perverse.<br/>David Foster Wallace";
  mtQuote[92] =
    "Almost nothing important that ever happens to you happens because you engineer it. Destiny has no beeper; destiny always leans trenchcoated out of an alley with some sort of 'psst' that you usually can't even hear because you're in such a rush to or from something important you've tried to engineer.<br/>David Foster Wallace";
  mtQuote[93] =
    "Irony's useful for debunking illusions, but most of the illusion-debunking in the U.S. has now been done and redone... Postmodern irony and cynicism's become an end in itself, a measure of hip sophistication and literary savvy. Few artists dare to try to talk about ways of working toward redeeming what's wrong, because they'll look sentimental and naive to all the weary ironists. Irony's gone from liberating to enslaving. There's some great essay somewhere that has a line about irony being the song of the prisoner who's come to love his cage...<br/>David Foster Wallace";
  mtQuote[94] =
    "Il n'est pas mauvais que certains hommes aient la force d'attacher plus de cons&eacute;quence et de prix &agrave; la d&eacute;termination d'une lointaine d&eacute;cimale ou de la position d'une virgule, qu'&agrave; la nouvelle la plus retentissante, &agrave; la catastrophe la plus consid&eacute;rable, ou &agrave; leur vie m&ecirc;me.<br/>Paul Val&eacute;ry";
  mtQuote[95] =
    "Mon &acirc;me a plus de soif d'&ecirc;tre &eacute;tonn&eacute;e que de toute autre chose. L'attente, le risque, un peu de doute, l'exaltent et la vivifient bien plus que ne le fait la possession du certain.<br/>Paul Val&eacute;ry";
  mtQuote[96] =
    "Without the ability to think about yourself, to reflect on your life, there's really no awareness, no consciousness. Consciousness doesn't come automatically; it comes through being alive, awake, curious, and often furious.<br/>Maxine Greene";
  mtQuote[97] =
    "Drawing to me is a language that allows me to understand the world, an analytical tool. It is a practical means to assign perception to memory. I understand complexities through drawing, it enables me to grasp them.<br/>Richard Serra";
  mtQuote[98] =
    "Drawing is a concentration on an essential activity, and the credibility of the statement is totally within your hands. It's the most direct, conscious space in which I work. I can observe my process from beginning to end, and at times sustain a continuous concentration. It's replenishing. It's one of the few conditions in which I can understand the source of my work.<br/>Richard Serra";
  mtQuote[99] =
    "Creation is really a sustained period of bliss - even though the subject can still be very sad. Because there's the triumph of coming through and understanding that you have, and that you did it the way only you could do it - you didn't do it the way somebody told you to do it, you did it just the way you had to do it. And that is what makes us us.<br/>Alice Walker";
  mtQuote[100] =
    "la po&eacute;sie, celle que je lis et celle que parfois je m'essaie Ã  &eacute;crire, m'aide &agrave; regarder les choses de mani&egrave;re plus attentive, me permet de mieux &eacute;couter les voix et les destins des personnes. Encore plus aujourd'hui, je crois que ce pouvoir particulier de la parole po&eacute;tique d&eacute;pend avant tout du fait qu'elle est aussi marginale, aussi exil&eacute;e, aussi hors jeu, aussi inutile et aussi invisible. C'est pr&eacute;cis&eacute;ment &agrave; cause de cela qu'elle sait voir et sait &eacute;couter ; et quand elle parle, elle le fait d'en bas, &agrave; partir d'une exp&eacute;rience quotidienne commune et partag&eacute;e.<br/>Fabio Pusterla";
  mtQuote[101] =
    "L'ouvrage d'un regard d'heure en heure affaibli<br/> n'est pas plus de r&ecirc;ver que de former des pleurs,<br/>mais de veiller comme un berger et d'appeler<br/>tout ce qui risque de se perdre s'il s'endort.<br/>...<br/>Tel est le monde.<br/>Nous ne le voyons pas tr&egrave;s longtemps : juste assez<br/>pour en garder ce qui scintille et va s'&eacute;teindre<br/>pour appeler encore et encore, et trembler de ne plus voir.<br/>Philippe Jaccottet";
  mtQuote[102] =
    "Nulle part au monde autant que dans ce pays, au cours de ce voyage, la terre encore habitable -plaines, champs, vall&eacute;es, gr&egrave;ves et for&ecirc;ts- ne m'a paru aussi comparable &agrave; un chant auquel il &eacute;tait impossible que ne s'ajout&acirc;t pas une fois au moins le chant de la parole humaine, &agrave; un chant contenu, soutenu, non pas monotone mais profond&eacute;ment un, tout en &eacute;tant sans cesse soumis &agrave; de l&eacute;g&egrave;res modulations qui vous portent de lieu en lieu, de halte en halte, dans une sorte de jubilation int&eacute;rieure et d'accord avec la totalit&eacute; de tout ce qui existe; pr&ecirc;ts du coup en chaque site, &agrave; r&eacute;entendre, m&ecirc;me de tr&egrave;s loin, dans l'enceinte sacr&eacute;e, en frissonnant, une presque &eacute;ternit&eacute; murmurante qu'il n'&eacute;tait pas trop de tous ces temples pour encager.<br/>Philippe Jaccottet";
  mtQuote[103] =
    "Qu'est que le regard?<br/>un dard plus aigu que la langue<br/>la course d'un exc&egrave;s &agrave; l'autre<br/>du plus profond au plus lointain<br/>du plus sombre au plus pur<br/>un rapace<br/>Philippe Jaccottet";
  mtQuote[104] =
    "La grande question pour qui s'ent&ecirc;te &agrave; &eacute;crire : comment mettre les mots &agrave; l'&eacute;preuve, comment faire pour qu'ils contiennent le pire m&ecirc;me quand ils sont lumineux, la pesanteur quand la gr&acirc;ce les porte?<br/>Philippe Jaccottet";
  mtQuote[105] =
    "Il nous arrive d'imaginer dans les choses ou derri&egrave;re elles, o&ugrave; &agrave; leur racine un ordre inexplicable, une architecture secr&egrave;te et qui donne au moins un moment de la joie et qu'&agrave; cet ordre on a pu donner le nom de beaut&eacute;<br/>Philippe Jaccottet";
  mtQuote[106] =
    "Le po&egrave;te, conservateur des infinis visages du vivant.<br/>Ren&eacute; Char";
  mtQuote[107] =
    "Ce qui est important c'est d'arriver &agrave; mettre au clair, ce que le po&egrave;te a de plus inconnu en lui, de plus secret, de plus cach&eacute;, de plus difficile &agrave; d&eacute;celer, d'unique.<br/>Pierre Reverdy";
  mtQuote[108] =
    "Le myst&egrave;re des portes<br/>On franchit l'&eacute;motion qui barre le chemin<br/>Et sans se retourner on va toujours plus loin<br/>La maison ne suit pas<br/>La maison nous regarde<br/>Pierre Reverdy";
  mtQuote[109] =
    "...un fleuve distrait<br/> est sorti de son lit, un tyran s'est lev&eacute;<br/>hirsute, ou c'est l'ombre d'un nuage <br/>qui change tout &agrave; coup l'&eacute;criture du monde,<br/>et l'enfant qui r&ecirc;vait dans la poudreuse<br/>complicit&eacute; des livres ne trouve plus<br/>le chemin trac&eacute; o&ugrave; la vie se lit<br/>comme les lignes de la main...<br/>Guy Goffette";
  mtQuote[110] =
    "le cinqui&egrave;me horizon est l'horizon que je cherche, j'aime la mer derri&egrave;re la mer<br/>Guy Goffette";
  mtQuote[111] =
    "le seul contact r&eacute;el de l'homme moderne avec la sacralit&eacute; cosmique s'effectue par l'inconscient. qu'il s'agisse de ses r&ecirc;ves et de sa vie imaginaire, ou des cr&eacute;ations qui surgissent de l'inconscient.<br/>Mircea Eliade";
  mtQuote[112] =
    "Sans doute riez-vous du r&ecirc;veur<br/>Qui voyait des fleurs en hiver<br/>Wilhelm M&uuml;ller";
  mtQuote[113] =
    "Il faut viser d'autant plus juste que sont peu nombreux les &eacute;l&eacute;ments du po&egrave;me, en peser le poids sur des balances d'autant plus sensibles qu'ils sont l&eacute;gers. Alors seulement, la cible atteinte n'est plus une cible, mais une ouverture o&ugrave; la fl&egrave;che se sera engouffr&eacute;e ; alors seulement le coup d'&eacute;ventail imperceptible aura produit une onde capable de se propager Ã  l'infini.<br/>Philippe Jaccottet";
  mtQuote[114] = "Tell all the truth but tell it slant.<br/>Emily Dickinson";
  mtQuote[115] =
    "Questo &egrave; il tempio dell'intelletto. E io ne sono il sommo sacerdote. Siete voi che profanate il sacro recinto. Voi vincerete perch&eacute; avete la forza bruta. Ma non convincerete. Perch&eacute;, per convincere, bisogna persuadere. E per persuadere occorre proprio quello che a voi manca: ragione e diritto nella lotta. Io considero inutile esortarvi a pensare alla Spagna. Ho finito.<br/>Miguel de Unamuno";
  mtQuote[116] =
    "I think interpretation tries to liberate what one understands unconsciously. When one can let loose some things in performance that one doesn't know are there -- unexpected things and surprises -- that's when it's really worthwhile.<br/>Martha Argerich";
  mtQuote[117] =
    "Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.<br/>Isaac Asimov";
  mtQuote[118] =
    "I do things like get in a taxi and say, 'The library, and step on it.'<br/>David Foster Wallace";
  mtQuote[119] =
    "Le radici sono importanti, nella vita di un uomo, ma noi uomini abbiamo le gambe, non le radici, e le gambe sono fatte per andare altrove.<br/>Pino Cacucci";
  mtQuote[120] =
    "One of the things that was really influential early on was Ezra Pound's Cantos, one poem he worked on for 50 years. It's epic. I had a great deal of difficulty understanding it. One of the problems was you'd be reading along in English and he would move to a Chinese ideogram or Frenchâ€“he actually used seven different languages in a given poem. And for somebody who's not fluent in different languages it has the impact of rupturing your way of understanding something.<br/>Richard Misrach";
  mtQuote[121] =
    "What I want is the world to remember the problems and the people I photograph. What I want is to create a discussion about what is happening around the world and to provoke some debate with these pictures. Nothing more than this. I don't want people to look at them and appreciate the light and the palate of tones. I want them to look inside and see what the pictures represent, and the kind of people I photograph.<br/>Sebasti&atilde;o Salgado";
  mtQuote[122] =
    "I want my work to become part of our visual history, to enter our collective memory and our collective conscience. I hope it will serve to remind us that history's deepest tragedies concern not the great protagonists who set events in motion but the countless ordinary people who are caught up in those events and torn apart by their remorseless fury. I have been a witness, and these pictures are my testimony. The events I have recorded should not be forgotten and must not be repeated.<br/>James Nachtwey";
  mtQuote[123] =
    "the great geniuses are those who have kept their childlike spirit and have added to it breadth of vision and experience.<br/>Alfred Stieglitz";
  mtQuote[124] =
    "Le g&eacute;nie n'est pas un don, mais la fa&ccedil;on dont on invente dans des circonstances d&eacute;sesp&eacute;r&eacute;es.<br/>Jean Paul Sartre";
  mtQuote[125] =
    "Nunca dejes de sonre&iacute;r, ni siquiera cuando est&eacute;s triste, porque nunca sabes quien se puede enamorar de tu sonrisa.<br/>Gabriel Garc&iacute;a M&aacute;rquez";
  mtQuote[126] =
    "He aprendido que el mundo quiere vivir en la cima de la monta&ntilde;a, sin saber que la verdadera felicidad est&aacute; en la forma de subir la escarpada<br/>Gabriel Garc&iacute;a M&aacute;rquez";
  mtQuote[127] =
    "It's always night or we wouldn't need light.<br/>Thelonious Monk";
  mtQuote[128] = "But that's another story.<br/>Rudyard Kipling";
  mtQuote[129] =
    "For the female of the species is more deadly than the male.<br/>Rudyard Kipling";
  mtQuote[130] =
    "Una volta che abbiate conosciuto il volo, camminerete sulla terra guardando il cielo, perch&eacute; l&agrave; siete stati e l&agrave; desidererete tornare.<br/>Leonardo da Vinci";
  mtQuote[131] =
    "Le vertige, c'est autre chose que la peur de tomber. C'est la voix du vide au-dessous de nous qui nous attire et nous envo&ucirc;te, le d&eacute;sir de chute dont nous nous d&eacute;fendons ensuite avec effroi. Avoir le vertige c'est &ecirc;tre ivre de sa propre faiblesse. On a conscience de sa faiblesse et on ne veut pas lui r&eacute;sister, mais s'y abandonner. On se so&ucirc;le de sa propre faiblesse, on veut &ecirc;tre plus faible encore, on veut s'&eacute;crouler en pleine rue aux yeux de tous, on veut &ecirc;tre Ã  terre, encore plus bas que terre.<br/>Milan Kundera";
  mtQuote[132] =
    "Il n'est pas n&eacute;cessaire que tu sortes de ta maison. Reste &agrave; ta table et &eacute;coute. N'&eacute;coute m&ecirc;me pas, attends seulement. N'attends m&ecirc;me pas, sois absolument silencieux et seul. Le monde viendra s'offrir &agrave; toi pour que tu le d&eacute;masques, il ne peut faire autrement, extasi&eacute;, il se tordra devant toi.<br/>Franz Kafka";
  mtQuote[133] =
    "You fellows know there are those voyages that seem ordered for the illustration of life, that might stand for a symbol of existence.<br/>Joseph Conrad";
  mtQuote[134] =
    "Le d&eacute;sespoir a trois paires de jambes...<br/>Gh&eacute;rasim Luca";
  mtQuote[135] =
    "&Agrave; certains moments<br/>ce qui s'est perdu<br/>est plus l&agrave;<br/>que ce qui est<br/>l&agrave;<br/>Antoine Emaz";
  mtQuote[136] =
    "&Eacute;crire consiste d'abord &agrave; rejoindre l'&eacute;nergie illisible des mots. C'est tout ce que l'on peut demander &agrave; un po&egrave;te<br/>Antoine Emaz";
  mtQuote[137] =
    "Ce n'est pas la page qui angoisse, mais ce qu'on serait capable d'&eacute;crire, sans retenue.<br/>Antoine Emaz";
  mtQuote[138] =
    "J'ai beau &eacute;crire, je ne parviens pas &agrave; 'rejoindre'. Toujours s&eacute;par&eacute;. Je mange de l'intervalle. Cela n'est vrai qu'au pr&eacute;sent. Si je me retourne, j'aper&ccedil;ois quelques clairi&egrave;res dans le temps.<br/>Jean-Luc Sarr&eacute;";
  mtQuote[139] =
    "La colombe l&eacute;g&egrave;re, lorsque, dans son libre vol, elle fend l'air dont elle sent la r&eacute;sistance, pourrait s'imaginer qu'elle r&eacute;ussirait bien mieux encore dans le vide.<br/>Emmanuel Kant";
  mtQuote[140] =
    "Le po&egrave;me int&eacute;ressant est le drame du dire. Cette proposition simple signifie que s'y affrontent au moins deux forces, que j'identifierai ainsi : l'une d'&eacute;nonciation, que le po&egrave;me partage avec tous les morceaux d'&eacute;locution, qu'ils rel&egrave;vent de la conversation courante, de la philosophie, de l'histoire dr&ocirc;le ou du reportage journalistique  : quelque chose essaie de s'y dire ; l'autre de d&eacute;s&eacute;nonciation. Par ce mot, il faut entendre le refus ou l'emp&ecirc;chement du dire : une force n&eacute;gatrice, qui s'attaque &agrave; l'&eacute;nonciation, la conteste, la d&eacute;sint&egrave;gre, essaie de la rendre impossible. Le drame du po&egrave;me, c'est l'aventure du petit chaperon de l'&eacute;nonciation qui rencontre le loup de la d&eacute;s&eacute;nonciation. Ou, pour le dire autrement : le po&egrave;me est une cage. &agrave; l'int&eacute;rieur s'affrontent un d&eacute;put&eacute; en costume bleu et un anarchiste &agrave; capuche.<br/>Pierre Vinclair";
  mtQuote[141] =
    "Les affaires de d&eacute;sir ont lieu dans le nez : bu&eacute;e, fum&eacute;e, ros&eacute;e, ondes, particules, r&eacute;pulsions ou attractions invisibles, odeurs en creux et limaille en l'air.<br/>Philippe Sollers";
  mtQuote[142] =
    "La fantaisie et la libert&eacute; d'imagination ne s'acqui&egrave;rent pas comme &ccedil;a, qu'il y faut du temps, de l'obstination, de la s&eacute;v&eacute;rit&eacute;, de la rigueur, des math&eacute;matiques, de la raison.<br/>Philippe Sollers";
  mtQuote[143] =
    "The first principle is that you must not fool yourself and you are the easiest person to fool.<br/>Richard Feynman";
  mtQuote[144] =
    "Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best. Don't think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn't stop you from doing anything at all...<br/>Richard Feynman";
  mtQuote[145] =
    "Much of good science - and perhaps all of great science - has its roots in fantasy<br/>E.O. Wilson";
  mtQuote[146] =
    "We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people able to put together the right information at the right time, think critically about it, and make important choices wisely.<br/>E.O. Wilson";
  mtQuote[147] =
    "Every act of perception, is to some degree an act of creation, and every act of memory is to some degree an act of imagination.<br/>Oliver Sacks";
  mtQuote[148] =
    "Music, uniquely among the arts, is both completely abstract and profoundly emotional. It has no power to represent anything particular or external, but it has a unique power to express inner states or feelings. Music can pierce the heart directly; it needs no mediation.<br/>Oliver Sacks";
  mtQuote[149] =
    "Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.<br/>Oliver Sacks";
  mtQuote[150] =
    "Penser qu'il faudrait le prendre en photo est le meilleur moyen de tuer l'intensit&eacute; d'un moment.<br/>Sylvain Tesson";
  mtQuote[151] =
    "Usage de la fen&ecirc;tre : inviter la beaut&eacute; &agrave; entrer et laisser l'inspiration sortir.<br/>Sylvain Tesson";
  mtQuote[152] =
    "Lire nous confirme que la solitude est un tr&eacute;sor. Un livre peut changer une vie. Et dire qu'il n'y a aucune mise en garde d'inscrite sur la couverture!<br/>Sylvain Tesson";
  mtQuote[153] =
    "Language is like poppies. It just takes something to churn the earth round them up, and when it does up come the sleeping words, bright red, fresh, blowing about<br/>Ali Smith";
  mtQuote[154] =
    "remember you must live.<br/>remember you most love.<br/>remainder you mist leaf.<br/>Ali Smith";
  mtQuote[155] =
    "...to me, an exercise in style is not a superficial matter - our lives are also an exercise in style<br/>Zadie Smith";
  mtQuote[156] =
    "The future's another country, man... And I still ain't got a passport<br/>Zadie Smith";
  mtQuote[157] = "Nothing is ever behind us<br/>Roberto Bola&ntilde;o";
  mtQuote[158] =
    "Heureux les hommes qui pour jouir de la vie n'ont besoin ni d'esp&eacute;rer ni de pr&eacute;voir<br/>Giacomo Casanova";
  mtQuote[159] =
    "Creativity is merely a plus name for regular activity. Any activity becomes creative when the doer cares about doing it right, or better<br/>John Updike";
  mtQuote[160] =
    "I like the construction of sentences and the juxtaposition of words-not just how they sound or what they mean, but even what they look like.<br/>Don DeLillo";
  mtQuote[161] =
    "La vie est une curieuse hirondelle coinc&eacute;e dans une vilaine poubelle: c'est l&agrave; qu'elle palpite et cesse d'&ecirc;tre belle. Vous n'avez rien saisi. Je le sens. Je reformule et esquisse la phrase. C'est simple. La vie est un voyage peu ou prou incertain. Un voyage plein de turbulences. Des turbulences associ&eacute;es ou non &agrave; des intemp&eacute;ries. Des intemp&eacute;ries imp&eacute;tueuses provoqu&eacute;es par la curiosit&eacute; et la cruaut&eacute; humaines.<br/>Ali Zamir";
  mtQuote[162] =
    "Tout tableau ... et surtout tout portrait, se situe au confluent d'un r&ecirc;ve et d'une r&eacute;alit&eacute;<br/>Georges Perec";

  return mtQuote[qNum];
}

//declare variables
var randValue = randInt(162);
var quoteText = getQuote(randValue);
document.write(quoteText);
