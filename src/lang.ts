export const lang = {
    en: {
        title: "Title",
        subtitle: "Subtitle",
        text: "Text"
    },
    it: {
        title: "Titolo",
        subtitle: "Sottotitolo",
        text: "Testo"
    },
    es: {
        title: "Titol",
        subtitle: "Sottotitol",
        text: "Tiesto"
    },
    pt: {
        title: "Titul",
        subtitle: "Sottotitul",
        text: "Tiestu"
    },
}

// type t2 = string |number
// let x : t2= 4

// type t1 = typeof lang
// type AllLanguages2 = keyof t1 

export type AllLanguages = keyof typeof lang

export const allLanguages = Object.keys(lang) as AllLanguages[]
