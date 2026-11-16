# ~Experteninterview
Aufbauend auf den vorherig besprochenen Grundlagen und der vorherig besprochenen Literatur wurde ein Benutzer zentrierter Ansatz zur Beantwortung der Forschungsfragen gewählt. Dabei wurden zunächst das HRZ, Mitarbeiter und Studierende der Universität Bonn als Stakeholder für das System ermittelt. 

Um nun einen tieferen Einblick in den Kontext, den aktuellen Stand der Shibboleth Anmeldemaske der Universität Bonn, die Ziele und die Wünsche des HRZ's zu erlangen wurde im Zuge der Anforderungsanalyse ein Interview mit einem Mitarbeiter des HRZ aus dem Identity Management durchgeführt. Im Identity Management soll gewährleistet werden, das jeder eine funktionsfähige Uni-ID bekommt.

### // Methodik
Am 17. Oktober 2024 wurde das Experteninterview als ein offenes, nicht strukturiertes Interview durchgeführt. Es wurde online über die Videokonferenz Plattform BigBlueButton der Universität Bonn durchgeführt. Dabei wurde nach Einwilligung der Ton aufgezeichnet, lokal mit dem Programm whisper transkribbiert und später mittels QualCoder ein Codebook erstellt. Das Codebook, welches erstellt wurde, ist im Anhang so-und-so dargestellt.

### // Erkenntnisse
Durch das Experteninterview konnten viele wertvolle Erkenntnisse über den aktuellen Stand, über die Maßnahmen, die bereits ergriffen wurden, über Probleme und Herausforderungen und über die Ziele und Wünsche des HRZs erlangt werden.

Es hat sich herausgestellt, dass das HRZ für die Universität Bonn im allgemeinen die Login Verfahren sicherer gestalten möchte, indem sie verpflichtend MFA einführen wollen. Zurzeit wird dies mittels pyhsicher Sicherheitsschlüssel durch YubiKeys für Mitarbeitende schrittweise eingeführt. Dabei wurde im Zuge des Interviews erwähnt, dass bereits in dem Rollout der YubiKeys eine Vielzahl von Problemen auftreten aufgrund eines nicht einheitlichen, langen und komplizierten Installationsverfahren. Die Analyse dieser Probleme werden in dieser Arbeit nicht behandelt.

### // Angesprochene Herausforderungen
Neben den Problemen, die alleine beim Rollout der YubiKeys auftreten, wurden ebenfalls eine Reihe von Problemen mit der Shibboleth Login Oberfläche vermutet. Ein paar dieser angesprochenen Probleme wurden schon in einer vorangegangen Projektgruppe analysiert, dessen Ergebnisse zuvor in Kapitel so-und-so diskutiert wurden. Es wurden dabei im allgemeinen Probleme mit für normale Benutzer unverständlichem oder unüblichem Vokabular, unauffällige oder unklaren Fehlermeldungen und Probleme durch einen unklaren Workflow, wo beispielsweise nach 60 Sekunden ein Pop-Up verschwindet, angesprochen. 

### // Ergriffene Maßnahmen
Dabei hat das HRZ sogar schon Maßnahmen ergriffen um die obigen erwähnten Probleme einzudämmen. Im Experteninterview wurde erwähnt, dass bereits in einem kleinem inoffiziellem Rahmen Feedback eingeholt und Anpassungen vorgenommen wurden. Nichtsdestotrotz blieb das Webseiten Layout und der dort im Standard Design von Shibboleth integrierte Workflow sowie Fehlermeldungen unangetastet.

### // Ziele und Wünsche
Nun wünscht sich das HRZ einen Schritt weiter zu gehen und auf professioneller bzw. wissentschaftlicher Ebene, den Anmelde Workflow zu analysieren und zu evaluieren. Dazu sollen wissentschaftlich fundierte Verbesserungsvorschläge abgeleitet werden, um die Sicherheit und die Benutzerfreundlichkeit nachhaltig verbessern. Dabei wurden unteranderem die Fragen, die sich das HRZ gestellt hatten, in dieser Arbeit als Forschungsfragen aufgefasst, die bereits in der Einleitung diskutiert wurden und hier nocheinmal zur Erinnerung dargestellt werden:

- RQ1: Wie verhält sich ein Benutzer im MFA Anmelde Workflow und weiß er immer was zu tun ist oder gibt es etwas woran er sich aufhängt oder ihm negativ auffällt?
- RQ2: Gibt es Usability Probleme in der Anmeldemaske und dem MFA Anmelde Worfklow und was muss getan werden um diese Probleme bestmöglich zu lösen?
- RQ3: Wie kann der MFA Anmelde Workflow in der User Interface (UI) verbessert werden und wie muss ein idealer MFA Anmelde Workflow und eine MFA Webseite im allgemeinem gestaltet werden?

Um all diese obigen Fragen zu beantworten, wurde eine Usability Studie anhand eines Prototypens durchgeführt um die implementierten Verbesserungen wissentschaftlich nachzuweisen. Daraus wurden dann wissenschaftlich fundierte Verbesserungsvorschläge entwickelt, die dann dem HRZ zur Verfügung gestellt werden sollen.

# Prototypaufbau
#### // ~Einführung Prototypaufbau
Im folgenden wird nun beschrieben, wie der Prototyp konzeptionell gestaltet und aufgebaut wurde, basierend auf den Kenntnissen aus dem Experteninterview und der vorangegangen Projektgruppe. 

