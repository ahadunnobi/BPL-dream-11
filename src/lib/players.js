import path from 'path';
import { promises as fs } from 'fs';

export async function getPlayers() {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  return JSON.parse(fileContents);
}
