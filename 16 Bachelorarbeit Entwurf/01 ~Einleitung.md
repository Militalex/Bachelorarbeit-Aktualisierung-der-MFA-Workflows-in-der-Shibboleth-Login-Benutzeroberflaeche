# Einleitung

### // Beschreibung der Problemstellung
Viele Institutionen wie beispielsweise Universitäten, Hochschulen und Unternehmen stellen oftmals eine Vielzahl an Plattformen für Ihre Mitglieder zur Verfügung. In der Regel haben alle diese Plattformen eine eigene Benutzerkontensteuerung mit jeweils eigenen Benutzernamen und Passwort für ihre Benutzer. Das Merken vieler unterschiedlicher Passwörter für die große Menge an Plattformen, die eine obig erwähnte Organisation haben kann, stellt für Benutzer eine große Herausforderung dar. Der Berufsverband der Deutschen Usability und User Expereince Professionals weist darauf hin, dass "das menschliche Gehirn \[...\] nicht darauf ausgelegt \[ist\], sich viele unterschiedliche Passwörter zu merken, insbesondere solche, die nach den heute gängigen Passwortregeln erstellt sind." \[1\]. Die Folge ist dann, dass Benutzer tendenziell unsichere Passwörter erstellen oder unterstützende Maßnahmen ergreifen um sich Passwörter besser merken zu können, wie zum Beispiel das Aufschreiben von Passwörtern \[1\]. Dadurch sinkt die Sicherheit von Passwörter erheblich.

### // Beschreibung der Lösungsmöglichkeiten: Vorstellung 2FA
Um dieses Sicherheitsproblem anzugehen, wird immer mehr auf Zwei-Faktor-Authentifizierung (2FA), oder auch Multi-Faktor-Authentifizierung (MFA) genannt, gesetzt. Zusätzlich zum Anmelden mit einem Benutzernamen und einem Passwort wird zusätzlich ein sogenannter zweiter Faktor wie z.B. ein YubiKey oder eine Authentifizierung App mit TOTP {Akronym} benötigt. Neben den oben erwähnten, gibt es noch viele weitere Methoden, die als zweiter Faktor dienen. Im Kapitel so-und-so wird näher auf 2FA und deren Methoden eingegangen.

### // Beschreibung der Lösungsmöglichkeiten: Vorstellung SSO
Da durch 2FA immernoch nicht ein einheitlicher Anmeldeprozess für die große Anzahl an Plattformen, die eine Universität, Hochschule oder Unternhemen bereitstellen kann, gewährleistet wird, wird oftmals zusätzlich Single-Sign-on (SSO) implemntiert um einen zentralen, einheitlichen, platformübergreifenden Benutzeranmeldeprozess zu gewährleisten. Es ermöglicht die Authentifizierung zentral an einer Stelle zu verwalten, anstatt Benutzerkonten an vielen Stellen einzelnd zu verwalten.

### // Beschreibung Shibboleth
Shibboleth ist solch eine SSO Software, die genau für den obig beschriebenen Zweck ins Leben gerufen wurde. Von Microsoft wird ebenfalls eine SSO Lösung angeboten, die allerdings im Gegensatz zu Shibbolteh nicht Open Source ist. Es tendieren nun viele der Universitäten und Hochschulen Shibboleth zu nutzen um unabhängig von großen Firmen wie beispielsweise Microsoft zu bleiben. Eine Liste aller in Deutschland nutzenden Shibboleth nutzenden Universitäten und Hochschulen befindet sich hier: {Quelle}. Im Kapitel so-und-so wird näher auf SSO und Shibboleth eingegangen.

Der Nachteil allerdings besteht darin, dass ein Betrieb von Shibboleth viel mehr Aufwand darstellt, als eine vorgefertigte Lösung von Microsoft. Darunter gehört beispielsweise das Entwerfen der Login Benutzeroberfläche, die von Seiten der Shibboleth Entwickler funktional aber nicht zwingend benutzerfreundlich gestaltet wurde. Sie rufen konkret zur Umsetzung eines eigenen Designs auf.  {Quelle}

### // Aktuelle Shibboleth Oberfläche der Universität Bonn
Auch die Universität Bonn benutzt Shibboleth für das Einloggen in viele ihrer Plattformen und möchte dieses Anmeldeverfahren auf weitere ihrer Plattformen ausweiten. Dabei verwendet die Universität Bonn zum aktuellen Zeitpunkt, obwohl diese Oberfläche bereits durch das HRZ visuell geupdatet und mit dem typischen Universitäts Header und Footer ausgestattet wurde, ein dem Standard Design von Shibboleth zu verwechseln ähnliches Design. In Abbildung so-und-so werden das Standard Design, das alte und das neue HRZ Design im Vergleich zueinander dargestellt. 

### // Experteninterview Teaser
Aus einem Experteninterview mit einem Mitarbeiter des HRZ geht hervor, dass die Abläufe bzw. der Workflow innerhalb der Benutzeroberfläche und das ganze Design bis auf Header und Footer unverändert geblieben sind. Die Erkenntnisse, des oben erwähnten Experteninterviews, die diese Arbeit formen, werden im Abschnitt so-und-so erläutert.

### // Projektgruppen Teaser
Desweiteren wurde auch eine Projektgruppe durchgeführt, die die ganz alte Version der Shibboleth Seite (siehe Abbildung so-uns-so) gegen eine ebenfalls weiter entwickelten Seite getestet hat. In Kapitel so-und-so werden die Ergebnisse dieser diskutiert und beschrieben, wie sie diese Arbeit formen.

### // Zweck dieser Arbeit und Forschungsfragen
Da zurzeit das vorgegebene Standard Design der Shibboleth Login Oberfläche der Universität Bonn sich in den Abläufen und dem Workflow nahezu kaum unterscheidet, lassen sich ggf. Verbesserungsvorschläge auch auf das Standard Design der Shibboleth Login Oberfläche übertragen. Diese Arbeit konzentriert sich darauf die Benutzerfreundlichkeit dieser Login Oberflächen nachhaltig zu verbessern, indem die Verbesserungen mittels wissenschaftlicher Methoden nachgewiesen werden soll. Dabei stehen folgende Forschungsfragen im Raum:

- RQ1: Wie verhält sich ein Benutzer im MFA Anmelde Workflow und weiß er immer was zu tun ist oder gibt es etwas woran er sich aufhängt oder ihm negativ auffällt?

- RQ2: Gibt es Usability Probleme in der Anmeldemaske und dem MFA Anmelde Worfklow und was muss getan werden um diese Probleme bestmöglich zu lösen?

- RQ3: Wie kann der MFA Anmelde Workflow in der User Interface (UI) verbessert werden und wie muss ein idealer MFA Anmelde Workflow und eine MFA Webseite im allgemeinem gestaltet werden?

### // Studien Teaser
Um diese Forschungsfragen zu beantworten, wurde ein Prototyp mittels Figma entworfen, der in Kapitel so-und-so näher beschrieben wird. Mit Hilfe dieses Prototypens wurde eine Usability Studie durchgeführt, die im Kapitel so-und-so aufgezeigt wird. Die Studienergebnisse und die Beantwortung der obigen Fragen erfolgt dann anschließend in Kapitel so-und-so.

### // Überleitung
Im folgendem Kapitel wird nun auf die Grundlagen und den aktuellen Stand der Forschung eingegangen, auf denen diese Arbeit aufgebaut ist.