Dazu wurde zunächst ein schneller, erster Entwurf eines Prototypen in dem Wireframe Programm balsamiq erstellt, welcher im Anhang so-und-so in gänze zu finden ist. Nach internem Feedback und geringfügigen Anpassungen wurde aufbauend auf diesem ersten Entwurf ein nahezu voll funktionsfähiger Prototyp mittels Figma erstellt, der ebenfalls für die Durchführung der im nächsten größeren Abschnitt beschriebenen Usability Studie verwendet wurde. Im Gegensatz zu balsamiq, weist Figma ein deutlich umfangreicheres Funktionalitätsspektrum, besonders in Bezug zu die visuellen Gestaltungsmöglichkeiten, auf. Der entwickelte Prototyp konnte dadurch so realitätsnah gestaltet werden, dass er rein visuell vom Design und dem Layout her, kaum zu einer echten Webseite zu unterscheiden war, welches für die Studie und die Analyse des Benutzererlebnis sehr zum Vorteil gewesen ist. 

Daneben konnte dieser Funktionsumfang von Figma genutzt werden, um eine interaktive Version der Shibboleth Anmeldemaske vom HRZ nachzubauen, da diese leider vom HRZ im Zuge dieser Arbeit nicht zur Verfügung gestellt werden konnte. Es musste dabei auf Material zurückgegriffen werden, welches das HRZ der Projektgruppe zur Verfügung gestellt hatte. Da dieses allerdings noch der alten Shibboleth Anmeldemaske des HRZ entsprechen, welches nocheinmal zur Erinnerung in Abbildung so-und-so zu finden ist, und die Shibboleth Anmeldemaske zum jetzigen Zeitpunkt ein größeres visuelles Update erfahren hat, haben sich nichtdestotrotz beim Nachbau ein paar minimale Diskrepanzen eingeschlichen, die in Abschnitt so-und-so diskutiert wurden. Im Experteninterview ging zur Erinnerung, wie oben bereits diskutiert, hervor, dass die Abläufe und das innere Layout der Seite unangetastet blieben.

Im folgenden wird der Nachbau der Shibboleth Anmeldemaske des HRZ mit HRZ Design/Entwurf betitelt und die echte HRZ Seite mit echtes HRZ Design/Entwurf. Daneben werden die eigenen entwickelten Prototpen im folgenden mit angepassten Design/Entwurf oder einfach nur mit Prototyp betitelt, obwohl strenggenommen, der HRZ Nachbau auch ein Prototyp darstellt. Zur Erinnerung der von den Entwicklern von Shibboleth bereitgestellte Entwurf der Anmeldemasken wird unter der Formulierung Standard Design verstanden.

#### // ~Einleitung zu den vorgenommenen Anpassungen
Bei der Gestaltung des angepassten Designs mittels balsamiq bzw. Figma wurde versucht bestmöglich alle, im Experteninterview und in der vorangegangen Projektgruppe, angesprochenen Usability Probleme zu berücksichtigen. Es wurde sich dabei im allgemeinen auf die drei Kategorien an Problemen fokussiert, die oben in Kapitel so-und-so definiert wurden und bereits von der Projektgruppe vorgeschlagen wurden. Das Experteninterview hat diese Unterteilung größtenteils nocheinmal bekräftigt. Zur Erinnerung sind hier die drei Kategorien an
Usability Problemen noch einmal aufgelistet:

1. Probleme mit dem Informationsangebot
2. Probleme mit dem Ablauf
3. Probleme mit den Verlinkungen

### ~Anpassungen im Informationsangebot
Die Anmeldemaske zeigt deutliche Probleme in dem Informationsangebot auf, wegen Verwendung von unüblichen, oder verwirrenden Formulierungen. 

#### // "Anmeldung nicht speichern"
Auf der Passwort Seite des HRZ's lässt sich die Option "Anmeldung nicht speichern" finden < verlinken >. Solche Funktionalitäten sind laut den Design Guidelines durchaus zu empfehlen < Quelle? >. Allerdings schlagen solche auch Guidelines vor, wie in Kapitel so-und-so bereits diskutiert, nur die Anmeldung zu speichern, sofern es der Benutzer ausdrücklich wünscht und nicht wie es das Shibboleth Stabdard Design vorsieht, die Anmeldung standardmäßig zu speichern. Deshalb wurde beim angepassten Design diese Funktion entsprechend der Guidelines gestaltet und eine Erklärung der Funktionalität angeboten. Es wird vermutet, dass Benutzer die Formulierung "Anmeldung nicht speichern" als störend bzw. verwirrend empfinden und sich mit der gängigen Formulierung "Angemeldet bleiben" und der angebotenen Erklärung wohler fühlen.

#### // "Lösche die frühere Einwilligung..."
Bei der "Lösche die frühere Einwilligung..."-Funktion, die sich auf der Passwort Seite des HRZ als Checkbox unterhalb der "Anmeldung nicht speichern" Funktion befindet (Anhang 4.3.1b), fällt auf, dass das HRZ Design hier einen black-box Ansatz verfolgt, indem der Benutzer bei der Benutzung dieser Option kein aktives Feedback erhält, sondern die Ausführung nebenbei während des Betätigens des "Anmelden" Buttons stattfindet.

Zusätzlich fällt auf, das solche Funktionalitäten in der Regeln nicht auf Anmeldemasken, sondern in Benutzerkontensterung oder ähnlichem zu erwarten sind {Quelle?}. Nichtsdestotrotz wurde diese Funktionalität bei der Gestaltung nicht ausgelassen, da die Designentscheidung, diese Funktion komplett wegzulassen oder woanders zu platzieren, einer anderen Stelle wie beispielsweise dem HRZ obliegt.

Deshalb wurde die "Lösche die frühere Einwilligung..."-Funktion zu einem Button umgestaltet und verfolgt im angepassten Design einen white-box Ansatz, indem der Benutzer durch direktes Feedback mittels eines Dialogfensters direkt informiert wird. Das Dialogfenster wird in Abbildung 3.1 gezeigt. Es wird nun vermutet, dass Benutzer sich mit dem angepassten Verhalten der „Lösche die frühere Einwilligung...“ -Option wohler fühlen.

