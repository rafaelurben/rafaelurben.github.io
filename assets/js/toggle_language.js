/*!
 * Language toggler
 */

(() => {
    'use strict'

    const storedLanguage = localStorage.getItem('language')

    const getPreferredLanguage = () => {
        if (storedLanguage) {
            return storedLanguage
        }

        return "en"
    }

    const setLanguage = function (language) {
        localStorage.setItem('language', language)
        document.documentElement.setAttribute('lang', language)
    }

    setLanguage(getPreferredLanguage())

    const showActiveLanguage = language => {
        const btnToActive = document.querySelector(`[data-language-value="${language}"]`)

        document.querySelectorAll('[data-language-value]').forEach(element => {
            element.classList.remove('active')
        })

        btnToActive.classList.add('active')
    }

    window.addEventListener('DOMContentLoaded', () => {
        showActiveLanguage(getPreferredLanguage())

        document.querySelectorAll('[data-language-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const language = toggle.getAttribute('data-language-value')
                    setLanguage(language)
                    showActiveLanguage(language)
                })
            })
    })
})()
