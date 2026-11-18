# **Bachelorarbeit:** Aktualisierung der Shibboleth-Login-Benutzeroberfläche der Universität Bonn

Dieses Repository enthält die im Rahmen einer Bachelorarbeit an der Universität
Bonn entwickelten Prototypen und Arbeitsmaterialien. Untersucht wurden die Multi-Faktor-Authentifizierungs-(MFA-)Workflows der Single-Sign-On (SSO) Software Shibboleth, die bei der Universität Bonn zum Einsatz kommt.

Im Mittelpunkt steht der Vergleich eines bestehenden Login-Ablaufs mit einem
überarbeiteten Entwurf. Untersucht werden unter anderem Verständlichkeit,
Fehlermeldungen, Informationsangebot, Supportmöglichkeiten und die
Benutzerfreundlichkeit verschiedener zweiter Faktoren.

> **Hinweise:** Vertrauliche Rohdaten, Interviewaufzeichnungen, qualitative Codierungen und Zugangsdaten werden über `.gitignore` vom Repository ausgeschlossen.

## Abstract
Die von der Single Sign-On (SSO) Software Shibboleth bereitgestellte Anmeldemaske ist in ihrer aktuellen Form und Konzeption unter vielen Forschungseinrichtungen und Universitäten weit verbreitet. Viele Universitäten, darunter auch die Universität Bonn, verwenden eine nur leicht vom Design angepasste Version der bereitgestellten Shibboleth-Vorlage, ohne die Abläufe der Multi-Faktor-Authentifizierung (MFA) und das Interaktionskonzept anzupassen. Es stellt sich heraus, dass die von Shibboleth bereitgestellte Anmeldemaske bei den MFA-Abläufen diverse Usability-Probleme mitbringt. Aufbauend auf dem Design, das der zentrale IT-Dienstleister der Universität Bonn (Hochschulrechenzentrum (HRZ)) zum aktuellen Zeitpunkt zur Verfügung stellt, wird ein Annäherungsversuch mit einem Prototyp unter Einbeziehung von Benutzern durchgeführt. Dafür wurden zehn Teilnehmer für ein Think-Aloud-Usability-Testing mit dem offiziellen HRZ-Design und dem Prototypen in das Institut eingeladen und während der Studie für beide Entwürfe ein SUS-Score erhoben. Sowohl qualitative als auch quantitative Ergebnisse zeigen, dass die Gestaltung des Prototypen von Teilnehmern mehrheitlich vorgezogen wird. Weitere Ergebnisse deuten auf eine Fusionierung mentaler Modelle des Benutzers und der Entwickler bei der Shibboleth- Anmeldemaske hin. Es konnte nachgewiesen werden, dass der umgesetzte Prototyp eine Verbesserung darstellt, allerdings noch weitere Iterationen und Analysen notwendig sind.

### Keywords
Usability-Studie, Multi-Faktor-Authentifizierung (MFA), Shibboleth, UI-Design

<a id="projektstruktur"></a>

## Projektstruktur
Das Repository ist chronologisch und thematisch nach den einzelnen Phasen der
Bachelorarbeit gegliedert. Es enthält sowohl die im Verlauf der Arbeit
entstandenen Materialien als auch die Prototypen, Studienunterlagen und
Auswertungen:

> **Hinweis:** Die unten mit "[Abschnitt noch in Arbeit]" markierten Abschnitte werden noch (Änderungen vorbehalten) in dieser README ergänzt.