In der Studie allerdings wurde aus zeitlichen Gründen, diese Funktionalität nicht explizit getestet und auch keine gesonderten Fragen hierzu gestellt. Nichtsdestotrotz haben Benutzer sich im quantitativen Teil der Studie zu dieser Funktionalität geäußert, welches in Kapitel so-und-so {verlinken} der Studienergebnissen präsentiert wird.

#### // Unübliche Formulierungen von Labels
Deesweiteren wurden auf der Token Auswahl und den nachfolgenden Seiten siehe Abbildung so-und-so etliche Labels und Formulierungen mit Fachbegriffen festgestellt, wo die Vermutung im Raume steht, das diese Benutzer verwirren könnten. Es wurde dabei versucht im Prototypen Fachgefriffe, wie "WebAuth-Token" und "Token" zu vermeiden, wegzulassen oder durch geläufigere Formulierungen zu ersetzen. In Tabelle so-und-so werden die Problematischen Formulierung aufgelistet und aufgezeigt wie diese im angepassten Design angegangen wurden.

Besonders bei der Formulierung des "Starte Tokenverfahren neu"-Buttons, der Anwender einfach nur wieder zurück zur Tokenauswahl bringt, wird vermutet, dass Benutzer diese wegen der Benennung diese Funktion größtenteils nicht verstehen und dadurch verwirrt werden. Deshalb wurde dieser Knopf im angepassten Design weggelassen, welches allerdings bedingt durch eine Anpassung im Ablauf, entstanden ist, die weiter unten näher beschrieben wird.

#### // Gestaltung der Tokens in der Tokenauswahl
Weiterhin wurden die Tokens auf der Tokenauswahl umgestaltet. In Abbildung so-und-so ist zu sehen, dass beim Design des HRZ's neben dem Icon, der selbstvergebene Name und die ID eingeblendet ist. Allerdings sind diese Formulierungen nicht beschriftet und somit im ersten Moment nicht klar, was sich hinter diesen Zeichenketten verbirgt. Es wird vermutet, dass insbesondere für unerfahrene Benutzer, die weniger vertraut mit MFA sind, Probleme haben werden den richtigen Token auszuwählen und dies nur am Icon festmachen können. Deshalb wurden im Prototyp der selbst vergebenen Token Name und die ID beschriftet und ein Tokenbeschreibendes Label eingeführt, welches den Benutzer bei der Auswahl unterstützen soll.

#### // Informationsangebot
Um die Transparenz des HRZ Designs zu erhöhen wurde das Informationsangebot bzw. die Dokumentation innerhalb der Seite mittels Hilfestellungen und Erklärungen angepasst bzw. erweitert. Dagegen wurde auf der HRZ Seite solches Material nicht gefunden. Im folgenden wird nun im Detail erläutert, wie das Informationsangebot ausgebaut wurde:

Auf der Passwort Seite {verlinken} wurden zusätzlich die Optionen „Angemeldet bleiben“ und „Informationsweitergabe widerrufen“ mit Hilfebuttons versehen, die entsprechende Tooltips mit Erklärungen öffnen, welche in Abbildung so-und-so dargestellt sind.

Auf der Tokenauswahl Seite {verlinken} wurden zusätzlich die oben erwähnten Tokenfelder der Tokenauswahl ebenfalls jeweils mit Erklärungen öffnenden Hilfebuttons versehen (siehe Abbildung so-und-so). Die dort dargestellten Informationen wurden von Confluence {Glossar?}, der angebotenen Dokumentationsseite des HRZ’s, übernommen und verlinkt. Die Idee bestand darin, die dortigen Informationen für den Anwender direkt auf der Anmeldeseite zur Verfügung zu stellen.

Zusätzlich werden, sofern ein Tokenfeld ausgewählt ist, die Schritte näher beschrieben, die zu absolvieren sind, um sich erfolgreich mit dem jeweiligem Token anzumelden. Es wird vermutet, dass diese Beschreibung der Benutzung für die einzelnen Tokens besonders für Anwender hilfreich sein könnte, die entweder den Ablauf zum Anmelden auf der Shibboleth Seite oder die Verwendung der Tokens im allgemeinen noch nicht kennen {Token hier, Tokens da -> weniger Token}. Aus zeitlichen Gründen allerdings konnten diese Erklärungen und Hilfestellungen nicht im Detail in der Studie untersucht werden. Dennoch haben sich Benutzer dazu geäußert und wertvolles Feedback geliefert, welches ebenfalls im Kapitel der Studienergebnissen als Beobachtung notiert wurde.

#### // Fehlermeldungen
Die vorangegangen Projektgruppe hat ebenfalls Probleme bei den Fehlermeldungen identifiziert und begründet, das Fehlermeldungen "oft ohne Kontext, zu technisch oder Schwierigkeiten bei der Unterscheidung" aufweisen < Zitat prüfen >. Ein Beispiel waren die beiden unterschiedlichen Fehlermeldungen "Ungültige Eingabe" und "Verifizierung ungültig", die für Benutzer ggf. schwer zu differenzieren sind. Im Prototypen und der durchgeführten Usability Studie, wurde allerdings aus zeitlichen Gründen auf die detailierte Implementation der Fehlerfälle mit den jeweiligen Fehlermeldungen und deren Analyse verzichtet. Im ersten Entwurf des Prototypens allerdings wurde eine Umplatzierung der beiden Fehlermeldungen: "Die eingegebene Uni-ID wurde nicht gfunden" und "Das eingegebene Passwort ist nicht korrekt" (siehe Anhang so-und-so) vorgeschlagen. Diese wurden direkt dort platziert, wo auch der Fehler auftritt und nicht, wie beim Standard Design ganz oben < Quelle: Wo sollten Fehlermeldungen platziert sein? >.

