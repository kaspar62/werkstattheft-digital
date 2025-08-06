// Workbook Module - Arbeitsbuch Funktionalität
const Workbook = {
    // Arbeitsbuch Themen - EXAKT nach werken_digital_01.pdf
    topics: [
        { 
            id: 'werkstattregeln', 
            title: 'WERKSTATTREGELN', 
            category: 'Grundlagen',
            pages: [
                { 
                    id: 'werkstatt-1', 
                    title: 'WERKSTATTREGELN - Seite 1', 
                    type: 'content', 
                    image: 'titelbild.jpg',
                    inputs: [
                        { type: 'text', placeholder: 'Name', maxLength: 40 },
                        { type: 'text', placeholder: 'Klasse', maxLength: 20 }
                    ]
                },
                { 
                    id: 'werkstatt-2', 
                    title: 'WERKSTATTREGELN - Seite 2', 
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
                        }
                    ]
                },
                { 
                    id: 'werkstatt-3', 
                    title: 'WERKSTATTREGELN - Seite 3', 
                    type: 'content',
                    questions: [
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
            title: 'SICHERHEIT IN DER WERKSTATT', 
            category: 'Grundlagen',
            pages: [
                { 
                    id: 'sicherheit-1', 
                    title: 'SICHERHEIT IN DER WERKSTATT', 
                    type: 'content', 
                    images: ['augenschutz_icon.jpg', 'gehoerschutz_icon.jpg', 'atemschutz_icon.jpg', 'haare_icon.jpg', 'schmuck_icon.jpg', 'weitekleider_icon.jpg'],
                    questions: [
                        {
                            question: 'Welches sind deine 6 persönlichen Sicherheitsregeln?',
                            inputs: [
                                { type: 'text', placeholder: '1.', maxLength: 70 },
                                { type: 'text', placeholder: '2.', maxLength: 70 },
                                { type: 'text', placeholder: '3.', maxLength: 70 },
                                { type: 'text', placeholder: '4.', maxLength: 70 },
                                { type: 'text', placeholder: '5.', maxLength: 70 },
                                { type: 'text', placeholder: '6.', maxLength: 70 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'werkstatt-maschinen', 
            title: 'Werkstatt, Maschinen und Werkzeuge', 
            category: 'Grundlagen',
            pages: [
                { 
                    id: 'werkstatt-maschinen-1', 
                    title: 'Werkstatt, Maschinen und Werkzeuge', 
                    type: 'content',
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
                }
            ]
        },
        { 
            id: 'verletzungen', 
            title: 'Verhalten bei Verletzungen - ERSTE HILFE', 
            category: 'Grundlagen',
            pages: [
                { 
                    id: 'verletzungen-1', 
                    title: 'Verhalten bei Verletzungen - ERSTE HILFE', 
                    type: 'content', 
                    images: ['auge.jpg', 'schnitt.jpg', 'verbrennung.jpg', 'prellung.jpg', 'schuerfung.jpg'] 
                }
            ]
        },
        { 
            id: 'zangen', 
            title: 'WERKZEUGE UND MASCHINEN - Zangen', 
            category: 'Werkzeuge',
            pages: [
                { 
                    id: 'zangen-1', 
                    title: 'Zangen - Seite 1', 
                    type: 'content', 
                    images: ['zange_beiss.jpg', 'zange_kombi.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung c)', maxLength: 40 },
                                { type: 'text', placeholder: 'Nicht für:', maxLength: 40 }
                            ]
                        }
                    ]
                },
                { 
                    id: 'zangen-2', 
                    title: 'Zangen - Seite 2', 
                    type: 'content', 
                    images: ['zange_seitenschneider.jpg', 'zange_spitz.jpg', 'zange_rund.jpg', 'zange_flach.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 50 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 4',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
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
            category: 'Werkzeuge',
            pages: [
                { 
                    id: 'schraubenzieher-1', 
                    title: 'Schraubenzieher, -dreher', 
                    type: 'content', 
                    images: ['schraubenzieher_schlitz.jpg', 'schraubenzieher_kreuz.jpg', 'schraubenzieher_torx.jpg', 'schraubaufsaetze.jpg', 'akkubohrer_schrauber.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2', 
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Besonderheit des dritten Werkzeugs:',
                            inputs: [
                                { type: 'textarea', placeholder: 'Besonderheit (2 Zeilen)', rows: 2, maxLength: 100 }
                            ]
                        },
                        {
                            question: 'In welche Richtung wird eine Schraube eingedreht?',
                            inputs: [
                                { type: 'text', placeholder: 'Antwort', maxLength: 40 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'messen', 
            title: 'Messen', 
            category: 'Techniken',
            pages: [
                { 
                    id: 'messen-1', 
                    title: 'Messen', 
                    type: 'content', 
                    images: ['metalllineal.jpg', 'doppelmeter.jpg', 'schreinerwinkel.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'bohren', 
            title: 'Bohren', 
            category: 'Techniken',
            pages: [
                { 
                    id: 'bohren-1', 
                    title: 'Bohren - Seite 1', 
                    type: 'content', 
                    images: ['bohraufsatz_holz.jpg', 'bohraufsatz_metall.jpg', 'bohraufsatz_stein.jpg', 'bohraufsatz_forster.jpg', 'bohraufsatz_senker.jpg', 'akkubohrer_schrauber.jpg', 'schlagbohrer.jpg', 'hammer_icon.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Erkennungsmerkmal', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Erkennungsmerkmal', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 4',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 5',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Warum bohrt man mit einem Schlagbohrer?',
                            inputs: [
                                { type: 'textarea', placeholder: 'Begründung (2 Zeilen)', rows: 2, maxLength: 100 }
                            ]
                        }
                    ]
                },
                { 
                    id: 'bohren-2', 
                    title: 'Bohren - Seite 2', 
                    type: 'content', 
                    image: 'standbohrmaschine.jpg',
                    questions: [
                        {
                            question: 'Wofür verwendet man die Standbohrmaschine?',
                            inputs: [
                                { type: 'textarea', placeholder: 'Verwendungszweck (3 Zeilen)', rows: 3, maxLength: 150 }
                            ]
                        },
                        {
                            question: 'Welche Sicherheitsregeln gelten bei der Standbohrmaschine?',
                            inputs: [
                                { type: 'text', placeholder: '1.', maxLength: 60 },
                                { type: 'text', placeholder: '2.', maxLength: 60 },
                                { type: 'text', placeholder: '3.', maxLength: 60 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'schleifen', 
            title: 'Schleifen', 
            category: 'Techniken',
            pages: [
                { 
                    id: 'schleifen-1', 
                    title: 'Schleifen - Seite 1', 
                    type: 'content', 
                    images: ['feile_metall.jpg', 'feile_raspel.jpg', 'schleifpapier.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'Unterschied zum ersten Werkzeug', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 },
                                { type: 'text', placeholder: 'Körnungen von grob zu fein:', maxLength: 50 }
                            ]
                        }
                    ]
                },
                { 
                    id: 'schleifen-2', 
                    title: 'Schleifen - Seite 2', 
                    type: 'content', 
                    images: ['tellerschleifer.jpg', 'convex.jpg', 'oszilierende.jpg', 'concav.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
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
            category: 'Techniken',
            pages: [
                { 
                    id: 'saegen-1', 
                    title: 'Sägen - Seite 1', 
                    type: 'content', 
                    images: ['metallsaege.jpg', 'metall_saegeblatt.jpg', 'dekupiersaege.jpg', 'stichsaege.jpg', 'holz_saegeblatt.jpg', 'japansaege.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit', maxLength: 50 },
                                { type: 'text', placeholder: 'Wofür verwendet?', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 4',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit der Zähne', maxLength: 50 },
                                { type: 'text', placeholder: 'Schnittrichtung', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Unterschied Holz- und Metallsägeblatt:',
                            inputs: [
                                { type: 'textarea', placeholder: 'Unterschiede erklären (3 Zeilen)', rows: 3, maxLength: 150 }
                            ]
                        }
                    ]
                },
                { 
                    id: 'saegen-2', 
                    title: 'Sägen - Seite 2', 
                    type: 'content', 
                    images: ['bandsaege.jpg', 'tischkreissaege.jpg', 'cutter.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'Sicherheitsregel', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 },
                                { type: 'text', placeholder: 'WICHTIGSTE Sicherheitsregel', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 40 },
                                { type: 'text', placeholder: 'Sicherheit beachten', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'andere-werkzeuge', 
            title: 'Andere nützliche Werkzeuge', 
            category: 'Werkzeuge',
            pages: [
                { 
                    id: 'andere-1', 
                    title: 'Andere nützliche Werkzeuge', 
                    type: 'content', 
                    images: ['heissluft_foehn.jpg', 'innensechskant.jpg', 'metallschraubstock.jpg', 'holzschraubstock.jpg', 'schraubzwinge.jpg', 'ahle.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung a)', maxLength: 40 },
                                { type: 'text', placeholder: 'Verwendung b)', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 4',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Besonderheit (Material)', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 5',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Werkzeug 6',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'kleben', 
            title: 'KLEBEN', 
            category: 'Verbindungen',
            pages: [
                { 
                    id: 'kleben-1', 
                    title: 'KLEBEN', 
                    type: 'content', 
                    images: ['weissleim.jpg', 'heisskleber.jpg', 'alleskleber.jpg', '2k_kleber.jpg'],
                    questions: [
                        {
                            question: 'Klebstoff 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet für Material:', maxLength: 40 },
                                { type: 'text', placeholder: 'Trocknungszeit ca.:', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Klebstoff 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Vorteil', maxLength: 40 },
                                { type: 'text', placeholder: 'ACHTUNG bei Verwendung:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Klebstoff 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Klebstoffs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet für:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Klebstoff 4',
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
            title: 'LÖTEN', 
            category: 'Verbindungen',
            pages: [
                { 
                    id: 'loeten-1', 
                    title: 'LÖTEN', 
                    type: 'content', 
                    images: ['loetkolben.jpg', 'drittehand.jpg', 'loetfett.jpg', 'loetzinn.jpg', 'zange_abisolier.jpg', 'zange_seitenschneider.jpg'],
                    questions: [
                        {
                            question: 'Werkzeug 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Temperatur ca.:', maxLength: 30 },
                                { type: 'text', placeholder: 'Sicherheitsregel', maxLength: 60 }
                            ]
                        },
                        {
                            question: 'Werkzeug 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck beim Löten:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Material 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Materials', maxLength: 25 },
                                { type: 'text', placeholder: 'Zweck:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Material 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Materials', maxLength: 25 },
                                { type: 'text', placeholder: 'Material (besteht aus):', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Werkzeug 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name des Werkzeugs', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendung', maxLength: 50 }
                            ]
                        },
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
            category: 'Materialien',
            pages: [
                { 
                    id: 'material-1', 
                    title: 'Material und Technik - Seite 1', 
                    type: 'content', 
                    images: ['Nagel.jpg', 'stoss.jpg', 'gehrung.jpg', 'schraube.jpg'],
                    questions: [
                        {
                            question: 'Verbindung 1',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Verbindung', maxLength: 25 },
                                { type: 'text', placeholder: 'Vorteil', maxLength: 30 },
                                { type: 'text', placeholder: 'Nachteil', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Verbindung 2',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Verbindung', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet bei:', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Verbindung 3',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Verbindung', maxLength: 25 },
                                { type: 'text', placeholder: 'Verwendet für:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Verbindung 4',
                            inputs: [
                                { type: 'text', placeholder: 'Name der Verbindung', maxLength: 25 },
                                { type: 'text', placeholder: 'Benötigt Werkzeug:', maxLength: 30 }
                            ]
                        }
                    ]
                },
                { 
                    id: 'material-2', 
                    title: 'Material und Technik - Seite 2', 
                    type: 'content', 
                    images: ['senker_01.jpg', 'senker_02.jpg', 'senker_03.jpg', 'Naturholz.jpg', 'Holzwerkstoff.jpg', 'aussaegen.jpg'],
                    questions: [
                        {
                            question: 'Warum Löcher senken? (Bilder 1-3)',
                            inputs: [
                                { type: 'text', placeholder: 'Grund für Senker:', maxLength: 50 },
                                { type: 'text', placeholder: 'Schraubenkopf soll:', maxLength: 40 }
                            ]
                        },
                        {
                            question: 'Naturholz',
                            inputs: [
                                { type: 'text', placeholder: 'Definition:', maxLength: 50 },
                                { type: 'text', placeholder: 'Beispiel:', maxLength: 30 }
                            ]
                        },
                        {
                            question: 'Holzwerkstoff',
                            inputs: [
                                { type: 'text', placeholder: 'Definition:', maxLength: 50 },
                                { type: 'text', placeholder: 'Beispiele:', maxLength: 50 }
                            ]
                        },
                        {
                            question: 'Aussägen bedeutet:',
                            inputs: [
                                { type: 'textarea', placeholder: 'Erklärung der Technik (2 Zeilen)', rows: 2, maxLength: 100 }
                            ]
                        }
                    ]
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
        
        // Topic-Overview anzeigen
        this.renderTopicOverview(topic);
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
        
        // Einfache Inputs (z.B. für Name/Klasse) - ohne Bilder
        if (page.inputs && page.inputs.length > 0) {
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
                <button class="back-btn" onclick="Workbook.loadTopic('${page.topicId}')">
                    ← Zurück zur Übersicht
                </button>
                <h2>${page.title}</h2>
            </div>
            
            <div class="page-content">
                ${contentHTML || `
                <div class="content-placeholder">
                    <h3>MS-07: Eingabefelder</h3>
                    <p>Diese Seite hat keine Eingabefelder laut PDF.</p>
                </div>
                `}
                ${this.createDrawingAreas(page)}
            </div>
        `;
        
        // MS-08: Zeichenbereiche nach DOM-Update initialisieren
        setTimeout(() => {
            this.initializeDrawingForPage(page.id);
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
    
    // Antwort speichern
    saveAnswer(topicId) {
        const textarea = document.getElementById(`answer-${topicId}`);
        if (!textarea) return;
        
        const data = {
            answer: textarea.value,
            timestamp: new Date().toISOString()
        };
        
        Storage.saveWorkbookData(topicId, data);
        
        // Feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Gespeichert!';
        btn.classList.add('btn-success');
        
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
        
        // Fortschritt aktualisieren
        Progress.updateProgress(topicId);
    }
};