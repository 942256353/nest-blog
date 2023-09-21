import { article } from './seeds/article';
import { category } from './seeds/category';
import { user } from './seeds/user';
async function run() {
    user();
    await category();
    article();
}
run();