### ~Anpassungen im Ablauf
#### // Einfärbung der Buttons auf der Passwortseite
Neben dem Informationsangebot der Shibboleth Anmeldeseite wurden auch etliche Anpassungen im Anmeldeworkflow vorgenommen. 

Auf der Passwortseite wurden die Knöpfe zum Anmelden und für die Informationsweitergabe ausgegraut um den Benutzer subtil zu signalisieren, dass zuerst die Uni-ID und das Passwort einzugeben sind. Erst nach erfolgter Eingabe, werden die Knöpfe aktiviert. Dieses Verhalten entspricht auch den Guidelines < Quelle? >, wo Buttons erst aktiviert und drückbar sein sollten, sobald sie auch eine Aktion ausführen können. Betätigt man den "Anmelde" Button auf der HRZ Seite, wird dagegen dem Benutzer über dem Formular die bereits oben erwähnten "Die eingegebene Uni-ID wurde nicht gfunden" und "Das eingegebene Passwort ist nicht korrekt" Fehlermeldung über dem Formular angezeigt, die sofern das Formular noch nicht ausgefüllt wurde wenig Sinn ergeben (siehe Anhang so-und-so). Sinnvoller wären in diesem Falle Fehlermeldungen, wie "Bitte geben Sie ein Uni-ID ein" und "Bitte geben Sie ein Passwort ein". Diese Anpassung wurde allerdings nicht implementiert, da wie bereits auch oben erwähnt, auf die Analyse der Fehlermeldungen aus zeitlichen Gründen verzichtet wurde.

Außerdem wurde bei der Prototyp Webseite darauf wertgelegt für die unterschiedlichen Knöpfe auf der Passwortseite unterschiedliche Farben zu verwenden um dessen unterschiedlichen Funktionen und Wichtigkeit visuell voneinander zu trennen. Daher wurde für den Anmeldeknopf die rote Primär- und Signalfarbe rot beibehalten. Als Sekundärfarbe wurde dagegen ebenfalls eine Warme Farbe und zwar gelb ausgewählt. Es wird vermutet, dass durch diese Farbgebung, die Funktion "Informationsweitergabe widerrufen", die zuvor bei der HRZ Seite weniger farblich hervorgehoben, Benutzern mehr ins Auge fällt. Allerdings steht die Frage offen, wie die Benutzer diese Farbentscheidung wahrnehmen. Obwohl dies ebenfalls aus zeitlichen Gründen in der Studie nicht direkt untersucht wurde, haben sich Benutzer auch hierzu geäußert und es hat sich eine Tendenz gezeigt, die noch weiter untersucht werden kann.

#### // Zusammenfassung der Tokenauswahl und der Tokeneingabe
Eine weitere große Veränderung bestand darin, die Tokenauswahl und die Tokeneingabe bzw. Verifizierung mittels Sicherheitsschlüssel von zwei Webseiten, wie es beim Shibboleth Standarddesign der Fall ist, auf eine Webseite zu reduzieren um einen flüssigeren Ablauf mit weniger Klicks und ein schnelleres und einfacheres Wechseln zwischen den Tokens zu ermöglichen. Dadurch konnte der "Starte Token Verfahren neu" Button, der bereits oben als verwirrendes Hindernis für Benutzer vermutet wurde, eingespart werden. 

Es wurde bei der Tokenauswahl standardmäßig der Sicherheitsschlüssel ausgewählt, da dieses das vom HRZ priorisierte Anmeldeverfahren darstellt. Denkbar wäre auch eine Vorauswahl der zuletzt verwendeten Anmeldemethode, wie es laut Experteninterview auch bei der Tokenauswahl Seite des HRZ's der Fall ist. Weiterhin ging aus dem Experteninterview hervor, dass, sofern nur ein Faktor registriert wurde, auch die Tokenauswahlseite beim HRZ übersprungen wird und der Benutzer direkt zur Tokeneingabe bzw. zur Verifizierung käme. In diesem Falle wäre die Anzahl der benötigten Klicks gleich. 

Es wird hier vermutet, dass sich Benutzer allerdings mit der Designentscheidung Tokenauswahl und Tokeneingabe zusammenzufassen wohler fühlen.

#### // --> Anpassung der Tokeneingabe
Weiterhin wurde beim Einloggen mit der Authentifizierungsapp, die Tokeneingabe überarbeitet. Beim Standarddesign von Shibboleth wird der Token bei der Eingabe verschleiert und bei korrekter Eingabe des Tokens erfolgt keine automatische Weiterleitung. Stattdessen ist eine Betätigung eines "Überprüfen" Knopfes vorgesehen. Die vorangegange Projektgruppe hat diesen Umstand ebenfalls erkannt und hat auf eine unverschleierte Tokeneingabe gesetzt aus der die Länge des Tokens ersichtlich wurde. In Abbildung so-und-so wird diese Tokeneingabe dargestellt. Es ist deutlich zu sehen, das im dortigen Design allerdings ebenfalls nicht auf einen "Überprüfen" Button verzichtet wurde und auf mehr visuelle Features gesetzt wurde, wie beispielsweise einen Anzeigemechanismus der anzeigt welches Tokenzifferfeld auszufüllen ist. In der dortigen Studie, gab es Hinweise, das Benutzer eben diese unverschleierte Tokeneingabe der Projektgruppe, wo ebenfalls die Länge des Tokens ersichtlich ist, vorziehen. 

