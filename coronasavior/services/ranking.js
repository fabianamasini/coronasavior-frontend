import base from './base';

export async function getRanking() {
    return await base.get("/ranking/");
}