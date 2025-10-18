// Данные меню
const menuData = {
    menuCategories: 



     [
        {
            name: 'Холодные закуски',
            items: [
                {
                    "номер": "1",
                    "nazvanie_blyuda": "Анадара",
                    "vykhod_blyuda": 0.17,
                    "zhiry": 1,
                    "belki": 19,
                    "uglevody": 3,
                    "kcal": 100,
                    "kJ": 410
                },
                {
                    "номер": "3",
                    "nazvanie_blyuda": "Антипасти из маслин",
                    "vykhod_blyuda": 0.1341,
                    "zhiry": 22,
                    "belki": 2,
                    "uglevody": 2.5,
                    "kcal": 220,
                    "kJ": 900
                },
                {
                    "номер": "27",
                    "nazvanie_blyuda": "Бутеры с мойвой",
                    "vykhod_blyuda": 0.133,
                    "zhiry": 7.5,
                    "belki": 11,
                    "uglevody": 17,
                    "kcal": 180,
                    "kJ": 760
                },
                {
                    "номер": "35",
                    "nazvanie_blyuda": "Домашнее сало со сливочным хреном и чесночными гренками",
                    "vykhod_blyuda": 0.235,
                    "zhiry": 115,
                    "belki": 10,
                    "uglevody": 18,
                    "kcal": 1140,
                    "kJ": 4790
                },
                {
                    "номер": "103",
                    "nazvanie_blyuda": "Паштет из мидий с хрустящими гренками",
                    "vykhod_blyuda": 0.23,
                    "zhiry": 22,
                    "belki": 8.5,
                    "uglevody": 38,
                    "kcal": 380,
                    "kJ": 1590
                },
                {
                    "номер": "104",
                    "nazvanie_blyuda": "Паштет из печени цыпленка с апельсиновым чатни",
                    "vykhod_blyuda": 0.401,
                    "zhiry": 42,
                    "belki": 9,
                    "uglevody": 95,
                    "kcal": 790,
                    "kJ": 3310
                },
                {
                    "номер": "109",
                    "nazvanie_blyuda": "Рваная буратта с тунцом",
                    "vykhod_blyuda": 0.25,
                    "zhiry": 11,
                    "belki": 23,
                    "uglevody": 23,
                    "kcal": 280,
                    "kJ": 1190
                },
                {
                    "номер": "147",
                    "nazvanie_blyuda": "Тар Тар из говядины с соусом бернэ",
                    "vykhod_blyuda": 0.201,
                    "zhiry": 50,
                    "belki": 21,
                    "uglevody": 29,
                    "kcal": 650,
                    "kJ": 2710
                },
                {
                    "номер": "148",
                    "nazvanie_blyuda": "Татаки",
                    "vykhod_blyuda": 0.225,
                    "zhiry": 14,
                    "belki": 22,
                    "uglevody": 8,
                    "kcal": 250,
                    "kJ": 1040
                }
            ]
        },
        {
            name: 'Морепродукты',
            items: [
                {
                    "номер": "4",
                    "nazvanie_blyuda": "Ассорти вяленой рыбы",
                    "vykhod_blyuda": 0.75,
                    "zhiry": 44,
                    "belki": 131,
                    "uglevody": 0,
                    "kcal": 920,
                    "kJ": 3860
                },
                {
                    "номер": "7",
                    "nazvanie_blyuda": "Ассорти морепродуктов",
                    "vykhod_blyuda": 0.79,
                    "zhiry": 89,
                    "belki": 119,
                    "uglevody": 18,
                    "kcal": 1350,
                    "kJ": 5650
                },
                {
                    "номер": "12",
                    "nazvanie_blyuda": "Барабуля жареная",
                    "vykhod_blyuda": 1,
                    "zhiry": 38,
                    "belki": 194,
                    "uglevody": 0,
                    "kcal": 1120,
                    "kJ": 4680
                },
                {
                    "номер": "39",
                    "nazvanie_blyuda": "Дорада",
                    "vykhod_blyuda": 1,
                    "zhiry": 171,
                    "belki": 254,
                    "uglevody": 9,
                    "kcal": 2590,
                    "kJ": 10830
                },
                {
                    "номер": "42",
                    "nazvanie_blyuda": "Кальмар на гриле с запеченным бататом",
                    "vykhod_blyuda": 0.29,
                    "zhiry": 31,
                    "belki": 29,
                    "uglevody": 4,
                    "kcal": 410,
                    "kJ": 1730
                },
                {
                    "номер": "43",
                    "nazvanie_blyuda": "Камчатский краб",
                    "vykhod_blyuda": 0.147,
                    "zhiry": 2,
                    "belki": 19,
                    "uglevody": 1.5,
                    "kcal": 100,
                    "kJ": 410
                },
                {
                    "номер": "55",
                    "nazvanie_blyuda": "Клешни камчатского краба",
                    "vykhod_blyuda": 0.1,
                    "zhiry": 0.5,
                    "belki": 18,
                    "uglevody": 0,
                    "kcal": 85,
                    "kJ": 350
                },
                {
                    "номер": "58",
                    "nazvanie_blyuda": "Креветка темпура с крем чиз и нори",
                    "vykhod_blyuda": 0.271,
                    "zhiry": 14,
                    "belki": 23,
                    "uglevody": 18,
                    "kcal": 290,
                    "kJ": 1230
                },
                {
                    "номер": "59",
                    "nazvanie_blyuda": "Креветки в пряном соусе",
                    "vykhod_blyuda": 0.196,
                    "zhiry": 20,
                    "belki": 22,
                    "uglevody": 8,
                    "kcal": 300,
                    "kJ": 1250
                },
                {
                    "номер": "60",
                    "nazvanie_blyuda": "Креветки тигровые 8/12",
                    "vykhod_blyuda": 1,
                    "zhiry": 0,
                    "belki": 237,
                    "uglevody": 11,
                    "kcal": 990,
                    "kJ": 4150
                },
                {
                    "номер": "66",
                    "nazvanie_blyuda": "Лобстер",
                    "vykhod_blyuda": 0.1,
                    "zhiry": 2,
                    "belki": 16,
                    "uglevody": 0,
                    "kcal": 80,
                    "kJ": 330
                },
                {
                    "номер": "67",
                    "nazvanie_blyuda": "Лосось слабой соли",
                    "vykhod_blyuda": 0.213,
                    "zhiry": 40,
                    "belki": 21,
                    "uglevody": 0.4,
                    "kcal": 440,
                    "kJ": 1850
                },
                {
                    "номер": "70",
                    "nazvanie_blyuda": "Магаданские креветки на льду",
                    "vykhod_blyuda": 1,
                    "zhiry": 22,
                    "belki": 189,
                    "uglevody": 0,
                    "kcal": 950,
                    "kJ": 3990
                },
                {
                    "номер": "73",
                    "nazvanie_blyuda": "Мидии в соусе бер блан",
                    "vykhod_blyuda": 1,
                    "zhiry": 141,
                    "belki": 60,
                    "uglevody": 29,
                    "kcal": 1630,
                    "kJ": 6810
                },
                {
                    "номер": "74",
                    "nazvanie_blyuda": "Мидии в соусе том ям",
                    "vykhod_blyuda": 1,
                    "zhiry": 87,
                    "belki": 65,
                    "uglevody": 46,
                    "kcal": 1230,
                    "kJ": 5140
                },
                {
                    "номер": "75",
                    "nazvanie_blyuda": "Мидии черноморские в соусе Дор-блю",
                    "vykhod_blyuda": 1.15,
                    "zhiry": 128,
                    "belki": 81,
                    "uglevody": 47,
                    "kcal": 1660,
                    "kJ": 6960
                },
                {
                    "номер": "78",
                    "nazvanie_blyuda": "Морской гребешок гигант",
                    "vykhod_blyuda": 0.067,
                    "zhiry": 0,
                    "belki": 3.5,
                    "uglevody": 3.5,
                    "kcal": 25,
                    "kJ": 110
                },
                {
                    "номер": "79",
                    "nazvanie_blyuda": "Морской гребешок стандарт",
                    "vykhod_blyuda": 0.067,
                    "zhiry": 0,
                    "belki": 3.5,
                    "uglevody": 3.5,
                    "kcal": 25,
                    "kJ": 110
                },
                {
                    "номер": "80",
                    "nazvanie_blyuda": "Морской еж",
                    "vykhod_blyuda": 1.095,
                    "zhiry": 44,
                    "belki": 141,
                    "uglevody": 28,
                    "kcal": 1070,
                    "kJ": 4490
                },
                {
                    "номер": "92",
                    "nazvanie_blyuda": "Осетр с цитрусовым бербланом",
                    "vykhod_blyuda": 0.303,
                    "zhiry": 39,
                    "belki": 19,
                    "uglevody": 8.5,
                    "kcal": 460,
                    "kJ": 1910
                },
                {
                    "номер": "93",
                    "nazvanie_blyuda": "Осьминог с мини картофелем",
                    "vykhod_blyuda": 0.37,
                    "zhiry": 10,
                    "belki": 24,
                    "uglevody": 36,
                    "kcal": 330,
                    "kJ": 1390
                },
                {
                    "номер": "94",
                    "nazvanie_blyuda": "Осьминоги мини с водорослями чука",
                    "vykhod_blyuda": 0.329,
                    "zhiry": 50,
                    "belki": 21,
                    "uglevody": 36,
                    "kcal": 680,
                    "kJ": 2860
                },
                {
                    "номер": "108",
                    "nazvanie_blyuda": "Рапаны в сливочном соусе с грибами",
                    "vykhod_blyuda": 0.2618,
                    "zhiry": 55,
                    "belki": 6,
                    "uglevody": 7,
                    "kcal": 550,
                    "kJ": 2300
                },
                {
                    "номер": "121",
                    "nazvanie_blyuda": "Сибас",
                    "vykhod_blyuda": 1,
                    "zhiry": 300,
                    "belki": 302,
                    "uglevody": 55,
                    "kcal": 4130,
                    "kJ": 17270
                },
                {
                    "номер": "136",
                    "nazvanie_blyuda": "Спизула",
                    "vykhod_blyuda": 0.17,
                    "zhiry": 0,
                    "belki": 2.5,
                    "uglevody": 3,
                    "kcal": 20,
                    "kJ": 95
                },
                {
                    "номер": "137",
                    "nazvanie_blyuda": "Стейк из камбалы",
                    "vykhod_blyuda": 1,
                    "zhiry": 288,
                    "belki": 291,
                    "uglevody": 123,
                    "kcal": 4250,
                    "kJ": 17790
                },
                {
                    "номер": "138",
                    "nazvanie_blyuda": "Стейк из лосося",
                    "vykhod_blyuda": 1,
                    "zhiry": 331,
                    "belki": 295,
                    "uglevody": 10,
                    "kcal": 4190,
                    "kJ": 17540
                },
                {
                    "номер": "139",
                    "nazvanie_blyuda": "Стейк из тунца",
                    "vykhod_blyuda": 1,
                    "zhiry": 8.5,
                    "belki": 229,
                    "uglevody": 22,
                    "kcal": 1080,
                    "kJ": 4520
                },
                {
                    "номер": "141",
                    "nazvanie_blyuda": "Стейк палтус с йогуртовым соусом",
                    "vykhod_blyuda": 0.276,
                    "zhiry": 46,
                    "belki": 20,
                    "uglevody": 9,
                    "kcal": 530,
                    "kJ": 2220
                },
                {
                    "номер": "152",
                    "nazvanie_blyuda": "Тушки кальмаров",
                    "vykhod_blyuda": 1,
                    "zhiry": 25,
                    "belki": 190,
                    "uglevody": 18,
                    "kcal": 1060,
                    "kJ": 4420
                },
                {
                    "номер": "153",
                    "nazvanie_blyuda": "Устрица запеченная",
                    "vykhod_blyuda": 0.09,
                    "zhiry": 3,
                    "belki": 3,
                    "uglevody": 3,
                    "kcal": 50,
                    "kJ": 220
                },
                {
                    "номер": "154",
                    "nazvanie_blyuda": "Устрицы заморские",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 6.5,
                    "belki": 0.4,
                    "uglevody": 2,
                    "kcal": 65,
                    "kJ": 280
                },
                {
                    "номер": "155",
                    "nazvanie_blyuda": "Устрицы Муроцу",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 6.5,
                    "belki": 0.4,
                    "uglevody": 2,
                    "kcal": 65,
                    "kJ": 280
                },
                {
                    "номер": "156",
                    "nazvanie_blyuda": "Устрицы российские",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 6.5,
                    "belki": 0.4,
                    "uglevody": 2,
                    "kcal": 65,
                    "kJ": 280
                },
                {
                    "номер": "158",
                    "nazvanie_blyuda": "Форель",
                    "vykhod_blyuda": 1,
                    "zhiry": 92,
                    "belki": 287,
                    "uglevody": 49,
                    "kcal": 2170,
                    "kJ": 9080
                },
                {
                    "номер": "165",
                    "nazvanie_blyuda": "Черноморский сет",
                    "vykhod_blyuda": 0.6845,
                    "zhiry": 34,
                    "belki": 133,
                    "uglevody": 0,
                    "kcal": 830,
                    "kJ": 3490
                }
            ]
        },
        {
            name: 'Сыры',
            items: [
                {
                    "номер": "5",
                    "nazvanie_blyuda": "Ассорти европейский сыров",
                    "vykhod_blyuda": 0.22,
                    "zhiry": 58,
                    "belki": 40,
                    "uglevody": 29,
                    "kcal": 800,
                    "kJ": 3350
                },
                {
                    "номер": "6",
                    "nazvanie_blyuda": "Ассорти местных сыров",
                    "vykhod_blyuda": 0.231,
                    "zhiry": 48,
                    "belki": 50,
                    "uglevody": 32,
                    "kcal": 760,
                    "kJ": 3170
                },
       
                {
                    "номер": "41",
                    "nazvanie_blyuda": "Жареный камамбер с брусничным вареньем",
                    "vykhod_blyuda": 0.232,
                    "zhiry": 34,
                    "belki": 27,
                    "uglevody": 4.5,
                    "kcal": 430,
                    "kJ": 1800
                },
                {
                    "номер": "99",
                    "nazvanie_blyuda": "Пармезан",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 14,
                    "belki": 17,
                    "uglevody": 0,
                    "kcal": 190,
                    "kJ": 800
                },
                {
                    "номер": "146",
                    "nazvanie_blyuda": "Сырный Мусс 50г",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 6,
                    "belki": 2,
                    "uglevody": 2,
                    "kcal": 70,
                    "kJ": 300
                }
            ]
        },
        {
            name: 'Мясные блюда',
            items: [
                {
                    "номер": "8",
                    "nazvanie_blyuda": "Ассорти мясных деликатесов",
                    "vykhod_blyuda": 0.1145,
                    "zhiry": 37,
                    "belki": 23,
                    "uglevody": 0.2,
                    "kcal": 420,
                    "kJ": 1770
                },
                {
                    "номер": "14",
                    "nazvanie_blyuda": "Бекон 50 гр",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 23,
                    "belki": 12,
                    "uglevody": 0,
                    "kcal": 250,
                    "kJ": 1040
                },
                {
                    "номер": "15",
                    "nazvanie_blyuda": "Бефстроганов с картофельным пюре",
                    "vykhod_blyuda": 0.3528,
                    "zhiry": 42,
                    "belki": 17,
                    "uglevody": 19,
                    "kcal": 530,
                    "kJ": 2200
                },
                {
                    "номер": "31",
                    "nazvanie_blyuda": "Говяжьи щечки с пюре из батата",
                    "vykhod_blyuda": 0.4,
                    "zhiry": 17,
                    "belki": 27,
                    "uglevody": 4,
                    "kcal": 270,
                    "kJ": 1140
                },
                {
                    "номер": "44",
                    "nazvanie_blyuda": "Каре баранины вес",
                    "vykhod_blyuda": 1,
                    "zhiry": 199,
                    "belki": 265,
                    "uglevody": 282,
                    "kcal": 3970,
                    "kJ": 16620
                },
                {
                    "номер": "68",
                    "nazvanie_blyuda": "Люля кебаб из баранины вес",
                    "vykhod_blyuda": 1,
                    "zhiry": 122,
                    "belki": 139,
                    "uglevody": 15,
                    "kcal": 1720,
                    "kJ": 7180
                },
                {
                    "номер": "69",
                    "nazvanie_blyuda": "Люля кебаб из курицы вес",
                    "vykhod_blyuda": 1,
                    "zhiry": 91,
                    "belki": 233,
                    "uglevody": 334,
                    "kcal": 3090,
                    "kJ": 12930
                },
                {
                    "номер": "72",
                    "nazvanie_blyuda": "Машкины котлетки",
                    "vykhod_blyuda": 0.28,
                    "zhiry": 21,
                    "belki": 30,
                    "uglevody": 14,
                    "kcal": 370,
                    "kJ": 1530
                },
                {
                    "номер": "76",
                    "nazvanie_blyuda": "Мозговые косточки со специями",
                    "vykhod_blyuda": 0.4,
                    "zhiry": 20,
                    "belki": 76,
                    "uglevody": 4.5,
                    "kcal": 500,
                    "kJ": 2090
                },
                {
                    "номер": "81",
                    "nazvanie_blyuda": "Наггетсы куриные с сырным соусом",
                    "vykhod_blyuda": 0.32,
                    "zhiry": 20,
                    "belki": 24,
                    "uglevody": 49,
                    "kcal": 480,
                    "kJ": 1990
                },
                {
                    "номер": "106",
                    "nazvanie_blyuda": "Пельмени с говядиной и свининой",
                    "vykhod_blyuda": 0.32,
                    "zhiry": 34,
                    "belki": 21,
                    "uglevody": 64,
                    "kcal": 650,
                    "kJ": 2710
                },
                {
                    "номер": "116",
                    "nazvanie_blyuda": "Свиные ребра с соусом барбекю и салатом коул-слоу",
                    "vykhod_blyuda": 1,
                    "zhiry": 190,
                    "belki": 100,
                    "uglevody": 0,
                    "kcal": 2110,
                    "kJ": 8830
                },
                {
                    "номер": "140",
                    "nazvanie_blyuda": "Стейк Мясника",
                    "vykhod_blyuda": 0.25,
                    "zhiry": 25,
                    "belki": 45,
                    "uglevody": 0,
                    "kcal": 400,
                    "kJ": 1690
                },
                {
                    "номер": "142",
                    "nazvanie_blyuda": "Стейк Рибай",
                    "vykhod_blyuda": 1,
                    "zhiry": 100,
                    "belki": 180,
                    "uglevody": 0,
                    "kcal": 1620,
                    "kJ": 6780
                },
                {
                    "номер": "157",
                    "nazvanie_blyuda": "Утиная ножка в апельсиновой глазури с яблочным пюре",
                    "vykhod_blyuda": 0.37,
                    "zhiry": 22,
                    "belki": 43,
                    "uglevody": 18,
                    "kcal": 450,
                    "kJ": 1860
                },
                {
                    "номер": "163",
                    "nazvanie_blyuda": "Цыпленок тапака",
                    "vykhod_blyuda": 0.508,
                    "zhiry": 49,
                    "belki": 106,
                    "uglevody": 1,
                    "kcal": 860,
                    "kJ": 3610
                },
                {
                    "номер": "169",
                    "nazvanie_blyuda": "Шашлык из куриного бедра",
                    "vykhod_blyuda": 1,
                    "zhiry": 102,
                    "belki": 168,
                    "uglevody": 0,
                    "kcal": 1590,
                    "kJ": 6650
                },
                {
                    "номер": "170",
                    "nazvanie_blyuda": "Шашлык из свинины",
                    "vykhod_blyuda": 1,
                    "zhiry": 84,
                    "belki": 170,
                    "uglevody": 0,
                    "kcal": 1440,
                    "kJ": 6010
                }
            ]
        },
        {
            name: 'Овощи и салаты',
            items: [
                {
                    "номер": "9",
                    "nazvanie_blyuda": "Ассорти сезонных овощей",
                    "vykhod_blyuda": 0.51,
                    "zhiry": 8.5,
                    "belki": 6.5,
                    "uglevody": 22,
                    "kcal": 190,
                    "kJ": 800
                },
                {
                    "номер": "36",
                    "nazvanie_blyuda": "Домашние соленья",
                    "vykhod_blyuda": 0.505,
                    "zhiry": 1,
                    "belki": 16,
                    "uglevody": 19,
                    "kcal": 140,
                    "kJ": 610
                },
                {
                    "номер": "40",
                    "nazvanie_blyuda": "Жареные кабачки с чесноком и укропом",
                    "vykhod_blyuda": 0.17,
                    "zhiry": 2.5,
                    "belki": 0.5,
                    "uglevody": 22,
                    "kcal": 110,
                    "kJ": 460
                },
                {
                    "номер": "45",
                    "nazvanie_blyuda": "Карпаччо из печеной свеклы",
                    "vykhod_blyuda": 0.32,
                    "zhiry": 14,
                    "belki": 11,
                    "uglevody": 58,
                    "kcal": 410,
                    "kJ": 1710
                },
                {
                    "номер": "83",
                    "nazvanie_blyuda": "Овощи на гриле",
                    "vykhod_blyuda": 0.15,
                    "zhiry": 0.5,
                    "belki": 7,
                    "uglevody": 8.5,
                    "kcal": 70,
                    "kJ": 280
                },
                {
                    "номер": "84",
                    "nazvanie_blyuda": "Овощи на мангале",
                    "vykhod_blyuda": 0.128,
                    "zhiry": 0.5,
                    "belki": 2,
                    "uglevody": 4.5,
                    "kcal": 30,
                    "kJ": 130
                },
                {
                    "номер": "85",
                    "nazvanie_blyuda": "Овощной рататуй",
                    "vykhod_blyuda": 0.25,
                    "zhiry": 11,
                    "belki": 2,
                    "uglevody": 4.5,
                    "kcal": 130,
                    "kJ": 540
                },
                {
                    "номер": "111",
                    "nazvanie_blyuda": "Салат греческий",
                    "vykhod_blyuda": 0.24,
                    "zhiry": 20,
                    "belki": 8,
                    "uglevody": 14,
                    "kcal": 270,
                    "kJ": 1110
                },
                {
                    "номер": "112",
                    "nazvanie_blyuda": "Салат овощной со сметаной",
                    "vykhod_blyuda": 0.21,
                    "zhiry": 0.4,
                    "belki": 2.5,
                    "uglevody": 8.5,
                    "kcal": 50,
                    "kJ": 200
                },
                {
                    "номер": "113",
                    "nazvanie_blyuda": "Салат с бататом и креветкой",
                    "vykhod_blyuda": 0.27,
                    "zhiry": 26,
                    "belki": 13,
                    "uglevody": 4,
                    "kcal": 300,
                    "kJ": 1260
                },
                {
                    "номер": "114",
                    "nazvanie_blyuda": "Салат с кальмаром и молодым картофелем",
                    "vykhod_blyuda": 0.26,
                    "zhiry": 12,
                    "belki": 33,
                    "uglevody": 29,
                    "kcal": 350,
                    "kJ": 1480
                },
                {
                    "номер": "115",
                    "nazvanie_blyuda": "Салат с хрустящими баклажанами в кисло-сладком соусе",
                    "vykhod_blyuda": 0.305,
                    "zhiry": 0.5,
                    "belki": 3.5,
                    "uglevody": 73,
                    "kcal": 310,
                    "kJ": 1310
                },
                {
                    "номер": "143",
                    "nazvanie_blyuda": "Стейк-салат с авокадо и запеченными черри",
                    "vykhod_blyuda": 0.335,
                    "zhiry": 39,
                    "belki": 17,
                    "uglevody": 14,
                    "kcal": 480,
                    "kJ": 1990
                },
                {
                    "номер": "149",
                    "nazvanie_blyuda": "Теплый салат с морепродуктами",
                    "vykhod_blyuda": 0.32,
                    "zhiry": 30,
                    "belki": 44,
                    "uglevody": 13,
                    "kcal": 500,
                    "kJ": 2090
                },
                {
                    "номер": "161",
                    "nazvanie_blyuda": "Цезарь с индейкой",
                    "vykhod_blyuda": 0.275,
                    "zhiry": 57,
                    "belki": 24,
                    "uglevody": 18,
                    "kcal": 680,
                    "kJ": 2850
                },
                {
                    "номер": "162",
                    "nazvanie_blyuda": "Цезарь с креветками",
                    "vykhod_blyuda": 0.251,
                    "zhiry": 37,
                    "belki": 21,
                    "uglevody": 18,
                    "kcal": 490,
                    "kJ": 2060
                }
            ]
        },
        {
            name: 'Супы',
            items: [
                {
                    "номер": "18",
                    "nazvanie_blyuda": "Борщ с салом и зеленью",
                    "vykhod_blyuda": 0.35,
                    "zhiry": 50,
                    "belki": 24,
                    "uglevody": 61,
                    "kcal": 780,
                    "kJ": 3280
                },
                {
                    "номер": "24",
                    "nazvanie_blyuda": "Буйабес с соусом руй и пшеничными тостами",
                    "vykhod_blyuda": 0.35,
                    "zhiry": 3.5,
                    "belki": 18,
                    "uglevody": 30,
                    "kcal": 220,
                    "kJ": 930
                },
                {
                    "номер": "38",
                    "nazvanie_blyuda": "Донская уха с белорыбицей и овощами",
                    "vykhod_blyuda": 0.3813,
                    "zhiry": 0.4,
                    "belki": 2.5,
                    "uglevody": 18,
                    "kcal": 90,
                    "kJ": 370
                },
                {
                    "номер": "61",
                    "nazvanie_blyuda": "Крем-суп с лесными грибами",
                    "vykhod_blyuda": 0.325,
                    "zhiry": 25,
                    "belki": 9.5,
                    "uglevody": 22,
                    "kcal": 350,
                    "kJ": 1470
                },
                {
                    "номер": "64",
                    "nazvanie_blyuda": "Кукурузный крем-суп",
                    "vykhod_blyuda": 0.57,
                    "zhiry": 57,
                    "belki": 35,
                    "uglevody": 84,
                    "kcal": 980,
                    "kJ": 4120
                },
                {
                    "номер": "86",
                    "nazvanie_blyuda": "Окрошка на квасе",
                    "vykhod_blyuda": 0.2809,
                    "zhiry": 7.5,
                    "belki": 14,
                    "uglevody": 14,
                    "kcal": 180,
                    "kJ": 750
                },
                {
                    "номер": "87",
                    "nazvanie_blyuda": "Окрошка на кефире",
                    "vykhod_blyuda": 0.2943,
                    "zhiry": 11,
                    "belki": 18,
                    "uglevody": 12,
                    "kcal": 220,
                    "kJ": 930
                },
                {
                    "номер": "144",
                    "nazvanie_blyuda": "Суп с фрикадельками и овощами",
                    "vykhod_blyuda": 0.34,
                    "zhiry": 13,
                    "belki": 35,
                    "uglevody": 34,
                    "kcal": 390,
                    "kJ": 1650
                },
                {
                    "номер": "151",
                    "nazvanie_blyuda": "Том-ям",
                    "vykhod_blyuda": 0.35,
                    "zhiry": 18,
                    "belki": 33,
                    "uglevody": 49,
                    "kcal": 490,
                    "kJ": 2060
                }
            ]
        },
        {
            name: 'Паста и ризотто',
            items: [
                {
                    "номер": "98",
                    "nazvanie_blyuda": "Папарделле с тигровыми креветками",
                    "vykhod_blyuda": 0.375,
                    "zhiry": 45,
                    "belki": 23,
                    "uglevody": 100,
                    "kcal": 890,
                    "kJ": 3730
                },
                {
                    "номер": "100",
                    "nazvanie_blyuda": "Паста Нери с морепродуктами",
                    "vykhod_blyuda": 0.374,
                    "zhiry": 25,
                    "belki": 45,
                    "uglevody": 100,
                    "kcal": 810,
                    "kJ": 3380
                },
                {
                    "номер": "101",
                    "nazvanie_blyuda": "Паста Каламарата с мясом краба",
                    "vykhod_blyuda": 0.371,
                    "zhiry": 3,
                    "belki": 8,
                    "uglevody": 5.5,
                    "kcal": 80,
                    "kJ": 340
                },
                {
                    "номер": "102",
                    "nazvanie_blyuda": "Паста карбонара",
                    "vykhod_blyuda": 0.2103,
                    "zhiry": 87,
                    "belki": 27,
                    "uglevody": 85,
                    "kcal": 1230,
                    "kJ": 5140
                },
                {
                    "номер": "105",
                    "nazvanie_blyuda": "Паэлья с морепродуктами",
                    "vykhod_blyuda": 0.7992,
                    "zhiry": 30,
                    "belki": 72,
                    "uglevody": 200,
                    "kcal": 1360,
                    "kJ": 5700
                },
                {
                    "номер": "110",
                    "nazvanie_blyuda": "Ризотто de Mare",
                    "vykhod_blyuda": 0.335,
                    "zhiry": 3.5,
                    "belki": 33,
                    "uglevody": 107,
                    "kcal": 590,
                    "kJ": 2470
                }
            ]
        },
        {
            name: 'Десерты',
            items: [
                {
                    "номер": "11",
                    "nazvanie_blyuda": "Баноффи с грушей",
                    "vykhod_blyuda": 0.16,
                    "zhiry": 40,
                    "belki": 6,
                    "uglevody": 45,
                    "kcal": 560,
                    "kJ": 2350
                },
          
                {
                    "номер": "82",
                    "nazvanie_blyuda": "Наполеон",
                    "vykhod_blyuda": 0.284,
                    "zhiry": 43,
                    "belki": 16,
                    "uglevody": 74,
                    "kcal": 750,
                    "kJ": 3130
                },
                {
                    "номер": "95",
                    "nazvanie_blyuda": "Павлова",
                    "vykhod_blyuda": 0.19,
                    "zhiry": 15,
                    "belki": 5.5,
                    "uglevody": 65,
                    "kcal": 410,
                    "kJ": 1730
                },
                {
                    "номер": "96",
                    "nazvanie_blyuda": "Панкейки",
                    "vykhod_blyuda": 0.403,
                    "zhiry": 14,
                    "belki": 17,
                    "uglevody": 99,
                    "kcal": 590,
                    "kJ": 2460
                },
                {
                    "номер": "97",
                    "nazvanie_blyuda": "Панна котта экзотик чиа",
                    "vykhod_blyuda": 0.2604,
                    "zhiry": 19,
                    "belki": 7.5,
                    "uglevody": 40,
                    "kcal": 360,
                    "kJ": 1520
                },
                {
                    "номер": "125",
                    "nazvanie_blyuda": "Сорбет на Ваш выбор",
                    "vykhod_blyuda": 0.05,
                    "zhiry": 11,
                    "belki": 2,
                    "uglevody": 15,
                    "kcal": 170,
                    "kJ": 700
                },
        
                {
                    "номер": "167",
                    "nazvanie_blyuda": "Чизкейк",
                    "vykhod_blyuda": 0.242,
                    "zhiry": 19,
                    "belki": 10,
                    "uglevody": 56,
                    "kcal": 430,
                    "kJ": 1810
                },
                {
                    "номер": "171",
                    "nazvanie_blyuda": "Шоколадный брауни",
                    "vykhod_blyuda": 0.261,
                    "zhiry": 22,
                    "belki": 10,
                    "uglevody": 60,
                    "kcal": 470,
                    "kJ": 1980
                },
                {
                    "номер": "172",
                    "nazvanie_blyuda": "Шоколадный медовик с малиной",
                    "vykhod_blyuda": 0.225,
                    "zhiry": 44,
                    "belki": 9.5,
                    "uglevody": 57,
                    "kcal": 660,
                    "kJ": 2760
                }
            ]
        },
        {
            name: 'Завтраки',
            items: [
                {
                    "номер": "89",
                    "nazvanie_blyuda": "Омлент с пармой",
                    "vykhod_blyuda": 0.32,
                    "zhiry": 43,
                    "belki": 21,
                    "uglevody": 7,
                    "kcal": 500,
                    "kJ": 2100
                },
                        {
                    "номер": "145",
                    "nazvanie_blyuda": "Сырники со сметаной и клубничной эспумой",
                    "vykhod_blyuda": 0.2,
                    "zhiry": 32,
                    "belki": 24,
                    "uglevody": 18,
                    "kcal": 460,
                    "kJ": 1910
                },
                {
                    "номер": "90",
                    "nazvanie_blyuda": "Омлет",
                    "vykhod_blyuda": 0.2,
                    "zhiry": 19,
                    "belki": 18,
                    "uglevody": 4.5,
                    "kcal": 260,
                    "kJ": 1080
                },
                {
                    "номер": "91",
                    "nazvanie_blyuda": "Омлет с цукини и молодым козьим сыром",
                    "vykhod_blyuda": 0.335,
                    "zhiry": 16,
                    "belki": 17,
                    "uglevody": 6,
                    "kcal": 240,
                    "kJ": 1000
                },
                      {
                    "номер": "16",
                    "nazvanie_blyuda": "Блинчики с творожным муссом и домашним вареньем",
                    "vykhod_blyuda": 0.186,
                    "zhiry": 21,
                    "belki": 10,
                    "uglevody": 36,
                    "kcal": 380,
                    "kJ": 1590
                },
                {
                    "номер": "168",
                    "nazvanie_blyuda": "Чирбули (яичница по-грузински)",
                    "vykhod_blyuda": 0.292,
                    "zhiry": 59,
                    "belki": 15,
                    "uglevody": 11,
                    "kcal": 630,
                    "kJ": 2650
                },
                {
                    "номер": "176",
                    "nazvanie_blyuda": "Яичница из 2 х яиц ",
                    "vykhod_blyuda": 0.08,
                    "zhiry": 8.5,
                    "belki": 10,
                    "uglevody": 0.5,
                    "kcal": 120,
                    "kJ": 510
                },
                {
                    "номер": "177",
                    "nazvanie_blyuda": "Яйцо 1 шт",
                    "vykhod_blyuda": 0.04,
                    "zhiry": 4.5,
                    "belki": 5,
                    "uglevody": 0.3,
                    "kcal": 60,
                    "kJ": 250
                },
                {
                    "номер": "178",
                    "nazvanie_blyuda": "Яйцо пашот с драниками из цукини",
                    "vykhod_blyuda": 0.2631,
                    "zhiry": 33,
                    "belki": 24,
                    "uglevody": 19,
                    "kcal": 470,
                    "kJ": 1950
                },
          
            ]
        }
    ]





};