Auch gab es Hinweise, dass Benutzer unsicher waren, "ob nach der Eingabe des Einmalpassworts im neuen System auf den Pfeil gedrückt werden muss oder die Weiterleitung automatisch erfolgt" < Zitat >. Im Gegensatz nun zur Projektgruppe, wurde auf eine ähnliche aber schlichtere Tokeneingabe mit weniger visuellen Features gesetzt. Allerdings konnte durch eine automatische Weiterleitung bei korrekter Tokeneingabe auf einen "Überprüfen" Knopf verzichtet werden. Beim Design der TOTP Eingabe wurde ebenfalls berücksichtigt, dass diese Tokens oftmals in Dreierpäkchen dargestellt werden, welches Benutzer beim Übertragen der Tokens unterstützen soll. Deshalb wurden die einzelnen Eingabefelder ebenfalls in Dreierpäkchen gruppiert.

Insgesammt wird nun vermutet, dass Benutzer durch die Umgestaltung des Tokeneingabefeldes die angepasste Version vorziehen.

## Anpassungen bei den Verlinkungen
#### // Passwort vergessen austausch mit Hilfe benötigt nach PW Anmledung
Zusätzlich wurden auch Anpassungen vorgenommen, die die Verlinkung auf externe Seiten des HRZ's und deren Platzierung innerhalb der UI betreffen. Dabei wurde festgestellt, dass beim HRZ Design nach der Anmeldung auf der rechten Seite immernoch die Passwort vergessen Option angezeigt wird, obwohl dies rein logisch betrachtet wenig sinnvoll ist. Aufgrunddessen wurde diese Option durch die bereits vorhandene Hilfe benötigt Option ersetzt. Diese führt beim HRZ Design standardmäßig auf die Startseite der HRZ Dokumentationsseite Confluence. Da diese Verlinkung als zu allgemein auf den Tokenseiten schien, wurde diese Verlinkung zu der Confluence Seite, die die Tokens dokumentiert konkretisiert.

#### // Direkte Verlinkung der Supportanfrage und der Passwortvergessen Funktion
Desweiteren sind bei den HRZ Seiten aufgefallen, dass die Verlinkung der Passwort vergessen Option rechts auf der Seite und die Verlinkung für die Supportanfrage im Footer nicht direkt den Benutzer dorthin verlinken, wo der Benutzer diese Aufgaben auch tatsächlich erfüllen kann. Stattdessen wird man auf eine allgemeinere Seite geführt, wo man diese Funktionalität erneut aufsuchen muss. Bei der Passwort vergessen Option, muss der Benutzer die entsprechende Seite von GOsa < Glossar? > aufsuchen um dort das Passwort wiederherzustellen. Für eine Supportanfrage wurde ein entsprechendes Formular gefunden. In der Confluence Seite wird stattdessen eine E-Mail zum Stellen einer Supportanfrage angeboten. Es wird nun vermutet, dass sich Benutzer aufgrund der ungünstigen Verlinkungen beim HRZ Design aufhängen, dies als umständlich empfinden oder sogar dadurch frustiert werden. Deshalb wurden die Verlinkungen von den beiden besagten Optionen angepasst und führen bei der angepassten Version direkt dorthin, wo der Benutzer seine Aufgabe direkt erfüllen kann, ohne diese ein weiteres mal suchen zu müssen. 

#### // Alle Anpassungen aufgelistst:
Zusammenfassend werden hier nocheinmal alle Anpassungen bzw. Vermutungen aufgezählt, die durch den Prototyp abgedeckt wurden und wozu die Usability Studie ggf. neue Kenntnisse geliefert hat:

1. Umgestaltung von "Anmeldung nicht speichern" in "Angemeldet bleiben", da vermutet wird, das Benutzer die Formulierung des HRZ's als störend bzw. verwirrend empfinden und sich mit der gängigen Formulierung und der angebotenen Erklärung wohler fühlen.
2. Ersetzung der "Lösche die frühere Einwilligung..."-Checkbox zu einem "Informationsweitergabe widerrufen"-Knopfes, weil angenommen wird, dass Benutzer diese Handhabung wegen direkterem Feedback angenehmer finden.
3. Vermeidung, Umformulierung und Anpassung von Labels mit Fachbegriffen oder unüblichen Formulierungen (insbesondere des "Starte Tokenverfahren neu"-Buttons), weil dies Benutzer als verwirrend empfinden könnten.
4. Visuelle Umgestaltung der Tokens auf der Tokenauswahlseite, sodass insbesondere unerfahrene Benutzer unterstützt werden, den richtigen Token auszuwählen.
5. Erweiterung des Informationsangebots um Benutzer gemäß der Guidelines ausreichend zu schulen < Quelle? >:
    - Versehung der "Angemeldet bleiben" und der "Informationsweitergabe widerrufen" mit Buttons, die einen erklärenden Tooltip öffnen.
    - Ausstattung der Tokens mit Schulungsmaterial, die von der Dokumentationsseite Confluence des HRZ's entnommen wurden.
    - Präsentation der Ablaufschritte für die jeweiligen Tokens
6. Anpassungen im Farbdesign der Buttons auf der Passwortseite um zum einen den Aktivitätsstatus und Primär- und Sekundärfunktionalitäten farblich visuell darzustellen, da angenommen wird, dass diese den Benutzer im Workflow unterstützen.
    - Vermutung, dass die "Informationsweitergabe widerrufen" Benutzern mehr ins Aufe fällt.
    - Wie nehmen Benutzer die Farbgestaltung war?
7. Zusammenfassung der Tokenauswahl und der Tokeneingabe für einen flüssigere und effzientere Benutzung, da vermutet wird, dass sich Benutzer mit dieser Designentscheidung wohler fühlen.
8. Anpassung des Tokeneingabefeldes bei TOTP, da angenommen wird, dass Benutzer eine unverschleirte, in Dreiergrüppchen gruppierte Tokeneingabe aus der die Länge der Tokens ersichtlich ist, vorziehen.
9. Ersetzung der Passwort vergessen Option nach Anmeldung mit Uni-ID und Passwort durch die Hilfe benötigt Option aus rein logischen Überlegungen
10. Direkte Verlinkungen bei der Supportanfrage und der Passwort vergessen Option, da angenommen wird, dass Benutzer die vorherigen Verlinkungen, die durch das HRZ bereitgestellt werden, als umständlich und frustrierend empfinden.

