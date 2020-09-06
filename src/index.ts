import axios from 'axios';
import * as cheerio from 'cheerio';

/* eslint-disable no-await-in-loop */
const chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

function genRandomId(len: number): string {
  const randomChars: string[] = [];

  for (let i = 0; i < len; i += 1) {
    const charID = Math.round(Math.random() * chars.length + 1);
    randomChars.push(chars[charID]);
  }

  return randomChars.join('');
}

async function validate(id: string): Promise<Print> {
  const ValidatePromise = new Promise<Print>((resolve, reject) => {
    try {
      const run = async () => {
        const imgShotLink = `https://prnt.sc/${id}`;
        const { data } = await axios.get(imgShotLink);
        const page = cheerio.load(data);

        const imgLink = page('img.no-click.screenshot-image').attr('src');

        const isValid = !(imgLink === '//st.prntscr.com/2020/08/01/0537/img/0_173a7b_211be8ff.png');

        const print: Print = {
          shortId: id,
          isValid,
          link: imgLink,
          shortLink: imgShotLink,
        };

        resolve(print);
      };

      run();
    } catch (e) {
      reject(e);
    }
  });

  return ValidatePromise;
}

async function random(): Promise<Print> {
  const GeneratePromise = new Promise<Print>((resolve, reject) => {
    try {
      const run = async () => {
        let print: Print;

        let randomID = genRandomId(6);
        print = {
          ...await validate(randomID),
        };

        while (!print.isValid) {
          randomID = genRandomId(6);
          print = {
            ...await validate(randomID),
          };
        }

        resolve(print);
      };

      run();
    } catch (e) {
      reject(e);
    }
  });

  return GeneratePromise;
}

export {
  random,
  validate,
  genRandomId,
};
