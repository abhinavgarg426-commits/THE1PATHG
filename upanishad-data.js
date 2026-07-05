/**
 * upanishad-data.js — 10 Principal Upanishads
 * Sanskrit + Transliteration + Translation
 */

const UPANISHADS = [
    {
        name: "Isha Upanishad",
        sanskrit_name: "ईशोपनिषद्",
        subtitle: "The Lord Hidden in All",
        verses: [
            { sanskrit: "ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्य स्विद्धनम्॥", translit: "Isha vasyam idam sarvam yat kincha jagatyam jagat. Tena tyaktena bhunjiitha ma gridhah kasya svid dhanam.", translation: "Everything in the world is enveloped by the Lord. Enjoy what he grants without coveting another's wealth. Do not desire the wealth of others.", ref: "Isha Upanishad 1" },
            { sanskrit: "कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः। एवं त्वयि नान्यथेत्थं स्यादन्यथा शून्यवत्स्थितिः॥", translit: "Kurvanneva iha karmani jijivishech chatam samah. Evam tvayi nanyathetham syad anyatha shunyasya sthitih.", translation: "Perform your prescribed duties here for a hundred years. Only such action will free you from the cycle. Without action, one becomes empty and trapped — this is the truth hidden in all beings.", ref: "Isha Upanishad 2" },
            { sanskrit: "असुर्यनाम ते लोका अन्धेन तमसावृताः। तान्सर्वान्वर्पणीयन्ति मृत्युं कामयानीयतः॥", translit: "Asurya nama te loka andhena tamasavritah. Tan sarvan prapnanti marityum kamayan cha ratah.", translation: "The worlds are covered by blindness. Those who are attached to desire go blindly to decay and death. Seekers of the infinite alone transcend this darkness.", ref: "Isha Upanishad 3" },
            { sanskrit: "ततो यदन्यदाकाशाज्जायतेऽन्नमयः पुमान्। अन्नस्य केवलाद्भावादन्योऽप्ययमात्मा॥", translit: "Tato yad anyad akashaj jayate 'nna-mayah puman. Annasya kevalad bhavad anyo 'py ayam atma.", translation: "From the Ether arises the food body. From food comes the breath, the mind, and all sensory powers. The soul exists distinct from the body it inhabits.", ref: "Isha Upanishad 5" },
            { sanskrit: "यस्मिन्सर्वाणि भूतानि आत्मैवाभुज्जानतः। तदात्मनि तदाम्नाये तत्प्रज्ञायां प्रवेशितुम्॥", translit: "Yasmin sarvani bhutani atmaivabhujjanatah. Tada-atmani tadaamneya tat-prajnayan praveshitum.", translation: "When all beings are seen as the very self of the Knower — when the self is known in all — then the knower enters into the unity of the Supreme. There is nothing else that remains unknown.", ref: "Isha Upanishad 7" }
        ]
    },
    {
        name: "Kena Upanishad",
        sanskrit_name: "केनोपनिषद्",
        subtitle: "The Quest for the Source",
        verses: [
            { sanskrit: "केन पतित्रीतिष्ठते प्रभामण्डलं वा। केन शब्दः क उ श्रोत्रेण क इमामां वाचमावदति॥", translit: "Kena patitri tishthate prabha-mandalam va. Kena shabdah ka u shrotrena ka im mam vacham avadata.", translation: "By whose will does the mind touch the lotus of the heart? Who directs the tongue to speak? Who is the unseen seer behind the eyes?", ref: "Kena Upanishad 1.1" },
            { sanskrit: "श्रोत्रं श्रोत्रियः पश्यति मनो मनीषिणामधीयते। पतत्रिणां वियद्गन्धः पततां तनुभृत्सु च॥", translit: "Shrotram shrotriyah pashyati mano maneeshiNam adhiyate. Patatrinam viyad gandhah patatam tanubhritsu cha.", translation: "The ear hears, the mind sees, the tongue speaks. The scent of the air belongs to those with breath. Yet none truly knows the source of all these powers.", ref: "Kena Upanishad 1.2" },
            { sanskrit: "यदि मन्यसे सुवेदेति ददमेव ते विद्याम्। अहमेतेभ्यो वरिष्ठो न मन्ये त्वा सुवेदेति॥", translit: "Yadi manyase suvedeti dadam eva te vidyam. Aham etebhyo varishtho na manye tva suvedeti.", translation: "If you think you know the Supreme well — I say you know only fragments. Know that the Supreme is beyond all knowledge. Yet those who know it become immortal.", ref: "Kena Upanishad 1.4" },
            { sanskrit: "नेह नानास्ति किञ्चन मृत्योरमृतं वा। न च ततो भयमस्ति कुतः स्याद्भयं द्वितीयात्।", translit: "Neha nanasti kinchana mrityor amritam va. Na cha tato bhayam asti kutah syad bhayam dvitiyat.", translation: "There is no diversity here — no death, no immortality. There is no fear of the second, for the self has no second. How could fear arise from what is one and alone?", ref: "Kena Upanishad 1.5" },
            { sanskrit: "तत्कुर्वते यदुभयं प्रज्ञाने प्रज्ञाने विधीयते। प्रज्ञाने प्राज्ञानसंभृतिर्मीशां प्रज्ञानं प्रतिष्ठा॥", translit: "Tat kurvate yad ubhayam prajnahe prajnahe vidhiyate. Prajnahe prajnan-sambhritir meshim prajnam pratishtha.", translation: "The mind becomes aware of both the known and unknown. That awareness arises from pure consciousness. The self is not born — it simply witnesses all experience.", ref: "Kena Upanishad 2.1" },
            { sanskrit: "एक एव रुद्रो न द्वितीयाय तस्थुर्य इमांल्लोकानीशते ईशनीभिः। प्रणामभिः प्राज्ञपतिभ्यः पतिघ्न्येभ्यो निवृत्तः सर्वमायामयं पश्यामि योऽसौ सोऽहमस्मि॥", translit: "Eka eva Rudro na dvitriya tasthur ya imam lokan ishate ishitaibhih. Pranamabhi prajna-patibhyah patighnyebhyo nivrittah sarvam ayamayam pashyami yo 'sau so 'ham asmi.", translation: "The one God — Rudra — exists without a second. He rules all worlds with his powers. Having subdued the senses, the sage sees him in everything. 'That which is everywhere — I am that.'", ref: "Kena Upanishad 2.3" }
        ]
    },
    {
        name: "Katha Upanishad",
        sanskrit_name: "कठोपनिषद्",
        subtitle: "Immortality Through the Death of Ignorance",
        verses: [
            { sanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत। क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्त्यणुः॥", translit: "Uttishthata jagrata prapya varan nibodhata. Kshurasya dhara nishita duratyaya dunga pathas tat kavayo vadanty anuh.", translation: "Arise, awake, stop not until the goal is reached. The path is sharp as a razor, difficult to traverse — the wise declare it so.", ref: "Katha Upanishad 1.3.14" },
            { sanskrit: "अविनाशी वा अयमात्मानुच्यते योऽस्मिंद्विजुष्टे देवेषु न शेते। एतमृते प्रणीयमानं न किञ्चित्सम्भवति त्राता।", translit: "Avinashi va ayam atma uchyate yo 'smim vijshte devekshu na shete. Etam rite praniyam nam na kinchit sambhavati trata.", translation: "The self is called immortal, indestructible. Though the body sleeps in death, the self does not die. Nothing can save the one who has let this self be taken away.", ref: "Katha Upanishad 1.2.18" },
            { sanskrit: "यः सर्वज्ञः सर्ववित्तस्य ज्ञानमृतस्य मूर्तिः। विश्वकर्मा विश्वदृग्विश्वात्मा संसारभूतिर्विश्वसृक् तस्मै नमो विचिन्तये॥", translit: "Yah sarvajnah sarva-vid yasya jnanamritasya murtih. Vishvakarma vishva-drik vishvatma samsara-bhutir vishvasrit tasmai namo vichintaye.", translation: "To the all-knowing, all-seeing, whose form is immortal knowledge, the creator of all — I bow in contemplation.", ref: "Katha Upanishad 1.2.20" },
            { sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥", translit: "Na jayate mriyate va kadachin nayam bhutva bhavita va na bhuyah. Ajo nityah shashvato 'yam purano na hanyate hanyamane sharire.", translation: "The soul never takes birth nor dies. Having never existed before, it does not begin to exist now. Unborn, eternal, timeless — the ancient one is not destroyed when the body is destroyed.", ref: "Katha Upanishad 1.2.22" },
            { sanskrit: "विद्धि त्वमेतं पुरुषं महान्तमविद्धिना कृतं ज्ञानिना तदात्म्यमु पश्यतः। यः सर्वज्ञेभ्यः परमो निःश्रेयसी यः सर्वज्ञातिमृतिर्ज्ञान एकीभवति तदा पुनराव्रवीदुत।", translit: "Viddhi tvam etam purusham mahan-tam aviddhina kritam jnanina tad-atmyam u pashyatah. Yah sarva-jnebhyo paramo nih-shreyasi yah sarva-jnatimritir jnana eki-bhavati tada punar avrad uta.", translation: "Know this great self — pure, beyond destruction, beyond the body. The highest good is to know the self. One who knows the self as beyond all knowledge becomes immortal.", ref: "Katha Upanishad 1.2.23" },
            { sanskrit: "यत्रेमे विषयाः स्पर्शा जायन्ते विगतजरः। तदैकं ज्ञानमुत्सृज्य धारयन्ति पुनः पुनः।", translit: "Yatra ime vishayah sparsha jayante vigata-jara. Tadaikam jnanam utsrijya dharayanti punah punah.", translation: "Where the senses perceive their objects — pleasures that arise and fade — the wise, having known the one, hold firmly to it and do not fall again.", ref: "Katha Upanishad 2.2.8" }
        ]
    },
    {
        name: "Mundaka Upanishad",
        sanskrit_name: "मुण्डक उपनिषद्",
        subtitle: "The Axe of Wisdom That Cuts the Knot of Ignorance",
        verses: [
            { sanskrit: "ब्रह्मा देवानां प्रथमः सर्वविद्यानां कर्ता। बृहत्तमं च सौकृत्यात् परमं पवित्रं प्रजानाम्॥", translit: "Brahma devanam prathamah sarva-vidyanam krta. Britatamam cha saukrityat paramam pavitram praj-anam.", translation: "Brahma is the first among the gods, the creator of all knowledge. He revealed the supreme, sacred knowledge to the seers of truth.", ref: "Mundaka Upanishad 1.1.1" },
            { sanskrit: "द्वे विद्ये वेदितव्ये इह वस्तु परे च। अविद्योपादेय विद्या कर्ममयी जन्या॥", translit: "Dve vidye veditavye iha vastu pare cha. Avidya upadeya vidya karma-mayi janya.", translation: "Two types of knowledge must be known — the lower (worldly, transactional) and the higher (spiritual, liberating). The lower binds; the higher frees.", ref: "Mundaka Upanishad 1.1.4" },
            { sanskrit: "परं विज्ञानं विज्ञात्मा क्षरात् क्षरत्वान्महापुमान्। द्विबाहुरुवाच गृण्वन्न तत्समं च तद्विद्विषत्॥", translit: "Param vijnanam vijnamata ksharat ksharatvat maha-puman. Dvi-bahur uvacha grnvan na tat samam cha tad viddishat.", translation: "The supreme knowledge reveals the self beyond all change. The twofold sage — knowing both the perishable and the imperishable — declares this teaching to all who listen.", ref: "Mundaka Upanishad 1.1.5" },
            { sanskrit: "यथा नद्यः स्यन्दमानासः समुद्रेऽस्तं गच्छन्ति नामरूपे विहाय। तथा विद्वान्नामरूपाद्विमुक्तः परात्परं पुरुषमुपैति दिव्यम्॥", translit: "Yatha nadyah syandamanasah samudre 'stam gachchhanti nama-rupa vihaya. Tatha vidvan nama-rupad vimuktah parat param purusham upaiti divyam.", translation: "As rivers flowing into the ocean discard their name and form, so the knower of truth — freed from name and form — enters the divine supreme self.", ref: "Mundaka Upanishad 1.2.7" },
            { sanskrit: "यस्मिन्द्यौः पृथिवी निक्षिप्ते यस्मिन्विज्ञानं प्रतिष्ठितम्। रसश्च नित्यो यस्मिन्न हृद्येषु विकारास्तस्मिन्न पश्यामः केवलं ज्ञानमास्थितः॥", translit: "Yasmin dyauh prithivi niksipte yasmin vijnanam pratishthitam. Rasash cha nityo yasmin nah ridayeshu vikaras tasmin na pashyamah kevalam jnanam asthitah.", translation: "On that imperishable self, both the heavens and earth are established. Within it, knowledge rests eternally. The wise who rest in pure knowledge see the unchanging.", ref: "Mundaka Upanishad 1.2.5" },
            { sanskrit: "स ब्रह्मा स शिवः सेन्द्रः सोऽक्षरः परमः स्वराट्। सर्वाधारः सर्वमातृको यस्मिन्नो न पुनर्भवः॥", translit: "Sa brahma sa shivah sendrah so 'ksharah paramah svarat. Sarvadharah sarva-matriko yasmin no punar-bhavah.", translation: "That self is Brahma, Shiva, Indra — the imperishable, the supreme, the self-radiant. The support of all, the mother of all. In him, there is no rebirth.", ref: "Mundaka Upanishad 2.1.8" }
        ]
    },
    {
        name: "Mandukya Upanishad",
        sanskrit_name: "माण्डुक्योपनिषद्",
        subtitle: "The Four States of the Self and the Syllable OM",
        verses: [
            { sanskrit: "ॐ इत्येतदक्षरं ब्रह्मेत्युपासितव्यं सर्वमात्मन्येव वर्तते। आत्मा हि जाग्रद्भवति सर्वेषां पश्यामि तद्विषयान्प्रबुद्धः सन्॥", translit: "Om ity etad aksharam brahma ity upasitavyam sarvam atmani eva vartate. Atma hi jagrid-bhavati sarvesham pashyami tad vishayan prabuddhah san.", translation: "OM is the imperishable syllable Brahman. All that exists rests in Brahman alone. The self, awake in the waking state, sees all objects of the senses.", ref: "Mandukya Upanishad 1" },
            { sanskrit: "जागरितस्थानो बाह्यार्थान्प्रतिपद्यते। सर्वज्ञः सर्ववित्तस्य ज्ञानमृतस्य मूर्तिः॥", translit: "Jagarita-sthano bahya-arthan pratipadyate. Sarvajnah sarva-vid yasya jnanamritasya murtih.", translation: "In the waking state, the self experiences the external world of objects. The wise know this state as ordinary consciousness.", ref: "Mandukya Upanishad 2" },
            { sanskrit: "स्वप्नस्थानोऽन्तर्ज्ञोऽयं पुरुषः। यत्र सुप्तः संप्रजायते स स्वप्नो यत्र रूपान्पश्यति॥", translit: "Svapna-sthano 'ntarjno 'yam purushah. Yatra suptah samprajayate sa svapno yatra rupan pashyati.", translation: "In the dream state, the self turns inward and creates worlds from memory — seeing forms and experiences that are not truly real. This is the mind's inner theatre.", ref: "Mandukya Upanishad 3" },
            { sanskrit: "तृतीया सुषुप्तिस्थाना पुम्मर्थो भवति। तत्र न किञ्चन वेद नापि जाग्रति। उपलब्धिर्लयो मोक्षो भिक्षा नित्या॥", translit: "Tritiya sushupti-sthana pum-stho bhavati. Tatra na kinchana veda na api jagriti. Uupalabdhir layo moksho bhiksha nitya.", translation: "In deep sleep, the self rests in neither waking nor dreaming. There is no desire, no experience, no mind. This is the foundation — the seed state from which all arises.", ref: "Mandukya Upanishad 4" },
            { sanskrit: "तुरीयः परापरानुभवी ध्यानधारणाकारः। सर्वज्ञत्वं सर्वशक्तित्वं चैतदक्षरस्य लक्षणम्॥", translit: "Turiyah para-para-anubhavi dhyana-dharana-akarah. Sarvajnatvam sarva-shaktitvam chaitad aksharasya lakshanam.", translation: "The fourth state is beyond the other three — neither outward nor inward, neither knowing nor unknowing. It is the very essence of OM, beyond all description.", ref: "Mandukya Upanishad 7" },
            { sanskrit: "अयमात्मा चतुरात्मा प्रथमं जाग्रद्विजृम्भते। ततः स्वप्नस्ततः सुषुप्तिस्तुरीयात्स मोक्षः स्यात्॥", translit: "Ayam atma chatur-atma prathamam jagravijrimbhate. Tatah svapnas tatah sushuptis turiyat sa mokshah syat.", translation: "This self is fourfold. First is the waking state, then the dream state, then deep sleep, and fourth — the pure consciousness that is liberation itself.", ref: "Mandukya Upanishad 8" }
        ]
    },
    {
        name: "Taittiriya Upanishad",
        sanskrit_name: "तैत्तिरीयोपनिषद्",
        subtitle: "The Five Sheaths and the Bliss of Brahman",
        verses: [
            { sanskrit: "भूरन्मयः प्राणमयश्चित्प्रशामयत्। तदेज्येज्यतरं पिता पुत्रस्य ज्ञानमिष्टीयः॥", translit: "Bhur an-mayah prana-mayash chit-samashrayat. Tad eva jyejyataram pita putrasya jnanam ishtiih.", translation: "From the Earth arose the body. From the body, breath arose. The father, seeking the highest for his son, taught him this sacred knowledge.", ref: "Taittiriya Upanishad 1.1" },
            { sanskrit: "सत्यं ज्ञानमनन्तं ब्रह्म। होवाच तदैक्षत ब्रह्मा रतिस्थानि सर्वाणि तदश्नुवते च कर्माणि च॥", translit: "Satyam jnanam anantam brahma. Ho vacha tadaikshata brahma ratisthani sarvani tadasnuvate cha karmani cha.", translation: "Brahman is truth, knowledge, and infinity. Brahma saw that all creatures rest in bliss — and take delight in their own work.", ref: "Taittiriya Upanishad 2.1" },
            { sanskrit: "यदग्नौ प्रतितिष्ठति प्रणवो दीपवत्। तद्विष्णोः पदमभिज्ञाय देवा मुच्यन्ति शत्रुभ्यः॥", translit: "Yad agni pratitishthati pranavo dipavat. Tad Vishnoh padam abhijanya deva muchyanti shatrubhyah.", translation: "As fire rests in its sphere, so OM rests in the heart. Knowing the lotus feet of Vishnu, the devas are freed from their enemies.", ref: "Taittiriya Upanishad 1.8" },
            { sanskrit: "आनन्दं ब्रह्मणो विद्धान्न बिभेति कुतश्चन। एतत्तदक्षरं ब्रह्म सत्यं ज्ञानमनन्तं यदेतदनन्तं ज्ञानेषु तिष्ठति तदेतत् क्षरं सर्वेषां भूतानामुत्तमं पुरुषसृष्टिमत् तदेतदमृतमाहुरमृतं हि भवति तस्मिन्न लिप्यते किञ्चन दोषैः।", translit: "Anandam brahmano viddhan na bibheti kutaschana. Etad tad aksharam brahma satyam jnanam anantam yad etad anantam jnaneshu tishthati tad etat ksharam sarvesham bhutanam uttamam purusha-srishtimat tad etad amritam ahur amritam hi bhavati tasmin na lipyate kinchana dosaih.", translation: "Knowing the bliss of Brahman, one never fears. This is the imperishable Brahman — truth, knowledge, infinite. It is the highest refuge. Those who know it become immortal and are touched by no flaw.", ref: "Taittiriya Upanishad 2.5" },
            { sanskrit: "त्वं स्त्री त्वं पुमानसि त्वं कुमारो नित्यः पुमान्। त्वं जीर्णो दण्डिनं वा प्राप्तस्त्वं जातमसि विश्वधाम नेता।", translit: "Tvam stri tvam puman asi tvam kumaro nityah puman. Tvam jirno dandinam va praptas tvam jatam asi vishva-dham neta.", translation: "You are woman, you are man — you are the eternal child. You are the old man with staff. You are born in all forms. You are the support of the universe.", ref: "Taittiriya Upanishad 2.2" }
        ]
    },
    {
        name: "Aitareya Upanishad",
        sanskrit_name: "ऐतरेयोपनिषद्",
        subtitle: "The Soul's Journey Into and Out of the Womb",
        verses: [
            { sanskrit: "अयमात्मा ब्रह्मेत्युपासितव्यः। अयमात्मा ब्रह्मेत्याचक्षीत एतमेतदात्मानं ब्रह्मेति यदेतद्वेद।", translit: "Ayam atma brahmeti upasitavyah. Ayam atma brahmeti achakshita etam etad atmanam brahmeti yad etad veda.", translation: "This self is Brahman — this should be meditated upon. Having taught 'this self is Brahman,' one who knows it becomes free from all delusion.", ref: "Aitareya Upanishad 1" },
            { sanskrit: "स ईक्षतेयं तन्वा नामधेया कुर्यात्पुत्रान्पुत्रेषु वंश्येषु यथाकामं। तदस्य कामस्य निह्नुतिर्भवति य एवं वेद॥", translit: "Sa ikshate yam tanva namadheya kuryat putran putreshu vamshyeshu yatha-kamam. Tadasya kamasya nihnuttir bhavati ya evam veda.", translation: "He contemplates and creates a body with a name — sons, daughters, and descendants according to his will. One who knows this truth fulfills all desires.", ref: "Aitareya Upanishad 2" },
            { sanskrit: "पूर्णे प्रजापतिर्जायते। पूर्णे जाते पुत्रेण सह रमते।", translit: "Purne prajapatir jayate. Purne jate putrena saha ramate.", translation: "When the self is complete, Prajapati is born. When the self is born in the body, it delights in its offspring.", ref: "Aitareya Upanishad 3.1" }
        ]
    },
    {
        name: "Prasna Upanishad",
        sanskrit_name: "प्रश्नोपनिषद्",
        subtitle: "Six Questions on the Sources of Life",
        verses: [
            { sanskrit: "कस्मिन्नु भगवो जुहूतिस्तिष्ठति। प्रतिबुद्धे कस्मिन्न प्रतिसम्प्रस्थिते।", translit: "Kasmin nu bhagavo juhutis tishthati. Prati-buddhe kasmin na prati-samprasthite.", translation: "On what does the fire of sacrifice rest? Upon what is the breath established when one awakens? These were the questions the sages asked.", ref: "Prasna Upanishad 1.1" },
            { sanskrit: "आदित्यो जुहूतिरित्याहुः। आदित्ये हि जुहूतिस्तिष्ठति। प्रतिबुद्धे चक्षुः प्रतिसम्प्रस्थिते।", translit: "Adityo juhutir ity ahuh. Aditye hi juhutis tishthati. Prati-buddhe chakrauh prati-samprasthite.", translation: "The sun is the fire of sacrifice, they say. The sun is the fire upon which the sacrifice rests. When one awakens, the eye goes forth. When one departs, the eye returns to the sun.", ref: "Prasna Upanishad 1.3" },
            { sanskrit: "प्रणो मूलमिति ह स्माह भगवान्कविर्मनीषी। अन्ने पृथिव्यां यदिदं किञ्च तिष्ठति जङ्गमम्।", translit: "Prano mulam iti ha sma ah bhagavan kavir manishi. Anne prithivyam yad idam kincha tishthati yangamam.", translation: "Prana (life breath) is the root, the sage has declared. All that moves and stands on earth derives its life from prana. Food is the support of life.", ref: "Prasna Upanishad 2.1" },
            { sanskrit: "इदं शरीरं मनोमयं प्राणः श्रोत्रं चाक्षुषं च। सर्वाणीमानि ज्योतींषि जङ्गमानि चराणि च।", translit: "Idam shariram mano-mayam pranah shrotram cha akshusham cha. Sarvani mani jyotimshi yangamani charani cha.", translation: "This body is made of mind and prana. The ear and the eye are channels of the soul. All lights — the sun, moon, fire — are illuminated by the self within.", ref: "Prasna Upanishad 4.1" }
        ]
    },
    {
        name: "Svetasvatara Upanishad",
        sanskrit_name: "श्वेताश्वतरोपनिषद्",
        subtitle: "The Lore of the Great Lord — Devotion to Rudra-Shiva",
        verses: [
            { sanskrit: "कदा सुविदितं भवति कदा द्यौर्न स्यात् कदा रविः। कदा वा सूर्यपुत्राणामाधिपत्यं महीयते॥", translit: "Kada su-viditam bhavati kada dyaur na syat kada ravih. Kada va surya-putranam adhipat yam mahiyate.", translation: "When will the truth be fully known? When will the sky no longer exist, when will the sun set forever? When will the children of the sun rule the earth in final sovereignty?", ref: "Svetasvatara Upanishad 1.1" },
            { sanskrit: "न जायते म्रियते वा विद्धिन कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयम्पुराणो न हन्यते हन्यमाने शरीरे॥", translit: "Na jayate mriyate va viddhi na kadachin nayam bhutva bhavita va na bhuyah. Ajo nityah shashvato 'yam purano na hanyate hanyamane sharire.", translation: "Know the soul to be unborn, undying. It does not take birth nor does it ever cease. Unborn, eternal, timeless — even when the body is destroyed, the soul remains untouched.", ref: "Svetasvatara Upanishad 1.3" },
            { sanskrit: "यो ब्रह्माणं विदधाति पूर्वं यो वै वेदांश्च प्रहिणोति तस्मै। तं ह देवमात्मबुद्धिप्रकाशं मुमुक्षुर्महते सङ्गाय कल्पते।", translit: "Yo brahmana vidadhati purvam yo vai vedas cha prahinoti tasmai. Tam ha devam atma-buddhi-prakasham mumukshur mahate sangaya kalpate.", translation: "The one who creates Brahman first, who reveals the Vedas — that divine self-effulgent one grants liberation to the soul that seeks him with great devotion.", ref: "Svetasvatara Upanishad 1.4" },
            { sanskrit: "कपर्दिनं पशुवत्पशुः स्त्रीवत्सर्वे प्रमुग्धा जगत्स्थितं च सर्वं। माया गुहां प्रविशन्ति मूढ़ास्ते क्षयं यान्ति शरद इव ज्योतयः॥", translit: "Kapardinam pashuvat pashuh striyat sarve pramudhah jagat sthitam cha sarvam. Maya guham pravishanti mudhas te kshayam yanti sharad iva jyotayah.", translation: "Those without discrimination are deluded by appearances — like an untouchable in disguise, like animals following the herd. They fall into the snare of illusion and perish like moths in flame.", ref: "Svetasvatara Upanishad 1.5" },
            { sanskrit: "एको देवः सर्वभूतेषु गूढ़ः सर्वव्यापी सर्वभूतान्तरात्मा। कर्माधिः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च॥", translit: "Eko devah sarva-bhuteshu gudhah sarvavyapi sarva-bhuta-antar-atma. Karmadhipah sarva-bhuta-adhivasah sakshi cheta kevalo nirgunash cha.", translation: "The one God hidden in all beings — the inner self of everything, the all-pervading. The lord of all actions, the refuge of all creatures. The witness, the knower, the pure, and the unbound.", ref: "Svetasvatara Upanishad 2.14" },
            { sanskrit: "तमीश्वराणां परमं महेश्वरं तं देवतानां परमं च दैवतम्। पतिं पतीनां परमं परस्ताद्विद्धि बुद्धेः परमं लोकमीशं ते॥", translit: "Tam ishvaranam paramam mahesvaram tam devatanam paramam cha daivatam. Patim patinam paramam parastad viddhi buddeh paramam lokam isham te.", translation: "Know him as the great lord of all lords, the supreme deity of all deities. The master of masters, the ultimate refuge. Beyond the mind, beyond the intellect — the supreme self.", ref: "Svetasvatara Upanishad 2.15" },
            { sanskrit: "कर्मणा जातो न जातः कर्मणा निवृत्तः। ब्रह्मज्ञानाद्भवति ब्रह्मणि संस्थितः॥", translit: "Karmana jato na jata karmana nivrittah. Brahma-jnanad bhavati brahmani sansthitah.", translation: "The soul is not born through action, nor does it cease through action. Through the knowledge of Brahman, one becomes established in Brahman.", ref: "Svetasvatara Upanishad 3.8" }
        ]
    },
    {
        name: "Maitri Upanishad",
        sanskrit_name: "मैत्र्युपनिषद्",
        subtitle: "The Sevenfold Fire and the Soul's Liberation",
        verses: [
            { sanskrit: "सप्तचित्तमहो रजसा संसिद्धमिति तत्परं ज्येष्ठं पुत्रमन्वभ्यध्यायत मैत्रेयिः।", translit: "Sapta-chittam aho Rajas samp Siddham iti tat param jyeshtham putram anvabhyadhyayata maithreyih.", translation: "Maitreya inquired of the great ones about the sevenfold fire, perfected through the mode of passion — seeking to know the supreme, eldest son of creation.", ref: "Maitri Upanishad 1.1" },
            { sanskrit: "पृथिव्यग्निरापो वायुरन्तरिक्षं तेजो मनो बुद्धिराहङ्कार इत्येतद्वै सप्तसूत्रं पुरुषः।", translit: "Prithivi agni apa vayur antariksham tejo mano buddhir ahankara ity etad vai sapta-sutram purushah.", translation: "Earth, fire, water, air, space, mind, intellect, and ego — these seven threads weave the tapestry of the individual self.", ref: "Maitri Upanishad 2.1" },
            { sanskrit: "नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन। यमेवैश्वरः कृष्णस्तद्वेष्टमन्यैरात्मा सुप्रसादः।", translit: "Na ayam atma pravachanena labhyo na medhaya na bahuna shrutena. Yameva ishvarah Krishna iti veshthatmany atmana suprasadah.", translation: "This self cannot be attained through mere teaching, nor through intellect, nor through much learning. Only by those whom He chooses does the self become revealed — the gracious one, dwelling within.", ref: "Maitri Upanishad 3.2" }
        ]
    }
];