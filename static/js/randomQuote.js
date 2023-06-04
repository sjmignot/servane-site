/* 
   My personal collection of favorite quotes
  Name: Servane Briand
   Date: 04/27/2010
   Copyright 2013 Servane Briand
*/

/* define functions */

const quotes = [
  {
    quote: "I am what I am not yet",
    author: "Maxine Greene",
  },
  {
    quote:
      "Del Sur, del Este, del Oeste, del Norte, convergen los caminos que me han traído a mi secreto centro...<br> Pronto sabré; quién soy.",
    author: "Jorge Luis Borges",
  },
  {
    quote:
      "The most important tribute any human being can pay to a poem or a piece of prose he or she really loves is to learn it by heart. Not by brain, by heart; the expression is vital.",
    author: "George Steiner",
  },
  {
    quote:
      "The most important tribute any human being can pay to a poem or a piece of prose he or she really loves is to learn it by heart. Not by brain, by heart; the expression is vital.",
    author: "George Steiner",
  },
  {
    quote:
      "Vivez, si m'en croyez, n'attendez à demain:<br> Cueillez dès aujourd'hui les roses de la vie.",
    author: "Pierre de Ronsard",
  },
  {
    quote:
      "Notre Père qui êtes aux cieux<br>Restez-y<br>Et nous nous resterons sur la terrre<br>Qui est quelquefois si jolie<br>",
    author: "Jacques Prévert",
  },
  {
    quote:
      "Laissez lire, et laissez danser; ces deux amusements ne feront jamais de mal au monde.",
    author: "Voltaire",
  },
  {
    quote: "Stories are the single most powerful tool in a leader's toolkit.",
    author: "Howard Gardner",
  },
  {
    quote:
      "Mientras el cerebro sea un misterio, el universo continuará; siendo un misterio",
    author: "Santiago Ramón y Cajal",
  },
  {
    quote:
      "Todo hombre puede ser, si se lo propone, escultor de su propio cerebro",
    author: "Santiago Ramón y Cajal",
  },
  {
    quote:
      "Ecrire: essayer méticuleusement de retenir quelque chose: arracher quelques bribes précises au vide qui se creuse, laisser, quelque part, un sillon, une trace, une marque ou quelques signes",
    author: "Georges Perec",
  },
  {
    quote:
      "The man who is aware of himself is henceforward independent; and he is never bored, and life is only too short, and he is steeped through and through with a profound yet temperate happiness. He alone lives, while other people, slaves of ceremony, let life slip past them in a kind of dream. Once conform, once do what other people do because they do it, and lethargy steals over all the finer nerves and faculties of the soul. She becomes all outer show and inward emptiness; dull, callous and indifferent.",
    author: "Virginia Woolf",
  },
  {
    quote:
      "Si j'étais écrivain et mort, comme j'aimerais que ma vie se réduis&icirc;t, par les soins d'un biographe amical et désinvolte, à quelques détails, à quelques goûts, à quelques inflexions, disons des 'biographèmes' dont la distinction et la mobilité pourraient voyager hors de tout destin et venir toucher, à la manière des atomes épicuriens, quelque corps futur, promis à la même dispersion ; une vie 'trouée', en somme.",
    author: "Roland Barthes",
  },
  {
    quote:
      "Recuerde el alma dormida<br>avive el seso y despierte<br>contemplando<br>cómo se pasa la vida,<br>cómo se viene la muerte<br>tan callando.",
    author: "Jorge Manrique",
  },
  {
    quote:
      "Nuestras vidas son los ríos<br>que van a dar en la mar,<br>que es el morir",
    author: "Jorge Manrique",
  },
  {
    quote:
      "Look in the mirror, and don't be tempted to equate transient domination with either intrinsic superiority or prospects for extended survival",
    author: "Stephen Jay Gould",
  },
  {
    quote:
      "Life's but a walking shadow, a poor player<br>That struts and frets his hour upon the stage<br>And then is heard no more. It is a tale<br>Told by an idiot, full of sound and fury,<br>Signifying nothing.<",
    author: "William Shakespeare",
  },
  {
    quote:
      "Un instant encore, regardons ensemble les rives familières, les objets que sans doute nous ne reverrons plus..Tâchons d'entrer dans la mort les yeux ouverts.",
    author: "Marguerite Yourcenar",
  },
  {
    quote:
      "No one transcends. There is no future and no past. There is no remedy for death -or birth- except to hug the spaces in between. Live loud. Live wide. Live tall.",
    author: "Jim Crace",
  },
  {
    quote:
      "Croyez ceux qui cherchent la vérité, doutez de ceux qui la trouvent.",
    author: "André Gide",
  },
  {
    quote: "Regarde de tous tes yeux. Regarde.",
    author: "Jules Verne",
  },
  {
    quote: "...la séduction trompeuse du raisonnement analogique...",
    author: "Georges Pérec",
  },
  {
    quote:
      "...voyelles qui sont comme les éléments purs, les cellules primitives du langage...",
    author: "Jean Tardieu",
  },
  {
    quote:
      "parfois, l'obscurité dessine d'abord la forme imprécise d'un as de pique...",
    author: "Georges Pérec",
  },
  {
    quote:
      "Meglio astenersi dal governare il destino degli altri, dal momento<br>che è già difficile ed incerto pilotare il proprio.",
    author: "Primo Levi",
  },
  {
    quote:
      "Every man is wise when attacked by a mad dog; fewer when pursued by a mad woman; only the wisest survive when attacked by a mad notion.",
    author: "Robertson Davies",
  },
  {
    quote: "Fanaticism is...overcompensation for doubt",
    author: "Robertson Davies",
  },
  {
    quote:
      "A truly great book should be read in youth, again in maturity and once more in old age, as a fine building should be seen by morning light, at noon and by moonlight.",
    author: "Robertson Davies",
  },
  {
    quote:
      "I vaig sentir d'una manera forta el pas del temps. No el temps dels núvols i del sol i de la pluja i del pas de les estrelles adornament de la nit, no el temps de les primaveres dintre el temps de les primaveres i el temps de les tardors dintre el temps de les tardors, no el que posa les fulles a les branques o el que les arrenca, no el que arrissa i desarrissa i colora les flors, sinó el temps dintre de mi, el temps que no es veu i ens pasta. El que roda i roda a dintre del cor i el fa rodar a ell i ens va canviant per dins i per fora i amb paciència ens va fent tal i com serem l'últim dia.",
    author: "Mercè Rodoreda",
  },
  {
    quote:
      "Ainsi qu'au début il est formé par le désir, l'amour n'est entretenu plus tard que par l'anxiété douloureuse...L'amour, dans l'anxiété douloureuse comme dans le désir heureux, est l'exigence d'un tout. Il ne na&icirc;t, il ne subsiste que si une partie reste à conquérir. On n'aime que ce qu'on ne possède pas tout entier.",
    author: "Marcel Proust",
  },
  {
    quote:
      "Dans l'état d'esprit où l'on observe, on est très au-dessous du niveau où l'on se trouve quand on crée.",
    author: "Marcel Proust",
  },
  {
    quote:
      "On croit que selon son désir on changera autour de soi les choses, on le croit parce que, hors de là, on ne voit aucune solution favorable. On ne pense pas à celle qui se produit le plus souvent et qui est favorable aussi: nous n'arrivons pas à changer les choses selon notre désir, mais peu à peu notre désir change. La situation que nous espérions changer parce qu'elle nous était insupportable, nous devient indifférente. Nous n'avons pas pu surmonter l'obstacle, comme nous le voulions absolument, mais la vie nous l'a fait tourner, dépasser, et c'est à peine alors si en nous retournant vers le lointain du passé nous pouvons l'apercevoir, tant il est devenu imperceptible.",
    author: "Marcel Proust",
  },
  {
    quote:
      "Nesta vida, em que sou meu sono, não sou meu dono, quem sou é quem me ignoro e vive, através desta névoa que sou eu, todas as vidas que eu outrora tive, numa só vida. Mar sou; baixo marulho ao alto rujo, mas minha cor vem do meu alto céu, e só me encontro quando de mim fujo.",
    author: "Fernando Pessoa",
  },
  {
    quote:
      "Les mots qui vont surgir savent de nous des choses que nous ignorons d'eux.",
    author: "René Char",
  },
  {
    quote: "Vivre, c'est s'obstiner à achever un souvenir.",
    author: "René Char",
  },
  {
    quote:
      "Il semble que l'imagination qui hante à des degrés divers l'esprit de toute créature soit pressée de se séparer d'elle quand celle-ci ne lui propose que 'l'impossible' et 'l'inaccessible' pour extrême mission. Il faut admettre que la poésie n'est pas toujours souveraine.",
    author: "René Char",
  },
  {
    quote: "La ligne de vol du poème. Elle devrait être sensible à chacun.",
    author: "René Char",
  },
  {
    quote: "Forever is composed of nows.",
    author: "Emily Dickinson",
  },
  {
    quote:
      "They might not need me; but they might. I'll let my head be just in sight; a smile as small as mine might be precisely their necessity.",
    author: "Emily Dickinson",
  },
  {
    quote:
      "Une œuvre d'homme n'est rien d'autre que ce long cheminement pour retrouver par les détours de l'art les deux ou trois images simples et grandes sur lesquelles le cœur une première fois s'est ouvert.",
    author: "Albert Camus",
  },
  {
    quote: "Au milieu de l'hiver, j'ai découvert en moi un invincible été.",
    author: "Albert Camus",
  },
  {
    quote:
      "Beau comme la rencontre fortuite sur une table de dissection d'une machine à coudre et d'un parapluie.",
    author: "Isidore Ducasse",
  },
  {
    quote:
      "C'était une journée de printemps. Les oiseaux répandaient leurs cantiques en gazouillements, et les humains, rendus à leurs différents devoirs, se baignaient dans la sainteté de la fatigue.",
    author: "Isidore Ducasse",
  },
  {
    quote:
      "Para além da orelha existe um som, à extremidade do olhar um aspecto, às pontas dos dedos um objeto - é para lá que eu vou. À ponta do lápis o traço. Onde expira um pensamento está uma idéia, ao derradeiro hálito de alegria uma outra alegria, à ponta da espada a magia - é para lá que eu vou. Na ponta dos pés o salto.",
    author: "Clarice Lispector",
  },
  {
    quote:
      "Doubt, it seems to me, is the central condition of a human being in the twentieth century.",
    author: "Salman Rushdie",
  },
  {
    quote:
      "We know that a man can read Goethe or Rilke in the evening, that he can play Bach and Schubert, and go to his day's work at Auschwitz in the morning.",
    author: "George Steiner",
  },
  {
    quote:
      "Language can only deal meaningfully with a special, restricted segment of reality. The rest, and it is presumably the much larger part, is silence.",
    author: "George Steiner",
  },
  {
    quote:
      "Every single pleasure I can imagine or have experienced is more delightful, more of a pleasure, if you take it in small sips, if you take your time. Reading is not an exception.",
    author: "Amos Oz",
  },
  {
    quote: "les lois non écrites, inébranlables des dieux...",
    author: "Sophocle",
  },
  {
    quote:
      "The tension felt in the modern world between those who look at the confluence of neuroscientific data, historical data, and other information illuminating our past and those who simply accept received wisdom as their guide in life is real and profound. Yet it may not be as divisive as one would think. It appears that all of us share the same moral networks and systems, and we all respond in similar ways to similar issues. The only thing different, then, is not our behavior but our theories about why we respond the way we do. It seems to me that understanding that our theories are the source of all our conflicts would go a long way in helping people with different belief systems to get along.",
    author: "Michael Gazzaniga",
  },
  {
    quote: "an unexamined life is not worth living",
    author: "Socrates",
  },
  {
    quote:
      "The activities of a life are infused by examination, not just affected by it, and their character is different when permeated by the results of concentrated reflection...Therefore, examination and reflection are not just <b>about</b> the other components of life; they are added <b>within</b> a life, alongside the rest, and by their presence call for a new overall pattern that alters how each part of life is understood.",
    author: "Robert Nozick",
  },
  {
    quote:
      "Voyager: cent fois remettre sa tête sur le billot, cent fois aller la reprendre dans le panier à  son pour la retrouver presque pareille. On espérait tout de même un miracle alors qu'il n'en faut pas attendre d'autre que cette usure et cette érosion de la vie avec laquelle nous avons rendez-vous, devant laquelle nous nous cabrons bien à tort.",
    author: "Nicolas Bouvier",
  },
  {
    quote:
      "On ne voyage pas pour se garnir d'exotisme et d'anecdotes comme un sapin de No&euml;l, mais pour que la route vous plume, vous rince, vous essore, vous rende comme ces serviettes élimées par les lessives qu'on vous tend avec un éclat de savon dans les bordels. On s'en va loin des alibis ou des malédictions natales, et dans chaque ballot crasseux coltiné dans des salles d'attente archibondées, sur de petits quais de gare atterrants de chaleur et de misère, ce qu'on voit passer c'est son propre cercueil. Sans ce détachement et cette transparence, comment espérer faire voir ce qu'on a vu? Devenir reflet, écho, courant d'air, invité muet au petit bout de la table avant de piper mot.",
    author: "Nicolas Bouvier",
  },
  {
    quote:
      "La poésie m'est plus nécessaire que la prose parce qu'elle est extrêmement directe, brutale - c'est du full-contact!",
    author: "Nicolas Bouvier",
  },
  {
    quote:
      "Le monde ancien ne peut me toucher je suis libre<br>Je ne suis pas un fils de roi je suis un homme<br>Debout qu'on a voulu abattre",
    author: "Paul Eluard",
  },
  {
    quote:
      "Je ne vois clair et je ne suis intelligible<br>Que si l'amour m'apporte le pollen d'autrui<br>Je m'énivre au soleil de la présence humaine<br>Je m'anime marée de tous ses éléments",
    author: "Paul Eluard",
  },
  {
    quote: "vous aimeriez éperdument<br>si vous aimiez",
    author: "Charles Trenet",
  },
  {
    quote:
      "L'idée que l'on peut se faire en secret de la poésie ne limite pas forcément à celle-ci. Mais comme les rêves inavouables elle risque de causer des troubles de mémoire et d'empêcher la formation régulière d'un monde supérieur à celui où l'oubli est utile à la conservation prudente de l'individu.<br>Il faut effacer le reflet de la personnalité pour que l'inspiration bondisse à tout jamais du miroir. Laissez les influences jouer librement, inventez ce qui a déjà été inventé, ce qui est hors de doute, ce qui est incroyable, donnez à la spontanéité sa valeur pure. Soyez celui à qui l'on parle et qui est entendu. Une seule vision, variée à l'infini.<br>Le poète est celui qui inspire bien plus que celui qui est inspiré.",
    author: "Paul Eluard",
  },
  {
    quote:
      "Art alone makes life possible; this is how radically I should like to formulate it. I would say that without art man is inconceivable in physiological terms... I would say man does not consist only of chemical processes, but also of metaphysical occurrences. The provocateur of the chemical processes is located outside the world. Man is only truly alive when he realizes he is a creative, artistic being... Even the act of peeling a potato can be a work of art if it is a conscious act.",
    author: "Joseph Beuys",
  },
  {
    quote:
      "But one is forced to translate thought into action and action into object... I am not a teacher who tells his students only to think. I say: act; do something: I ask for result. It may take different forms. It can have the form of sound, or someone can do a book, make a drawing or a sculpture. I don't care...",
    author: "Joseph Beuys",
  },
  {
    quote:
      "I would like to declare why I feel that it's now necessary to establish a new kind of art, able to show the problems of the whole society, of every living being, and how this new discipline, which I call social sculpture, can realize the future of humankind. It could be a guarantee for the evolution of the earth as a planet, establish conditions for other planetarians too, and you can control it with your own thinking. It could be a guarantee for the evolution of the earth as a planet, establish conditions for other planetarians too, and you can control it with your own thinking...Here my idea is to declare that art is the 'only' possibility for evolution, the only possibility to change the situation in the world. But then you have to enlarge the idea of art to include the whole creativity. And if you do that, it follows logically that every living being is an artist, an artist in the sense that he can develop his own capacity... And therefore, in short, I'm saying, all work that's done has to have the quality of art. We can see later about developing a proof for this by thinking about these problems. Here is a general structure to show what I means by a social sculpture...",
    author: "Joseph Beuys",
  },
  {
    quote:
      "Istruitevi, perché avremo bisogno di tutta la nostra intelligenza. Agitatevi, perché avremo bisogno di tutto il nostro entusiasmo. Organizzatevi, perché avremo bisogno di tutta la nostra forza.",
    author: "Antonio Gramsci",
  },
  {
    quote: "In principio era il verbo... No, in principio era il sesso.",
    author: "Antonio Gramsci",
  },
  {
    quote:
      "And might not the investigation of what is literally happening to oneself remain the most human, therefore the most serious and the most amusing, of all possible activities?",
    author: "Clement Greenberg",
  },
  {
    quote: "Books are funny little portable pieces of thought.",
    author: "Susan Sontag",
  },
  {
    quote:
      "Je dois beaucoup à mes pieds: sans eux que d'idées, de sensations, de réflexions, que de plans et de résolutions ne me seraient pas venus;je leur dois mes jouissances les plus complètes et les plus pures. Sans eux je n'aurais jamais goûté le sentiment de l'indépendance, tel que je le connais.",
    author: "Gotthilf Theodor von Faber",
  },
  {
    quote:
      "We work in the dark--we do what we can--we give what we have. Our doubt is our passion and our passion is our task. The rest is the madness of art.",
    author: "Henry James",
  },
  {
    quote:
      "Nous sommes rêvés par quelqu'un qui a un très mauvais rêve. Et il dort profondément.",
    author: "Jean Cocteau",
  },
  {
    quote:
      "Il faut déjà passablement d'intelligence pour souffrir de n'en avoir pas davantage.",
    author: "André Gide",
  },
  {
    quote:
      "Genes are rarely about inevitability, especially when it comes to humans, the brain, or behavior. They're about vulnerability, propensities, tendencies.",
    author: "Robert Sapolsky",
  },
  {
    quote:
      "If a rat is a good model for your emotional life, you're in big trouble.",
    author: "Robert Sapolsky",
  },
  {
    quote:
      "The past does not only draw us back to the past. There are certain memories of the past that have strong steel springs and, when we who live in the present touch them, they are suddenly stretched taut and then they propel us into the future.",
    author: "Yukio Mishima",
  },
  {
    quote:
      "Yet how strange a thing is the beauty of music! The brief beauty that the player brings into being transforms a given period of time into pure continuance; it is certain never to be repeated; like the existence of dayflies and other such short-lived creatures, beauty is a perfect abstraction and creation of life itself. Nothing is so similar to life as music.",
    author: "Yukio Mishima",
  },
  {
    quote: "Le roman, c'est la clé des chambres interdites de notre maison.",
    author: "Louis Aragon",
  },
  {
    quote: "Le temps d'apprendre à vivre, il est déjà trop tard.",
    author: "Louis Aragon",
  },
  {
    quote:
      "Rien n'est plus vieux que le journal du matin et Homère est toujours jeune.",
    author: "Jean Giraudoux",
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "C'est une chose étrange à la fin que le monde<br>Un jour je m'en irai sans en avoir tout dit<br>Ces moments de bonheur ces midis d'incendie....",
    author: "Louis Aragon",
  },
  {
    quote: "When we are no longer children we are already dead",
    author: "Constantin Brancusi",
  },
  {
    quote:
      "The function of art is to make that understood which in the form of argument would be incomprehensible.",
    author: "Constantin Brancusi",
  },
  {
    quote:
      "The role of the artist is to renew our lives, but also, in turn, to listen internally to the song of the child within us all.",
    author: "Arno Minkinnen",
  },
  {
    quote:
      "Créer une oeuvre d'art reste la plus prodigieuse tentation de l'être humain pour enfreindre les limites où le temps et l'espace le définissent et l'enferment, pour trouver en ces deux champs offerts à son activité un débouché vers la durée et autrui, une expansion qui fasse éclater sa condition d'individu, restreinte et éphémère.",
    author: "René Huyghe",
  },
  {
    quote:
      "I have learned that if you must leave a place that you have lived in and loved and where all your yesteryears are buried deep, leave it any way except a slow way, leave it the fastest way you can. Never turn back and never believe that an hour you remember is a better hour because it is dead. Passed years seem safe ones, vanquished ones, while the future lives in a cloud, formidable from a distance.",
    author: "Beryl Markham",
  },
  {
    quote:
      "Mary had a little lamb, its fleece electrostatic<br>And everywhere Mary went, the lights became erratic.",
    author: "David Foster Wallace",
  },
  {
    quote:
      "Je n'avais pas vraiment survécu Je n'étais pas sûr d'être un vrai survivant. J'avais traversé la mort, elle avait été une expérience de ma vie.",
    author: "Jorge Semprun",
  },
  {
    quote:
      "Was it really some other person I was so anxious to discover...or was it only my own solitude that I could not abide?",
    author: "David Markson",
  },
  {
    quote:
      "Fuck concepts. Don't be afraid to be confused. Try to remain permanently confused. Anything is possible. Stay open, forever, so open it hurts, and then open up some more, until the day you die, world without end, amen.",
    author: "George Saunders",
  },
  {
    quote:
      "In art, and maybe just in general, the idea is to be able to be really comfortable with contradictory ideas. In other words, wisdom might be, seem to be, two contradictory ideas both expressed at their highest level and just let to sit in the same cage sort of, vibrating. So, I think as a writer, I'm really never sure of what I really believe.",
    author: "George Saunders",
  },
  {
    quote:
      "That everyone is identical in their secret unspoken belief that way deep down they are different from everyone else. That this isn't necessarily perverse.",
    author: "David Foster Wallace",
  },
  {
    quote:
      "Almost nothing important that ever happens to you happens because you engineer it. Destiny has no beeper; destiny always leans trenchcoated out of an alley with some sort of 'psst' that you usually can't even hear because you're in such a rush to or from something important you've tried to engineer.",
    author: "David Foster Wallace",
  },
  {
    quote:
      "Irony's useful for debunking illusions, but most of the illusion-debunking in the U.S. has now been done and redone... Postmodern irony and cynicism's become an end in itself, a measure of hip sophistication and literary savvy. Few artists dare to try to talk about ways of working toward redeeming what's wrong, because they'll look sentimental and naive to all the weary ironists. Irony's gone from liberating to enslaving. There's some great essay somewhere that has a line about irony being the song of the prisoner who's come to love his cage...",
    author: "David Foster Wallace",
  },
  {
    quote:
      "Il n'est pas mauvais que certains hommes aient la force d'attacher plus de conséquence et de prix à la détermination d'une lointaine décimale ou de la position d'une virgule, qu'à la nouvelle la plus retentissante, à la catastrophe la plus considérable, ou à leur vie même.",
    author: "Paul Valéry",
  },
  {
    quote:
      "Mon âme a plus de soif d'être étonnée que de toute autre chose. L'attente, le risque, un peu de doute, l'exaltent et la vivifient bien plus que ne le fait la possession du certain.",
    author: "Paul Valéry",
  },
  {
    quote:
      "Without the ability to think about yourself, to reflect on your life, there's really no awareness, no consciousness. Consciousness doesn't come automatically; it comes through being alive, awake, curious, and often furious.",
    author: "Maxine Greene",
  },
  {
    quote:
      "Drawing to me is a language that allows me to understand the world, an analytical tool. It is a practical means to assign perception to memory. I understand complexities through drawing, it enables me to grasp them.",
    author: "Richard Serra",
  },
  {
    quote:
      "Drawing is a concentration on an essential activity, and the credibility of the statement is totally within your hands. It's the most direct, conscious space in which I work. I can observe my process from beginning to end, and at times sustain a continuous concentration. It's replenishing. It's one of the few conditions in which I can understand the source of my work.",
    author: "Richard Serra",
  },
  {
    quote:
      "Creation is really a sustained period of bliss - even though the subject can still be very sad. Because there's the triumph of coming through and understanding that you have, and that you did it the way only you could do it - you didn't do it the way somebody told you to do it, you did it just the way you had to do it. And that is what makes us us.",
    author: "Alice Walker",
  },
  {
    quote:
      "la poésie, celle que je lis et celle que parfois je m'essaie ã écrire, m'aide à regarder les choses de manière plus attentive, me permet de mieux écouter les voix et les destins des personnes. Encore plus aujourd'hui, je crois que ce pouvoir particulier de la parole poétique dépend avant tout du fait qu'elle est aussi marginale, aussi exilée, aussi hors jeu, aussi inutile et aussi invisible. C'est précisément à cause de cela qu'elle sait voir et sait écouter ; et quand elle parle, elle le fait d'en bas, à partir d'une expérience quotidienne commune et partagée.",
    author: "Fabio Pusterla",
  },
  {
    quote:
      "L'ouvrage d'un regard d'heure en heure affaibli<br>n'est pas plus de rêver que de former des pleurs,<br>mais de veiller comme un berger et d'appeler<br>tout ce qui risque de se perdre s'il s'endort.<br>...<br>Tel est le monde.<br>Nous ne le voyons pas très longtemps : juste assez<br>pour en garder ce qui scintille et va s'éteindre<br>pour appeler encore et encore, et trembler de ne plus voir.",
    author: "Philippe Jaccottet",
  },
  {
    quote:
      "Nulle part au monde autant que dans ce pays, au cours de ce voyage, la terre encore habitable -plaines, champs, vallées, grèves et forêts- ne m'a paru aussi comparable à un chant auquel il était impossible que ne s'ajoutât pas une fois au moins le chant de la parole humaine, à un chant contenu, soutenu, non pas monotone mais profondément un, tout en étant sans cesse soumis à de légères modulations qui vous portent de lieu en lieu, de halte en halte, dans une sorte de jubilation intérieure et d'accord avec la totalité de tout ce qui existe; prêts du coup en chaque site, à réentendre, même de très loin, dans l'enceinte sacrée, en frissonnant, une presque éternité murmurante qu'il n'était pas trop de tous ces temples pour encager.",
    author: "Philippe Jaccottet",
  },
  {
    quote:
      "Qu'est que le regard?<br>un dard plus aigu que la langue<br>la course d'un excès à l'autre<br>du plus profond au plus lointain<br>du plus sombre au plus pur<br>un rapace",
    author: "Philippe Jaccottet",
  },
  {
    quote:
      "La grande question pour qui s'entête à écrire : comment mettre les mots à l'épreuve, comment faire pour qu'ils contiennent le pire même quand ils sont lumineux, la pesanteur quand la grâce les porte?",
    author: "Philippe Jaccottet",
  },
  {
    quote:
      "Il nous arrive d'imaginer dans les choses ou derrière elles, où à leur racine un ordre inexplicable, une architecture secrète et qui donne au moins un moment de la joie et qu'à cet ordre on a pu donner le nom de beauté",
    author: "Philippe Jaccottet",
  },
  {
    quote: "Le poète, conservateur des infinis visages du vivant.",
    author: "René Char",
  },
  {
    quote:
      "Ce qui est important c'est d'arriver à mettre au clair, ce que le poète a de plus inconnu en lui, de plus secret, de plus caché, de plus difficile à déceler, d'unique.",
    author: "Pierre Reverdy",
  },
  {
    quote:
      "Le mystère des portes<br>On franchit l'émotion qui barre le chemin<br>Et sans se retourner on va toujours plus loin<br>La maison ne suit pas<br>La maison nous regarde",
    author: "Pierre Reverdy",
  },
  {
    quote:
      "...un fleuve distrait<br>est sorti de son lit, un tyran s'est levé<br>hirsute, ou c'est l'ombre d'un nuage <br>qui change tout à coup l'écriture du monde,<br>et l'enfant qui rêvait dans la poudreuse<br>complicité des livres ne trouve plus<br>le chemin tracé où la vie se lit<br>comme les lignes de la main...",
    author: "Guy Goffette",
  },
  {
    quote:
      "le cinquième horizon est l'horizon que je cherche, j'aime la mer derrière la mer",
    author: "Guy Goffette",
  },
  {
    quote:
      "le seul contact réel de l'homme moderne avec la sacralité cosmique s'effectue par l'inconscient. qu'il s'agisse de ses rêves et de sa vie imaginaire, ou des créations qui surgissent de l'inconscient.",
    author: "Mircea Eliade",
  },
  {
    quote: "Sans doute riez-vous du rêveur<br>Qui voyait des fleurs en hiver",
    author: "Wilhelm Müller",
  },
  {
    quote:
      "Il faut viser d'autant plus juste que sont peu nombreux les éléments du poème, en peser le poids sur des balances d'autant plus sensibles qu'ils sont légers. Alors seulement, la cible atteinte n'est plus une cible, mais une ouverture où la flèche se sera engouffrée ; alors seulement le coup d'éventail imperceptible aura produit une onde capable de se propager ã l'infini.",
    author: "Philippe Jaccottet",
  },
  {
    quote: "Tell all the truth but tell it slant.",
    author: "Emily Dickinson",
  },
  {
    quote:
      "Questo è il tempio dell'intelletto. E io ne sono il sommo sacerdote. Siete voi che profanate il sacro recinto. Voi vincerete perché avete la forza bruta. Ma non convincerete. Perché, per convincere, bisogna persuadere. E per persuadere occorre proprio quello che a voi manca: ragione e diritto nella lotta. Io considero inutile esortarvi a pensare alla Spagna. Ho finito.",
    author: "Miguel de Unamuno",
  },
  {
    quote:
      "I think interpretation tries to liberate what one understands unconsciously. When one can let loose some things in performance that one doesn't know are there -- unexpected things and surprises -- that's when it's really worthwhile.",
    author: "Martha Argerich",
  },
  {
    quote:
      "Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.",
    author: "Isaac Asimov",
  },
  {
    quote:
      "I do things like get in a taxi and say, 'The library, and step on it.'",
    author: "David Foster Wallace",
  },
  {
    quote:
      "Le radici sono importanti, nella vita di un uomo, ma noi uomini abbiamo le gambe, non le radici, e le gambe sono fatte per andare altrove.",
    author: "Pino Cacucci",
  },
  {
    quote:
      "One of the things that was really influential early on was Ezra Pound's Cantos, one poem he worked on for 50 years. It's epic. I had a great deal of difficulty understanding it. One of the problems was you'd be reading along in English and he would move to a Chinese ideogram or French. He actually used seven different languages in a given poem. And for somebody who's not fluent in different languages it has the impact of rupturing your way of understanding something.",
    author: "Richard Misrach",
  },
  {
    quote:
      "What I want is the world to remember the problems and the people I photograph. What I want is to create a discussion about what is happening around the world and to provoke some debate with these pictures. Nothing more than this. I don't want people to look at them and appreciate the light and the palate of tones. I want them to look inside and see what the pictures represent, and the kind of people I photograph.",
    author: "Sebastião Salgado",
  },
  {
    quote:
      "I want my work to become part of our visual history, to enter our collective memory and our collective conscience. I hope it will serve to remind us that history's deepest tragedies concern not the great protagonists who set events in motion but the countless ordinary people who are caught up in those events and torn apart by their remorseless fury. I have been a witness, and these pictures are my testimony. The events I have recorded should not be forgotten and must not be repeated.",
    author: "James Nachtwey",
  },
  {
    quote:
      "the great geniuses are those who have kept their childlike spirit and have added to it breadth of vision and experience.",
    author: "Alfred Stieglitz",
  },
  {
    quote:
      "Le génie n'est pas un don, mais la façon dont on invente dans des circonstances désespérées.",
    author: "Jean Paul Sartre",
  },
  {
    quote:
      "Nunca dejes de sonreír, ni siquiera cuando estés triste, porque nunca sabes quien se puede enamorar de tu sonrisa.",
    author: "Gabriel García Márquez",
  },
  {
    quote:
      "He aprendido que el mundo quiere vivir en la cima de la montaña, sin saber que la verdadera felicidad está en la forma de subir la escarpada",
    author: "Gabriel García Márquez",
  },
  {
    quote: "It's always night or we wouldn't need light.",
    author: "Thelonious Monk",
  },
  {
    quote: "But that's another story.",
    author: "Rudyard Kipling",
  },
  {
    quote: "For the female of the species is more deadly than the male.",
    author: "Rudyard Kipling",
  },
  {
    quote:
      "Una volta che abbiate conosciuto il volo, camminerete sulla terra guardando il cielo, perché là siete stati e là desidererete tornare.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "Le vertige, c'est autre chose que la peur de tomber. C'est la voix du vide au-dessous de nous qui nous attire et nous envoûte, le désir de chute dont nous nous défendons ensuite avec effroi. Avoir le vertige c'est être ivre de sa propre faiblesse. On a conscience de sa faiblesse et on ne veut pas lui résister, mais s'y abandonner. On se soûle de sa propre faiblesse, on veut être plus faible encore, on veut s'écrouler en pleine rue aux yeux de tous, on veut être ã terre, encore plus bas que terre.",
    author: "Milan Kundera",
  },
  {
    quote:
      "Il n'est pas nécessaire que tu sortes de ta maison. Reste à ta table et écoute. N'écoute même pas, attends seulement. N'attends même pas, sois absolument silencieux et seul. Le monde viendra s'offrir à toi pour que tu le démasques, il ne peut faire autrement, extasié, il se tordra devant toi.",
    author: "Franz Kafka",
  },
  {
    quote:
      "You fellows know there are those voyages that seem ordered for the illustration of life, that might stand for a symbol of existence.",
    author: "Joseph Conrad",
  },
  {
    quote: "Le désespoir a trois paires de jambes...",
    author: "Ghérasim Luca",
  },
  {
    quote:
      "À certains moments<br>ce qui s'est perdu<br>est plus là<br>que ce qui est<br>là",
    author: "Antoine Emaz",
  },
  {
    quote:
      "Écrire consiste d'abord à rejoindre l'énergie illisible des mots. C'est tout ce que l'on peut demander à un poète",
    author: "Antoine Emaz",
  },
  {
    quote:
      "Ce n'est pas la page qui angoisse, mais ce qu'on serait capable d'écrire, sans retenue.",
    author: "Antoine Emaz",
  },
  {
    quote:
      "J'ai beau écrire, je ne parviens pas à 'rejoindre'. Toujours séparé. Je mange de l'intervalle. Cela n'est vrai qu'au présent. Si je me retourne, j'aperçois quelques clairières dans le temps.",
    author: "Jean-Luc Sarré",
  },
  {
    quote:
      "La colombe légère, lorsque, dans son libre vol, elle fend l'air dont elle sent la résistance, pourrait s'imaginer qu'elle réussirait bien mieux encore dans le vide.",
    author: "Emmanuel Kant",
  },
  {
    quote:
      "Le poème intéressant est le drame du dire. Cette proposition simple signifie que s'y affrontent au moins deux forces, que j'identifierai ainsi : l'une d'énonciation, que le poème partage avec tous les morceaux d'élocution, qu'ils relèvent de la conversation courante, de la philosophie, de l'histoire dr&ocirc;le ou du reportage journalistique  : quelque chose essaie de s'y dire ; l'autre de désénonciation. Par ce mot, il faut entendre le refus ou l'empêchement du dire : une force négatrice, qui s'attaque à l'énonciation, la conteste, la désintègre, essaie de la rendre impossible. Le drame du poème, c'est l'aventure du petit chaperon de l'énonciation qui rencontre le loup de la désénonciation. Ou, pour le dire autrement : le poème est une cage. à l'intérieur s'affrontent un député en costume bleu et un anarchiste à capuche.",
    author: "Pierre Vinclair",
  },
  {
    quote:
      "Les affaires de désir ont lieu dans le nez : buée, fumée, rosée, ondes, particules, répulsions ou attractions invisibles, odeurs en creux et limaille en l'air.",
    author: "Philippe Sollers",
  },
  {
    quote:
      "La fantaisie et la liberté d'imagination ne s'acquièrent pas comme ça, qu'il y faut du temps, de l'obstination, de la sévérité, de la rigueur, des mathématiques, de la raison.",
    author: "Philippe Sollers",
  },
  {
    quote:
      "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    author: "Richard Feynman",
  },
  {
    quote:
      "Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best. Don't think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn't stop you from doing anything at all...",
    author: "Richard Feynman",
  },
  {
    quote:
      "Much of good science - and perhaps all of great science - has its roots in fantasy",
    author: "E.O. Wilson",
  },
  {
    quote:
      "We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people able to put together the right information at the right time, think critically about it, and make important choices wisely.",
    author: "E.O. Wilson",
  },
  {
    quote:
      "Every act of perception, is to some degree an act of creation, and every act of memory is to some degree an act of imagination.",
    author: "Oliver Sacks",
  },
  {
    quote:
      "Music, uniquely among the arts, is both completely abstract and profoundly emotional. It has no power to represent anything particular or external, but it has a unique power to express inner states or feelings. Music can pierce the heart directly; it needs no mediation.",
    author: "Oliver Sacks",
  },
  {
    quote:
      "Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure.",
    author: "Oliver Sacks",
  },
  {
    quote:
      "Penser qu'il faudrait le prendre en photo est le meilleur moyen de tuer l'intensité d'un moment.",
    author: "Sylvain Tesson",
  },
  {
    quote:
      "Usage de la fenêtre : inviter la beauté à entrer et laisser l'inspiration sortir.",
    author: "Sylvain Tesson",
  },
  {
    quote:
      "Lire nous confirme que la solitude est un trésor. Un livre peut changer une vie. Et dire qu'il n'y a aucune mise en garde d'inscrite sur la couverture!",
    author: "Sylvain Tesson",
  },
  {
    quote:
      "Language is like poppies. It just takes something to churn the earth round them up, and when it does up come the sleeping words, bright red, fresh, blowing about",
    author: "Ali Smith",
  },
  {
    quote:
      "remember you must live.<br>remember you most love.<br>remainder you mist leaf.",
    author: "Ali Smith",
  },
  {
    quote:
      "To me, an exercise in style is not a superficial matter - our lives are also an exercise in style",
    author: "Zadie Smith",
  },
  {
    quote:
      "The future's another country, man... And I still ain't got a passport",
    author: "Zadie Smith",
  },
  {
    quote: "Nothing is ever behind us",
    author: "Roberto Bolaño",
  },
  {
    quote:
      "Heureux les hommes qui pour jouir de la vie n'ont besoin ni d'espérer ni de prévoir",
    author: "Giacomo Casanova",
  },
  {
    quote:
      "Creativity is merely a plus name for regular activity. Any activity becomes creative when the doer cares about doing it right, or better",
    author: "John Updike",
  },
  {
    quote:
      "I like the construction of sentences and the juxtaposition of words-not just how they sound or what they mean, but even what they look like.",
    author: "Don DeLillo",
  },
  {
    quote:
      "La vie est une curieuse hirondelle coincée dans une vilaine poubelle: c'est là qu'elle palpite et cesse d'être belle. Vous n'avez rien saisi. Je le sens. Je reformule et esquisse la phrase. C'est simple. La vie est un voyage peu ou prou incertain. Un voyage plein de turbulences. Des turbulences associées ou non à des intempéries. Des intempéries impétueuses provoquées par la curiosité et la cruauté humaines.",
    author: "Ali Zamir",
  },
  {
    quote:
      "Tout tableau ... et surtout tout portrait, se situe au confluent d'un rêve et d'une réalité",
    author: "Georges Perec",
  },

   {
    quote:
      "Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo",
    author: "José Ortega y Gasset",
  },

   {
    quote:
      "J'ai reconnu le bonheur au bruit qu'il a fait en partant",
    author: "Jacques Prévert",
    },

    {
    quote:
      "La poésie, c'est le plus joli surnom que l'on donne à la vie",
    author: "Jacques Prévert",
  },

  {
    quote:
      "Y un día la Obra muere, como mueren todas las cosas, como se extinguirá el Sol y la Tierra, el Sistema Solar y la Galaxia y la más recóndita memoria de los hombres",
    author: "Roberto Bolaño",
  },
  
{
    quote:
      "“Now take a sheep,” the sergeant said. “What is a sheep, only millions of little bits of sheepness whirling around and doing intricate convolutions inside the sheep? What else is it but that?”",
    author: "Flann O'Brien",
  },

  {
    quote:
    "L'avantage de l’amateur généraliste sur le spécialiste ou l’expert, c’est qu’il ne peut jamais se faire confiance, il doit toujours vérifier, il n’a aucune théorie à défendre, c’est un éternel débutant",
    author: "Fabienne Raphoz",
  },

  {
    quote:
    "ce qu’on ne parvient pas à atteindre nous touche droit au cœur d’être pressenti",
   author: "Marc Blanchet",
  }, 

  {
    quote:
    "La probabilité qu’un jour nous prenions notre envol n’est-elle pas négligeable?",
author: "Aleš Šteger",
  }, 
];


//declare variables
let randValue = Math.floor(Math.random(1)*quotes.length);
let quote = quotes[randValue];
document.querySelector(".quote-text").innerHTML = quote['quote'];
document.querySelector(".quote-author").innerHTML = quote['author'];
