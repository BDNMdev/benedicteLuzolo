const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper p");

const imagesPath = "assets/images/";
const imageNames = [
  "06d75218fdfb449dba7ecaf322167cd4.jpg",
  "109340910_290758978910634_8472136551257116812_n.jpg",
  "117172497_300491851270680_5047589412644919186_n.jpg",
  "117353713_300524081267457_222213830860693824_n.jpg",
  "129149184_389105995742598_2863747036283338603_n.jpg",
  "146652891_428242088495655_8825468884936566549_n.jpg",
  "1664898700480.jpg",
  "1669890916685.jpg",
  "1669919794608.jpg",
  "1670100074102.jpg",
  "1670100125937.jpg",
  "1670100151669.jpg",
  "1672069961737.jpg",
  "1673037592876.jpg",
  "1673037599619.jpg",
  "1673037607893.jpg",
  "1673037620619.jpg",
  "1673037624360.jpg",
  "1673037627881.jpg",
  "1673037632667.jpg",
  "1673037638193.jpg",
  "1673037642467.jpg",
  "1673037645988.jpg",
  "1673037655066.jpg",
  "1673037661035.jpg",
  "1673037665742.jpg",
  "1689540872323.jpg",
  "1689540877931.jpg",
  "1689540890696.jpg",
  "1689540902461.jpg",
  "1689540912749.jpg",
  "1691010365283.jpg",
  "1691016005160.jpg",
  "1691016009389.jpg",
  "1691016016077.jpg",
  "1691016020415.jpg",
  "1691016024016.jpg",
  "1691016028497.jpg",
  "1691016041129.jpg",
  "1691016046536.jpg",
  "1691016050924.jpg",
  "1691016055222.jpg",
  "1691016058940.jpg",
  "1691016062488.jpg",
  "1691016067239.jpg",
  "1691016076277.jpg",
  "1691016079959.jpg",
  "1691016085517.jpg",
  "1691016090472.jpg",
  "1691016095542.jpg",
  "1691016100411.jpg",
  "1691016103625.jpg",
  "1732903492503.jpg",
  "1732903497913.jpg",
  "1732903504826.jpg",
  "1732903516392.jpg",
  "1732903523753.jpg",
  "1732903534037.jpg",
  "1732903561973.jpg",
  "1732903567459.jpg",
  "1732976979587.jpg",
  "1732976992295.jpg",
  "1732977006260.jpg",
  "1732977021227.jpg",
  "1736053197240.jpg",
  "1736053208453.jpg",
  "1736053215002.jpg",
  "1736053229507.jpg",
  "1736053235207.jpg",
  "1736053240854.jpg",
  "1736053246685.jpg",
  "1736053253583.jpg",
  "1736053278245.jpg",
  "1736053302272.jpg",
  "1736053315851.jpg",
  "1736053322867.jpg",
  "1736053336659.jpg",
  "1736053347196.jpg",
  "1736053356752.jpg",
  "1736053363057.jpg",
  "1736289790695.jpg",
  "1736289800067.jpg",
  "1736289808668.jpg",
  "1736289813836.jpg",
  "1737320923582.jpg",
  "1737320927505.jpg",
  "1737320930686.jpg",
  "1737320947960.jpg",
  "1737320954176.jpg",
  "1737320961886.jpg",
  "1737320966758.jpg",
  "1737320970552.jpg",
  "1737320975282.jpg",
  "1737320979131.jpg",
  "1737320985358.jpg",
  "1745060388218.jpg",
  "1745060393709.jpg",
  "1745426091823.jpg",
  "1745426097376.jpg",
  "1745426103889.jpg",
  "1745426109681.jpg",
  "1745426115579.jpg",
  "1745426120928.jpg",
  "1745426126210.jpg",
  "1745426131185.jpg",
  "1745426137377.jpg",
  "1745568672981.jpg",
  "1745568678760.jpg",
  "1745568684631.jpg",
  "1745568697276.jpg",
  "1745829234788.jpg",
  "1745829240833.jpg",
  "1745829247065.jpg",
  "1745829254630.jpg",
  "1745829269577.jpg",
  "1745829273420.jpg",
  "1748284089821.jpg",
  "1748284094676.jpg",
  "1748284098238.jpg",
  "1748284101725.jpg",
  "1748284106092.jpg",
  "1748284109593.jpg",
  "1748284114045.jpg",
  "1748284122039.jpg",
  "1748284125608.jpg",
  "1748284128772.jpg",
  "1748284132420.jpg",
  "1757711715322.jpg",
  "1757711725728.jpg",
  "1760506850796.jpg",
  "1760506854675.jpg",
  "1760506857857.jpg",
  "1760506860749.jpg",
  "1760506864174.jpg",
  "1760506875295.jpg",
  "1760506892516.jpg",
  "1e3cbe865a2d4040a911f0af67d8a524.jpg",
  "204549674_508549527131577_461238708927535040_n.jpg",
  "204885671_508541063799090_6358924267744282314_n.jpg",
  "204995866_508549140464949_3238548097590513611_n.jpg",
  "221667186_527229648596898_57748719564150475_n.jpg",
  "240764268_549697176350145_5483312155502695739_n.jpg",
  "247476484_586557272664135_9188731289879121367_n.jpg",
  "247738977_586557359330793_1941876672667293927_n.jpg",
  "248279158_586557329330796_3746141887250009024_n.jpg",
  "248340771_586557205997475_8565297592513486792_n.jpg",
  "248419375_586557215997474_8577118581070858701_n.jpg",
  "262679163_608890147097514_7166341113300337296_n.jpg",
  "286061167_722284689091392_2326779054141295888_n.jpg",
  "2b1db878daf64124b2437f73110b540c.jpg",
  "317401430_842983280354865_1498274453558509309_n.jpg",
  "317592447_842974023689124_717081108825392496_n.jpg",
  "317600936_842973957022464_416728840371011685_n.jpg",
  "317610140_843076343678892_2113869705952826407_n.jpg",
  "317614920_843083770344816_6262790572915105101_n.jpg",
  "317620734_843083650344828_7406227105154102208_n.jpg",
  "317626610_842973880355805_4014281341804509752_n.jpg",
  "317649342_842983287021531_8241523654454466507_n.jpg",
  "317668773_843083640344829_3099450472966948215_n.jpg",
  "317673593_842983210354872_383773158462188101_n.jpg",
  "317692893_842974020355791_898566554416321031_n.jpg",
  "317706899_842974053689121_4875905180816996762_n.jpg",
  "317734424_843075907012269_502917186479413949_n.jpg",
  "317792866_843083697011490_4731581304442308093_n.jpg",
  "317844925_842973923689134_498972648966628285_n.jpg",
  "322346658_698274731636188_4982238832939117848_n.jpg",
  "322376340_5598396330214666_7410832257824487302_n.jpg",
  "322395209_1561404034329076_8842502186156822897_n.jpg",
  "322538601_1095050077857719_5475057598936486046_n.jpg",
  "323921559_1133354760517075_2659369169788079754_n.jpg",
  "323996947_516436617223228_1851653357119318729_n.jpg",
  "324069990_941766103455443_6327659954110108701_n.jpg",
  "324071030_5684030251710355_8342569486283276694_n.jpg",
  "324118397_526792802747727_1065229789853497625_n.jpg",
  "324143631_1179587166007520_2767408086970542337_n.jpg",
  "324144282_558732275887389_4526358951560794975_n.jpg",
  "324146736_867322407843789_4398512501300368665_n.jpg",
  "324180157_900260344756355_2156733893318085690_n.jpg",
  "324180741_564870888507354_2302960392087903636_n.jpg",
  "324192667_740620420352400_6891128336563307681_n.jpg",
  "324232342_576961390426960_7677692355039886671_n.jpg",
  "324252207_1052785652773931_1966342621782951853_n.jpg",
  "324262247_1318855858970066_6679856364806737690_n.jpg",
  "324267018_508432957939594_2123333471478107360_n.jpg",
  "324269785_412392164381392_6472389907887839655_n.jpg",
  "324294252_1203393767276155_2253488689798197266_n.jpg",
  "324341146_900949091088580_6382692494506392271_n.jpg",
  "324342095_875301440479338_9201679011075804268_n.jpg",
  "324349143_2175632072646719_3792714125317012647_n.jpg",
  "324401578_740966677458022_5070783132802323371_n.jpg",
  "324405137_856441442353454_4004631811654588280_n.jpg",
  "324405802_622643076528699_8471545232420083482_n.jpg",
  "324406371_868185867768798_8093669479256646037_n.jpg",
  "324560500_672558824353860_6069939472695617198_n.jpg",
  "324580130_452834513567329_5409866977643808946_n.jpg",
  "324589850_729159565067675_3323604002490188426_n.jpg",
  "339302809_794589212385715_2243269079807181841_n.jpg",
  "361278689_976598570326668_4460706941906194884_n.jpg",
  "361294148_976598813659977_9186564124123856314_n.jpg",
  "361564811_976599123659946_2119271561259791096_n.jpg",
  "361568104_976598960326629_2013746097225489189_n.jpg",
  "379054588_1008045007182024_9188949195964678103_n.jpg",
  "66421306_103557450964122_7362754369860665344_n.jpg",
  "66429614_103554500964417_2983841624527732736_n.jpg",
  "66712195_101611694492031_9119099722785619968_n.jpg",
  "66896151_103554994297701_7383608459012341760_n.jpg",
  "67093999_113203046666229_8965067876130095104_n.jpg",
  "67260775_113203019999565_4499930896371023872_n.jpg",
  "67350609_113203543332846_2519269597828349952_n.jpg",
  "67487233_113205876665946_3762270456556552192_n.jpg",
  "67667018_120858452567355_4273563743092211712_n.jpg",
  "68250565_124114102241790_7401683017128738816_n.jpg",
  "68253540_120713089248558_9217815697793482752_n.jpg",
  "68320119_120713109248556_1422461956907859968_n.jpg",
  "68362753_124114205575113_6814686495299862528_n.jpg",
  "68489236_124114932241707_3747536785995988992_n.jpg",
  "68768455_126343855352148_7089809683531169792_n.jpg",
  "68858013_124114255575108_1462022604318572544_n.jpg",
  "68983635_124115388908328_2729611274643046400_n.jpg",
  "69228522_124114458908421_3793883533273989120_n.jpg",
  "69461398_129138635072670_5926195312380084224_n.jpg",
  "69587097_124008818918985_4372069011299500032_n.jpg",
  "69858827_129126838407183_5117054788420239360_n.jpg",
  "69943297_129138618406005_1646787132410298368_n.jpg",
  "70291240_129138568406010_3418637987288711168_n.jpg",
  "71640634_137593774227156_1190263621020549120_n.jpg",
  "71730518_137599340893266_7006152615482359808_n.jpg",
  "72692195_137594774227056_8105578545775902720_n.jpg",
  "79376616_152390929414107_1090486385363648512_n.jpg",
  "79438498_155087602477773_5543108977178443776_n.jpg",
  "80308309_159270122059521_7062211726925627392_n.jpg",
  "80680797_159270158726184_4886470694516293632_n.jpg",
  "81034212_159270088726191_8156313671593623552_n.jpg",
  "81082968_161554801831053_2108770397636788224_n.jpg",
  "82379547_161551241831409_8265180599942119424_n.jpg",
  "86616207_185620256091174_257467870462607360_n.jpg",
  "86659860_185620079424525_3248901970672484352_n.jpg",
  "86715785_183647076288492_1363194917211340800_n.jpg",
  "89780124_204994674153732_540444711337328640_n.jpg",
  "89809694_204994550820411_9036234427662860288_n.jpg",
  "89819820_204994554153744_7759184996652285952_n.jpg",
  "89829206_204994690820397_4408557661876912128_n.jpg",
  "90061333_204993460820520_3822748303368388608_n.jpg",
  "90241825_204995297487003_6065337001341616128_n.jpg",
  "91410913_213503156636217_6534858290654871552_n.jpg",
  "929d76354e174dec9c6fba80cf8475c2.jpg",
  "94312932_232203914766141_8439828989698113536_n.jpg",
  "94727018_232198074766725_5968999300049403904_n.jpg",
  "af3969e0d784401eaba36b8180637c7e.jpg",
  "b923850ec178459fb130e0260faf21b6.jpg",
  "cc55d107f89b4ea29ca623091c2e00ee.jpg",
  "ce6325079a3c4f78811308313fe3e5ae.jpg",
  "drive-download-20251015T062914Z-1-001.zip",
  "fef5ded197a84e588912e5f22cc6caf5.jpg",
  "photo2.png",
];

