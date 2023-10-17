
var fs = require('fs');

fs.readFile('./tokens.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const input = JSON.parse(data);
  const output = {};
  const map = {'color': 'colors', 'sizing': 'size', 'spacing': 'space'};

  Object.keys(input).forEach(key => {
    
    output[map[key] || key] = {}
  })
  
  
  console.log(output)
  
  
  function flatObjectValues(obj) {
    for (const key in obj) {
      // if (k === 'opacity') return;
      if (obj[key].value === undefined) {
        flatObjectValues(obj[key])
      } else {
        const category = map[obj[key].type] || obj[key].type;
        if(output[category] === undefined) {
          output[category] = {}
        }
        // console.log(category)
        // console.log(obj[k])
        // console.log(output[category])
        output[category][key] = obj[key].value;
      }
    }
  }
  
  flatObjectValues(input);

  const tailwindConfig = {
    theme: {
      extend: { ...output},
    },
    variants: {},
    plugins: [],
  };
  

  const configContent = `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`;
  fs.writeFile("tailwind.config.js", configContent, function(err) {
      if (err) {
          console.log(err);
      }
  });


});