1. **Themenfindung und Vorbereitung**
   1.1. [Themenfindung](#11-themenfindung)<br>
   1.2. [Experteninterview](#12-experteninterview)<br>
   1.3. [Exposé](#13-expose)<br>
   1.4. [Literaturrecherche und Related Work](#14-literaturrecherche-und-related-work)
2. **Konzeption und Prototyping**
   2.1. [Studienmethodik](#21-studienmethodik)<br>
   2.2. First Prototype *[Abschnitt noch in Arbeit]*<br>
   2.3. Studienwebseite *[Abschnitt noch in Arbeit]*<br>
   2.4. Second Prototype *[Abschnitt noch in Arbeit]*
3. **Studienvorbereitung und Datenerhebung**
   3.1. Studienvorbereitung *[Abschnitt noch in Arbeit]*<br>
   3.2. Gesammelte Studiendaten *[Abschnitt noch in Arbeit]*
4. **Auswertung und Dokumentation**
   4.1. Studienanalyse *[Abschnitt noch in Arbeit]*<br>
   4.2. Entwurf der Bachelorarbeit *[Abschnitt noch in Arbeit]*<br>
   4.3. Fertige Bachelorarbeit *[Abschnitt noch in Arbeit]*
5. **Präsentationen und ergänzende Materialien**
   5.1. BA Pitch *[Abschnitt noch in Arbeit]*<br>
   5.2. Abschlusspräsentation *[Abschnitt noch in Arbeit]*

<a id="themenfindung-und-vorbereitung"></a>

## 1. Themenfindung und Vorbereitung

<a id="11-themenfindung"></a>

### 1.1 Themenfindung

[← Zur Projektstruktur](#projektstruktur)

Zu Beginn der Bachelorarbeit standen die folgenden Themen zur Auswahl, die in einem ersten Gruppentreffen vorgestellt wurden. Die meisten Themen haben Bezug zu Plattformen der Universität Bonn:

1. Aktualisierung des Shibboleth-Login-Workflows
2. Begleitung der YubiKey-Rollouts
3. Überarbeitung des [GOsa-Systems](https://gosa.gosa.uni-bonn.de/gosa/)
   _(Das GOsa System ist das zentrale Verwaltungssystem der digitalen Zugangs- und Stammdaten)_
4. Verbesserung des WebAuthn-Workflow
   _(Es geht um den Workflow des Einrichtens der YubiKeys)_
5. Analyse von Log-Files beim YubiKey-Einsatz
6. Analyse der Lernvideos von secaware.nrw
7. Risk Analysis von KI-basierten Angriffsszenarien

Es wurde, wie der Titel der Bachelorarbeit vermuten lässt, das erste der vorgeschlagenen Themen ausgewählt.

#### Materialien
- [BA_Themen.pdf](<01 Themen/BA_Themen.pdf>) als die vom Betreuer vorgestellten Themen.

<a id="12-experteninterview"></a>

### 1.2 Experteninterview

[← Zur Projektstruktur](#projektstruktur)

Es wurde anschließend ein offenes Experteninterview mit einem Mitarbeiter des HRZ-Identity-Managements geführt. Dabei wurde deutlich: Die Universität wollte YubiKeys sicher und flächendeckend einsetzen, doch Registrierung und Shibboleth-Anmeldung waren teilweise kompliziert, langwierig und unklar. Besonders missverständliche Formulierungen, technische Fehlermeldungen und wenig hilfreiche MFA-Abläufe fielen auf. Diese Erkenntnisse bildeten die Grundlage für den Prototypen und die anschließende Usability-Studie.

#### Materialien
Die Materialien des Experteninterviews, darunter Audioaufnahmen und Transkriptionen, wurden aus vertraulichen Gründen nicht ins Repository aufgenommen.

<a id="13-expose"></a>

### 1.3 Exposé

[← Zur Projektstruktur](#projektstruktur)

Es wurde ein Exposé angefertigt und in einem Gruppentreffen vorgestellt. Das Exposé legt den groben Rahmen und die Richtung der Bachelorarbeit fest.

#### Materialien
- [Exposé.pdf](<03 Exposé/BA_Exposé_Ley.pdf>)
- [Exposé_Pitch.pdf](<03 Exposé/BA_Exposé_Präsentation_Ley.pdf>)

<a id="14-literaturrecherche-und-related-work"></a>

### 1.4 Literaturrecherche und Related Work

[← Zur Projektstruktur](#projektstruktur)

Im Folgenden werden kurz die wichtigsten Literaturquellen der Arbeit präsentiert.

> **Hinweis:** Die originalen `.pdf`-Dateien wurden aus Urheberrechtsgründen nicht in dem Repository zur Verfügung gestellt.

#### Butz, Krüger und Völkel – „Mensch-Maschine-Interaktion“ (2022)
Das MCI-Buch lieferte die wichtigsten theoretischen Grundlagen und Definitionen der Arbeit:

- **Usability:** Ein Produkt soll von bestimmten Benutzern in einem bestimmten Nutzungskontext effektiv, effizient und zufriedenstellend verwendet werden können.
- **User Experience (UX):** Betrachtet das ganzheitliche Benutzererleben während der Interaktion mit einem System.
- **Mentale Modelle:** Benutzer entwickeln Vorstellungen darüber, wie ein System funktioniert und auf ihre Eingaben reagieren sollte. Weichen diese Vorstellungen vom tatsächlichen Systemverhalten ab, entstehen Verwirrung und Bedienprobleme.
- **Heuristische Evaluation:** Benutzeroberflächen können systematisch anhand festgelegter Usability-Heuristiken auf Designprobleme untersucht werden.

#### Jakob Nielsen – „10 Usability Heuristics for User Interface Design“ (2024)
Die zehn Usability-Heuristiken von Nielsen bildeten eine wichtige Grundlage für die Analyse und Überarbeitung der Benutzeroberfläche.
  > 1\. Visibility of System Status
  > 2\. Match Between the System and the Real World
  > 3\. User Control and Freedom
  > 4\. Consistency and Standards
  > 5\. Error Prevention
  > 6\. Recognition Rather than Recall
  > 7\. Flexibility and Efficiency of Use
  > 8\. Aesthetic and Minimalist Design
  > 9\. Help Users Recognize, Diagnose, and Recover from Errors
  > 10\. Help and Documentation

#### Adams und Sasse – „Users are not the enemy“ (1999)
Die Arbeit zeigt, dass Benutzer nicht als Schwachstelle eines Sicherheitssystems betrachtet werden sollten. Stattdessen müssen Sicherheitsmechanismen verständlich und an den tatsächlichen Bedürfnissen der Benutzer ausgerichtet sein.
> ![Users are not the enemy – Schaubild](<assets/Users are not the enemy Schaubild.jpg>)
_Die Abbildung verdeutlicht den Zusammenhang zwischen Sicherheit, Benutzerfreundlichkeit und dem Verhalten der Benutzer._

#### Whitten und Tygar – „Why Johnny Can’t Encrypt“ (1999)
Die bekannte Studie zeigt, dass Sicherheitsmechanismen trotz technisch korrekter Umsetzung scheitern können, wenn sie nicht ausreichend benutzbar sind.
> ![Darstellung aus der Usability-Forschung zu PGP 5.0](<assets/PGP 5.0.jpg>)
_Beispiel für die Problematik, dass technische Sicherheit und tatsächliche Benutzerfreundlichkeit auseinanderdriften können._

#### Still, Cain und Schuster – „Human-centered authentication guidelines“ (2017)
Die Autoren formulieren sechs Guidelines für benutzerzentrierte Anmeldemasken. Besonders relevant für diese Arbeit sind die Einbeziehung unterschiedlicher Benutzergruppen, die Reduzierung der kognitiven Belastung, verständliche Erklärungen zu Sicherheitsrisiken, der Verzicht auf Fachbegriffe sowie klare und schnell auffindbare Aktionen.

#### Reese et al. – „A Usability Study of Five Two-Factor Authentication Methods“ (2019)
Die Studie vergleicht verschiedene 2FA-Verfahren und verdeutlicht, dass sich deren Benutzerfreundlichkeit deutlich unterscheiden kann.

#### Eblesch, Elbaylar und Rochner – „Vergleich der Usability von Zwei-Faktor-Authentifizierung im Web“ (2024)
Die unveröffentlichte Vorarbeit der Projektgruppe für diese Bachelorarbeit untersuchte, wie die alte Shibboleth-Anmeldemaske durch verständlichere Formulierungen, klarere Eingabefelder, bessere Hilfestellungen und einen einfacheren MFA-Ablauf verbessert werden kann.

In einer Think-Aloud-Studie mit 60 Personen wurde das bestehende Design mit einer überarbeiteten Version verglichen. Dabei zeigte sich, dass das neue Design als übersichtlicher, ansprechender und intuitiver wahrgenommen wurde.

Gleichzeitig wurden zentrale Schwachstellen des alten Designs sichtbar, etwa unklare Optionen, technische Fehlermeldungen, ein verschachtelter Ablauf und fehlende visuelle Rückmeldungen. Die Ergebnisse bildeten eine wichtige Grundlage für die Entwicklung und Untersuchung des eigenen Prototyps.

> ![Passwort Screen der Projektgruppe im Vergleich](<assets/screens/pg/01 pwd auth screen.png>)
> ![Token Auswahl Screen der Projektgruppe im Vergleich](<assets/screens/pg/02 token selection screen.png>)
#### Materialien
- [Elevator_Pitch.pdf](<05 Elevator Pitch/BA_Elevator_Pitch_Ley.pdf>)
- [Related_Work_Pitch.pdf](<06 Related Work Pitch/BA_Related_Work_Pitch_Ley.pdf>)

## 2. Konzeption und Prototyping

<a id="21-studienmethodik"></a>

### 2.1 Studienmethodik

[← Zur Projektstruktur](#projektstruktur)

Um die Usability des bestehenden HRZ-Designs mit dem entwickelten Prototypen zu vergleichen, wurde eine Usability-Studie mit zehn Personen durchgeführt. Beide Oberflächen wurden im Within-Subjects-Design getestet; die Reihenfolge wurde abwechselnd variiert, damit das Ergebnis nicht von der zuerst gesehenen Oberfläche beeinflusst wird.

### Ablauf
1. **Einstiegsfragebogen:** Erfassung allgemeiner Informationen, IT-Erfahrung und bisheriger Erfahrungen mit Zwei-Faktor-Authentifizierung.
2. **Think-Aloud-Tests:** Die Teilnehmenden bearbeiteten auf beiden Oberflächen Aufgaben zur Anmeldung mit YubiKey und Authentifizierungs-App sowie Szenarien zu einem vergessenen Passwort und einer Supportanfrage.
3. **Fragebögen:** Nach jedem Durchlauf wurden die wahrgenommene Usability mit dem SUS und der erste Nutzungseindruck mit einer gekürzten UEQ-Version erfasst.
4. **Abschlussinterview:** In einem offenen, semi-strukturierten Gespräch konnten die Teilnehmenden beide Oberflächen vergleichen und ihre Präferenzen begründen.

An der Studie nahmen sechs Mitarbeitende und vier Studierende teil. Die Think-Aloud-Durchgänge, Fragebögen und Abschlussinterviews wurden aufgezeichnet, transkribiert und anschließend qualitativ ausgewertet.

### _Weitere Abschnitte werden hier zukünftig noch ergänzt_

## Sicherheits- und Datenschutz-Hinweise

- Keine echten Passwörter, Uni-IDs oder sonstigen Zugangsdaten eingeben.
- Die Implementierung besitzt kein Backend und führt keine echte
  Shibboleth-Authentifizierung durch.
- Geheimnisse, Demo-TANs und WebAuthn-Daten dienen ausschließlich der
  lokalen Demonstration.
- Der lokale Browserzustand kann Studienmetriken und Demo-Credentials
  enthalten. Vor einer Weitergabe den Browser-Speicher löschen.
- Vor der Veröffentlichung auf GitHub müssen insbesondere personenbezogene
  Forschungsdaten, Aufzeichnungen, Transkripte, qualitative Codierungen und
  fremde Materialien auf Berechtigung und Lizenz geprüft werden.

## Status

Das Repository dokumentiert den Stand eines abgeschlossenen bzw. archivierten
Bachelorarbeitsprojekts. Die MFA-Prototypen sind für Usability-Studien und
Demonstrationen geeignet. Der HTML/React-Studienrahmen ist im experimentellen Zustand und wurde wieder verworfen.

## Lizenz

Für dieses Repository ist derzeit keine Open-Source-Lizenz festgelegt. Ohne
eine ausdrücklich hinzugefügte Lizenz gelten die gesetzlichen
Urheberrechtsbestimmungen. Vor einer Veröffentlichung auf GitHub sollte eine
passende Lizenz festgelegt und die Herkunft bzw. Lizenz aller eingebundenen
Logos, Bilder, Schriften und Bibliotheken dokumentiert werden.
