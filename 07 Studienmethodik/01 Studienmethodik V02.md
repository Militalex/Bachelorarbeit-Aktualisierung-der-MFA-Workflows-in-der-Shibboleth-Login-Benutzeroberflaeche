# Studienmethodik Überblick
- HRZ Design vs. eigenes Design Studie im Labor
## Was soll untersucht werden?
1. Status quo
   - Wahrnehmung des Design
   - Wahrnehmung des Workflows
2. Verbesserungen untersuchen
   - Vokabular und Informationsangebot
   - Workflow: 
      - Reduzierung von 2 auf eine 1 Seite für das 2FA
      - Verbesserung des Yubi-Key Workflows
      - Tokeneingabefeld
   - Fehlermeldungen
   - Supportangebot

## Ablauf:
1. Fragebogen zur Abfragung allgemeiner Informationen (max 5-10 min)
2. Usability Studie des HRZ Design (max 15 min)
3. Abfrage der Usability (max 5-10 min)
4. Usability Studie des neu entwickeltem Design (max 15 min)
5. Abfrage der Usability und Vergleich (max 5-10 min)

# Detaillierte Studienmethodik
## 1. Fragebogen zur Abfragung allgemeiner Informationen
### Demografische Daten
1. Welchem Geschlecht fühlen Sie sich zugehörig?
   - [ ] Weiblich
   - [ ] Männlich
   - [ ] Divers
   - [ ] Keine Angabe
1. Wie alt sind Sie?
   - <input type="number">
1. Welche Rolle haben Sie an der Universität Bonn?
   - [ ] Student
   - [ ] Mitarbeiter
   - [ ] Sonstige (Bitte angeben): 
      - <input type="text">

### Allgemeine Nutzung
4. Wie oft melden Sie sich bei Plattformen der Universität Bonn an?
   - [ ] Täglich
   - [ ] Wöchentlich
   - [ ] Monatlich
   - [ ] Seltener
   - [ ] Nie

### Vorerfahrung
5. Auf einer Skala von 1 bis 5, wie würden Sie ihre Erfahrung im Bereich Informatik einschätzen?
   - [ ] 1 - Sehr unerfahren
   - [ ] 2 - Etwas unerfahren
   - [ ] 3 - Weder erfahren noch unerfahren
   - [ ] 4 - Etwas erfahren
   - [ ] 5 - Sehr erfahren
6. Haben Sie vor der Studie schonmal von Two-Factor-Authentification (2FA) bzw. Zwei-Faktor-Authentifizierung gehört?
   - [ ] Ja
   - [ ] Nein

< Falls Nein: Frage 7-9 überspringen >

7. Nutzen Sie Two-Factor-Authentification (2FA) in Ihrem Alltag?
   - [ ] Ja
   - [ ] Nein
8. Nutzen Sie Two-Factor-Authentification (2FA) für Ihren Uni-Account?
   - [ ] Ja
   - [ ] Nein
9. Welche Two-Factor-Authentification (2FA) Methoden haben Sie in den letzten Wochen benutzt?
   - [ ] Keine
   - [ ] Papier TAN Codes
   - [ ] SMS
   - [ ] Email
   - [ ] Authenticator Applikation (TOTP)
   - [ ] Push-Up-Benachrichtigung auf z.b. dem Smartphone
   - [ ] YubiKey
   - [ ] Weitere (Bitte angeben):
      - <input type="text">

### Fragen zur Oberfläche

Wie Sie vielleicht mitbekommen haben, hat das HRZ der Universität Bonn vor etwa einem Monat die Login Oberfläche geupdatet. 

Hier sehen Sie die aktuelle Login Oberfläche der Universität Bonn:

![alt text](<../assets/screens/01 pwd auth screen.png>)

10. Sind Sie mit der Nutzung dieser Oberfläche vertraut?
    - [ ] Ja
    - [ ] Nein

11. Auf einer Skala von 1 bis 5, wie sehr fühlen Sie sich mit der Funktionsweise der "Anmeldung nicht speichern" Funktion vertraut?
    - [ ] 1 - Sehr unsicher
    - [ ] 2 - Etwas unsicher
    - [ ] 3 - Weder sicher noch unsicher
    - [ ] 4 - Etwas sicher
    - [ ] 5 - Sehr sicher

12. Welche Aspekte dieser Login-Oberfläche wären Ihnen besonders wichtig (maximal 2):
    - [ ] Sicherheit
    - [ ] Einfachheit der Nutzung
    - [ ] Design/Ästhetik
    - [ ] Geschwindigkeit
    - [ ] Barrierefreiheit
    - [ ] Andere (bitte angeben):
      - <input type="text">