## Studienbedingte Designentscheidungen
Desweiteren wurden neben den Anpassungen, die im Sinne stehen untersucht zu werden, auch geringfügige, studienbedingte Designentscheidungen, die den Ablauf beeinflussen, getroffen, die nun im folgenden näher beschrieben werden:

#### // Tokenauswahl wird nicht übersprungen
Sofern Mitarbeiter nur einen Token registriert haben, wird dieser im Anmeldeablauf auf den HRZ Seiten übersprungen. Da davon ausgegangen wird, dass die allermeisten Mitarbeiter nur einen Token registrieren, würde die Tokenauswahl Seite für sie demnach nicht angezeigt werden.

Es wurde sich nun dafür entschieden, die Studie an einem Setup mit zwei registrierten Tokens durchzuführen, damit für die Benutzer garantiert die Tokenauswahlseite angezeigt wird. Dies stellt sicher, dass Einblicke in die allgemeineren Abläufe und Workflows gesammelt werden können, da auch Erkenntnisse gewonnen werden sollen, die das Standard Design betreffen.

Zusätzlich wird ein besserer Vergleich zwischen dem HRZ Design und dem angepassten Design garantiert, da dort durch die Zussammenfassung der Tokenauswahl, Tokeneingabe und Tokenverifizierungsseite die Tokenauswahl immer wahrnehmbar ist. Benutzer könnten bei einem Setup mit nur einem Token verwirrt sein, warum Sie beim angepassten Entwurf eine Tokenauswahl sehen und beim anderen nicht. 

#### // Tokenverifizierung startet ebenfalls nicht automatisch
Ebenfalls wurde festgestellt, dass beim vom HRZ bereitgestellten Design, der Verifizierungsprozess, der normalerweise durch das Betätigen des Verifizieren Buttons ausgelöst wird, automatisch startet, nachdem man auf die Tokenverifizierungsseite gelangt. Beim Nachbau der HRZ Seite allerdings wurde dieses Feature nicht eingebaut, sodass Benutzer dazu aufgerufen waren mit der Tokenverifizierungsseite direkt zu interagieren, welches bei einem automatisch starteneden Verifizierungspprozess nicht der Fall gewesen wäre. Dadurch konnte ebenfalls Gedanken und Feedback zum Design dieser Seite gesammelt werden. Tatsächlich ist vorerig beschriebene Umstand erst nach der Durchführung der Studien aufgefallen, weshalb dies nicht mehr bedacht werden konnte.

## Eingeschränkte Funktionalitäten
Aufgrund der Tatsache, dass sowohl für das HRZ Design als auch für das angepasste Design Figma gewählt wurde, waren diverse Funktionalitäten, die sich auf die Interaktion beziehen eingeschränkt. 

Darunter zählte die Interaktion mit Textfeldern, wo das Ausfüllen mittels der Tastatur nicht möglich bzw. zu großen Aufwand, dies umzusetzen dargestellt hat. Deshalb wurde das Ausfüllen von Textfeldern mittels eines Doppelklicks realisiert, wobei dann vordefinierte Werte eingetragen werden. Mit einem einfachen Klick dagegen, wurde das Textfeld einfach nur ausgewählt. 

Ebenfalls konnten Funktionalitäten wie die TOTP Authentifizierungsapp und der Hardware Sicherheitsschlüssel nicht in den Prototypen integriert werden, sodass diese von dem Prototypen mittels Einblendungen simuliert wurden. Im Anhang so-und-so < Anhang oder Abbildung? > werden diese Einblendungen dargestellt.

# Studienmethodik
#### // Einführung und Erklärung des Ablaufs
- Um die im vorherigen Abschnitt erläuterten Anpassungen zu testen und damit die Forschungsfragen zu beantworten wurde eine Usability Studie mit zehn Teilnehmern durchgeführt. 
    - Within subjects mit abwechselnder Condition: HRZ - angepasstes Design zuerst
- In Abbildung so-und-so \todo{Abbildung mit dem Studienverlauf erstellen} wird der grobe Verlauf der Studie dargestellt.
- Teilnehmer müssen zuerst Consent unterschreiben
    - Consent entweder per mail oder vor Ort gegeben; je nach Rekrutrierungsmethode
    - hatten Gelegenheit vor der Studie zu lesen und Fragen dazu zu stellen
- Teilnehmer musste erst einen Fragebogen ausfüllen, der allgemeine Informationen abgefragt hat + Informationen über das Sample gewinnen
- Je nach Condition zuerst HRZ Design oder angepasstes Design als Usability Testing Session
- Usability Abfrage vom UEQ inspirierten Fragebogen um ersten Eindruck zu gewinnen und SUS für den Vergleich.
    - Zur Erinnerung: SUS ein Fragebogen zur Abfrage der Usability, der einen Score zwischen 0 und 100 liefert [Def. SUS]
- zweite Usability Testing Session, wo das andere Design getestet wurde
- erneute Abfrage der Usability genauso wie oben
- kurzes abschließendes Interview für den Vergleich der beiden Oberfläche um die Präferenz und Meinung einzuholen
- nun näher eingegangen auf die einzelnen Aspekte des Ablaufs

---
Um zuerst an der Studie teilzunehmen mussten Teilnehmer die Einverständniserklärung unterschreiben. Diese konnte entweder bereits unterschrieben vorgelegt oder vor Ort in Ruhe gelesen und unterschrieben werden. 

