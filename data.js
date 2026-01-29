// ===== ANLEITUNGEN DATENBANK =====
// Generiert aus: Einführung WebUntis (digitales Klassenbuch).pdf

const guides = [
    // === APP ANLEITUNGEN ===
    {
        id: 999, // Priorisiert anzeigen
        title: "Das Klassenbuch in der Untis Mobile App",
        description: "Übersicht über die wichtigsten Funktionen: Lehrstoff, Schüler:innen, Hausaufgaben und Einträge.",
        platform: "app",
        category: "klassenbuch", // Wichtig für die Anzeige
        subcategory: "Grundlagen",
        tags: ["App", "Einstieg", "Übersicht"],
        isQuickStart: true,
        content: `
            <p>In der Untis Mobile App gelangen Sie ins Klassenbuch, indem Sie über Ihren persönlichen Stundenplan die gewünschte Stunde, in der Einträge vorgenommen werden sollen, antippen.</p>
            
            <p>Es öffnet sich dann zunächst die Stundenübersicht, in der Ihnen verschiedene Menüpunkte zur Verfügung stehen. Die Punkte <strong>Lehrstoff</strong>, <strong>Schüler:innen</strong>, <strong>Hausaufgaben</strong> und <strong>Klassenbucheinträge</strong> sind dabei die für das Klassenbuch relevanten Punkte.</p>
            
            <p>Die Bezeichnung der Menüpunkte ist dabei in den meisten Fällen selbsterklärend, trotzdem folgt hier nochmal eine Übersicht:</p>
            
            <div class="step">
                <strong>Lehrstoff:</strong> Eingabe des Lehrstoffs, also der Unterrichtsinhalte.
            </div>

            <div class="step">
                <strong>Schüler:innen:</strong> Übersicht der Schüler:innen des Unterrichts zur Abwesenheitskontrolle oder für schülerbezogene Klassenbucheinträge.
            </div>

            <div class="step">
                <strong>Hausaufgaben:</strong> Eingabe von Hausaufgaben, um diese für die Schüler:innen sichtbar zu machen.
            </div>

            <div class="step">
                <strong>Klassenbucheinträge:</strong> Eingabe von Klassenbucheinträgen, die die gesamte Gruppe/Klasse betreffen.
            </div>

            <p>Alle Punkte werden im Folgenden noch detaillierter und mit passenden Beispielen weiter erläutert.</p>

            <div class="screenshot">
                <img src="screenshots/pdf_img-006.png" alt="Übersicht App Klassenbuch Menü">
            </div>
        `
    },

    {
        id: 101,
        title: "Lehrstoffeinträge (App)",
        description: "Dokumentation der Unterrichtsinhalte im Klassenbuch.",
        platform: "app",
        category: "klassenbuch",
        subcategory: "Lehrstoff",
        tags: ["App", "Lehrstoff", "Doku", "Unterricht"],
        isQuickStart: true,
        content: `
            <p>Die Dokumentation der Unterrichtsinhalte ist eine Grundfunktion des Klassenbuchs und wird für jede gehaltene Unterrichtsstunde benötigt, damit diese für WebUntis als erledigt gilt.</p>
            
            <p>Über den Reiter <strong>Lehrstoff</strong> kann über ein Freitextfeld der thematische Inhalt der Unterrichtsstunde dokumentiert werden.</p>
            
            <div class="tip">
                Dabei werden Ihnen bis zu 3 Einträge aus vorherigen Stunden angezeigt, die Sie einfach für die aktuelle Stunde übernehmen können durch einfaches Antippen.
            </div>
        `
    },

    {
        id: 102,
        title: "Abwesenheitskontrollen (App)",
        description: "Erfassung und Bearbeitung von Abwesenheiten und Verspätungen.",
        platform: "app",
        category: "klassenbuch",
        subcategory: "Abwesenheiten",
        tags: ["App", "Fehlzeiten", "Anwesenheit", "Kontrolle", "Wischen"],
        isQuickStart: true,
        content: `
            <p>Neben Lehrstoffeinträgen muss auch in jeder Stunde eine Abwesenheitskontrolle durchgeführt werden. Gehen Sie hierfür auf den Reiter <strong>Schüler:innen</strong> um auf die Übersicht aller Schüler:innen des Unterrichts zu kommen.</p>
            
            <p>In der Schülerliste finden Sie ggf. auch noch weitere Infos wie Klassendienste für die Schüler:innen eingeteilt wurden.</p>
            
            <h3>Abwesend melden oder Verspätung eintragen</h3>
            <p>Um eine:n Schüler:in für die Unterrichtsstunde als abwesend zu markieren, wischen Sie mit dem Finger von <strong>rechts nach links</strong> über die gewünschte Person.</p>
            
            <p>In einer laufenden Stunde haben Sie dabei die Auswahl zwischen:</p>
            <ul>
                <li>der <strong>roten Schaltfläche</strong> zum abwesend setzen für die ganze Stunde</li>
                <li>und der <strong>gelben Schaltfläche</strong> um automatisch eine Verspätung bis zur aktuellen Uhrzeit einzugeben.</li>
            </ul>

            <h3>Eintrag korrigieren</h3>
            <p>Um eine Abwesenheit, die bereits eingegeben wurde, wieder zu löschen, können Sie in die entgegengesetzte Richtung von <strong>links nach rechts</strong> wischen.</p>
            
            <div class="tip">
                Sollten Abwesenheiten im Nachgang bearbeitet werden, ist dies über das rechte der beiden Symbole an der gewünschten Person möglich.
            </div>

            <div class="screenshot">
                <img src="screenshots/pdf_img-014.png" alt="Wischgesten für Anwesenheit in der App">
            </div>
        `
    },
    {
        id: 103,
        title: "Hausaufgaben eingeben (App)",
        description: "Erstellen Sie Hausaufgaben für Schüler:innen und Eltern sichtbar.",
        platform: "app",
        category: "klassenbuch",
        subcategory: "Hausaufgaben",
        tags: ["App", "Hausaufgaben", "Termine"],
        isQuickStart: false,
        content: `
            <p>Hausaufgaben machen Sie über den Reiter <strong>Hausaufgaben</strong> für alle sichtbar.</p>
            <div class="step">
                <span class="step-number">1</span>
                Wählen Sie ein <strong>Fälligkeitsdatum</strong> (Standard ist die nächste Stunde).
            </div>
            <div class="step">
                <span class="step-number">2</span>
                Geben Sie die Aufgabe in das Feld <strong>Text</strong> ein (sichtbar für Schüler/Eltern).
            </div>
            <div class="tip">
                Das Feld „Bemerkung“ ist nur für Lehrkräfte sichtbar!
            </div>
        `
    },
    {
        id: 104,
        title: "Klassenbucheinträge erstellen (App)",
        description: "Dokumentieren Sie Fehlverhalten, vergessene Hausaufgaben oder Lob.",
        platform: "app",
        category: "klassenbuch",
        subcategory: "Einträge",
        tags: ["App", "Klassenbuch", "Bemerkung", "Verhalten"],
        isQuickStart: false,
        content: `
            <p>Sie können Einträge für die ganze Klasse oder einzelne Schüler anlegen.</p>
            <h3>Für die ganze Klasse:</h3>
            <div class="step">
                Gehen Sie auf den Reiter <strong>Klassenbucheinträge</strong> und wählen Sie eine Kategorie (z.B. Belehrung).
            </div>
            <h3>Für einzelne Schüler:innen:</h3>
            <div class="step">
                <span class="step-number">1</span>
                Gehen Sie zur Schülerliste (Reiter <strong>Schüler:innen</strong>).
            </div>
            <div class="step">
                <span class="step-number">2</span>
                Tippen Sie auf das Symbol für neuen Eintrag neben dem Bearbeiten-Symbol.
            </div>
            <div class="step">
                <span class="step-number">3</span>
                Wählen Sie die Kategorie (z.B. "Hausaufgaben vergessen") und speichern Sie.
            </div>
            <div class="tip">
                <strong>Mehrfachauswahl:</strong> Tippen Sie eine Person kurz an, um sie zu markieren, und wählen Sie dann weitere Personen aus, um einen Eintrag für mehrere gleichzeitig zu erstellen.
            </div>
        `
    },
    {
        id: 105,
        title: "Abwesenheiten verwalten (App)",
        description: "Für Klassenlehrkräfte und Tutoren: Fehlzeiten entschuldigen und bearbeiten.",
        platform: "app",
        category: "klassenbuch",
        subcategory: "Verwaltung",
        tags: ["App", "Tutor", "Klassenlehrer", "Entschuldigung"],
        isQuickStart: true,
        content: `
            <p>Zu finden unter <strong>Start → Abwesenheiten</strong>.</p>
            <div class="step">
                <span class="step-number">1</span>
                Nutzen Sie die Filter für Zeitbereiche oder Status (offen/entschuldigt).
            </div>
            <div class="step">
                <span class="step-number">2</span>
                Tippen Sie auf eine Abwesenheit um:
                <ul>
                    <li>Zeit anzupassen</li>
                    <li>Status zu ändern (Entschuldigt/Unentschuldigt)</li>
                    <li>Grund zu ändern</li>
                    <li>Eintrag zu löschen</li>
                </ul>
            </div>
        `
    },

    // === WEB ANLEITUNGEN ===
    {
        id: 201,
        title: "Klassenbuch im Browser nutzen",
        description: "Übersicht über die Web-Funktionen des digitalen Klassenbuchs.",
        platform: "web",
        category: "klassenbuch",
        subcategory: "Übersicht",
        tags: ["Web", "Browser", "Einstieg"],
        isQuickStart: true,
        content: `
            <p>Über Ihren Stundenplan gelangen Sie durch Klick auf eine Stunde direkt ins Klassenbuch.</p>
            <div class="step">
                Mit der Schaltfläche <strong>„Eingeben“</strong> können Sie Lehrstoff über die Sidebar bequem nachholen.
            </div>
            <div class="tip">
                Klassenlehrkräfte können in der Suchleiste nach ihrer Klasse filtern, um alle offenen Stunden der Klasse zu sehen und ggf. Kollegen per Sammel-Nachricht zu erinnern ("Nachricht senden").
            </div>
        `
    },
    {
        id: 202,
        title: "Berichte zum Unterricht",
        description: "Erstellen Sie Arbeitsberichte, Fehlstundenmatrizen und mehr.",
        platform: "web",
        category: "unterricht",
        subcategory: "Berichte",
        tags: ["Web", "Bericht", "Statistik", "Drucken"],
        isQuickStart: false,
        content: `
            <p>Unter <strong>Unterricht → Mein Unterricht</strong> finden Sie das Berichts-Symbol in der Spalte "Berichte".</p>
            <ul>
                <li><strong>Arbeitsbericht:</strong> Listet Lehrstoff, Fehlende und Hausaufgaben pro Stunde auf.</li>
                <li><strong>Fehlzeiten pro Schüler:in:</strong> Zeigt Häufigkeit und Gründe von Fehlzeiten.</li>
                <li><strong>Fehlstundenmatrix:</strong> Übersichtstabelle aller Fehlstunden (fettgedrucktes 'A' = unentschuldigt).</li>
            </ul>
        `
    },
    {
        id: 203,
        title: "Abwesenheiten bearbeiten (Web)",
        description: "Umfangreiche Verwaltung von Fehlzeiten für Klassenlehrkräfte.",
        platform: "web",
        category: "klassenbuch",
        subcategory: "Verwaltung",
        tags: ["Web", "Klassenlehrer", "Entschuldigung", "Sammeländerung"],
        isQuickStart: true,
        content: `
            <p>Gehen Sie zu <strong>Klassenbuch → Abwesenheiten</strong>.</p>
            <div class="step">
                <span class="step-number">1</span>
                Filtern Sie nach Zeitbereich oder Schüler:in.
            </div>
            <div class="step">
                <span class="step-number">2</span>
                Nutzen Sie das Stift-Symbol zum Bearbeiten der Zeiten.
            </div>
            <div class="step">
                <span class="step-number">3</span>
                Klicken Sie auf den Status-Text, um ihn zu ändern (z.B. auf "Entschuldigt").
            </div>
            <div class="tip">
                <strong>Sammelentschuldigung:</strong> Haken Sie mehrere Einträge in der Spalte "Auswahl" an und klicken Sie auf "Entschuldigt", um alle gleichzeitig zu bearbeiten.
            </div>
            <div class="tip">
                <strong>Zusammenfassen:</strong> WebUntis kann angrenzende Fehlzeiten mit gleichem Grund automatisch zu einem Block zusammenfassen.
            </div>
        `
    },
    {
        id: 204,
        title: "Auswertung Klassenbucheinträge",
        description: "Analysieren Sie Verhalten und Hausaufgabenmoral Ihrer Klasse.",
        platform: "web",
        category: "klassenbuch",
        subcategory: "Berichte",
        tags: ["Web", "Auswertung", "Elterngespräch", "Statistik"],
        isQuickStart: false,
        content: `
            <p>Unter <strong>Klassenbuch → Klassenbucheinträge</strong> sehen Sie alle Einträge.</p>
            <div class="step">
                Filtern Sie nach Kategorien (z.B. "Hausaufgaben vergessen"), um schnell eine Übersicht für Elterngespräche zu generieren.
            </div>
        `
    },
    {
        id: 205,
        title: "Fehlzeiten-Berichte für Zeugnisse",
        description: "So erstellen Sie die Gesamtübersicht der Fehlzeiten für das Zeugnis.",
        platform: "web",
        category: "klassenbuch",
        subcategory: "Zeugnis",
        tags: ["Web", "Zeugnis", "Fehlzeiten", "Halbjahr", "Klassenlehrer"],
        isQuickStart: true,
        content: `
            <p>Nutzen Sie den Bericht <strong>„Fehlzeiten pro Klasse“</strong>.</p>
            <div class="step">
                <span class="step-number">1</span>
                Stellen Sie den Zeitbereich auf das ganze Schul-/Halbjahr.
            </div>
            <div class="step">
                <span class="step-number">2</span>
                Setzen Sie Haken bei "Nur fehlende Abwesenheiten" und "Fehltage und -Zeiten trennen".
            </div>
            <div class="step">
                <span class="step-number">3</span>
                Generieren Sie die Gesamtübersicht.
            </div>
            <p>Der Bericht summiert Fehltage und einzelne Fehlstunden separat auf, wie für das Zeugnis benötigt.</p>
        `
    },

    // === STUNDENPLAN ===
    {
        id: 301,
        title: "Stundenpläne einsehen",
        description: "Eigener Plan, Kollegen, Klassen oder Räume anzeigen.",
        platform: "app",
        category: "stundenplan",
        subcategory: "Übersicht",
        tags: ["App", "Stundenplan", "Kollegen", "Raum"],
        isQuickStart: false,
        content: `
            <p>In der App können Sie nicht nur Ihren eigenen Plan sehen.</p>
            <div class="step">
                Nutzen Sie das Menü, um Stundenpläne von <strong>Klassen</strong>, <strong>Räumen</strong> oder <strong>Kollegen</strong> zu suchen.
            </div>
            <div class="tip">
                Tippen Sie auf eine beliebige Stunde in diesen Plänen, um (sofern berechtigt) Details zu sehen oder Räume zu prüfen.
            </div>
        `
    }
];

// Beliebte Suchbegriffe für die Tags unter der Suche (optional, falls wieder aktiviert)
const popularTags = [
    "Abwesenheiten", "Entschuldigung", "Stundenplan", "Fehlzeiten",
    "Klassenbuch", "Berichte", "Oberstufe", "Tutor", "App", "Zeugnis"
];
