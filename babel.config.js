module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
      'ant'
    ],
    [
      'import',
      { libraryName: 'iview', libraryDirectory: 'src/components' },
      'iview'
    ],
    [
      'import',
      { libraryName: 'vxe-table', style: true },
      'vxe'
    ]
  ]
}