Danach wurde dem Teilnehmer ein Online Fragebogen vorgelegt, der Fragen zum Kennenlernen der Rekrutierten Stichprobe enthielt. Darunter wurden Demografische Informationen wie beispielsweise Geschlecht, Alter und Rolle an der Universität abgefragt. Es wurde auch weitere Daten erhoben, die zusammen mit dem detaillierten Aufbau in Kapitel so-und-so aufgeschlüsselt werden.

Anschließend wurde je nach zugewiesener Condition, entweder zuerst das \ac{HRZ} Design oder das angepasste Design einem Usability Testing unterzogen. Die Zuweisung erfolgte dabei nach dem \textit{Round-Robin} Prinzip.

Dann wurde die Usability mittels einem Fragebogen abgefragt. Dieser wird in Kapitel so-und-so näher beschrieben.

## Erster Fragebogen
- Teilnehmer durfte nach dem ggf. durchlesen des Consent und dem Unterschreiben den ersten Fragebogen ausfüllen
- alle Fragebögen mittels Qualtrcis umgesetzt

#### // kurz Qualtrics erklären
- ist ein Online-Umfragetool
    - Nutzer können Umfragen erstellen verteilen, Antworten sammeln und Antwortdaten analysieren [Def. Qualtrics]

- Fragebogen um das Sample genauer zu anlysieren
    - Fragebogen im Anhang einzusehen
- zuerst Demografische Fragen gestellt
    - Geschlecht, Alter, Rolle an der Universität Bonn
- dann allgeimene Nutzung der Plattformen der Uni Bonn + Vorerfahrung abgefragt
- Fragen zur 2FA Nutzung um zu schauen inwieweit damit der Teilnehmer vertraut ist, auch die Methoden abgefragt
- dann Fragen zur aktuellen Shibboleth Login Oberfläche gestellt
    - ob sie mit der Nutzung dieser vertraut sind
    - Frage inwiefern mit der Anmeldung nicht speichern Funktion vertraut
    - wichtige Aspekte der Overfläche abgefragt

## Usability Testing Sessions
- Teilnehmer durfte danach erstes Usability Testing Session durchlaufen
- wurde dazu zunächst mit den Prototypbedingten eingeschränkten Funktionalitäten vertraut gemacht; bereits weiter waren diese erläutert
    - wurde auch auf der Startseite der implementierten Prototypen (HRZ Nachbau + fertiger Prototyp) eingeblendet
        - in Abbildung so-und-so dargestellt
- Beide Usability Session als Think Aloud session durchgeführt

#### // Erklärung Think Aloud: Nur kurz bitte !
// Think Aloud Buch
- Teilnehmer angewiesen laut zu denken während ein Problem gelöst wird

//NNg
- Definition: "In a **thinking aloud test**, you ask test participants to use the system while continuously thinking out loud - that is, simply verbalizing their thoughts as they move though the user interface."
    - Simple in Anführungszeichen, da es nicht simpel ist für viele Menschen mit sich einen Monolog aufrechtzuerhalten
    - währemd der Studie immer wieder dazu angewiesen [Think Aloud Buch]

// Think Aloud Buch
- keine Unterbrechungen durch Prompts und Fragen
- Daten sehr direkt und ohne Verzögerung und Interpretation von Seiten des Teilnehmers
    - muss seine Gedanken nicht sortieren und in eine Form bringen
        - rendert sie sobald sie in den Sinn kommen und spricht sie einfach laut aus

// NNg
- dient als "windown on the soul": Lässt dich entdecken, was Benutzer wirklich denken über das Design
    - hörst deren Miskonzeptionen, welche normalerweise in umsetzbare Designänderungen münden
    - lernst warum Benutzer falsche Vermutungen anstellen und warum sie Fehler begehen
- Vorteile: Cheap, Robust, Flexible
    - **Robust**: auch wenn Studie schlecht ausgeführt immernoch gute Ergebnisse werden gefunden
    - **Flexible**: kann für viele Anwendungszwecke benutzt werden
        - für jede Phase im Entwicklungsprozess mit aller Art interaktiven System anwendbar

#### // Think Aloud Aufgaben Set
- Teilnehmer mit dem Think Aloud Prozedere vertraut gemacht
- Es wurden dem Teilnehmer Karten mit 4 Aufgaben überreicht, die die im Verlaufe der Session durchführen sollten
- Die Aufgaben waren die folgenden:
    1. Loggen Sie sich mit Ihrem YubiKey ein.
    2. Loggen Sie sich mit Ihrer Authentifizierungsapp ein.
    3. Sie haben Ihr Passwort vergessen. Versuchen Sie eine Anfrage zum Zurücksetzen Ihres Passwort zu stellen. Schicken Sie Ihre Anfrage allerdings NICHT ab, sondern kehren Sie stattdessen wieder zurück zum Prototypen, sofern Sie diesen verlassen haben, und drücken F8.
    4. Sie stellen nach der Anmeldung mit Ihrer Uni-ID und Passwort fest, dass Ihr System Ihren YubiKey nicht erkennt. Loggen Sie sich mit Ihrer Uni-ID und Ihrem Passwort ein wählen Sie Ihren Sicherheitsschlüssel als zweiten Faktor aus. Nun erkennt Ihr System Ihren YubiKey nicht. Versuchen Sie eine Anfrage an den Support zu verschicken. Schicken Sie Ihre Anfrage allerdings NICHT ab, sondern kehren Sie stattdessen wieder zurück zum Prototypen, sofern Sie diesen verlassen haben, und drücken F5.
- Aufgaben wurde in zufälliger Reihenfolge ausgegeben; wurden vor jeder Session per Hand gemischt
- Die ersten beiden Aufgaben testen die beiden im Setup "registrieretn" Methoden und der Ablauf, wenn alles funktioniert
- Die letzten beiden Aufgaben sollen Problemfälle abdecken, wenn Dinge nicht funktionieren
    - => Alles zusammen soll ein allumfassendes Bild der MFA Abläufe liefer

