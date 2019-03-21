
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: false,
      title: 'umi',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
