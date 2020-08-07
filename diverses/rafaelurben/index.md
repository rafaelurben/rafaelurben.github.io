---
breadcrumbs: true
fbcontact: true
---

# Über Rafael Urben

Hallo! Ich heisse Rafael, bin im Jahre 2004 geboren und lebe in der Schweiz.
Ich bin ein sehr grosser Fan von Informatik, was auch den grössten Teil meiner Freizeit ausmacht.
Der andere Teil meiner Freizeit, welcher zwar ziemlich kleiner, aber trotzdem wichtig ist, ist das Trommeln.
Ich spiele mit der sogenannten "Basler Trommel" in einem Verein.

## Social Media

Ihr findet mich auf diversen Social Media Kanälen und Platformen unter dem Namen "rafaelurben":

<ul>
    {% assign sm = site.data.social-media %}
    {% for entry in sm %}
        {% assign key = entry | first %}
        {% if sm[key].id %}
            <li>
                <a href="{{ sm[key].href }}{{ sm[key].id }}" title="{{ sm[key].title }}">
                    <i class="{{ sm[key].fa-icon }}"></i> {{ sm[key].title }}
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

## Kontakt

Du kannst mich entweder via Social Media Kanäle kontaktieren oder via die Möglichkeiten unten:

<ul>
    {% assign kt = site.data.kontakt %}
    {% for entry in kt %}
        {% assign key = entry | first %}
        {% if kt[key].id %}
            <li>
                <a href="{{ kt[key].href }}{{ kt[key].id }}" title="{{ kt[key].title }}">
                    <i class="{{ kt[key].fa-icon }}"></i> {{ kt[key].title }}
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>
