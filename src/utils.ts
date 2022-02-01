import { request } from 'undici'

const deadMatch = /[^0-9xXR^+*\-/(){}.|\s]/gi

export async function getTable (eq: string): Promise<Array<{ x: number, y: number }>> {
  return request(encodeURI(`https://api.jt3ch.net/ti/table/${eq}`)).then(x => x.body.json())
}

export function deadTest (str: string): [boolean, string] {
  str = str
    .replace(/rand/gi, '{R}')
    .replace(/pi/gi, Math.PI.toString())
    .replace(/e/gi, Math.E.toString())
  const res = deadMatch.exec(str)

  return res
    ? [true, res[0]]
    : [false, str]
}