## 2. Usability Studie des HRZ Designs (max 15 min)
### (Unter)forschungsfragen:
1. Wie verhält sich ein Nicht-IT-Nutzer im MFA Login Workflow und weiß er immer was zu tun ist? Was sind seine Gedanken?
1. Wie werden Fehlermeldungen empfunden? Sind sie hilfreich?
1. Gibt es Schwierigkeiten, Probleme oder Hindernisse?
1. Wie wird das Informationsangebot empfunden? Sind alle notwendigen Informationen vorhanden? Werden Informationen als unnötig, verwirrend oder störend empfunden?
1. Wir wird das Supportangebot empfunden? Sind die angebotenen Support Möglichkeiten hilfreich, nützlich, unnützlich?

< Auch mit Cognitive Walkthrough durchlaufen >

### Aufgaben Set:
1. Melde dich mit dem Yubi-Key an
2. Melde dich mit deiner Authenticator App an
3. < Weitere Aufgaben, die Fehlermeldungen triggern und Benutzer auffordern, diese zu lösen. >
4. < Aufgaben, die die Support Möglichkeiten testen >


## 3. Abfrage der Usability (max 5-10 min)

### UEQ inspirierter Fragebogen
Entscheiden Sie möglichst spontan. Es ist wichtig, dass Sie nicht lange über
die Begriffe nachdenken, damit Ihre unmittelbare Einschätzung zum Tragen
kommt.

Bitte kreuzen Sie immer eine Antwort an, auch wenn Sie bei der Einschätzung
zu einem Begriffspaar unsicher sind oder finden, dass es nicht so gut zum
Produkt passt.

Es gibt keine „richtige“ oder „falsche“ Antwort. Ihre persönliche Meinung zählt!

|   |   |   |
|---|---|---|
|unverständlich|<nobr><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"></nobr>|verständlich|
|leicht zu lernen|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|schwer zu lernen|
|unberechenbar|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|berechenbar|
|gut|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|schlecht|
|kompliziert|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|einfach|
|sicher|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|unsicher|
|ineffizient|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|effizient|
|übersichtlich|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|verwirrend|
|konservativ|<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">|innovativ|


### SUS Fragebogen
Dies ist ein wissentschaftlich erprobter Fragebogen zur Abfrage der Usability. Bitte füllen Sie diesen bitte Gewissenhaft aus:

|Frage|Stimme überhaupt nicht zu|   |Stimme voll zu|
|---|---|---|---|
|1. Ich denke, dass ich das System gerne häufig benutzen würde.||<nobr><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"></nobr>||
|2. Ich fand das System unnötig komplex.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|3. Ich fand das System einfach zu benutzen.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|4. Ich glaube, ich würde die Hilfe einer technisch versierten Person benötigen, um das System benutzen zu können.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|5. Ich fand, die verschiedenen Funktionen in diesem System waren gut integriert.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|6. Ich denke, das System enthielt zu viele Inkonsistenzen.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|7. Ich kann mir vorstellen, dass die meisten Menschen den Umgang mit diesem System sehr schnell lernen.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|8. Ich fand das System sehr umständlich zu nutzen.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|9. Ich fühlte mich bei der Benutzung des Systems sehr sicher.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||
|10. Ich musste eine Menge lernen, bevor ich anfangen konnte das System zu verwenden.||<input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox"><input type="checkbox">||



## 4. Usability Studie des neuen Designs (max 15 min)
< Erfüllung des selben Sets an Aufgaben >

## 5. Abfrage der Usability und Vergleich (max 5-10 min)

< Abfragung der selben Fragen >

### (Pseudo) Card Sorting:
1. Was sind unter Nutzern gängige Begrifflichkeiten? Wie würden Sie die UI Elemente benennen?

Wie Ihnen bereits aufgeffallen sein könnte, verwendet unser entwickeltes Design andere Begrifflichkeiten. Hier sehen Sie jeweils welche Begrifflichkeiten geändert wurden. Entscheiden Sie sich für Ihre Favoriten:

...

2. Welche Tokeneingabefelder werden präferiert?

< Teilnehmer verschiedene Tokeneingabefelder präsentieren und nach präferenz Sortieren lassen >

### Abschluss/Vergleichs Interview:
1. Wie war Ihr erster Eindruck von den beiden Login Oberflächen?
2. < Zu Auffälligkeiten etwas Fragen >
3. Gab es etwas, das Sie als besonders intuitiv oder schwierig empfunden haben?
   - Gibt es Anmerkungen/Kritikpunkte?
4. Würden Sie eine Oberfläche der anderen vorziehen? Warum?
5. Gibt es ansonsten noch offene Fragen oder Anmerkungen?