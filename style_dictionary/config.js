module.exports={
    "source": ['./style_dictionary/tokens.json'],

    "platforms": {
      "css": {
        "transformGroup": "css",
        // "prefix": "sd",
        "buildPath": "style_dictionary/css/",
        "files": [
          {
            "destination": "_variables.css",
            "format": "css/variables"
          }
        ]
      },
      "android": {
        "transformGroup": "android",
        "buildPath": "style_dictionary/android/",
        "files": [{
          "destination": "colors.xml",
          "format": 'android/resources',
        }]
      },
      "js": {
        "transformGroup": "js",
        "buildPath": "style_dictionary/js/",
        "files": [
          {
            "destination": "variables.js",
            "format": "javascript/es6"
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