// 1️⃣ Ajout automatique des images dans le carousel
imageNames.forEach((img) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = `${imagesPath}${img}`;
  image.alt = "Souvenir de nomB 💕";

  // Click pour ouvrir lightbox
  image.addEventListener("click", () => openLightbox(image.src));

  card.appendChild(image);
  carousel.appendChild(card);
});

// 2️⃣ Lightbox
function openLightbox(src) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = 0;
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 1000;
  overlay.style.cursor = "pointer";

  const img = document.createElement("img");
  img.src = src;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";

  overlay.appendChild(img);

  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  document.body.appendChild(overlay);
}

// 3️⃣ Attendre le chargement de la première image pour calculs
const firstCard = carousel.querySelector(".card img");
firstCard.addEventListener("load", () => {
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const carouselChildrens = [...carousel.children];
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  // Duplication pour infinite scroll
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) =>
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
    );

  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) =>
      carousel.insertAdjacentHTML("beforeend", card.outerHTML)
    );

  // 4️⃣ Flèches
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.classList.contains("left")
        ? -firstCardWidth
        : firstCardWidth;
    });
  });

  // 5️⃣ Drag & Drop
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  // 6️⃣ AutoPlay
  const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
      carousel.scrollLeft += firstCardWidth;
      autoPlay();
    }, 2500);
  };
  autoPlay();

  // 7️⃣ Infinite scroll
  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) >=
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    autoPlay();
  };
  carousel.addEventListener("scroll", infiniteScroll);
});

