module.exports={
    "source": ['./style_dictionary/tokens.json'],

    "platforms": {
      "css": {
        "transformGroup": "css",
        // "prefix": "sd",
        "buildPath": "style_dictionary/css/",
        "files": [
          {
            "destination": "colors.css",
            "format": "css/variables",
            "filter": {
              "attributes": { category: 'colors' },
            },
            "options": {
              "outputReferences": true
            }
          }
        ]
      },
      "android": {
        "transformGroup": "android",
        "buildPath": "style_dictionary/android/",
        "files": [{
          "destination": "colors.xml",
          "format": 'android/resources',
          "filter": {
            "attributes": { category: 'colors' },
          }
        }]
      },
      "js": {
        "transformGroup": "js",
        "buildPath": "style_dictionary/js/",
        "files": [
          {
            "destination": "colors.js",
            "format": "javascript/es6",
            "filter": {
            "attributes": { category: 'colors' },
          },
          "options": {
            "outputReferences": true
          }
          }
        ]
      },
      "ios-swift": {
        "transformGroup": "ios-swift",
        "buildPath": "style_dictionary/ios-swift/",
        "files": [{
          "destination": "StyleDictionary+Class.swift",
          "format": "ios-swift/class.swift",
          "className": "StyleDictionaryClass",
          "filter": {}
        },{
          "destination": "StyleDictionary+Enum.swift",
          "format": "ios-swift/enum.swift",
          "className": "StyleDictionaryEnum",
          "filter": {}
        },{
          "destination": "StyleDictionary+Struct.swift",
          "format": "ios-swift/any.swift",
          "className": "StyleDictionaryStruct",
          "filter": {},
          "options": {
            "imports": "SwiftUI",
            "objectType": "struct",
            "accessControl": "internal"
          }
        }]
      },
    }
  }