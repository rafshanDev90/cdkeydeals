import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import { getWCCategories } from '../lib/wordpress';

async function main() {
  const cats = await getWCCategories({ hide_empty: false });
  console.log(JSON.stringify(cats.map(c => ({ name: c.name, slug: c.slug, id: c.id, parent: c.parentId })), null, 2));
}

main();