// Messages à afficher
const messages = [
  "Ton sourire a le pouvoir de me faire oublié tout me problème.",
  "Chaque souvenir avec toi est un trésor que je garde précieusement.",
  "Tes yeux mes deconnecte de ce monde, j'ai l'impression être dans un monde où on est juste tout le 2 et ce comme si temps n'existe plus",
  "Le temps passe, mais ton éclat reste, comme une étoile qui ne s’éteint jamais.",
  "Ta presence me rend très alaise et je sens que le vide qui est en moi tu viens le comblé",
  "Même loin du visage tu es toujours present dans mon coeur",
  "Ta voix me donne de frissons, au point ou je me sens dans monté au ciel",
  "Ton âme à une grande douceur qui rechauffe mon coeur",
  "Pour exprimer tout mon amour que j'ai pour toi, je n'ai pas de mot pour le décrire, tu me fais manque de mot et parfois j'ai juste envie de te regarder pendant des heures",
  "Le mot ne va pas suffire pour exprimer mon amour envers toi mais tout se resume dans une seule phrase: \"j'ai t'aime, mon amour 💖, et Joyeux anniversaire Mon Coeur 💕!!!\""
];

// Ajouter les messages dynamiquement
const messagesContainer = document.getElementById("messagesContainer");

messages.forEach(text => {
  const div = document.createElement("div");
  div.className = "quote";
  div.textContent = text;
  messagesContainer.appendChild(div);

  // Animation d'apparition
  setTimeout(() => div.classList.add("show"), 100);
});
