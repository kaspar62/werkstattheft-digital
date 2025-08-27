// Workbook Module - Arbeitsbuch Funktionalität
const Workbook = {
    // Arbeitsbuch Themen - EXAKT nach werken_digital_01.pdf
    topics: [
        { 
            id: 'werkstattregeln', 
            title: 'Werkstattregeln', 
            category: 'GRUNDLAGEN',
            pages: [
                { 
                    id: 'werkstatt-regeln', 
                    title: 'WERKSTATTREGELN', 
                    type: 'content',
                    questions: [
                        {
                            question: 'Worauf achte ich, wenn ich mit Farben arbeite?',
                            inputs: [
                                { type: 'text', placeholder: 'a)', maxLength: 50 },
                                { type: 'text', placeholder: 'b)', maxLength: 50 },
                                { type: 'text', placeholder: 'c)', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Wo sammelt sich der meiste Schmutz in der Werkstatt an?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'In welchen Arbeitsschritten wird die Werkstatt aufgeräumt?',
                            inputs: [
                                { type: 'text', placeholder: 'a)', maxLength: 50 },
                                { type: 'text', placeholder: 'b)', maxLength: 50 },
                                { type: 'text', placeholder: 'c)', maxLength: 50 },
                                { type: 'text', placeholder: 'd)', maxLength: 50 },
                                { type: 'text', placeholder: 'e)', maxLength: 50 },
                                { type: 'text', placeholder: 'f)', maxLength: 50 },
                                { type: 'text', placeholder: 'g)', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Wie verhalte ich mich bei beschädigtem Werkzeug?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Welche Fragen stelle ich mir vor Werkzeugverwendung?',
                            inputs: [
                                { type: 'text', placeholder: 'a)', maxLength: 70 },
                                { type: 'text', placeholder: 'b)', maxLength: 70 }
                            ]
                        },
                        {
                            question: 'Muss ich nur meinen Unordnung beseitigen?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Was geschieht bei "diese Unordnung war nicht von mir"?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Worauf achte ich bei der Verwendung des Heissleimes?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Worauf achte ich beim entsorgen des Mülls?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'sicherheit', 
            title: 'Sicherheit in der Werkstatt', 
            category: 'GRUNDLAGEN',
            pages: [
                { 
                    id: 'sicherheit-alle', 
                    title: 'Sicherheit in der Werkstatt', 
                    type: 'content',
                    sections: [
                        {
                            subtitle: 'Die sechs persönlichen Sicherheitsregeln',
                            questions: [
                                {
                                    question: 'Welches sind deine 6 persönlichen Sicherheitsregeln?',
                                    inputsWithIcons: [
                                        { type: 'text', placeholder: '1. Sicherheitsregel', maxLength: 70, icon: 'augenschutz_icon.jpg' },
                                        { type: 'text', placeholder: '2. Sicherheitsregel', maxLength: 70, icon: 'gehoerschutz_icon.jpg' },
                                        { type: 'text', placeholder: '3. Sicherheitsregel', maxLength: 70, icon: 'atemschutz_icon.jpg' },
                                        { type: 'text', placeholder: '4. Sicherheitsregel', maxLength: 70, icon: 'haare_icon.jpg' },
                                        { type: 'text', placeholder: '5. Sicherheitsregel', maxLength: 70, icon: 'schmuck_icon.jpg' },
                                        { type: 'text', placeholder: '6. Sicherheitsregel', maxLength: 70, icon: 'weitekleider_icon.jpg' }
                                    ]
                                }
                            ]
                        },
                        {
                            subtitle: 'Werkstatt, Maschinen und Werkzeuge',
                            questions: [
                                {
                                    question: 'Darf ich mich alleine in der Werkstatt aufhalten?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Ja/Nein', maxLength: 30 }
                                    ]
                                },
                                {
                                    question: 'Erkläre warum?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Begründung', maxLength: 70 }
                                    ]
                                },
                                {
                                    question: 'Wie verhalte ich mich bei Unsicherheit?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Antwort', maxLength: 70 }
                                    ]
                                },
                                {
                                    question: 'Wieviele Personen dürfen an einer Maschine arbeiten?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Anzahl', maxLength: 15 }
                                    ]
                                },
                                {
                                    question: 'Was sind die Gründe?',
                                    inputs: [
                                        { type: 'textarea', placeholder: 'Begründung (2 Zeilen)', rows: 2, maxLength: 140 }
                                    ]
                                },
                                {
                                    question: 'Was muss ich bei Maschinen anziehen?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Antwort', maxLength: 30 }
                                    ]
                                },
                                {
                                    question: 'Bei Staub/Dämpfen achte ich darauf, dass...',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 60 },
                                        { type: 'text', placeholder: 'b)', maxLength: 60 }
                                    ]
                                }
                            ]
                        },
                        {
                            subtitle: 'Verhalten bei Verletzungen - erste Hilfe',
                            questions: [
                                {
                                    question: 'Was mache ich bei einer Augenverletzung?',
                                    icon: 'auge.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 80 },
                                        { type: 'text', placeholder: 'b)', maxLength: 80 },
                                        { type: 'text', placeholder: 'c)', maxLength: 80 }
                                    ]
                                },
                                {
                                    question: 'Was mache ich bei einem Schnitt?',
                                    icon: 'schnitt.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 80 },
                                        { type: 'text', placeholder: 'b)', maxLength: 80 },
                                        { type: 'text', placeholder: 'c)', maxLength: 80 }
                                    ]
                                },
                                {
                                    question: 'Was mache ich bei einer Verbrennung?',
                                    icon: 'verbrennung.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 80 },
                                        { type: 'text', placeholder: 'b)', maxLength: 80 },
                                        { type: 'text', placeholder: 'c)', maxLength: 80 }
                                    ]
                                },
                                {
                                    question: 'Was mache ich bei einer Prellung?',
                                    icon: 'prellung.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 80 },
                                        { type: 'text', placeholder: 'b)', maxLength: 80 },
                                        { type: 'text', placeholder: 'c)', maxLength: 80 }
                                    ]
                                },
                                {
                                    question: 'Was mache ich bei einer Schürfung?',
                                    icon: 'schuerfung.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'a)', maxLength: 80 },
                                        { type: 'text', placeholder: 'b)', maxLength: 80 },
                                        { type: 'text', placeholder: 'c)', maxLength: 80 }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'zangen', 
            title: 'Zangen', 
            category: 'WERKZEUGE',
            pages: [
                { 
                    id: 'zangen-alle', 
                    title: 'Zangen', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'zange_beiss.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_kombi.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung c)', maxLength: 50 },
                                { type: 'text', placeholder: 'Nicht für:', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_seitenschneider.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_spitz.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_rund.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_flach.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'schraubenzieher', 
            title: 'Schraubenzieher, -dreher', 
            category: 'WERKZEUGE',
            pages: [
                { 
                    id: 'schraubenzieher-alle', 
                    title: 'Schraubenzieher, -dreher', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'schraubenzieher_schlitz.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        },
                        {
                            image: 'schraubenzieher_kreuz.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        },
                        {
                            image: 'schraubenzieher_torx.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        }
                    ],
                    specialSection: {
                        mainImage: 'schraubaufsaetze.jpg',
                        smallImage: 'akkubohrer_schrauber.jpg',
                        text: 'Gibt es auch als Aufsätze für den Akkubohrer'
                    },
                    finalQuestion: {
                        question: 'In welche Richtung wird eine Schraube eingedreht?',
                        inputs: [
                            { type: 'text', placeholder: 'Antwort', maxLength: 40 }
                        ]
                    }
                }
            ]
        },
        { 
            id: 'messen', 
            title: 'Messen', 
            category: 'TECHNIKEN',
            pages: [
                { 
                    id: 'messen-alle', 
                    title: 'Messen', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'metalllineal.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'doppelmeter.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 40 }
                            ]
                        },
                        {
                            image: 'schreinerwinkel.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ]
                        },
                    ],
                    schieblehreQuestion: {
                        question: 'Was messe ich mit diesem Messwerkzeug?',
                        sections: [
                            {
                                title: 'a)',
                                inputs: [
                                    { type: 'text', placeholder: 'Antwort 1', maxLength: 50 },
                                    { type: 'text', placeholder: 'Antwort 2', maxLength: 50 }
                                ]
                            },
                            {
                                title: 'b)',
                                inputs: [
                                    { type: 'text', placeholder: 'Antwort 1', maxLength: 50 },
                                    { type: 'text', placeholder: 'Antwort 2', maxLength: 50 }
                                ]
                            },
                            {
                                title: 'c)',
                                inputs: [
                                    { type: 'text', placeholder: 'Antwort 1', maxLength: 50 },
                                    { type: 'text', placeholder: 'Antwort 2', maxLength: 50 }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        { 
            id: 'bohren', 
            title: 'Bohren', 
            category: 'TECHNIKEN',
            pages: [
                { 
                    id: 'bohren-alle', 
                    title: 'BOHREN', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'bohraufsatz_holz.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Erkennungsmerkmal', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'bohraufsatz_metall.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Erkennungsmerkmal', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'bohraufsatz_stein.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 40 }
                            ]
                        },
                        {
                            image: 'bohraufsatz_forster.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'bohraufsatz_senker.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'akkubohrer_schrauber.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Maschine', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'schlagbohrer.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Maschine', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 50 }
                            ]
                        }
                    ],
                    questions: [
                        {
                            question: 'In welche Richtung muss der Bohrer drehen?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Was bedeutet dieses Zeichen an einer Bohrmaschine?',
                            inputs: [
                                { type: 'text', placeholder: 'Bedeutung', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'standbohrmaschine', 
            title: 'Standbohrmaschine', 
            category: 'TECHNIKEN',
            pages: [
                { 
                    id: 'standbohrmaschine-main', 
                    title: 'STANDBOHRMASCHINE', 
                    type: 'content',
                    machineLayout: {
                        image: 'standbohrmaschine.jpg',
                        nameInput: { type: 'text', placeholder: 'Name der Maschine', maxLength: 40 },
                        properties: [
                            { type: 'text', placeholder: 'Eigenschaft 1', maxLength: 50 },
                            { type: 'text', placeholder: 'Eigenschaft 2', maxLength: 50 },
                            { type: 'text', placeholder: 'Eigenschaft 3', maxLength: 50 }
                        ],
                        imageQuestion: {
                            question: 'Wie stelle ich die Bohrtiefe bei der Standbohrmaschine ein?',
                            inputs: [
                                { type: 'text', placeholder: '1.', maxLength: 60 },
                                { type: 'text', placeholder: '2.', maxLength: 60 },
                                { type: 'text', placeholder: '3.', maxLength: 60 },
                                { type: 'text', placeholder: '4.', maxLength: 60 }
                            ]
                        }
                    },
                    questions: [
                        {
                            question: 'Wie stelle ich die Drehgeschwindigkeit bei Metallwerkstücken ein?',
                            inputs: [
                                { type: 'textarea', placeholder: 'Antwort', rows: 3, maxLength: 200 }
                            ]
                        },
                        {
                            question: 'Was muss ich tun um bei einem Metallwerkstück das Bohrloch exakt zu platzieren und ein Abrutschen des Bohrers zu verhindern?',
                            inputs: [
                                { type: 'textarea', placeholder: 'Antwort', rows: 3, maxLength: 200 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'schleifen', 
            title: 'Schleifen', 
            category: 'TECHNIKEN',
            pages: [
                { 
                    id: 'schleifen-alle', 
                    title: 'SCHLEIFEN', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'feile_metall.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'feile_raspel.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'Unterschied zum ersten Werkzeug', maxLength: 60 }
                            ]
                        },
                        {
                            image: 'schleifpapier.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 },
                                { type: 'text', placeholder: 'Körnungen von grob zu fein:', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'tellerschleifer.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ],
                            specialQuestions: [
                                {
                                    question: 'In welcher Zone der Tellerschleifmaschine darf ich schleifen?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Antwort 1', maxLength: 60 },
                                        { type: 'text', placeholder: 'Antwort 2', maxLength: 60 }
                                    ]
                                },
                                {
                                    question: 'Warum darf ich nur in dieser Zone der Tellerschleifmaschine mein Werkstück schleifen?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Antwort 1', maxLength: 60 },
                                        { type: 'text', placeholder: 'Antwort 2', maxLength: 60 }
                                    ]
                                },
                                {
                                    question: 'An welcher Stelle schleift die Tellerschleifmaschine das meiste Material ab?',
                                    inputs: [
                                        { type: 'text', placeholder: 'Antwort 1', maxLength: 60 },
                                        { type: 'text', placeholder: 'Antwort 2', maxLength: 60 }
                                    ]
                                }
                            ]
                        },
                        {
                            image: 'oszilierende.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        }
                    ],
                    questions: [
                        {
                            question: 'Was bedeutet "konvex"?',
                            inputs: [
                                { type: 'text', placeholder: 'Erklärung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Was bedeutet "konkav"?',
                            inputs: [
                                { type: 'text', placeholder: 'Erklärung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Oszillierende Bewegung erklärt:',
                            inputs: [
                                { type: 'textarea', placeholder: 'Erklärung (2 Zeilen)', rows: 2, maxLength: 100 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'saegen', 
            title: 'Sägen', 
            category: 'TECHNIKEN',
            pages: [
                { 
                    id: 'saegen-alle', 
                    title: 'SÄGEN', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'metallsaege.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 }
                            ]
                        },
                        {
                            image: 'japansaege.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 }
                            ]
                        },
                        {
                            image: 'dekupiersaege.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ],
                            specialQuestions: [
                                {
                                    question: 'Zähle die Punkte der Reihenfolge auf, wie du ein neues Sägeblatt in die Decoupiersäge einspannst.',
                                    inputs: [
                                        { type: 'text', placeholder: '1.', maxLength: 80 },
                                        { type: 'text', placeholder: '2.', maxLength: 80 },
                                        { type: 'text', placeholder: '3.', maxLength: 80 },
                                        { type: 'text', placeholder: '4.', maxLength: 80 },
                                        { type: 'text', placeholder: '5.', maxLength: 80 }
                                    ]
                                }
                            ]
                        },
                        {
                            image: 'stichsaege.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 50 },
                                { type: 'text', placeholder: 'Wofür verwendet?', maxLength: 50 }
                            ]
                        }
                    ],
                    dangerousTools: [
                        {
                            title: 'Diese Sägen dürfen nur von der Lehrperson benutzt werden.',
                            tools: [
                                {
                                    image: 'bandsaege.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                        { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                                    ]
                                },
                                {
                                    image: 'tischkreissaege.jpg',
                                    inputs: [
                                        { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                        { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                                    ]
                                }
                            ]
                        }
                    ],
                    questions: [
                        {
                            question: 'Unterschied Holz- und Metallsägeblatt:',
                            inputs: [
                                { type: 'textarea', placeholder: 'Unterschiede erklären (3 Zeilen)', rows: 3, maxLength: 150 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'andere-werkzeuge', 
            title: 'Andere nützliche Werkzeuge', 
            category: 'WERKZEUGE',
            pages: [
                { 
                    id: 'andere-alle', 
                    title: 'Andere nützliche Werkzeuge', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'heissluft_foehn.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'ahle.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'innensechskant.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'schraubzwinge.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Besonderheit (Material)', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'metallschraubstock.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'holzschraubstock.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'cutter.jpg',
                            isSpecial: true,
                            horizontalNames: [
                                { type: 'text', placeholder: 'Name 1', maxLength: 25 },
                                { type: 'text', placeholder: 'Name 2', maxLength: 25 },
                                { type: 'text', placeholder: 'Name 3', maxLength: 25 }
                            ],
                            specialQuestion: 'Worauf ist bei der Anwendung besonders zu achten?',
                            inputs: [
                                { type: 'text', placeholder: 'a)', maxLength: 60 },
                                { type: 'text', placeholder: 'b)', maxLength: 60 },
                                { type: 'text', placeholder: 'c)', maxLength: 60 },
                                { type: 'text', placeholder: 'd)', maxLength: 60 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'kleben', 
            title: 'Kleben', 
            category: 'VERBINDUNGEN',
            pages: [
                { 
                    id: 'kleben-alle', 
                    title: 'KLEBEN', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'weissleim.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet für Material:', maxLength: 40 },
                                { type: 'text', placeholder: 'Trocknungszeit ca.:', maxLength: 30 }
                            ]
                        },
                        {
                            image: 'heisskleber.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Vorteil', maxLength: 40 },
                                { type: 'text', placeholder: 'ACHTUNG bei Verwendung:', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'alleskleber.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet für:', maxLength: 50 }
                            ]
                        },
                        {
                            image: '2k_kleber.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 50 },
                                { type: 'text', placeholder: 'Vorteil', maxLength: 40 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'loeten', 
            title: 'Löten', 
            category: 'VERBINDUNGEN',
            pages: [
                { 
                    id: 'loeten-alle', 
                    title: 'LÖTEN', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'loetkolben.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Temperatur ca.:', maxLength: 30 },
                                { type: 'text', placeholder: 'Sicherheitsregel', maxLength: 60 }
                            ]
                        },
                        {
                            image: 'drittehand.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck beim Löten:', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'loetzinn.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Materials', maxLength: 25 },
                                { type: 'text', placeholder: 'Material (besteht aus):', maxLength: 40 }
                            ]
                        },
                        {
                            image: 'loetfett.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Materials', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck:', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_abisolier.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            image: 'zange_seitenschneider.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung beim Löten', maxLength: 50 }
                            ]
                        }
                    ],
                    questions: [
                        {
                            question: 'Die 4 wichtigsten Schritte beim Löten:',
                            inputs: [
                                { type: 'text', placeholder: '1.', maxLength: 50 },
                                { type: 'text', placeholder: '2.', maxLength: 50 },
                                { type: 'text', placeholder: '3.', maxLength: 50 },
                                { type: 'text', placeholder: '4.', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'material-technik', 
            title: 'Material und Technik', 
            category: 'MATERIALIEN',
            pages: [
                { 
                    id: 'material-alle', 
                    title: 'MATERIAL UND TECHNIK', 
                    type: 'content',
                    toolsWithImages: [
                        {
                            image: 'Nagel.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name', maxLength: 25 }
                            ]
                        },
                        {
                            image: 'schraube.jpg',
                            inputs: [
                                { type: 'text', placeholder: 'Name', maxLength: 25 }
                            ]
                        }
                    ],
                    additionalQuestions: [
                        {
                            question: 'Warum soll man ein kleines Loch ins Holz bohren bevor man einen Nagel einschlägt oder eine Schraube hinein dreht?',
                            inputs: [
                                { type: 'textarea', placeholder: 'Antwort', rows: 2, maxLength: 150 }
                            ]
                        }
                    ],
                    drawingSection: {
                        instruction: 'Zeichne eine Verbindung auf Gehrung und eine auf Stoss',
                        canvases: [
                            { label: 'auf Gehrung', id: 'gehrung-canvas' },
                            { label: 'auf Stoss', id: 'stoss-canvas' }
                        ]
                    },
                    postDrawingQuestions: [
                        {
                            question: 'Mit welchem Werkzeug kann ich den rechten Winkel einstellen?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Welchen Trick gibt es noch um eine bestimmte Bohrtiefe zu bestimmen?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 80 }
                            ]
                        }
                    ],
                    holzartenSection: {
                        items: [
                            {
                                image: 'Naturholz.jpg',
                                inputs: [
                                    { type: 'text', placeholder: 'Name der Holzart', maxLength: 30 },
                                    { type: 'text', placeholder: 'Eigenschaft 1', maxLength: 50 },
                                    { type: 'text', placeholder: 'Eigenschaft 2', maxLength: 50 }
                                ]
                            },
                            {
                                image: 'Holzwerkstoff.jpg',
                                inputs: [
                                    { type: 'text', placeholder: 'Name der Holzart', maxLength: 30 },
                                    { type: 'text', placeholder: 'Eigenschaft 1', maxLength: 50 },
                                    { type: 'text', placeholder: 'Eigenschaft 2', maxLength: 50 }
                                ]
                            }
                        ]
                    },
                    schraubenVersenkSection: {
                        question: 'Wie versenkt man eine Schraube?',
                        steps: [
                            {
                                image: 'senker_01.jpg',
                                input: { type: 'textarea', placeholder: 'Schritt 1', rows: 3, maxLength: 150 }
                            },
                            {
                                image: 'senker_02.jpg',
                                input: { type: 'textarea', placeholder: 'Schritt 2', rows: 3, maxLength: 150 }
                            },
                            {
                                image: 'senker_03.jpg',
                                input: { type: 'textarea', placeholder: 'Schritt 3', rows: 3, maxLength: 150 }
                            }
                        ]
                    },
                    aussaegenSection: {
                        question: 'Wie säge ich eine Form innerhalb einer Platte heraus?',
                        image: 'aussaegen.jpg',
                        inputs: [
                            { type: 'textarea', placeholder: 'Schritt 1', rows: 2, maxLength: 100 },
                            { type: 'textarea', placeholder: 'Schritt 2', rows: 2, maxLength: 100 }
                        ]
                    }
                }
            ]
        }
    ],
    
    currentTopic: null,
    currentPage: null,
    
    // Menü initialisieren - MS-05 mit Kategorien
    initMenu() {
        const topicList = document.getElementById('topicList');
        topicList.innerHTML = '';
        
        // Kategorien gruppieren
        const categories = {};
        this.topics.forEach(topic => {
            if (!categories[topic.category]) {
                categories[topic.category] = [];
            }
            categories[topic.category].push(topic);
        });
        
        // Kategorien rendern
        Object.keys(categories).forEach(categoryName => {
            // Kategorie-Header
            const categoryHeader = document.createElement('li');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = categoryName;
            topicList.appendChild(categoryHeader);
            
            // Themen der Kategorie
            categories[categoryName].forEach(topic => {
                const li = document.createElement('li');
                li.className = 'topic-item';
                li.textContent = topic.title;
                li.dataset.topicId = topic.id;
                li.addEventListener('click', () => this.loadTopic(topic.id));
                topicList.appendChild(li);
            });
        });
    },
    
    // Thema laden - MS-05 mit Seitenstruktur
    loadTopic(topicId) {
        const topic = this.topics.find(t => t.id === topicId);
        if (!topic) return;
        
        this.currentTopic = topic;
        this.currentPage = null;
        
        // Menü aktiv markieren
        document.querySelectorAll('#topicList .topic-item').forEach(li => {
            li.classList.toggle('active', li.dataset.topicId === topicId);
        });
        
        // Bei Werkstattregeln, Sicherheit, Zangen, Schraubenzieher, andere-werkzeuge, messen, bohren, standbohrmaschine, schleifen, saegen, kleben, loeten und material-technik direkt zur einzigen Seite
        if ((topicId === 'werkstattregeln' || topicId === 'sicherheit' || topicId === 'zangen' || topicId === 'schraubenzieher' || topicId === 'andere-werkzeuge' || topicId === 'messen' || topicId === 'bohren' || topicId === 'standbohrmaschine' || topicId === 'schleifen' || topicId === 'saegen' || topicId === 'kleben' || topicId === 'loeten' || topicId === 'material-technik') && topic.pages.length === 1) {
            this.loadPage(topic.pages[0].id);
        } else {
            // Topic-Overview anzeigen
            this.renderTopicOverview(topic);
        }
    },
    
    // Topic-Overview rendern - MS-05 Grundstruktur
    renderTopicOverview(topic) {
        const content = document.getElementById('workbookContent');
        
        content.innerHTML = `
            <div class="topic-header">
                <h2>${topic.title}</h2>
                <div class="topic-meta">
                    <span class="category-badge">${topic.category}</span>
                    <span class="page-count">${topic.pages.length} Seiten</span>
                </div>
            </div>
            
            <div class="topic-pages">
                <h3>Seitenübersicht</h3>
                <div class="pages-grid">
                    ${topic.pages.map(page => `
                        <div class="page-card" data-page-id="${page.id}">
                            <div class="page-icon">📄</div>
                            <h4>${page.title}</h4>
                            <span class="page-type">${page.type}</span>
                            ${page.image || page.images ? '<span class="has-images-badge">🖼️</span>' : ''}
                            <button class="page-btn" onclick="Workbook.loadPage('${page.id}')">
                                Öffnen
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="topic-placeholder">
                <div class="placeholder-info">
                    <h4>MS-06: Bilder-Integration aktiv</h4>
                    <p>Die Bilder aus dem /images/ Ordner sind jetzt sichtbar.</p>
                    <p>Weitere Features folgen:</p>
                    <ul>
                        <li>✏️ Eingabefelder (MS-07)</li>
                        <li>🎨 Zeichenfunktionen (MS-08)</li>
                        <li>📊 Fortschritts-Tracking (MS-09)</li>
                    </ul>
                </div>
            </div>
        `;
    },
    
    // Seite laden - MS-05 Platzhalter
    loadPage(pageId) {
        const page = this.findPageById(pageId);
        if (!page) return;
        
        this.currentPage = page;
        this.renderPage(page);
    },
    
    // Seite finden
    findPageById(pageId) {
        for (let topic of this.topics) {
            const page = topic.pages.find(p => p.id === pageId);
            if (page) {
                page.topicId = topic.id;
                return page;
            }
        }
        return null;
    },
    
    // Einzelne Seite rendern - MS-07 mit Eingabefeldern
    renderPage(page) {
        const content = document.getElementById('workbookContent');
        
        // Kombinierte Bilder + Eingabefelder HTML generieren
        let contentHTML = '';
        
        // Kombinierte Werkzeug-Sektionen (für alle Werkzeuge zusammen)
        if (page.combinedSections && page.combinedSections.length > 0) {
            contentHTML = `
                <div class="combined-tools-page" id="werkzeuge-anfang">
                    <div class="tool-nav">
                        <a href="#werkzeuge-anfang" class="tool-nav-link main-title">WERKZEUGE&nbsp;&nbsp;UND&nbsp;&nbsp;MASCHINEN</a>
                        ${page.combinedSections.map(section => `
                            <a href="#${section.id}" class="tool-nav-link">${section.title}</a>
                        `).join('')}
                    </div>
                    
                    ${page.combinedSections.map(section => `
                        <div id="${section.id}" class="tool-section">
                            <h2 class="tool-section-title">${section.title}</h2>
                            <div class="tools-with-images">
                                ${section.toolsWithImages ? section.toolsWithImages.map((tool, tIdx) => `
                                    <div class="tool-item ${tool.isSpecial ? 'cutter-special' : ''}">
                                        <div class="tool-layout">
                                            <img src="images/${tool.image}" alt="Werkzeug ${tIdx + 1}" class="tool-image">
                                            <div class="tool-inputs">
                                                ${tool.isSpecial && tool.horizontalNames ? `
                                                    <div class="horizontal-names">
                                                        ${tool.horizontalNames.map((input, iIdx) => `
                                                            <input 
                                                                type="${input.type}" 
                                                                placeholder="${input.placeholder}"
                                                                maxlength="${input.maxLength || 25}"
                                                                class="workbook-input name-input"
                                                            >
                                                        `).join('')}
                                                    </div>
                                                    ${tool.specialQuestion ? `
                                                        <div class="special-question-text">${tool.specialQuestion}</div>
                                                    ` : ''}
                                                ` : ''}
                                                ${tool.inputs.map((input, iIdx) => `
                                                    <input 
                                                        type="${input.type}" 
                                                        placeholder="${input.placeholder}"
                                                        maxlength="${input.maxLength || 50}"
                                                        class="workbook-input tool-input"
                                                    >
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                `).join('') : ''}
                                
                                ${section.specialSection ? `
                                    <div class="special-section">
                                        <div class="special-layout">
                                            <img src="images/${section.specialSection.mainImage}" alt="Aufsätze" class="tool-image">
                                            <div class="special-content">
                                                <img src="images/${section.specialSection.smallImage}" alt="Akkubohrer" class="small-image">
                                                <p class="special-text">${section.specialSection.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                                
                                ${section.finalQuestion ? `
                                    <div class="final-question">
                                        <div class="question-group">
                                            <p class="question-text">${section.finalQuestion.question}</p>
                                            <div class="inputs-container">
                                                ${section.finalQuestion.inputs.map((input, iIdx) => `
                                                    <input 
                                                        type="${input.type}" 
                                                        placeholder="${input.placeholder}"
                                                        maxlength="${input.maxLength || 50}"
                                                        class="workbook-input"
                                                    >
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        // Werkzeug-Struktur mit Bildern (für Zangen und Schraubenzieher)
        else if (page.toolsWithImages && page.toolsWithImages.length > 0) {
            contentHTML = `
                <div class="tools-with-images">
                    ${page.toolsWithImages.map((tool, tIdx) => `
                        <div class="tool-item ${tool.isSpecial ? 'cutter-special' : ''}">
                                <div class="tool-layout">
                                    <img src="images/${tool.image}" alt="Werkzeug ${tIdx + 1}" class="tool-image">
                                    <div class="tool-inputs">
                                    ${tool.isSpecial && tool.horizontalNames ? `
                                        <div class="horizontal-names">
                                            ${tool.horizontalNames.map((input, iIdx) => `
                                                <input 
                                                    type="${input.type}" 
                                                    placeholder="${input.placeholder}"
                                                    maxlength="${input.maxLength || 25}"
                                                    class="workbook-input name-input"
                                                >
                                            `).join('')}
                                        </div>
                                        ${tool.specialQuestion ? `
                                            <div class="special-question-text">${tool.specialQuestion}</div>
                                        ` : ''}
                                        ${tool.inputs.map((input, iIdx) => `
                                            <input 
                                                type="${input.type}" 
                                                placeholder="${input.placeholder}"
                                                maxlength="${input.maxLength || 60}"
                                                class="workbook-input tool-input"
                                            >
                                        `).join('')}
                                    ` : `
                                        ${tool.inputs.map((input, iIdx) => `
                                            <input 
                                                type="${input.type}" 
                                                placeholder="${input.placeholder}"
                                                maxlength="${input.maxLength || 50}"
                                                class="workbook-input tool-input"
                                            >
                                        `).join('')}
                                    `}
                                </div>
                            </div>
                            ${tool.specialQuestions ? `
                                <div class="tool-special-questions">
                                    ${tool.specialQuestions.map((question, qIdx) => `
                                        <div class="special-question-group">
                                            <h4 class="special-question-text">${question.question}</h4>
                                            <div class="special-question-inputs">
                                                ${question.inputs.map((input, iIdx) => `
                                                    <input 
                                                        type="${input.type}" 
                                                        placeholder="${input.placeholder}"
                                                        maxlength="${input.maxLength || 60}"
                                                        class="workbook-input"
                                                    >
                                                `).join('')}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                    
                    ${page.additionalQuestions ? `
                        <div class="additional-questions">
                            ${page.additionalQuestions.map((question, qIdx) => `
                                <div class="question-group">
                                    <p class="question-text">${question.question}</p>
                                    <div class="inputs-container">
                                        ${question.inputs.map((input, iIdx) => `
                                            <${input.type === 'textarea' ? 'textarea' : 'input'} 
                                                ${input.type !== 'textarea' ? `type="${input.type}"` : ''}
                                                placeholder="${input.placeholder}"
                                                ${input.rows ? `rows="${input.rows}"` : ''}
                                                maxlength="${input.maxLength || 50}"
                                                class="workbook-input ${input.type === 'textarea' ? 'workbook-textarea' : ''}"
                                            >${input.type === 'textarea' ? '</textarea>' : ''}
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${page.drawingSection ? `
                        <div class="drawing-section">
                            <p class="drawing-instruction">${page.drawingSection.instruction}</p>
                            <div class="dual-canvas-container">
                                ${page.drawingSection.canvases.map(canvas => `
                                    <div class="canvas-item">
                                        <div class="canvas-container" data-canvas-id="${canvas.id}">
                                            <canvas id="${canvas.id}" width="300" height="200"></canvas>
                                        </div>
                                        <p class="canvas-label">${canvas.label}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${page.postDrawingQuestions ? `
                        <div class="post-drawing-questions">
                            ${page.postDrawingQuestions.map((question, qIdx) => `
                                <div class="question-group">
                                    <p class="question-text">${question.question}</p>
                                    <div class="inputs-container">
                                        ${question.inputs.map((input, iIdx) => `
                                            <${input.type === 'textarea' ? 'textarea' : 'input'} 
                                                ${input.type !== 'textarea' ? `type="${input.type}"` : ''}
                                                placeholder="${input.placeholder}"
                                                ${input.rows ? `rows="${input.rows}"` : ''}
                                                maxlength="${input.maxLength || 50}"
                                                class="workbook-input ${input.type === 'textarea' ? 'workbook-textarea' : ''}"
                                            >${input.type === 'textarea' ? '</textarea>' : ''}
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${page.holzartenSection ? `
                        <div class="holzarten-section">
                            <div class="holzarten-container">
                                ${page.holzartenSection.items.map(item => `
                                    <div class="holzart-item">
                                        <img src="images/${item.image}" alt="Holzart" class="holzart-image">
                                        <div class="holzart-inputs">
                                            ${item.inputs.map(input => `
                                                <input 
                                                    type="${input.type}" 
                                                    placeholder="${input.placeholder}"
                                                    maxlength="${input.maxLength || 50}"
                                                    class="workbook-input holzart-input"
                                                >
                                            `).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${page.schraubenVersenkSection ? `
                        <div class="schrauben-versenk-section">
                            <p class="question-text">${page.schraubenVersenkSection.question}</p>
                            <div class="steps-container">
                                ${page.schraubenVersenkSection.steps.map((step, idx) => `
                                    <div class="step-item">
                                        <img src="images/${step.image}" alt="Schritt ${idx + 1}" class="step-image">
                                        <textarea 
                                            placeholder="${step.input.placeholder}"
                                            rows="${step.input.rows || 3}"
                                            maxlength="${step.input.maxLength || 150}"
                                            class="workbook-input workbook-textarea step-input"
                                        ></textarea>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${page.aussaegenSection ? `
                        <div class="aussaegen-section">
                            <p class="question-text">${page.aussaegenSection.question}</p>
                            <div class="aussaegen-layout">
                                <div class="aussaegen-image">
                                    <img src="images/${page.aussaegenSection.image}" alt="Aussägen" class="aussaegen-img">
                                </div>
                                <div class="aussaegen-inputs">
                                    ${page.aussaegenSection.inputs.map(input => `
                                        <textarea 
                                            placeholder="${input.placeholder}"
                                            rows="${input.rows || 2}"
                                            maxlength="${input.maxLength || 100}"
                                            class="workbook-input workbook-textarea aussaegen-input"
                                        ></textarea>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    ${page.dangerousTools ? `
                        ${page.dangerousTools.map(section => `
                            <div class="dangerous-tools-section">
                                <h3 class="dangerous-tools-title">${section.title}</h3>
                                <div class="dangerous-tools-container">
                                    ${section.tools.map((tool, tIdx) => `
                                        <div class="tool-item">
                                            <div class="tool-layout">
                                                <img src="images/${tool.image}" alt="Werkzeug ${tIdx + 1}" class="tool-image">
                                                <div class="tool-inputs">
                                                    ${tool.inputs.map((input, iIdx) => `
                                                        <input 
                                                            type="${input.type}" 
                                                            placeholder="${input.placeholder}"
                                                            maxlength="${input.maxLength || 50}"
                                                            class="workbook-input tool-input"
                                                        >
                                                    `).join('')}
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    ` : ''}
                    
                    ${page.specialSection ? `
                        <div class="special-section">
                            ${page.specialSection.type === 'nagelSchraube' ? `
                                <div class="nagel-schraube-layout">
                                    <div class="image-pair">
                                        <div class="image-with-input">
                                            <img src="images/${page.specialSection.images[0]}" alt="Nagel" class="tool-image">
                                            <input 
                                                type="${page.specialSection.inputs[0].type}" 
                                                placeholder="${page.specialSection.inputs[0].placeholder}"
                                                maxlength="${page.specialSection.inputs[0].maxLength || 25}"
                                                class="workbook-input"
                                            >
                                        </div>
                                        <div class="image-with-input">
                                            <img src="images/${page.specialSection.images[1]}" alt="Schraube" class="tool-image">
                                            <input 
                                                type="${page.specialSection.inputs[1].type}" 
                                                placeholder="${page.specialSection.inputs[1].placeholder}"
                                                maxlength="${page.specialSection.inputs[1].maxLength || 25}"
                                                class="workbook-input"
                                            >
                                        </div>
                                    </div>
                                    <div class="question-below">
                                        <p class="question-text">${page.specialSection.question}</p>
                                        <textarea 
                                            placeholder="${page.specialSection.questionInput.placeholder}"
                                            rows="${page.specialSection.questionInput.rows || 2}"
                                            maxlength="${page.specialSection.questionInput.maxLength || 150}"
                                            class="workbook-input workbook-textarea"
                                        ></textarea>
                                    </div>
                                </div>
                            ` : `
                                <div class="special-layout">
                                    <img src="images/${page.specialSection.mainImage}" alt="Aufsätze" class="tool-image">
                                    <div class="special-content">
                                        <img src="images/${page.specialSection.smallImage}" alt="Akkubohrer" class="small-image">
                                        <p class="special-text">${page.specialSection.text}</p>
                                    </div>
                                </div>
                            `}
                        </div>
                    ` : ''}
                    
                    ${page.finalQuestion ? `
                        <div class="final-question">
                            <div class="question-group">
                                <p class="question-text">${page.finalQuestion.question}</p>
                                <div class="inputs-container">
                                    ${page.finalQuestion.inputs.map((input, iIdx) => `
                                        <input 
                                            type="${input.type}" 
                                            placeholder="${input.placeholder}"
                                            maxlength="${input.maxLength || 50}"
                                            class="workbook-input"
                                        >
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        // Neue Struktur mit Sections (für Sicherheit)
        else if (page.sections && page.sections.length > 0) {
            contentHTML = `
                <div class="page-sections">
                    ${page.sections.map((section, sIdx) => `
                        <div class="section-block">
                            <h3 class="section-subtitle">${section.subtitle}</h3>
                            ${section.images ? `
                                <div class="section-images">
                                    ${section.images.map(img => `<img src="images/${img}" alt="${img}" class="section-image">`).join('')}
                                </div>
                            ` : ''}
                            ${section.questions ? `
                                <div class="questions-list">
                                    ${section.questions.map((q, qIdx) => `
                                        <div class="question-group ${q.icon ? 'with-icon' : ''}">
                                            ${q.icon ? `
                                                <div class="question-icon-layout">
                                                    <img src="images/${q.icon}" alt="${q.question}" class="injury-icon">
                                                    <p class="question-text">${q.question}</p>
                                                </div>
                                            ` : `
                                                <p class="question-text">${q.question}</p>
                                            `}
                                            ${q.inputsWithIcons ? `
                                                <div class="inputs-with-icons">
                                                    ${q.inputsWithIcons.map((input, iIdx) => `
                                                        <div class="input-icon-row">
                                                            <img src="images/${input.icon}" alt="Icon ${iIdx + 1}" class="safety-icon">
                                                            <input 
                                                                type="${input.type}" 
                                                                placeholder="${input.placeholder}"
                                                                maxlength="${input.maxLength || 70}"
                                                                class="workbook-input-wide"
                                                            >
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            ` : q.inputs ? `
                                                <div class="inputs-container">
                                                    ${q.inputs.map((input, iIdx) => `
                                                        ${input.type === 'textarea' ? `
                                                            <textarea 
                                                                placeholder="${input.placeholder}"
                                                                rows="${input.rows || 2}"
                                                                maxlength="${input.maxLength || 200}"
                                                                class="workbook-textarea"
                                                            ></textarea>
                                                        ` : `
                                                            <input 
                                                                type="${input.type}" 
                                                                placeholder="${input.placeholder}"
                                                                maxlength="${input.maxLength || 50}"
                                                                class="workbook-input"
                                                            >
                                                        `}
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        // Einfache Inputs (z.B. für Name/Klasse) - ohne Bilder
        else if (page.inputs && page.inputs.length > 0) {
            contentHTML = `
                <div class="page-inputs">
                    ${page.inputs.map((input, idx) => `
                        <div class="input-group">
                            <input 
                                type="${input.type}" 
                                placeholder="${input.placeholder}"
                                maxlength="${input.maxLength || 50}"
                                class="workbook-input"
                            >
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        // Machine Layout (für Standbohrmaschine)
        else if (page.machineLayout) {
            contentHTML = `
                <div class="machine-layout">
                    <div class="machine-image-section">
                        <div class="machine-image-container">
                            <img src="images/${page.machineLayout.image}" alt="${page.title}" class="machine-image">
                        </div>
                    </div>
                    <div class="machine-details">
                        <div class="machine-name">
                            <input 
                                type="${page.machineLayout.nameInput.type}" 
                                placeholder="${page.machineLayout.nameInput.placeholder}"
                                maxlength="${page.machineLayout.nameInput.maxLength || 40}"
                                class="workbook-input machine-name-input"
                            >
                        </div>
                        <div class="machine-properties">
                            ${page.machineLayout.properties.map((input, idx) => `
                                <input 
                                    type="${input.type}" 
                                    placeholder="${input.placeholder}"
                                    maxlength="${input.maxLength || 50}"
                                    class="workbook-input"
                                >
                            `).join('')}
                        </div>
                    </div>
                </div>
                ${page.machineLayout.imageQuestion ? `
                    <div class="machine-full-width-question">
                        <h4 class="question-text">${page.machineLayout.imageQuestion.question}</h4>
                        <div class="question-inputs">
                            ${page.machineLayout.imageQuestion.inputs.map((input, idx) => `
                                <input 
                                    type="${input.type}" 
                                    placeholder="${input.placeholder}"
                                    maxlength="${input.maxLength || 60}"
                                    class="workbook-input"
                                >
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                ${page.questions ? `
                    <div class="machine-questions">
                        ${page.questions.map((q, qIdx) => `
                            <div class="question-group">
                                <h4 class="question-text">${q.question}</h4>
                                <div class="question-inputs">
                                    ${q.inputs.map((input, idx) => {
                                        if (input.type === 'textarea') {
                                            return `
                                                <textarea 
                                                    placeholder="${input.placeholder}"
                                                    rows="${input.rows || 3}"
                                                    maxlength="${input.maxLength || 200}"
                                                    class="workbook-textarea"
                                                ></textarea>
                                            `;
                                        } else {
                                            return `
                                                <input 
                                                    type="${input.type}" 
                                                    placeholder="${input.placeholder}"
                                                    maxlength="${input.maxLength || 60}"
                                                    class="workbook-input"
                                                >
                                            `;
                                        }
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            `;
        }
        
        // Einzelnes Bild ohne Fragen
        else if (page.image && (!page.questions || page.questions.length === 0)) {
            contentHTML = `
                <div class="page-image-container">
                    <img src="images/${page.image}" alt="${page.title}" class="page-image">
                </div>
            `;
        }
        
        // Fragen mit/ohne Bilder
        else if (page.questions && page.questions.length > 0) {
            // Wenn Bilder vorhanden sind, kombiniere sie mit den Fragen
            if (page.images && page.images.length > 0) {
                contentHTML = `
                    <div class="page-images-gallery">
                        ${page.questions.map((q, qIdx) => {
                            const imageIndex = qIdx;
                            const imageName = page.images[imageIndex];
                            
                            return `
                                <div class="gallery-item">
                                    ${imageName ? `<img src="images/${imageName}" alt="${imageName}" class="gallery-image">` : ''}
                                    <div class="question-group">
                                        <h4 class="question-text">${q.question}</h4>
                                        <div class="question-inputs">
                                            ${q.inputs.map((input, idx) => {
                                                if (input.type === 'textarea') {
                                                    return `
                                                        <textarea 
                                                            placeholder="${input.placeholder}"
                                                            rows="${input.rows || 3}"
                                                            maxlength="${input.maxLength || 200}"
                                                            class="workbook-textarea"
                                                        ></textarea>
                                                    `;
                                                } else {
                                                    return `
                                                        <input 
                                                            type="${input.type}" 
                                                            placeholder="${input.placeholder}"
                                                            maxlength="${input.maxLength || 50}"
                                                            class="workbook-input"
                                                        >
                                                    `;
                                                }
                                            }).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            } 
            // Nur Fragen ohne Bilder
            else {
                contentHTML = `
                    <div class="page-questions">
                        ${page.questions.map((q, qIdx) => `
                            <div class="question-group">
                                <h4 class="question-text">${q.question}</h4>
                                <div class="question-inputs">
                                    ${q.inputs.map((input, idx) => {
                                        if (input.type === 'textarea') {
                                            return `
                                                <textarea 
                                                    placeholder="${input.placeholder}"
                                                    rows="${input.rows || 3}"
                                                    maxlength="${input.maxLength || 200}"
                                                    class="workbook-textarea"
                                                ></textarea>
                                            `;
                                        } else {
                                            return `
                                                <input 
                                                    type="${input.type}" 
                                                    placeholder="${input.placeholder}"
                                                    maxlength="${input.maxLength || 50}"
                                                    class="workbook-input"
                                                >
                                            `;
                                        }
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        }
        
        // Nur Bilder ohne Fragen
        else if (page.images && page.images.length > 0) {
            contentHTML = `
                <div class="page-images-gallery">
                    ${page.images.map(img => `
                        <div class="gallery-item">
                            <img src="images/${img}" alt="${img}" class="gallery-image">
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        content.innerHTML = `
            <div class="page-header">
                <h2>${page.title}</h2>
                <!-- MS-09: Save Button -->
                <button id="savePageBtn" class="btn btn-primary" onclick="Workbook.savePage()">
                    💾 Speichern
                </button>
            </div>
            
            <div class="page-content">
                ${contentHTML || `
                <div class="content-placeholder">
                    <h3>MS-07: Eingabefelder</h3>
                    <p>Diese Seite hat keine Eingabefelder laut PDF.</p>
                </div>
                `}
                ${this.createDrawingAreas(page)}
                ${page.schieblehreQuestion ? this.renderSchieblehreQuestion(page.schieblehreQuestion) : ''}
            </div>
        `;
        
        // MS-08: Zeichenbereiche nach DOM-Update initialisieren
        setTimeout(() => {
            this.initializeDrawingForPage(page.id);
            // MS-09: Gespeicherte Daten laden
            this.loadPageData(page.id);
        }, 100);
    },
    
    // MS-08: Zeichenbereiche für Seite erstellen
    createDrawingAreas(page) {
        if (!page || !page.id) return '';
        
        switch (page.id) {
            case 'werkstatt-1':
                // Titelseite mit Name/Klasse Zeichenbereichen
                return `
                    <div class="drawing-areas">
                        <h3>✏️ Handschriftliche Eingabe</h3>
                        <div class="name-drawing-area">
                            <h4>Name:</h4>
                            <div id="name-canvas-toolbar"></div>
                            <div id="name-canvas-container"></div>
                        </div>
                        <div class="class-drawing-area">
                            <h4>Klasse:</h4>
                            <div id="class-canvas-toolbar"></div>
                            <div id="class-canvas-container"></div>
                        </div>
                    </div>
                `;
                
            case 'material-1':
                // Material und Technik - Technische Zeichnungen
                return `
                    <div class="drawing-areas">
                        <h3>🔧 Technische Zeichnungen</h3>
                        <div class="connection-drawing-area">
                            <h4>Verbindung "auf Stoss":</h4>
                            <div id="stoss-canvas-toolbar"></div>
                            <div id="stoss-canvas-container"></div>
                        </div>
                        <div class="connection-drawing-area">
                            <h4>Verbindung "auf Gehrung":</h4>
                            <div id="gehrung-canvas-toolbar"></div>
                            <div id="gehrung-canvas-container"></div>
                        </div>
                    </div>
                `;
                
            default:
                return '';
        }
    },
    
    // Schieblehre Question rendering
    renderSchieblehreQuestion(schieblehreQuestion) {
        return `
            <div class="schieblehre-question-section">
                <div class="schieblehre-layout-main">
                    <div class="schieblehre-image-large">
                        <img src="images/schieblehre_messen.jpg" alt="Schieblehre" class="schieblehre-main-image">
                    </div>
                    <div class="schieblehre-name-input">
                        <input 
                            type="text" 
                            placeholder="Name des Werkzeugs"
                            maxlength="30"
                            class="workbook-input"
                        >
                    </div>
                </div>
                <h3 class="schieblehre-question-title">${schieblehreQuestion.question}</h3>
                <div class="schieblehre-sections">
                    ${schieblehreQuestion.sections.map((section, idx) => {
                        const colors = ['blue', 'green', 'yellow'];
                        const colorClass = colors[idx] || 'blue';
                        return `
                            <div class="schieblehre-section">
                                <div class="color-box ${colorClass}-box"></div>
                                <div class="section-inputs">
                                    <input 
                                        type="text" 
                                        placeholder="${section.title}"
                                        maxlength="30"
                                        class="workbook-input section-name-input"
                                    >
                                    <div class="answer-inputs">
                                        ${section.inputs.map((input, inputIdx) => `
                                            <input 
                                                type="${input.type}" 
                                                placeholder="${input.placeholder}"
                                                maxlength="${input.maxLength || 50}"
                                                class="workbook-input"
                                            >
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },
    
    // MS-08: Zeichenbereiche für spezifische Seite initialisieren
    initializeDrawingForPage(pageId) {
        switch (pageId) {
            case 'werkstatt-1':
                // Name-Zeichenbereich
                Drawing.createDrawingToolbar('name-canvas-toolbar');
                Drawing.initCanvasArea('name-canvas-container', 300, 40);
                
                // Klasse-Zeichenbereich
                Drawing.createDrawingToolbar('class-canvas-toolbar');
                Drawing.initCanvasArea('class-canvas-container', 200, 40);
                break;
                
            case 'material-1':
                // Stoss-Verbindung Zeichnungen
                Drawing.createDrawingToolbar('stoss-canvas-toolbar');
                Drawing.initCanvasArea('stoss-canvas-container', 200, 150);
                
                // Gehrung-Verbindung Zeichnungen
                Drawing.createDrawingToolbar('gehrung-canvas-toolbar');
                Drawing.initCanvasArea('gehrung-canvas-container', 200, 150);
                break;
        }
    },
    
    // MS-09: Seite speichern (alle Eingabefelder und Zeichnungen)
    savePage() {
        if (!this.currentPage) return;
        
        const pageId = this.currentPage.id;
        const pageData = {
            timestamp: new Date().toISOString(),
            inputs: {},
            canvases: {}
        };
        
        // Alle Input-Felder sammeln
        const inputs = document.querySelectorAll('.workbook-input, .workbook-textarea');
        inputs.forEach((input, index) => {
            pageData.inputs[`input_${index}`] = input.value;
        });
        
        // Canvas-Zeichnungen speichern
        if (Drawing && Drawing.canvasInstances) {
            Drawing.canvasInstances.forEach((instance, containerId) => {
                const dataURL = Drawing.getCanvasData(containerId);
                if (dataURL) {
                    // Canvas ID extrahieren
                    const canvasId = containerId.replace('-container', '');
                    Storage.saveCanvasData(pageId, canvasId, dataURL);
                    pageData.canvases[canvasId] = true; // Marker dass Canvas existiert
                }
            });
        }
        
        // Daten speichern
        Storage.saveWorkbookData(pageId, pageData);
        
        // Feedback anzeigen
        this.showSaveConfirmation();
        
        // Fortschritt aktualisieren
        this.updatePageProgress();
    },
    
    // MS-09: Gespeicherte Daten für Seite laden
    loadPageData(pageId) {
        const savedData = Storage.getWorkbookData(pageId);
        if (!savedData) return;
        
        // Input-Felder wiederherstellen
        if (savedData.inputs) {
            const inputs = document.querySelectorAll('.workbook-input, .workbook-textarea');
            inputs.forEach((input, index) => {
                const savedValue = savedData.inputs[`input_${index}`];
                if (savedValue !== undefined) {
                    input.value = savedValue;
                }
            });
        }
        
        // Canvas-Zeichnungen wiederherstellen
        if (savedData.canvases && Drawing) {
            setTimeout(() => {
                Object.keys(savedData.canvases).forEach(canvasId => {
                    const dataURL = Storage.getCanvasData(pageId, canvasId);
                    if (dataURL) {
                        Drawing.loadCanvasData(canvasId + '-container', dataURL);
                    }
                });
            }, 200); // Warten bis Canvas initialisiert sind
        }
    },
    
    // Save-Bestätigung anzeigen
    showSaveConfirmation() {
        const btn = document.getElementById('savePageBtn');
        if (!btn) return;
        
        const originalText = btn.textContent;
        btn.textContent = '✅ Gespeichert!';
        btn.classList.add('btn-success');
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('btn-success');
            btn.disabled = false;
        }, 2000);
    },
    
    // MS-09: Fortschritt für aktuelle Seite aktualisieren
    updatePageProgress() {
        const allWorkbookData = Storage.getAllWorkbookData();
        let totalPages = 0;
        let completedPages = 0;
        
        // Alle Seiten zählen
        this.topics.forEach(topic => {
            totalPages += topic.pages.length;
            topic.pages.forEach(page => {
                if (allWorkbookData[page.id]) {
                    completedPages++;
                }
            });
        });
        
        // Fortschritt berechnen und anzeigen
        const progressPercent = totalPages > 0 ? Math.round((completedPages / totalPages) * 100) : 0;
        
        // Progress-Anzeige aktualisieren
        const progressEl = document.getElementById('workbookProgress');
        if (progressEl) {
            progressEl.textContent = `${progressPercent}%`;
        }
        
        // Homepage-Stats aktualisieren
        if (window.App && window.App.updateHomepageStats) {
            window.App.updateHomepageStats();
        }
    },
    
    // Alte Funktion für Kompatibilität
    saveAnswer(topicId) {
        this.savePage();
    }
};