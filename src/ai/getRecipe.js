
import { HfInference } from "@huggingface/inference";

export async function getRecipe(ingredients) {
  const hf = new HfInference(import.meta.env.VITE_API_KEY);

  const response = await hf.chatCompletion({
    model: "Qwen/Qwen2.5-Coder-32B-Instruct",
    messages: [
      { role: "system", content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. FORMAT IT ON json i just need to see a json response pls, i dont need an explanation i just need the json string so that i can easily extract the ingredient and instruction. In the provide json, there should always be a key named recipe_name, ingredients, and instructions." },
      { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` },
    ],
    max_tokens: 1024,
  })

  let result = response.choices[0].message.content;
  let res = result.replace("```json", "").replace("```", "");

  let obj = await JSON.parse(res);
  return obj;
}