---
breadcrumbs: true
---

# Über Rafael Urben

Hallo! Ich heisse Rafael, bin im Jahre 2004 geboren und lebe in der Schweiz.
Ich bin ein sehr grosser Fan von Informatik, was auch den grössten Teil meiner Freizeit ausmacht.
Der andere Teil meiner Freizeit, welcher zwar ziemlich kleiner, aber trotzdem wichtig ist, ist das Trommeln.
Ich spiele mit der sogenannten "Basler Trommel" in einem Verein.

## Social Media

Ihr findet mich auf diversen Social Media Kanälen und Platformen unter dem Namen "rafaelurben":

-   [Instagram](https://instagram.com/rafaelurben)
-   [Facebook](https://facebook.com/rafaelurben)
-   [YouTube](https://www.youtube.com/channel/UCz2S-3uW7-B9Dh6YdX9PeLg)
-   [Twitter](https://twitter.com/rafaelurben)
-   [Twitch](https://twitch.tv/rafaelurben)
-   [GitHub](https://github.com/rafaelurben)
-   [Discord](https://rebrand.ly/RUdiscord)

## Kontakt

Du kannst mich entweder via Social Media Kanäle kontaktieren oder via die Möglichkeiten unten:

-   [Telegram](https://t.me/rafaelurben)
-   [E-Mail](mailto:rafaelurben@protonmail.ch)

{% if site.data.social-media %}

<ul style="display: none;">
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
{% endif %}

{% if site.data.kontakt %}

<ul style="display: none;">
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
{% endif %}