#### // Studienbedingte Prototyp Einfassung
- um einen Reibungslosen Ablauf zu gewährleisten wurden die Prototypen mit Promptseiten ausgesgattet, die den Teilnehmer auffordern wann eine Aufgabe als erfüllt gilt und wann eine neue genommen werden soll
    - sind beispielhaft in Abbildung so-und-so gezeigt

## Fragebögen zur Abfragung der Usability
- jeweils nach einer Session wurde jeweils ein Fragebogen zur Abfragung der Usability dargestellt
- Fragebogen teilte sich auf in einem vom UEQ inspirierten Fragebogen und dem SUS

#### // UEQ
- Vom UEQ inspirerter, kurzer Fragebogen genommen, da langer UEQ zu lang schien und der kurze für das Produkt unpassende Adjektive enthielt; dieser Fragebogen sollte nur einen ersten Eindruck der Benutzer über die Webseite liefern und keine genaue User Experience untersuchen
    - erstellt, indem vom UEQ passende bzw. interessant schienende Adjektive ausgewählt wurden; mehr pragmatische Dimensionen als hedonische Dimensionen dabei ausgewählt

#### // SUS
- zweiter Fragebogen der SUS -> wurde 1:1 übernommen

## Abschließendes Interview
- zum Schluss wurde ein abschließendes Interview durchgeführt -> semi-strukturiertes Interview mit offenen Fragen um möglichst viel Feedback und Gedanken zu gewinnen
    - Teilnehmer hatten nocheinmal die Gelegenheit durch alle Screens zu scrollen und sich diese genauer anzuschauen
    - Die Seite die dazu angezeigt wurde, wird in Abbildung so-und-so gezeigt
- Folgende Fragen wurden gestellt:
    1. Wie war Ihr erster Eindruck von den beiden Login Oberflächen?
    2. < Zu Auffälligkeiten Fragen stellen >
    3. Gab es etwas, das Sie als besonders intuitiv oder schwierig empfunden haben?
        - Gibt es Anmerkungen/Kritikpunkte?
    4. Würden Sie eine Oberfläche der anderen vorziehen? Warum?
    5. Gibt es ansonsten noch offene Fragen oder Anmerkungen?

## Setup
- obige Studie wurde am eigenen Setup durchgeführt -> eigener Laptop, eigenes Mikrofon, eigene Maus, separate Tastatur
    - separate Tastatur hat Fehler mit den F Tasten behoben -> beim laptop um die F tasten aszuführen muss zusätzlich die FN Taste gedrückt werden -> Fehlerpotential
    - Laptop Tastatur wurde bedeckt
- setup konnte flexibel überall aufgebaut werden, wo eine Stromquelle + Tisch + 2 Stühle zur Verfügung stand
- Fragebögen und Prototypen jeweils mit Verlinkungen versehen, sodass jeweils ein smoother Übergang zwischen den Studienabschnitten erfolgte
- um das ganze Setup zu testen, inklusive Prototypen, Fragebögen, Aufgaben wurde eine Pilot Studie mit Christina im Studienraum durchgeführt
    - Aufgaben lagen dort nur handschtiftlich auf Karteikarten vor, wurden aber für die Studie abgetippt und ausgedruckt -> in Karteikartengröße

## Rekrutrierung
- es konnten insgesammt zehn Teilnehmer rekrutiert werden
    - 6 Mitarbeiter und 4 Stundenten
    - einen englischsprachigen
- ursprünglicher Scope waren Mitarbeiter, da das HRZ zurzeit plant für diese MFA einzuführen
    - scope aber geändert, da Mitarbeiter schwieriger, aufwendiger zu rekrutrieren
        - meisten Mitarbeiter noch keinen YubiKey; deshalb sahen auch diese die MFA Seiten zum ersten mal
            - scope deshalb auch erweitert auf Studenten; da kein Unterschied gesehen zwischen Mitarbeitern, die keinen YubiKey haben und MFA Seiten ebenfalls zum ersten mal sehen
    - Mitarbeiter im Imformatik Zentrum rekrutiert -> durchs Informatik Zentrum gegangen und entweder Termin für Studie vereinbart oder direkt im Büro des Teilnehmers an unserem Setup durchgeführt
        - oder Studie im Studienraum oder Besprechungsraum
- Studenten rekrutiert über Discord -> schwarzes Brett auf dem Uni Bonn Informatik Discord Server, wo viele Informatik Studenten verkehren
    - Discord ist ein soziales Netzwerk, wo Benutzer sich durch den Aufbau von Communitys vernetzen können. Auch die Nutzung als reiner Messenger ist möglich.
    - konnten sich online einen vordefinierten Termin reservieren
    - Studien mit Studenten alle im Studienraum durchgeführt
        - 1 konnte nicht im Studienraum durchgeführt werden -> wurde im Lernraum durchgeführt und konnte deshalb nicht aufgezeichnet werden -> es wurden Notizen hier angefertigt

## Analyse
- komplette Studie wurde zusammen mit Bildschirm und Audio aufgezeichnet -> Think Aloud Sessions, Interview aufgezeichnet + beantwortung der Usability Fragebögen auch aufgezeichnet
    - meisten haben die Fragebögen still ausgefüllt, manche auch dabei laut Ihre Gedanken geäußert, weclhes vom Vorteil war
    - Video des Teilnehmer selber wurde nicht aufgezeichnet
- Aufzeichnungen wurden lokal mit Whisper transkribbiert und daraus wieder wie beim Experteninterview ein Codebook erstellt
    - ist im Anhang zu sehen
