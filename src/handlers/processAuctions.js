import { getEndedAuctions } from "../lib/getEndedAuctions";
import { closeAuction } from "../lib/closeAuction";
import createError from "http-errors";

async function processAuctions(event, context) {
  // console.log("Ruko zara, Sabar Karo");

  try {
    const closedAuctions = await getEndedAuctions();
    // console.log(closedAuctions);

    const closePromises = closedAuctions.map((auction) =>
      closeAuction(auction)
    );
    await Promise.all(closePromises);
    return { closed: closePromises.length };
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
}

export const handler = processAuctions;
