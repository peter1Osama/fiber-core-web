
var fs = require('fs');

fs.readFile('./tokens.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const input = JSON.parse(data);
  const output = {};
  //TODO: add Special Functions to the Mapper
  const map = {'color': 'colors', 'sizing': 'size', 'spacing': 'space', 'elevation': 'boxShadow'};

  Object.keys(input).forEach(key => {
    output[map[key] || key] = {}
  })
  
  
  console.log(output)
  
  
  function flatObjectValues(obj) {
    for (const key in obj) {
      if (key === 'elevation') continue ;
      if (obj[key].value === undefined ) {
        flatObjectValues(obj[key])
      } else {
        const category = map[obj[key].type] || obj[key].type;
        if(output[category] === undefined) {
          output[category] = {}
        }
        output[category][key] = obj[key].value;
      }
    }
  }
  
  function handleElevationCase (obj, boxShadow = {}) {
    for (const key in obj) {
      if (obj[key].value === undefined) {
        handleElevationCase(obj[key], boxShadow)
      } else {
        let singleClassContent = [];
        if(Array.isArray(obj[key].value)){
          for( let i=0 ;i< obj[key].value.length; i++){
            singleClassContent.push(`${obj[key].value[i].x}px ${obj[key].value[i].y}px ${obj[key].value[i].blur}px ${obj[key].value[i].spread}px ${obj[key].value[i].color}`)
          }
        }
        else {
          singleClassContent.push(`${obj[key].value.x}px ${obj[key].value.y}px ${obj[key].value.blur}px ${obj[key].value.spread}px ${obj[key].value.color}`)
        }
        boxShadow[key] = singleClassContent.join(',');
      }
    }
    return boxShadow;
  }


  flatObjectValues(input);
  output[map.elevation] = handleElevationCase(input.elevation);


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

