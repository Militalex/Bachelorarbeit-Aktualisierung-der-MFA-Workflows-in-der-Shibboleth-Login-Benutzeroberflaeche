# Multi-Faktor-Authentifizierung

## Was ist Authentifizierung und welche Authentifizierungsfaktoren gibt es?

Authentifizierung ist der Prozess, bei dem überprüft wird, ob eine Person tatsächlich diejenige ist, für die sie sich ausgibt. Sie dient als Sicherheitsmaßnahme, um den Zugang zu Systemen, Anwendungen oder Diensten auf autorisierte Personen zu beschränken. (Enisa)

### Funktionsweise

1. Herausforderung: Der Nutzer wird aufgefordert, seine Identität nachzuweisen (z. B. durch Eingabe eines Passworts). 
2. Verifizierung: Das System überprüft, ob die bereitgestellten Informationen mit den gespeicherten Daten übereinstimmen.
3. Zugangserlaubnis: Nur bei erfolgreicher Verifizierung wird der Zugang gewährt.

### Arten von Authentifizierungsfaktoren
Authentifizierung basiert auf drei Hauptkategorien von Faktoren:
- Wissen: Etwas, das der Nutzer kennt: Passwörter, PINs, Sicherheitsfragen
- Besitz: Etwas, das der Nutzer besitzt: Token, Smartphones, Chipkarten.
- Biometrie: Etwas, das der Nutzer ist: Fingerabdruck, Gesichtserkennung, Retina-Scan. (Enisa / NIST)

## Was ist Multi-Faktor-Authentifizierung?
MFA (Multi-Faktor-Authentifizierung) ist eine Sicherheitsmaßnahme, die zusätzliche Schutzschichten bei der Anmeldung in Online-Systemen oder Diensten bietet. Sie erfordert, dass Nutzer mindestens zwei oder mehr unterschiedliche Authentifizierungsfaktoren bereitstellen, um ihre Identität zu verifizieren. (CISA / BSI)

### Andere Bezeichnungen
Auch bekannt als: Zwei-Schritt-Verifizierung, Zwei-Faktor-Authentifizierung (2FA). (CISA / NCSC)

### Funktionsweise von MFA (BSI)
1. Erste Schranke: Der Nutzer gibt sein Passwort oder eine andere Information ein, die er kennt (z. B. PIN).
2. Zusätzliche Schranke: Ein weiterer Faktor wird angefordert, z. B. ein Einmal-Code oder ein Fingerabdruck.
3. Freigabe des Zugangs: Nur bei erfolgreicher Verifizierung beider Faktoren wird der Zugang gewährt.

## Warum ist MFA relevant?
- Selbst starke Passwörter können durch Phishing, Social Engineering oder Datenleaks gestohlen werden -> MFA fügt eine zusätzliche Sicherheitsbarriere hinzu, sodass Angreifer mit einem gestohlenen Passwort allein keinen Zugang erhalten (Enisa / NIST / NCSC)
- Die Kombination mehrerer Authentifizierungsfaktoren (z. B. Passwort + Fingerabdruck) erschwert Angreifern den Zugriff erheblich -> Selbst wenn ein Faktor kompromittiert wird, schützt der zweite Faktor weiterhin den Zugang (Enisa / NIST / NCSC)

## Wie aktiviere ich MFA und was gibt es bei der Nutzung zu beachten?

- Einige Dienste haben MFA standardmäßig aktiviert, bei anderen muss es manuell eingerichtet werden. (NCSC)
- MFA ist oft in den Sicherheitseinstellungen des Kontos verfügbar. Dort kann es aktiviert werden. (NCSC)
- MFA verlängert den Anmeldevorgang geringfügig. Auf vertrauenswürdigen Geräten kann sie zwar unter Umständen übersprungen werden, dies verringert aber die Sicherheit. (BSI)
- Wenn man keinen Zugriff auf den Authentifizierungsfaktor mehr hat, verliert man in der Regel den Zugang. Deshalb ist es wichtig einen Backup zu erstellen und sicher aufzubewahren. Die entsprechenden Einstellungen findet man während dem Einrichtungsvorgang von MFA. Diese Backup-Codes dienen dann als Notfalloption, falls das Hauptgerät verloren geht. (NCSC / BSI)
- Falls MFA nicht verfügbar ist sollte man ein starkes, einzigartiges Passwort verwenden oder wenn möglich, zu einem Dienst mit 2FA wechseln (NCSC)


## Typen von MFA


Grundsätzlich erhöht ein zweiter Faktor zwar immer die Sicherheit, es kommt dabei aber auch auf die Art der Umsetzung und Verwendung des zweiten Faktors an. (PW8)

### Text- oder Sprachnachricht (CISA / NCSC / PW8)
- Nach der Eingabe eines Passwortes bekommt man zusätzlich einen Code über eine SMS oder einen Anruf 
- gilt als weniger sicher
- Hierbei soll man darauf achten, dass man den Code nicht auf den gefälschten Webseiten eingibt. 

### Über eine App generierte OTP Codes (CISA / NCSC / PW8)
- Bei jedem Anmeldevorgang muss man zusätzlich zu dem Passwort einen Code aus der App (bspw. Google Authenticator) eingeben. 
- Das bietet eine höhere Sicherheit (als SMS / Anrufe) und erfordert kein Mobilfunksignal 
- Hierbei soll man darauf achten, dass man den Code nicht auf den gefälschten Webseiten eingibt.

### Benachrichtigung über eine App (CISA / PW8)
- gilt als sehr sicher
- Nach der Eingabe von dem Passwort wird man zusätzlich aufgefordert auf eine Benachrichtigung in einer App zu reagieren.


### Kryptofrafische Authentifizierung (CISA / PW8)
- FIDO2-Sicherheits-Schlüssel z.B. Yubikeys
- Passkeys
- Zertifikatbasiert: Der Schlüssel kann als Softwarezertifikat gespeichert werden (z.B. Elster)
- gilt als sehr sicher (NIST)
- Split in Passwortlose Authentifizierung und Zertifikatbasiert
#### Passwortlose Authentifizierung
- Passkeys

## Dos and Don'ts bei Passwörter
- MFA auf allen Konten aktivieren (NIST / NCSC)
- sichere Methoden bevorzugen (NIST)
- Backup Codes sicher speichern (NCSC)
- die Faktoren sollen im Idealfall von mehr als einem Gerät ausgehen. (BSI)

## Links

### Choosing the right MFA method for online systems: A comparative analysis PW8

#### Link
http://www.m.growingscience.com/ijds/Vol8/ijdns_2023_180.pdf

### HOWEFFECTIVE IS MULTIFACTOR AUTHENTICATION AT DETERRING CYBERATTACKS?

#### Link
https://arxiv.org/pdf/2305.00945