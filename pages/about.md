---
layout: default
permalink: /about/
title: Über mich
description: Hallo! Ich heisse Rafael, lebe in der Schweiz und studiere aktuell Informatik an der FFHS. (...)
stylesheets:
  - /assets/css/timeline.css
timelines:
  it:
    title: Ich und Informatik
    icon: fa-puzzle-piece
    items:
      - date: Kindheit & Jugend
        title: Erste Berührungspunkte
        description: |
          Computer und Handys hatten mich schon immer etwas fasziniert, jedoch kümmerte ich mich nie um deren Funktionsweise.
      - date: 2017-2019
        title: Fakultativfach Informatik
        description: |
          In der 7. und 8. Klasse besuchte ich mal aus Interesse das Fakultativfach Informatik. Seit dieser Zeit beschäftigte ich mich fast
          die ganze Zeit mit Informatik. Die Basics des Programmierens lernte ich in diesem "Kurs" mit der "Drag-and-drop"
          -Programmiersprache [Scratch](https://scratch.mit.edu), wechselte dann aber (noch im Kurs) recht schnell
          zu [Python](https://python.org). Ich wusste zuvor nie wirklich, was ich werden wollte, aber seitdem wurde mir klar, dass
          ich Informatiker werden wollte.
      - date: 2019-2023
        title: Gymnasium
        description: |
          Das Gymnasium besuchte ich nach der 8. Klasse während 4 Jahren. Während der Zeit am Gymnasium habe ich diverse
          Projekte in meiner Freizeit gestartet und beendet. Das dabei wichtigste Projekt in dieser Zeit war
          [django-kmuhelper](https://www.rafaelurben.ch/kmuhelper) (=> [Geschichte](https://www.rafaelurben.ch/kmuhelper/geschichte)).
          In den letzten zwei Jahren des Gymnasiums besuchte ich das Ergänzungsfach Informatik, in welchem ich mehr über
          diverse Fachbereiche der Informatik lernte und mein Interesse für das Fach ist nochmals gestiegen ist.
  edu:
    title: Ausbildung
    icon: fa-graduation-cap
    reversed: true
    items:
      - date_to: 07/2027
        date_from: 08/2023
        title: PiBS Informatik @<br/>Fernfachhochschule Schweiz (FFHS)
        description: |
          Ich studiere aktuell Informatik an der FFHS. Das Studium dauert 4 Jahre und ich werde mit dem Titel "Bachelor 
          of Science in Informatik" abschliessen. PiBS steht für "Praxisintegriertes Bachelor-Studium", was bedeutet,
          dass ich während dem Studium zu 50% in einem Unternehmen angestellt bin und dort praktische Erfahrungen sammle.
          Im Rahmen eines Blended Learning Modells lerne ich an der FFHS viele Themen der Informatik im Selbststudium 
          mit wöchentlichen Präsenzveranstaltungen zur Festigung des Gelernten.
        current: true
      - date_to: 07/2024
        date_from: 08/2023
        title: Basisausbildungsjahr @<br/>Die Schweizerische Post AG
        description: |
          Im Rahmen des PiBS durfte ich die Basisausbildung im
          ICT-Campus der Schweizerischen Post geniessen. Dort
          lernte ich diverse Themen der IT kennen und konnte
          diese mithilfe von Projekten festigen. Darunter unter
          anderem Linux, Windows Server, Java, Spring Boot,
          React, SCRUM, Cloud (mit Azure), Telematik, IoE,
          Microsoft Office und vieles mehr...
      - date_to: 07/2023
        date_from: 08/2019
        title: Gymnasiale Maturität@<br/>Gymnasium Burgdorf
        description: |
          Am Gymnasium Burgdorf schloss ich die gymnasiale
          Maturität mit Schwerpunktfach Physik und angewandte
          Mathematik (PAM) und Ergänzungsfach Informatik ab. In
          Letzterem konnte ich meine zum Teil bereits
          bestehenden Informatik-Kenntnisse erweitern und
          anwenden.
---

### Über mich

Hallo! Ich heisse Rafael, bin im Jahre 2004 geboren und lebe in der Schweiz. Ich bin ein sehr grosser Fan von
Informatik, was auch den grössten Teil meiner Freizeit ausmacht. Der andere Teil meiner Freizeit verbringe ich mit
trommeln. Ich spiele mit der sogenannten "Basler Trommel" in einem Verein. Aber hier geht's um den Informatik-Teil.

{% include timeline.html timeline=page.timelines.it %}

Mittlerweile habe ich schon recht viele kleine Programmierprojekte gestartet (und teilweise auch beendet). Diese
befinden sich alle auf [dieser Webseite]({{ "/projects/" | relative_url }}) sowie auf [meinem GitHub Account](https://github.com/rafaelurben).

{% include timeline.html timeline=page.timelines.edu %}
