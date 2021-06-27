module.exports = {
    printWidth: 90,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: false,
    arrowParens: 'avoid',
    overrides: [
      {
        files: '*.jsx',
        options: {
          parser: 'babel',
        },
      },
      {
        files: '*.tsx',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.ts',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.md',
        options: {
          parser: 'markdown',
        },
      },
      {
        files: '*.json',
        options: {
          parser: 'json',
        },
      },
      {
        files: '.prettierrc',
        options: {
          parser: 'json',
        },
      },
      {
        files: '.stylelintrc',
        options: {
          parser: 'json',
        },
      },
      {
        files: '*.less',
        options: {
          printWidth: 120,
          parser: 'less',
        },
      },
      {
        files: '*.html',
        options: {
          printWidth: 80,
          parser: 'html',
        },
      }
    ],
  };