import base from "./base";

export async function getQuestions() {
    return await base.get("questions/");
}