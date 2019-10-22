const momentCultures = [
    {"lc":"af","ld":"Afrikaans"},
    {"lc":"sq","ld":"Albanian"},
    {"lc":"ar","ld":"Arabic"},
    {"lc":"ar-dz","ld":"Arabic (Algeria)"},
    {"lc":"ar-kw","ld":"Arabic (Kuwait)"},
    {"lc":"ar-ly","ld":"Arabic (Lybia)"},
    {"lc":"ar-ma","ld":"Arabic (Morocco)"},
    {"lc":"ar-sa","ld":"Arabic (Saudi Arabia)"},
    {"lc":"ar-tn","ld":"Arabic (Tunisia)"},
    {"lc":"hy-am","ld":"Armenian"},
    {"lc":"az","ld":"Azerbaijani"},
    {"lc":"bm","ld":"Bambara"},
    {"lc":"eu","ld":"Basque"},
    {"lc":"be","ld":"Belarusian"},
    {"lc":"bn","ld":"Bengali"},
    {"lc":"bs","ld":"Bosnian"},
    {"lc":"br","ld":"Breton"},
    {"lc":"bg","ld":"Bulgarian"},
    {"lc":"my","ld":"Burmese"},
    {"lc":"km","ld":"Cambodian"},
    {"lc":"ca","ld":"Catalan"},
    {"lc":"tzm","ld":"Central Atlas Tamazight"},
    {"lc":"tzm-latn","ld":"Central Atlas Tamazight Latin"},
    {"lc":"zh-cn","ld":"Chinese (China)"},
    {"lc":"zh-hk","ld":"Chinese (Hong Kong)"},
    {"lc":"zh-tw","ld":"Chinese (Taiwan)"},
    {"lc":"cv","ld":"Chuvash"},
    {"lc":"hr","ld":"Croatian"},
    {"lc":"cs","ld":"Czech"},
    {"lc":"da","ld":"Danish"},
    {"lc":"nl","ld":"Dutch"},
    {"lc":"nl-be","ld":"Dutch (Belgium)"},
    {"lc":"en-au","ld":"English (Australia)"},
    {"lc":"en-ca","ld":"English (Canada)"},
    {"lc":"en-ie","ld":"English (Ireland)"},
    {"lc":"en-il","ld":"English (Israel)"},
    {"lc":"en-nz","ld":"English (New Zealand)"},
    {"lc":"en-SG","ld":"English (Singapore)"},
    {"lc":"en-gb","ld":"English (United Kingdom)"},
    {"lc":"en","ld":"English (United States)"},
    {"lc":"eo","ld":"Esperanto"},
    {"lc":"et","ld":"Estonian"},
    {"lc":"fo","ld":"Faroese"},
    {"lc":"fi","ld":"Finnish"},
    {"lc":"fr","ld":"French"},
    {"lc":"fr-ca","ld":"French (Canada)"},
    {"lc":"fr-ch","ld":"French (Switzerland)"},
    {"lc":"fy","ld":"Frisian"},
    {"lc":"gl","ld":"Galician"},
    {"lc":"ka","ld":"Georgian"},
    {"lc":"de","ld":"German"},
    {"lc":"de-at","ld":"German (Austria)"},
    {"lc":"de-ch","ld":"German (Switzerland)"},
    {"lc":"el","ld":"Greek"},
    {"lc":"gu","ld":"Gujarati"},
    {"lc":"he","ld":"Hebrew"},
    {"lc":"hi","ld":"Hindi"},
    {"lc":"hu","ld":"Hungarian"},
    {"lc":"is","ld":"Icelandic"},
    {"lc":"id","ld":"Indonesian"},
    {"lc":"ga","ld":"Irish or Irish Gaelic"},
    {"lc":"it","ld":"Italian"},
    {"lc":"it-ch","ld":"Italian (Switzerland)"},
    {"lc":"ja","ld":"Japanese"},
    {"lc":"jv","ld":"Javanese"},
    {"lc":"kn","ld":"Kannada"},
    {"lc":"kk","ld":"Kazakh"},
    {"lc":"tlh","ld":"Klingon"},
    {"lc":"gom-latn","ld":"Konkani Latin script"},
    {"lc":"ko","ld":"Korean"},
    {"lc":"ku","ld":"Kurdish"},
    {"lc":"ky","ld":"Kyrgyz"},
    {"lc":"lo","ld":"Lao"},
    {"lc":"lv","ld":"Latvian"},
    {"lc":"lt","ld":"Lithuanian"},
    {"lc":"lb","ld":"Luxembourgish"},
    {"lc":"mk","ld":"Macedonian"},
    {"lc":"ms-my","ld":"Malay"},
    {"lc":"ms","ld":"Malay"},
    {"lc":"ml","ld":"Malayalam"},
    {"lc":"dv","ld":"Maldivian"},
    {"lc":"mt","ld":"Maltese (Malta)"},
    {"lc":"mi","ld":"Maori"},
    {"lc":"mr","ld":"Marathi"},
    {"lc":"mn","ld":"Mongolian"},
    {"lc":"me","ld":"Montenegrin"},
    {"lc":"ne","ld":"Nepalese"},
    {"lc":"se","ld":"Northern Sami"},
    {"lc":"nb","ld":"Norwegian Bokmål"},
    {"lc":"nn","ld":"Nynorsk"},
    {"lc":"fa","ld":"Persian"},
    {"lc":"pl","ld":"Polish"},
    {"lc":"pt","ld":"Portuguese"},
    {"lc":"pt-br","ld":"Portuguese (Brazil)"},
    {"lc":"x-pseudo","ld":"Pseudo"},
    {"lc":"pa-in","ld":"Punjabi (India)"},
    {"lc":"ro","ld":"Romanian"},
    {"lc":"ru","ld":"Russian"},
    {"lc":"gd","ld":"Scottish Gaelic"},
    {"lc":"sr","ld":"Serbian"},
    {"lc":"sr-cyrl","ld":"Serbian Cyrillic"},
    {"lc":"sd","ld":"Sindhi"},
    {"lc":"si","ld":"Sinhalese"},
    {"lc":"sk","ld":"Slovak"},
    {"lc":"sl","ld":"Slovenian"},
    {"lc":"es","ld":"Spanish"},
    {"lc":"es-do","ld":"Spanish (Dominican Republic)"},
    {"lc":"es-us","ld":"Spanish (United States)"},
    {"lc":"sw","ld":"Swahili"},
    {"lc":"sv","ld":"Swedish"},
    {"lc":"tl-ph","ld":"Tagalog (Philippines)"},
    {"lc":"tg","ld":"Tajik"},
    {"lc":"tzl","ld":"Talossan"},
    {"lc":"ta","ld":"Tamil"},
    {"lc":"te","ld":"Telugu"},
    {"lc":"tet","ld":"Tetun Dili (East Timor)"},
    {"lc":"th","ld":"Thai"},
    {"lc":"bo","ld":"Tibetan"},
    {"lc":"tr","ld":"Turkish"},
    {"lc":"uk","ld":"Ukrainian"},
    {"lc":"ur","ld":"Urdu"},
    {"lc":"ug-cn","ld":"Uyghur (China)"},
    {"lc":"uz","ld":"Uzbek"},
    {"lc":"uz-latn","ld":"Uzbek Latin"},
    {"lc":"vi","ld":"Vietnamese"},
    {"lc":"cy","ld":"Welsh"},
    {"lc":"yo","ld":"Yoruba Nigeria"},
    {"lc":"ss","ld":"siSwati"}
  
];

export { momentCultures };