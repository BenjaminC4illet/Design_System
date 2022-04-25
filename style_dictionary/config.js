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

      "js": {
        "transformGroup": "js",
        "buildPath": "style_dictionary/js/",
        "files": [
          {
            "destination": "variables.js",
            "format": "javascript/es6"
          }
        ]
      }
    }
  }