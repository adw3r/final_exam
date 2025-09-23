declare module '*.scss'
declare module '*.png' {
  const src: string
  export default src
}
declare module 'vanta/src/vanta.fog.js' {
  const FOG: any
  export default FOG
}



