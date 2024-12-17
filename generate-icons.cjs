const fs = require('fs');

const FOLDER_PATH = './src/shared/components/SvgIcon/icons';
const IMPORTS_PATH = './src/shared/components/SvgIcon/data.ts';

const names = fs.readdirSync(FOLDER_PATH).map((file) => {
  return file.split('.')[0];
});

const generateTypes = () => {
  let content = ``;

  names.forEach((icon) => {
    content += `  '${icon}' = '${icon}',\n`;
  });

  return `export enum SvgIcons {\n${content}}\n`;
};

const generateImports = () => {
  let content = ``;
  const components = [];

  names.forEach((icon) => {
    components.push(icon);
    content += `import ${icon} from './icons/${icon}.svg';\n`;
  });

  content += '\nexport default {\n';

  components.forEach((componentName) => {
    content += `  ${componentName},\n`;
  });

  content += '};\n';

  return content;
};

fs.writeFileSync(IMPORTS_PATH, generateImports(names));
fs.appendFileSync(IMPORTS_PATH, `\n${generateTypes(names)}`);
